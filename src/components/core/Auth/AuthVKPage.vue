<template>
        <form class="form-auth-root" @submit.prevent="onSubmit">
            <div class="flex-col">
                <div class="stretch form-row alm-auth-form">
                    <template v-if="'email' === $route.params.step">
                        <div class="flex-row alm-card-top-row">
                            <span class="alm-card-title">Вы в одном шаге до окончания регистрации на Alabom!</span>
                        </div>
                        <div class="form-row alm-card-body">
                            <p>Добавьте E-mail к вашему профилю.</p>
                            <p>На данный адрес мы будем присылать вам информацию по вашим заказам и ответы нашей службы поддержки.</p>
                        </div>
                        <div class="flex-row form-row">
                            <input required v-model="email" class="form-input" name="alm-auth-email" type="email" placeholder="E-mail">
                        </div>
                        <div class="flex-row form-row">
                            <input class="form-input auth-button" type="submit" value="Добавить E-mail">
                        </div>
                    </template>
                    <template v-if="'confirm' === $route.params.step">
                        <div class="flex-row alm-card-top-row">
                            <span class="alm-card-title">Вы уже были зарегистрированы через социальную сеть!</span>
                        </div>
                        <div class="form-row alm-card-body">
                            <p>На mail@mail.ru отправлено письмо с кодом подтверждения.</p>
                            <p>Для того чтобы войти введите код.</p>
                        </div>
                        <div class="flex-row form-row">
                            <input required class="form-input" name="alm-auth-confirmation" type="text" placeholder="Код подтверждения">
                        </div>
                        <div class="flex-row form-row">
                            <input class="form-input auth-button" type="submit" value="Подтвердить">
                        </div>
                        <div class="flex-row form-row">
                            <span v-if="sendAgain" class="form-notice alm-text" @click="startSendAgainTimer()">Отправить код снова</span>
                            <span v-else class="form-notice f-gray">Отправить код снова можно через 30 сек.</span>
                        </div>
                    </template>
                </div>
            </div>
        </form>
</template>

<script>
import './modal.css';
import {mapActions} from 'vuex';
import {getErrorsFromRequestException} from "../../../../../common/assets/js/services/errors";

export default {
    name: 'AuthVKPage',
	data() {
		return {
            errorEmail: '',
            errorConfirm: '',
            timeLeft: 5,
            email: '',
            timerDuration: 5000,
            sendAgain: false
        }
    },
    mounted() {
        // uncomment when timer will be needed
        // this.startSendAgainTimer()
    },
	methods: {
        ...mapActions([
            'updateProfile'
        ]),
        async onSubmit() {
            if ('email' === this.$route.params.step) {
                this.errorEmail = '';
                try {
                    const res = await this.updateProfile({email: this.email});
                    this.$router.push('/auth/ok');
                } catch (e) {
                    this.errorEmail = getErrorsFromRequestException(e);
                }
            }
        },
        startSendAgainTimer() {
            this.sendAgain = false;
            setTimeout(this.activateSendAgain, this.timerDuration);
        },
        activateSendAgain() {
            this.sendAgain = true;
        }
	}
}
</script>

