<template>
        <form class="form-auth-root" @submit.prevent="onSubmit" autocomplete="off">
            <div class="flex-col">
                <template v-if="isCoda && isSignupSucceed && needConfirmEmail">
                    <div class="stretch form-row alm-auth-form">
                        <div class="flex-row alm-card-top-row">
                            <span class="alm-card-title">Благодарим за регистрацию на Alabom!</span>
                        </div>
                        <div class="form-row alm-card-body">
                            <p>До того как начать покупки, подтвердите электронную почту указанную при регистрации.</p>
                            <p>На адрес {{ signupEmail }} отправлено письмо с ссылкой-подтверждением.</p>
                        </div>
                        <div class="flex-row form-row">
                            <input class="form-input auth-button"
                                type="button" value="Начать покупки"
                                @click="closeModal()">
                        </div>
                    </div>
                </template>

                <template v-if="isSuccess">
                    <div class="stretch form-row alm-auth-form">
                        <div class="flex-row alm-card-top-row">
                            <span class="alm-card-title">Вы успешно подтвердили свои действия!</span>
                        </div>
                        <div class="form-row alm-card-body">
                            <p>Используйте для входа на сайт Вашу почту {{ signupEmail }} или социальную сеть.</p>
                        </div>
                        <div class="flex-row form-row">
                            <input class="form-input auth-button"
                                type="button" value="За покупками"
                                @click="closeModal()" >
                        </div>
                    </div>
                </template>

                <template v-if="!isCoda">
                    <div class="flex-row no-stretch alm-auth-tabs">
                        <div class="flex-col alm-auth-tab" :class="{'active': authType==='login'}" @click="setAuthType('login')">
                            <span class="alm-auth-tab-label">вход</span>
                        </div>
                        <div class="flex-col alm-auth-tab" :class="{'active': authType==='signup'}" @click="setAuthType('signup')">
                            <span class="alm-auth-tab-label">регистрация</span>
                        </div>
                    </div>
                    <div v-if="authType === 'login'" class="stretch form-row alm-auth-form">
                        <div class="flex-row form-row">
                            <input required v-model="email" class="form-input" name="alm-auth-email" type="email" placeholder="E-mail">
                        </div>
                        <div class="flex-row form-row alm-anchor">
                            <input required v-model="password" class="form-input" name="alm-auth-password" :type="showPassword ? 'text' : 'password'" placeholder="Пароль">
                            <router-link to="/auth/reminder"> <span v-if="!password" class="alm-notice-forgot">Забыли пароль?</span> </router-link>
                        </div>
                        <div v-if="errorMessageLogin" class="flex-row form-row">
                            <span class="form-notice f-red">{{ errorMessageLogin | trans }}</span>
                        </div>
                        <div class="flex-row form-row">
                            <input class="form-input auth-button" type="submit" :value="submitLabel">
                        </div>
                        <div class="flex-row form-row">
                            <span class="form-notice f-gray">{{ subjectLabel }} через соцсети</span>
                        </div>
                        <div class="flex-row form-row">
                            <input class="form-input auth-button-vk" type="button" @click="onLoginVK();">
                        </div>
                    </div>
                    <div v-if="authType === 'signup'" class="stretch form-row alm-auth-form">
                        <div class="flex-row form-row">
                            <input required v-model="signupName" class="form-input" name="alm-signup-name" type="text"
                                placeholder="Имя" autocomplete="off">
                        </div>
                        <div class="flex-row form-row">
                            <input required v-model="signupEmail" class="form-input" name="alm-signup-email" type="email"
                                placeholder="E-mail" autocomplete="off">
                        </div>

                        <div class="flex-row form-row alm-anchor">
                            <input required v-model="signupPassword" class="form-input" name="alm-signup-password"
                                :type="showPassword ? 'text' : 'password'" placeholder="Пароль" autocomplete="new-password">
                            <div class="alm-input-eye" :class="{'eye-open': showPassword}" @click="toggleShowPassword"></div>
                        </div>
                        <div v-if="errorMessageSignup" class="flex-row form-row">
                            <span class="form-notice f-red">{{ errorMessageSignup | trans }}</span>
                        </div>
                        <div class="flex-row form-row">
                            <input class="form-input auth-button" type="submit" :value="submitLabel">
                        </div>
                        <div class="flex-row form-row">
                            <span class="alm-subtext-eula f-gray">
                                Нажимая на кнопку «Зарегистрироваться» или одну из иконок социальных сетей, вы подтверждаете свое согласие с
                                <a href="/documents/alabom-terms.pdf" _target="EULA">пользовательским соглашением</a>.
                            </span>
                        </div>
                        <div class="flex-row form-row">
                            <span class="form-notice f-gray">{{ subjectLabel }} через соцсети</span>
                        </div>
                        <div class="flex-row form-row">
                            <input class="form-input auth-button-vk" type="button" @click="onLoginVK();">
                        </div>
                    </div>
                </template>
            </div>
        </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { doLogin, doSignup, doResetPassword, doLoginVK } from './AuthService';
import * as STATUS from './AuthConstants';
import AuthMixin from './AuthMixin';

const labels = {
    login: {
        subjectLabel: 'Вход',
        submitLabel: 'Войти',
    },
    signup: {
        subjectLabel: 'Регистрация',
        submitLabel: 'Зарегистрироваться',
    },
}


export default {
    name: 'AuthPage',
    mixins: [ AuthMixin ],
	data() {
		return {
			authType: 'login',
			innerPassword: '',
            showPassword: false,
            errorMessageLogin: '',
            errorMessageSignup: '',
            signupName: '',
            email: null,
            signupEmail: null,
            password: null,
            signupPassword: null,
            isSignupSucceed: false,
            isLoading: false,
            error: null,
            loggedIn: false,
            isForgetPassword: false,
            isForgetPasswordSent: false,
            isSocialLogInProgress: false // флаг вывода индикатора загрузки входа через социальные сети
		}
    },
	computed: {
		submitLabel() {
			return labels[this.authType].submitLabel;
		},
		subjectLabel() {
			return labels[this.authType].subjectLabel;
        },
        isCoda() {
            return ['coda','ok'].includes(this.$route.params.step);
        },
        isSuccess() {
            return 'ok' === this.$route.params.step || (this.isCoda && this.isSignupSucceed && !this.needConfirmEmail);
        }
    },

	methods: {
        ...mapActions({
            loadProfile: 'loadProfile',
            loadProfileAndCloseModal: 'loadProfileAndCloseModal',
            appendToCart: 'cart/appendToCart',
        }),

        onSubmit(event) {
            localStorage.removeItem('VKAuthType');

            this.errorMessageLogin = '';
            this.errorMessageSignup = '';

            if ('signup' === this.authType) {
                doSignup(this.signupEmail, this.signupPassword, this.signupName)
                .then( ({data}) => {
                    this.$store.commit('profile', data);
                    this.$router.push('/auth/coda');
                    this.isSignupSucceed = true;
                    this.needConfirmEmail = ! data.is_email_confirmed;
                })
                .catch(errorData => {
                    // console.log('doSignup() error', errorData);
                    if (errorData.errorMessage) {
                        this.errorMessageSignup = errorData.errorMessage;
                    }
                });
            }
            else {
                doLogin(this.email, this.password)
                .then(data => {
                    this.loadProfile()
                    .then(
                        profile => {
                            this.closeModal();
                        }
                    );
                })
                .catch(error => {
                    // console.log(' (!) onSubmit() <- error ', error);
                    if (error.errorMessage) {
                        this.errorMessageLogin = error.errorMessage;
                    }
                });
            }
        },
        onLoginVK() {
            localStorage.setItem('VKAuthType', this.authType);

            doLoginVK();
        },
		setAuthType(value) {
			this.authType = value;
			if ('login' === value) {
				this.showPassword = false;
			}
		},
		toggleShowPassword() {
			this.showPassword = ! this.showPassword;
		}
	}
}
</script>

