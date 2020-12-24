export default {
    name: 'stock',
    template: `
        <div class="stock">
            <h4>Ação: {{ symbol }}</h4>
            <p>Valor de mercado: {{ market}}</p>
        </div>
    `,
    props: {
        symbol: String,
        market: Number
    }
}