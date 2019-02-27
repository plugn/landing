<template>
  <div class="alm-auth-form">
    <div class="form-group">
      <input
        class="form-control"
        name="alm-auth-email"
        type="text"
        placeholder="E-mail"
      >
    </div>
    <div class="form-group alm-anchor">
      <input
        class="form-control"
        name="alm-auth-password"
        type="text"
        placeholder="Пароль"
      >
      <span class="alm-notice-forgot">
        Забыли пароль?
      </span>
    </div>
    <div class="form-group">
      <input
        class="form-control login-form__button--primary"
        type="button"
        value="Войти"
      />
    </div>
    <div class="login-form__notice">
      Вход через соцсети
    </div>
    <div class="form-group m-0">
      <input
        class="form-control login-form__button--vk"
        type="button"
        @click="handleLoginVK()"
      />
    </div>
  </div>
</template>

<script>
import { doLoginVK } from 'services/AuthService';

export default {
  name: 'SignInForm',
  methods: {
    handleLoginVK() {
      localStorage.setItem('VKAuthType', this.authType);
      doLoginVK();
    },
  }
};
</script>

<style lang="scss">

</style>
