import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#78909c",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
};

Vue.use(Vuetify);

export default new Vuetify(opts);
