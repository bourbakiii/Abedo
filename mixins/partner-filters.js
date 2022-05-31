import qs from "qs";
export default {
    data() {
        return {
            partners: [],
            show_filters: false,
            loading: false,
            params: {
                page: 1,
                last_page: null,
                limit: 10,
            },
            filters: {
                keywords: null,
                has_delivery: false,
                has_gift: false,
                has_discount: false,
            }
        }
    },
    async fetch() {
        console.log(123)
        console.log("зачем запрос, ебик?")
        this.loading = true;
        ////// Тут чтобы нормально парамсы вставить
        let filters = {};
        for (let key in this.filters)
            if (!!this.filters[key])
                if (key != "keywords") filters[key] = +this.filters[key];
                else filters[key] = this.filters[key];

                    if (this.$route.query.category) filters['cuisine'] = this.$route.query.category; 
                
        ////////////////////////////////////////////
        await this.$axios
        .$get(`${this.$axios.defaults.baseURL}/api/shops`, {
            params: qs.stringify({
                ...this.params,
                    params: {...filters},
                }),
                paramsSerializer: (params) => {
                    return params;
                },
            })
            .then(({ shops }) => {
                this.partners = this.partners.concat(shops.data);
                this.params.page++;
                this.params.last_page = shops.last_page;
            })
            .finally(() => this.loading = false);
        },
        methods: {
            setFilters(filters) {
                this.filters = filters;
                this.partners = [];
            this.params.page = 1;
            this.last_page = 1;
            this.$fetch();
        },
    },
    watch:{
        "$route.query.category":{
            handler(){
                this.partners = [];
            this.params.page = 1;
            this.last_page = 1;
            this.$fetch();
            },
            deep:true
        }
    }
}