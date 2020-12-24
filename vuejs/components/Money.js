const Money = {
    name: 'money',
    template: `
        <div v-if="data" class="money box">
            <div class="box_container">
                <div class="box_item">
                    <h4>Dolar: {{ data.rates.USD }}</h4>
                </div>
                <div class="box_item">
                    <h4>Real: {{ data.rates.BRL }}</h4>
                </div>
                <img class="box_icon" src="./assets/img/money.svg" />
            </div>
        </div>
    `,
    data: () => ({
        data: undefined
    }),
    created(){
        this.fetchMoney()
    },
    computed:{
        url(){
            return 'https://api.exchangeratesapi.io/latest?base=USD'
        }
    },
    methods: {
        fetchMoney(){
            try{
                const { url } = this
                fetch(url).
                    then(r => r.json()).
                    then(r => this.data = r)
            } catch(err){
                console.log(err)
            }
        }
    }
}

export default Money

