import Stock from './Stock.js'

export default {
    name: 'search-stock',
    template: `
        <div>
            <div class="search-stock">
                <input 
                    v-model="input" 
                    type="text" 
                    placeholder="Digite o nome da Ação" 
                />
                <button @click="fetchStock">Pesquisar</button>
            </div>
            <stock
                v-if="stock" 
                :symbol="stock.symbol"
                :market="stock.market"
            />
        </div>
    `,
    components: {
        Stock
    },
    data: () => ({
        input: '',
        stock: undefined
    }),
    computed: {
        api(){
            return `http://api.marketstack.com/v1/eod?access_key=6ecbaf55906065542117e98f1b705498`
        }
    },
    methods: {
        fetchStock(){
            try{
                const { api, input } = this
                const value = input.toUpperCase()
                const url = `${api}&symbols=${value}`
                fetch(url).
                    then(r => r.json()).
                    then(({ data }) => { 
                        const total = data.reduce((total,stock) => total += stock.volume, 0)
                        this.stock = {
                            symbol: data[0].symbol,
                            market: total / data.length
                        }
                    })
            } catch (err){
                console.log(err)
            }
        }
    }
}