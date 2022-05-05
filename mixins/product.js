export default {
    props: {
        product: {
            required: true,
            default() {
                return {
                    id: 23,
                    section_id: 10,
                    name: "Скумбрия Русское Море атлантическая холодного копчения",
                    image: {
                        mobile: "/storage/images/ded9e58015ba10aaf93d7497152d719a.jpeg",
                        shop_detail:
                            "/storage/images/7ee2ba9899a56fee19fdacaeccf8a732.jpeg",
                        search_icon:
                            "/storage/images/a5a22942b25282b1326aec5e098af0f6.jpeg",
                        search_page:
                            "/storage/images/a55144ced83d16bea309d4d384d340a6.jpeg",
                        modal_mini: "/storage/images/ca8898fdbaa617f22132731e5e978fbe.jpeg",
                        cart_mini: "/storage/images/c05bff3ed5196c43ba6557b6ae85fa05.jpeg",
                        cart_detail_mini:
                            "/storage/images/d297ae5a90d16785ce48bbe738de4255.jpeg",
                        small: "/storage/images/11bd2264a5a056dd7c672e1bc38747da.jpeg",
                        original: "/storage/images/2adedda91211c2b0db4197a904051a7e.jpeg",
                    },
                    more_images: [
                        {
                            mobile: "/storage/images/996d9bb663c0a032efb32ae0cb3d8169.png",
                            shop_detail:
                                "/storage/images/c8ad6bb9a4cb657dcdca475d1011a808.png",
                            search_icon:
                                "/storage/images/539a9453212e7726c474b6d65bd9b073.png",
                            search_page:
                                "/storage/images/8fa65d4f1f60acf37538d64f54348375.png",
                            modal_mini:
                                "/storage/images/4d3737dc54b6bf31684a5fdf9cedea51.png",
                            cart_mini: "/storage/images/537edbae21da1b86245d7f00be866916.png",
                            cart_detail_mini:
                                "/storage/images/1b9109f9a779e64f80fc32d7699f0218.png",
                            small: "/storage/images/603075a4f72bb7e67437003598615339.png",
                            original: "/storage/images/9c4f1bf7c4e300925e95ba43ad73e2a5.png",
                        },
                        {
                            mobile: "/storage/images/198e0ee20d5ea4500addd86dda4b672f.png",
                            shop_detail:
                                "/storage/images/e348e1a882f19529107976aa72644128.png",
                            search_icon:
                                "/storage/images/b4e00e025fc89fa8cb2578c28387d822.png",
                            search_page:
                                "/storage/images/7a109149ab3aa1982c82765d8a1d4769.png",
                            modal_mini:
                                "/storage/images/6903458cc5cd7328cb686be62a9242e1.png",
                            cart_mini: "/storage/images/618a35efce467e302d523d25faf9ecfb.png",
                            cart_detail_mini:
                                "/storage/images/82f5b895515d1f540690175ba748c2d3.png",
                            small: "/storage/images/7be402691c45ebbe45fe3a59f0652ff0.png",
                            original: "/storage/images/30bfbab12354ce8dba14e384abf13391.png",
                        },
                        {
                            mobile: "/storage/images/eaa052c335c96eb8ce492f1b7b5060af.png",
                            shop_detail:
                                "/storage/images/3fd0773597d0e42b5092c1126fd4c90a.png",
                            search_icon:
                                "/storage/images/4c51b892c3738632b05236b367d5fde3.png",
                            search_page:
                                "/storage/images/a1325fd250d24a9087c949fa1ee7c7e1.png",
                            modal_mini:
                                "/storage/images/66d78b10730d155c42d2adf80cd66aeb.png",
                            cart_mini: "/storage/images/ff43f52c432a1435e847248a40746609.png",
                            cart_detail_mini:
                                "/storage/images/c89eefb9137784b9d251db54724bb34a.png",
                            small: "/storage/images/1e45ff790920755ae3e53751d7f20757.png",
                            original: "/storage/images/adc750bade0422395946ed92086d6151.png",
                        },
                    ],
                    price: 50,
                    consist: "фыв фывфы вфы вфы вфыв фы в",
                    description:
                        "Скумбрия Русское Море атлантическая холодного копчения Скумбрия Русское Море атлантическая холодного копчения Скумбрия Русское Море атлантическая холодного копчения Скумбрия Русское Море атлантическая холодного копчения Скумбрия Русское Море атлантическая холодного копчения",
                    weight: 1,
                    weight_unit_id: 6,
                    preparation_time: 1,
                    other: null,
                    sort: 1,
                    is_active: 1,
                    min_count: 1,
                    in_cart_message: null,
                    discount: null,
                    weight_unit: { id: 6, name: "Штука", code: "st", short_name: "шт" },
                    options: [],
                    properties: [],
                };
            },
        },
    },
    methods: {
        add_to_cart() {
            this.$store.dispatch('cart/add_to_cart', this.product);
            console.log("Add to cart function");
        },
        crease() {
            this.$store.dispatch('cart/crease', this.product);
            console.log("crease function");
        },
        decrease() {
            this.$store.dispatch('cart/decrease', this.product);
            console.log("decrease function");
        }
    },
    computed: {
        cart_products() {
            return this.$store.state.cart.products;
        },
        in_cart() {
            return this.cart_products.map(product => +product.id).includes(+this.product.id);
        },
        count(){
            if(!this.in_cart) return -1;
            return this.product.count;
        }
    }
}