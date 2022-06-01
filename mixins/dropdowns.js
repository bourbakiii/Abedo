export default {
    directives: {
        "click-outside": {
            bind(el, binding) {
                console.log("Все хорошо")
                el.addEventListener("click", e => e.stopPropagation());
                document.body.addEventListener("click",binding.value);
            }, unbind(el, binding) {
                document.body.removeEventListener("click", binding.value);
            },
        },
    }
}
