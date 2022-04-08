export default {
    methods: {
        inputBlockChange({ name, value }) {
            this[name] = value;
        },
    }
}