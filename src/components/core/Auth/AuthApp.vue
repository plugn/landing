<template>
    <ModalForm @close="closeModal">
        <router-view v-if="isAuthActive"></router-view>
    </ModalForm>
</template>

<script>
import '../../../../styles/flex_layout.css'
import './modal.css'
import { mapState } from 'vuex';
import AuthMixin from './AuthMixin';
import ModalForm from '../modal/ModalForm'

export default {
    name: 'AuthApp',
    mixins: [ AuthMixin ],
    components: { ModalForm },
    computed: {
        ...mapState({
            nextRoute: state => state.auth.nextRoute,
            isAuthActive: state => state.modal.active,
        })
    },
    mounted() {
        if (location.hash.indexOf('/auth/reminder') === 1) {
            this.$store.commit('toggleModal', true);
        }
    },
    watch: {
        // isAuthActive(newValue, oldValue) {
        //     if (newValue) { console.log('route', this.$route,' ; router', this.$router); }
        // },
        nextRoute(newRoute, oldRoute) {
            if (newRoute) {
                console.log('nextRoute', newRoute);
                this.$router.push(newRoute);
                this.$store.commit('toggleModal', true);
                this.$store.commit('authNextRoute', '');
            }
        }
    }
 }
</script>
