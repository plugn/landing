<template>
  <div class="login-form">
    <div class="d-flex flex-column">
      <div class="d-flex flex-row no-stretch alm-auth-tabs">
        <div class="login-form__tab alm-auth-tab active">
          <div class="alm-auth-tab-label">
            вход
          </div>
        </div>
        <div class="login-form__tab alm-auth-tab">
          <div class="alm-auth-tab-label">
            регистрация
          </div>
        </div>
      </div>
      <div class="form-group" />
      <SignInForm />
    </div>
  </div>
</template>

<script>
import SignInForm from './SignInForm';

export default {
  name: 'LoginForm',
  components: {
    SignInForm,
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
        background: #45668E url('/static/svg/icons/vk.svg') no-repeat center !important;
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
    padding: 10px 20px 30px;
  }

  // .alm-text,
  // .alm-auth-form input,
  // .alm-auth-form span {
  //   line-height: 20px;
  //   font-size: 14px;
  // }

  // .alm-auth-form .form-row {
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
  // .alm-auth-form .f-gray {
  //   color: rgba(24, 25, 32, 0.6);
  // }
  // .alm-auth-form .f-lite {
  //   color: rgba(24, 25, 32, 0.1);
  // }
  // .alm-auth-form .f-blue,
  // .alm-auth-form a {
  //   color: #0A5BF0;
  //   text-decoration: none;
  // }

  // /* input.form-input::-moz-placeholder, */
  // input.form-input::-webkit-input-placeholder {
  //   color: rgba(24, 25, 32, 0.6);
  // }

  // input.form-input {
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

  // .alm-auth-form .alm-subtext-eula {
  //   width: 300px;
  //   line-height: 18px;
  //   font-size: 12px;
  //   text-align: center;
  // }

  // .form-row {
  //   margin-top: 20px;
  // }

  // .auth-button-vk {
  //   color: #fff;
  //   background: #45668E;
  //   border-radius: 3px;
  //   cursor: pointer;
  // }

</style>
