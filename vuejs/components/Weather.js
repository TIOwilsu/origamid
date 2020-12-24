import Money from './Money.js'

const Weather = {
    name: 'weather',
    components: {
        Money
    },
    template: `
        <div>
            <div class="weather box">
                <div class="box_container">
                    <template v-if="city">
                        <div class="box_header">
                            <p>{{ city.the_temp }}</p>
                            <h3 class="box_title box_text">{{ city.title }}</h3>
                            <p class="weather_date weather_text">{{ city.time | date }}</p>
                        </div>
                    </template>
                    <template v-else>
                        Não existe
                    </template>
                </div>
            </div>
            <money />
        </div>
    `,
    data: () => ({
        city: undefined,
        weathers: []
    }),
    created(){
        this.fetchTime(455825)
    },
    filters: {
        date(time){
            const date = new Date(time)
            const day = date.getDay()
            const hours = date.getHours()
            const minutes = date.getMinutes()
            let dayName = ''
            if(day === 0) {
                dayName = 'Domingo'
            }
            else if(day === 1){
                dayName = 'Segunda-feira'
            }
            else if(day === 2){
                dayName = 'Terça-feira'
            }
            else if(day === 3){
                dayName = 'Quarta-feira'
            }
            else if(day === 4){
                dayName = 'Quinta-feira'
            }
            else if(day === 5){
                dayName = 'Sexta-feira'
            }
            else {
                dayName = 'Sábado'
            }
            return `${dayName}, ${hours}:${minutes}`
        }
    },
    computed:{
        api(){
            return 'https://www.metaweather.com/api/'
        }
    },
    methods:{
        fetchTime(id){
            try{
                const { api } = this
                const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
                const targetUrl = `${api}location/${id}`
                const url = `${proxyUrl}${targetUrl}`
                fetch(url).
                    then(r => r.json()).
                    then(r => {
                        const { title, time } = r
                        this.weathers = r.consolidated_weather
                        this.city = {
                            title: title,
                            time: time,
                            temp: this.weathers[0].the_temp
                        }
                        
                    })
            } catch(err){
                console.log(err)
            }
        }
    }
}

export default Weather
