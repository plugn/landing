<template>
        <form class="form-auth-root" @submit.prevent="onSubmit($event)">
            <div class="flex-col">
                <div class="stretch form-row alm-auth-form">
                    <div class="flex-row alm-card-top-row">
                        <span class="alm-card-title">Восстановление пароля</span>
                    </div>

                <template v-if="!isCoda">
                    <div class="form-row alm-card-body">
                        <p>Укажите e-mail, для которого хотите восстановить пароль</p>
                    </div>
                    <div class="flex-row form-row">
                        <input required v-model="email" class="form-input"
                            name="alm-reminder-email" type="email" placeholder="E-mail">
                    </div>
                    <div v-if="errorMessage" class="flex-row form-row">
                        <span class="form-notice f-red">{{ errorMessage | trans }}</span>
                    </div>
                    <div class="flex-row form-row">
                        <input class="form-input auth-button" type="submit" value="Отправить пароль">
                    </div>
                    <div class="flex-row form-row">
                        <router-link class="form-notice alm-text" to='/auth'>Вход / регистрация</router-link>
                    </div>
                </template>

                <template v-if="isCoda">
                    <div class="form-row alm-card-body">
                        <p>Инструкции для восстановления доступа отправлены на адрес {{ email }}.</p>
                    </div>
                    <div class="flex-row form-row">
                        <input class="form-input auth-button" type="button" value="Войти" @click="$router.push('/auth')">
                    </div>
                </template>

                </div>
            </div>
        </form>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { doLogin, doSignup, doResetPassword, doLoginVK } from './AuthService';
import * as STATUS from './AuthConstants';

export default {
    name: 'AuthReminderPage',
    data() {
        return {
            errorMessage: '',
            email: ''
        }
    },
    computed: {
        isCoda() {
            return this.$route.params.done === 'done';
        }
    },
	methods: {
        onSubmit(event) {
            if (this.isCoda) {
                this.$store.commit('toggleModal', false);
                this.$router.push('/auth');
            }

            doResetPassword(this.email)
            .then(data => {
                // console.log('auth reminder dbResetPassword() : ', data);
                this.$router.push('/auth/reminder/done');
            })
            .catch(() => {
                this.errorMessage = STATUS.ACCOUNT_UNKNOWN;
            });
        },
    }
}
</script>