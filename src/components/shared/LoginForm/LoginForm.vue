<template>
  <div>
    <div v-show="!isForgetPassword">
      <img
        src="/images/auth-img.png" 
        width="200" 
        class="auth-img"
      >
      <slot name="header">
        <div class="h4 h4-mb10 h4-center">
          "Sign in or register"
        </div>
      </slot>
      <div
        class="loginrow w-row"
        v-if="isSocialLogInProgress"
        id="loader_container"
      >
        <Loader :size="20" />
      </div>
      <div class="loginrow w-row" v-else>
        <div class="w-clearfix w-col">
          <button
            class="socialbutton socialbutton-vk w-inline-block"
            @click="loginVK"
          >
            <img
              src="/images/vk-white.svg" 
              width="75" 
              class="image-2"
            >
          </button>
        </div>
      </div>
      <div class="text text-grey text-mb10 text-center">
        or use your e-mail
      </div>
      <div class="form-block">
        <form method="post" @submit="submit" ref="form">
          <div class="formcell-2">
            <input
              type="email"
              class="input-3 w-input"
              name="email"
              :placeholder="'Your e-mail'"
              required
              v-model="email"
            >
            <input
              type="password"
              class="input-3 w-input"
              name="password"
              :placeholder="'Password'"
              required
              v-model="password"
            >
          </div>

          <div
            class="formmessage formmessage-error w-form-fail"
            v-if="error"
          >
            <div>
              {{ error }}
            </div>
          </div>
          <input
            type="submit"
            class="button button-stretch w-button"
            :value="isLoading ? 'Signing in...' : buttonMessage"
            :disabled="isLoading"
          >
          <a
            id="forget-password"
            class="link link-center"
            @click="isForgetPassword = true"
          >
            Forget password
          </a>
        </form>
      </div>
    </div>
    <div v-show="isForgetPassword">
      <div class="form-block">
        <form
          id="email-form-4"
          name="email-form-4"
          data-name="Email Form 4"
          @submit="sendPasswordRecovery"
          v-show="!isForgetPasswordSent"
        >
          <div class="h4 h4-mb10 h4-center">
            Enter your email for password recovery
          </div>

          <div
            class="formmessage formmessage-error w-form-fail"
            v-if="error"
          >
            <div>
              {{ error }}
            </div>
          </div>
          <input
            class="input-3 w-input"
            name="email"
            v-model="email"
            :placeholder="'Your email'"
            required
            type="email"
          >
          <button
            class="button button-stretch w-button"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Loading...' : 'Send recovery link' }}
          </button>
        </form>
        <div
          v-if="isForgetPasswordSent"
          id="forget-password-sent"
        >
          <div class="text text-grey text-mb10 text-center">
            Мы отправили ссылку для восстановления пароля на
            вашу почту.
            <br>
          </div>
          <div class="text text-grey text-mb10 text-center">
            Если письмо не приходит, проверьте папку
            «Спам».
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  login,
  resetPassword
} from 'services/auth';
import { mapActions, mapState } from 'vuex';
import { langUrl } from 'services/helpers';
// import Loader from '../../../../../common/assets/js/components/Loader.vue';

import {
  registerLoginMindbox,
  registerSignUpMindbox
} from 'utils/analytics/mindbox';
import { notifyEmailAvailableLeadplan } from 'utils/analytics/leadplan';

export default {
  name: 'LoginForm',
  props: {
    buttonMessage: {
      type: String,
      default: 'Go shopping'
    },
    // выключает дополнение корзины с фронтенда (для игрового лендинга)
    disableCartAppend: {
      type: Boolean,
      default: false
    },
    // выключает редирект для завершения регистрации (для игрового лендинга)
    disableSignUpComplete: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      email: null,
      password: null,
      isLoading: false,
      error: null,
      loggedIn: false,
      isForgetPassword: false,
      isForgetPasswordSent: false,
      isSocialLogInProgress: false // флаг вывода индикатора загрузки входа через социальные сети
    };
  },
  components: { Loader },
  computed: mapState({
    cart: state => state.cart.goods
  }),
  methods: {
    ...mapActions({
      appendToCart: 'cart/appendToCart'
    }),
    async submit(e) {
      if (this.loggedIn) {
        return true;
      } else {
        e.preventDefault();
      }
      this.error = null;
      this.isLoading = true;

      try {
        const res = await login(this.email, this.password);

        if (!this.disableCartAppend) {
          await this.appendToCart();
        }
        this.loggedIn = true;
        if (res.data.is_new) {
          registerSignUpMindbox({
            id: res.data.user.id,
            email: this.email,
            firstName: res.data.user.first_name,
            lastName: res.data.user.last_name
          });
        } else {
          registerLoginMindbox(res.data.user.id);
        }
        console.log(res.data.user);
        console.log(this.email);
        notifyEmailAvailableLeadplan(res.data.user);
        if (res.data.is_new && !this.disableSignUpComplete) {
          localStorage.setItem('after_login_redirect', location.href);
          location.href = langUrl('/sign_up/complete/');
        } else {
          location.reload();
        }
      } catch (e) {
        console.error(e);
        if (e.response && e.response.data && e.response.data.error) {
          this.error = e.response.data.error;
        } else {
          this.error = 'Cannot authorize the user';
        }
        this.isLoading = false;
      }
    },
    async sendPasswordRecovery(e) {
      e.preventDefault();
      this.error = null;
      this.isLoading = true;
      if (!this.email || !/^.+@.+.\w$/i.test(this.email)) {
        this.isLoading = false;
        this.error = 'Email is invalid';
        return false;
      }

      try {
        const res = await resetPassword(this.email);
        this.isForgetPasswordSent = true;
      } catch (e) {
        if (e.response && e.response.data && e.response.data.error) {
          this.error = e.response.data.error;
        } else {
          this.error = 'Cannot authorize the user';
        }
        this.isLoading = false;
      }
    },
    loginVK() {
      this.isSocialLogInProgress = true;
      localStorage.setItem('savedCart', JSON.stringify(this.cart));
      window.location.href = `/authorize/vk/?redirect_to=${encodeURI(
        window.location.href
      )}`;
    }
  },
  mounted() {
    console.log(this.disableCartAppend, this.signUpCompleteHostname);
  }
};
</script>

<style scoped>
  .w-form-fail {
    display: block;
    margin: 0;
    margin-bottom: 5px;
  }
  #loader_container {
    text-align: center;
  }
</style>
