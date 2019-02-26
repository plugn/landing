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
        v-if="isSocialLogInProgress"
        id="loader_container"
        class="loginrow w-row"
      >
        <Loader :size="20" />
      </div>
      <div
        v-else
        class="loginrow w-row"
      >
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
        <form
          ref="form"
          @submit="submit"
        >
          <div class="formcell-2">
            <input
              v-model="email"
              :placeholder="'Your e-mail'"
              type="email"
              name="email"
              required
              class="input-3 w-input"
            >
            <input
              v-model="password"
              :placeholder="'Password'"
              type="password"
              name="password"
              required
              class="input-3 w-input"
            >
          </div>

          <div
            v-if="error"
            class="formmessage formmessage-error w-form-fail"
          >
            <div>
              {{ error }}
            </div>
          </div>
          <input
            type="submit"
            :value="isLoading ? 'Signing in...' : buttonMessage"
            :disabled="isLoading"
            class="button button-stretch w-button"
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
          v-show="!isForgetPasswordSent"
          id="email-form-4"
          name="email-form-4"
          data-name="Email Form 4"
          @submit="sendPasswordRecovery"
        >
          <div class="h4 h4-mb10 h4-center">
            Enter your email for password recovery
          </div>

          <div
            v-if="error"
            class="formmessage formmessage-error w-form-fail"
          >
            <div>
              {{ error }}
            </div>
          </div>
          <input
            v-model="email"
            :placeholder="'Your email'"
            name="email"
            required
            type="email"
            class="input-3 w-input"
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
  resetPassword,
} from 'services/auth';
import {
  mapActions,
  mapState,
} from 'vuex';
import { langUrl } from 'utils/helpers';
// import Loader from '../../../../../common/assets/js/components/Loader.vue';

import {
  registerLoginMindbox,
  registerSignUpMindbox,
} from 'utils/analytics/mindbox';
import { notifyEmailAvailableLeadplan } from 'utils/analytics/leadplan';

export default {
  name: 'LoginForm',
  props: {
    buttonMessage: {
      type: String,
      default: 'Go shopping',
    },
    // выключает дополнение корзины с фронтенда (для игрового лендинга)
    disableCartAppend: {
      type: Boolean,
      default: false,
    },
    // выключает редирект для завершения регистрации (для игрового лендинга)
    disableSignUpComplete: {
      type: Boolean,
      default: false,
    },
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
      isSocialLogInProgress: false, // флаг вывода индикатора загрузки входа через социальные сети
    };
  },
  // components: { Loader },
  computed: mapState({
    cart: state => state.cart.goods,
  }),
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.disableCartAppend, this.signUpCompleteHostname);
  },
  methods: {
    ...mapActions({
      appendToCart: 'cart/appendToCart',
    }),
    // eslint-disable-next-line consistent-return
    async submit(e) {
      if (this.loggedIn) {
        return true;
      }
      e.preventDefault();
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
            lastName: res.data.user.last_name,
          });
        } else {
          registerLoginMindbox(res.data.user.id);
        }
        // eslint-disable-next-line no-console
        console.log(res.data.user);
        // eslint-disable-next-line no-console
        console.log(this.email);
        notifyEmailAvailableLeadplan(res.data.user);
        if (res.data.is_new && !this.disableSignUpComplete) {
          localStorage.setItem('after_login_redirect', window.location.href);
          window.location.href = langUrl('/sign_up/complete/');
        } else {
          window.location.reload();
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        if (err.response && err.response.data && err.response.data.error) {
          this.error = err.response.data.error;
        } else {
          this.error = 'Cannot authorize the user';
        }
        this.isLoading = false;
      }
    },
    // eslint-disable-next-line consistent-return
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
        // eslint-disable-next-line no-unused-vars
        const res = await resetPassword(this.email);
        this.isForgetPasswordSent = true;
      } catch (err) {
        if (err.response && err.response.data && err.response.data.error) {
          this.error = err.response.data.error;
        } else {
          this.error = 'Cannot authorize the user';
        }
        this.isLoading = false;
      }
    },
    loginVK() {
      this.isSocialLogInProgress = true;
      localStorage.setItem('savedCart', JSON.stringify(this.cart));
      window.window.location.href = `/authorize/vk/?redirect_to=${encodeURI(
        window.window.location.href,
      )}`;
    },
  },
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
