<template>
  <form
    class="form-auth-root"
    autocomplete="off"
    @submit.prevent="onSubmit"
  >
    <div class="d-flex flex-column">
      <template v-if="isCoda && isSignupSucceed && needConfirmEmail">
        <div class="stretch form-group alm-auth-form">
          <div class="flex-row alm-card-top-row">
            <span class="alm-card-title">
              Благодарим за регистрацию на Alabom!
            </span>
          </div>
          <div class="form-group alm-card-body">
            <p>
              До того как начать покупки, подтвердите электронную почту указанную при регистрации.
            </p>
            <p>
              На адрес {{ signupEmail }} отправлено письмо с ссылкой-подтверждением.
            </p>
          </div>
          <div class="form-group">
            <input
              class="form-control auth-button"
              type="button"
              value="Начать покупки"
              @click="closeModal()"
            >
          </div>
        </div>
      </template>

      <template v-if="isSuccess">
        <div class="stretch form-group alm-auth-form">
          <div class="flex-row alm-card-top-row">
            <span class="alm-card-title">
              Вы успешно подтвердили свои действия!
            </span>
          </div>
          <div class="form-group alm-card-body">
            <p>
              Используйте для входа на сайт Вашу почту {{ signupEmail }} или социальную сеть.
            </p>
          </div>
          <div class="form-group">
            <input
              class="form-control auth-button"
              type="button"
              value="За покупками"
              @click="closeModal()"
            >
          </div>
        </div>
      </template>

      <template v-if="!isCoda">
        <div class="d-flex flex-row no-stretch alm-auth-tabs">
          <div
            class="login-form__tab alm-auth-tab"
            :class="{'active': authType==='login'}"
            @click="setAuthType('login')"
          >
            <div class="alm-auth-tab-label">
              вход
            </div>
          </div>
          <div
            class="login-form__tab alm-auth-tab"
            :class="{'active': authType==='signup'}"
            @click="setAuthType('signup')"
          >
            <div class="alm-auth-tab-label">
              регистрация
            </div>
          </div>
        </div>
        <div class="form-group" />
        <div
          v-if="authType === 'login'"
          class="stretch form-group alm-auth-form"
        >
          <div class="form-group">
            <input
              v-model="email"
              required
              class="form-control"
              name="alm-auth-email"
              type="email"
              placeholder="E-mail"
            >
          </div>
          <div class="form-group alm-anchor">
            <input
              v-model="password"
              required
              class="form-control"
              name="alm-auth-password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Пароль"
            >
            <router-link to="/auth/reminder">
              <span
                v-if="!password"
                class="alm-notice-forgot"
              >
                Забыли пароль?
              </span>
            </router-link>
          </div>
          <div
            v-if="errorMessageLogin"
            class="form-group"
          >
            <span class="form-notice f-red">
              {{ errorMessageLogin | trans }}
            </span>
          </div>
          <div class="form-group">
            <input
              class="form-control login-form__button--primary"
              type="submit"
              :value="submitLabel"
            >
          </div>
          <div class="login-form__notice">
            {{ subjectLabel }}
            через соцсети
          </div>
          <div class="form-group m-0">
            <input
              class="form-control login-form__button--vk"
              type="button"
              @click="onLoginVK()"
            >
          </div>
        </div>
        <div
          v-if="authType === 'signup'"
          class="stretch form-group alm-auth-form"
        >
          <div class="form-group">
            <input
              v-model="signupName"
              required
              class="form-control"
              name="alm-signup-name"
              type="text"
              placeholder="Имя"
              autocomplete="off"
            >
          </div>
          <div class="form-group">
            <input
              v-model="signupEmail"
              required
              class="form-control"
              name="alm-signup-email"
              type="email"
              placeholder="E-mail"
              autocomplete="off"
            >
          </div>

          <div class="form-group alm-anchor">
            <input
              v-model="signupPassword"
              required
              class="form-control"
              name="alm-signup-password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Пароль"
              autocomplete="new-password"
            >
            <div
              class="alm-input-eye"
              :class="{'eye-open': showPassword}"
              @click="toggleShowPassword"
            />
          </div>
          <div
            v-if="errorMessageSignup"
            class="form-group"
          >
            <span class="form-notice f-red">
              {{ errorMessageSignup | trans }}
            </span>
          </div>
          <div class="form-group">
            <input
              class="form-control login-form__button--primary"
              type="submit"
              :value="submitLabel"
            >
          </div>
          <div class="form-group">
            <div class="alm-subtext-eula f-gray">
              Нажимая на кнопку «Зарегистрироваться» или одну из иконок
              социальных сетей, вы подтверждаете свое согласие с
              <a
                href="/documents/alabom-terms.pdf"
                _target="EULA"
              >
                пользовательским соглашением
              </a>.
            </div>
          </div>
          <div class="login-form__notice">
            {{ subjectLabel }}
            через соцсети
          </div>
          <div class="form-group m-0">
            <input
              class="form-control login-form__button--vk"
              type="button"
              @click="onLoginVK()"
            >
          </div>
        </div>
      </template>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import {
  doLogin,
  doSignup,
  // doResetPassword,
  doLoginVK,
} from 'services/AuthService';
// import * as STATUS from 'constants';
import { VK_AUTH_TYPE } from 'constants';
import AuthMixin from 'core/Auth/AuthMixin';

const labels = {
  login: {
    subjectLabel: 'Вход',
    submitLabel: 'Войти',
  },
  signup: {
    subjectLabel: 'Регистрация',
    submitLabel: 'Зарегистрироваться',
  },
};

export default {
  name: 'AuthPage',
  mixins: [AuthMixin],
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
      isSocialLogInProgress: false, // флаг вывода индикатора загрузки входа через социальные сети
    };
  },
  computed: {
    submitLabel() {
      return labels[this.authType].submitLabel;
    },
    subjectLabel() {
      return labels[this.authType].subjectLabel;
    },
    isCoda() {
      return ['coda', 'ok'].includes(this.$route.params.step);
    },
    isSuccess() {
      return (
        // eslint-disable-next-line yoda
        'ok' === this.$route.params.step
          || (this.isCoda && this.isSignupSucceed && !this.needConfirmEmail)
      );
    },
  },

  methods: {
    ...mapActions({
      loadProfile: 'loadProfile',
      loadProfileAndCloseModal: 'loadProfileAndCloseModal',
      appendToCart: 'cart/appendToCart',
    }),

    onSubmit() {
      localStorage.removeItem(VK_AUTH_TYPE);

      this.errorMessageLogin = '';
      this.errorMessageSignup = '';

      if (this.authType === 'signup') {
        doSignup(this.signupEmail, this.signupPassword, this.signupName)
          .then(({ data }) => {
            this.$store.commit('profile', data);
            this.$router.push('/auth/coda');
            this.isSignupSucceed = true;
            this.needConfirmEmail = !data.is_email_confirmed;
          })
          .catch((errorData) => {
            // console.log('doSignup() error', errorData);
            if (errorData.errorMessage) {
              this.errorMessageSignup = errorData.errorMessage;
            }
          });
      } else {
        doLogin(this.email, this.password)
          .then(() => {
            this.loadProfile().then(() => {
              this.closeModal();
            });
          })
          .catch((error) => {
            // console.log(' (!) onSubmit() <- error ', error);
            if (error.errorMessage) {
              this.errorMessageLogin = error.errorMessage;
            }
          });
      }
    },
    onLoginVK() {
      localStorage.setItem(VK_AUTH_TYPE, this.authType);
      doLoginVK();
    },
    setAuthType(value) {
      this.authType = value;
      if (value === 'login') {
        this.showPassword = false;
      }
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .login-form {

    @include element(button) {
      color: #fff;
      cursor: pointer;
      height: 50px;
      padding: 14px;

      @include modifier(primary) {
        background: var(--blue);
        // border-radius: px-to-rem(3);
        border: 1px solid rgba(24, 25, 32, 0.1);
        color: var(--white);
        cursor: pointer;
      }

      @include modifier(vk) {
        background: #45668E url('../../../assets/svg/icons/vk.svg') no-repeat center !important;
        // border-radius: px-to-rem(3);
        border: 1px solid rgba(24, 25, 32, 0.1);
        cursor: pointer;
      }

    }

    @include element(notice) {
      color: rgba(24, 25, 32, 0.6);
      margin-bottom: px-to-rem(19);
      text-align: center;
      width: 100%
    }
  }

  .login-form__tab {
    flex: 1;
  }
  .alm-auth-tabs {
    height: 48px;
  }

  .alm-auth-tab {
    border-bottom: 1px solid rgba(24, 25, 32, 0.1);
    padding: 16px 0;
    cursor: pointer;
  }
  .alm-auth-tab.active {
    border-bottom: 2px solid #2150F4;
  }

  .alm-auth-tab-label {
    font-weight: 500;
    line-height: 16px;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    color: #181920;
  }
  .alm-auth-tab-label.auth-header {
    text-align: left;
    padding-left: 20px;
  }

  .alm-auth-form {
    padding: 10px 20px 10px;
  }

  // .alm-text,
  // .alm-auth-form input,
  // .alm-auth-form span {
  //   line-height: 20px;
  //   font-size: 14px;
  // }

  // .alm-auth-form .form-group {
  //   margin-top: 20px;
  // }

  // .alm-auth-form .alm-card-top-row {
  //   margin-top: 10px;
  // }

  // .alm-auth-form .alm-card-title {
  //   font-size: 19px;
  //   line-height: 26px;
  //   font-style: normal;
  //   font-weight: bold;
  //   color: #181920;
  // }

  // .alm-auth-form .alm-card-body {
  //   text-align: left;
  //   font-size: 14px;
  //   line-height: 24px;
  //   color: #181920;
  // }
  // .alm-auth-form .alm-card-body p {
  //   margin: 12px 0;
  // }


  // .alm-auth-form .f-dark {
  //   color: #181920;
  // }
  // .alm-auth-form .f-red {
  //   color: #ea4d47;
  // }
  .alm-auth-form .f-gray {
    color: rgba(24, 25, 32, 0.6);
  }
  // .alm-auth-form .f-lite {
  //   color: rgba(24, 25, 32, 0.1);
  // }
  // .alm-auth-form .f-blue,
  // .alm-auth-form a {
  //   color: #0A5BF0;
  //   text-decoration: none;
  // }

  // /* input.form-control::-moz-placeholder, */
  // input.form-control::-webkit-input-placeholder {
  //   color: rgba(24, 25, 32, 0.6);
  // }

  // input.form-control {
  //   width: 100%;
  //   height: 50px;
  //   padding: 14px;
  //   color: rgba(24, 25, 32, 1);
  //   border-radius: 4px;
  //   border: 1px solid rgba(24, 25, 32, 0.1);
  // }

  // // .alm-auth-form .form-notice {
  // //   width: 100%;
  // //   text-align: center;
  // // }

  .alm-anchor {
    position: relative;
  }

  .alm-notice-forgot {
    position: absolute;
    top: 16px;
    right: 14px;
    color: #0A5BF0;
    cursor: pointer;
  }

  // .alm-input-eye {
  //   position: absolute;
  //   top: 0px;
  //   right: 14px;
  //   width: 24px;
  //   height: 50px;
  //   cursor: pointer;
  //   background: url(/images/auth/eye-closed.svg) center center no-repeat;
  // }
  // .alm-input-eye.eye-open {
  //   background: url(/images/auth/eye.svg) center center no-repeat;
  // }

  .alm-auth-form .alm-subtext-eula {
    width: 300px;
    line-height: 18px;
    font-size: 12px;
    text-align: center;
  }

  // .form-group {
  //   margin-top: 20px;
  // }

  // .auth-button-vk {
  //   color: #fff;
  //   background: #45668E;
  //   border-radius: 3px;
  //   cursor: pointer;
  // }

</style>
