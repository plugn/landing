// MUST HAVE $route and $store
export default {
    methods: {
        closeModal() {
            this.$store.commit('toggleModal', false);
            const path = (this.$route && this.$route.path) || window.location.pathname;
            if ((/^\/auth/).test(path)) {
                this.$router.push('/');
            }
        }
    }

}