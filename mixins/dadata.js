import errorsMessages from "./errors-messages";
export default {
    mixins: [errorsMessages],
    data() {
        return {
            dadata_timer: null,
            suggestions: [],
            errors: []
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
        },
        set_address(address) {
            this.address.house = null;
            this.address = { ...this.address, ...address.data, ...address, intercom: null };
            delete this.address["data"];

            this.suggestions = [];
        },
        action({
            id = null,
            street,
            name,
            city,
            house,
            intercom,
            entrance,
            floor,
            flat: apartment,
            geo_lat: lat,
            geo_lon: lon,
        }) {

            this.$axios
                .post("api/user/saveAddress", null, {
                    params: {
                        id,
                        street,
                        name,
                        city,
                        house,
                        intercom,
                        entrance,
                        floor,
                        apartment,
                        lat,
                        lon,
                    },
                    headers: {
                        Authorization: `Bearer ${this.$store.state.account.token}`,
                    },
                })
                .then(() => {
                    this.$emit("close");
                    if(this.editing != undefined) this.editing = false;
                }).catch(({ response }) => {
                    if ((response.status == 422)) {
                      this.errors = Object.values(response.data.errors)
                        .map((el) => el.flat())
                        .flat();
                    }
                  });
              
        },
    }
}