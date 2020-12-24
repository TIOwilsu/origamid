const Market = {
    name: 'market',
    template: `
        <div v-if="stock" class="box market">
            <div class="box_container">
                <div class="box_item">
                    <p><h4>Ação:</h4> {{ stock.symbol}}</p>
                </div>
                <div class="box_item">
                    <p><h4>Valor de mercado:</h4> {{ stock.market }}</p>
                </div>
            </div>
        </div>
    `,
    data: () => ({
        stocks: [],
        stock: undefined
    }),
    created(){
        this.fetchStock()
    },
    computed: {
        api(){
            return `http://api.marketstack.com/v1/eod?access_key=6ecbaf55906065542117e98f1b705498&symbols=AAPL`
        }
    },
    methods:{
        fetchStock(){
            try{
                const { api } = this
                fetch(api).
                    then(r => r.json()).
                    then(({ data }) => { 
                        this.stocks = data
                        const total = this.stocks.reduce((total,stock) => total += stock.volume, 0)
                        this.stock = {
                            symbol: this.stocks[0].symbol,
                            market: total / this.stocks.length
                        }
                    })
            } catch (err){
                console.log(err)
            }
        }
    }
}

export default Market