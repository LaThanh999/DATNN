<template>
  <section class="section-container container">
    <v-row class="signin">
      <v-col cols="6" class="box-1"> </v-col>
      <v-col cols="6" class="box-2 flex-align-center">
        <div style="width: 100%" class="px-16">
          <h2>LOGIN</h2>
          <v-form
            ref="form"
            @submit.prevent="submit({ username, password })"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              outlined
              label="Username"
              background-color="#E3F2FD"
              color="#424242"
              rounded
              :counter="40"
              :rules="usernameRules"
              required
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="Password"
              :type="showPass ? 'text' : 'password'"
              outlined
              background-color="#E3F2FD"
              rounded
              color="#424242"
              :counter="20"
              :rules="passwordRules"
              required
              v-model="password"
              :append-icon="
                showPass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
              "
              @click:append="clickShowPass"
            ></v-text-field>
            <div class="d-flex justify-center">
              <v-btn :loading="loading" type="submit" color="#E0E0E0" rounded>
                Login
              </v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  components: {},
  data: () => ({
    valid: true,
    username: "",
    password: "",
    usernameRules: [
      (v) => !!v || "Username is required",
      (v) =>
        (v && v.length <= 40) || "Username must be less than 20 characters",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length <= 20) || "Password must be less than 20 characters",
    ],
    loading: false,
    showPass: false,
  }),
  computed: {},
  methods: {
    ...mapActions("auths", ["login"]),
    // form validation
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async submit(data) {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          await this.login(data);
          this.$router.push("/");
        } catch (err) {
          this.$toast.error(err.data.message);
        } finally {
          this.loading = false;
        }
      }
    },
    clickShowPass() {
      this.showPass = !this.showPass;
    },
  },
};
</script>
<style lang="scss" scoped>
.section-container {
  background: #fff;
  height: 100%;
  position: relative;
  .signin {
    padding: 0;
    width: 100%;
    max-width: 1000px;
    margin: auto;
    min-height: 600px;
    box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .box-1 {
      background-image: url("../../assets/images/backround-auth.jpg");
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      color: #1976d2;
      background-color: #f9f9f9;
    }
    .box-2 {
      box-sizing: border-box;
      background: #78909c;
      color: #fff;
      h2 {
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }
}
.flex-align-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.section-container .signin .right .signin-btn[data-v-ef68022e] {
  color: #fff;
}
.theme--dark.v-btn.v-btn--has-bg {
  background-color: #272727ab;
}
</style>
