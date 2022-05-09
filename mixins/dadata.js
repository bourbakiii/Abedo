export default {
    data() {
        return {
            dadata_timer: null,
            suggestions: []
        }
    },
    methods: {
        get_dadata() {
            clearTimeout(this.dadata_timer);
            this.dadata_timer = setTimeout(() => {
                this.$axios
                    .post(
                        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
                        {
                            query: this.address.value,
                            locations: [{ region: "Северная Осетия - Алания" }],
                        }, // data
                        {
                            headers: {
                                contentType: "application/json",
                                Authorization: "Token 86b3d2232cfec3a06b3f04020518fdbc5a7b7adf", // тут должен быть ваш токен
                            },
                        }
                    )
                    .then(({ data: { suggestions } }) => {
                        this.suggestions = suggestions;
                    });
            }, 500);
        }
    }
}