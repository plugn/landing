<template>
  <form class="alm-auth-form" @submit.prevent="onSubmit">
    <div class="form-group">
      <input
        required
        v-model="email"
        class="form-control"
        name="alm-auth-email"
        type="text"
        placeholder="E-mail"
      >
    </div>
    <div class="form-group alm-anchor">
      <input class="form-control" name="alm-auth-password" type="text" placeholder="Пароль">
      <span class="alm-notice-forgot">
        Забыли пароль?
      </span>
    </div>
    <div class="form-group">
      <input class="form-control login-form__button--primary" type="button" value="Войти">
    </div>
    <div class="login-form__notice">Вход через соцсети</div>
    <div class="form-group m-0">
      <input class="form-control login-form__button--vk" type="button" @click="handleLoginVK()">
    </div>
  </form>
</template>

<script>
import { VK_AUTH_TYPE } from 'constants';

import { doLoginVK } from 'services/AuthService';

export default {
  name: 'SignInForm',
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
    };
  },
  methods: {
    onSubmit(event) {
      localStorage.removeItem('VKAuthType');

      this.errorMessageLogin = '';
      this.errorMessageSignup = '';

      if ('signup' === this.authType) {
        doSignup(this.signupEmail, this.signupPassword, this.signupName)
          .then(({ data }) => {
            // this.$store.commit('profile', data);
            // this.$router.push('/auth/coda');
            this.isSignupSucceed = true;
            this.needConfirmEmail = !data.is_email_confirmed;
          })
          .catch(errorData => {
            // console.log('doSignup() error', errorData);
            if (errorData.errorMessage) {
              this.errorMessageSignup = errorData.errorMessage;
            }
          });
      } else {
        doLogin(this.email, this.password)
          .then(data => {
            this.loadProfile().then(profile => {
              this.closeModal();
            });
          })
          .catch(error => {
            // console.log(' (!) onSubmit() <- error ', error);
            if (error.errorMessage) {
              this.errorMessageLogin = error.errorMessage;
            }
          });
      }
    },
    handleLoginVK() {
      localStorage.setItem('VKAuthType', this.authType);
      doLoginVK();
    }
  }
};
</script>

<style lang="scss">
</style>
