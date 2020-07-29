import Vue from "vue";
import {
  Button,
  message,
  Form,
  Modal,
  Input,
  Select,
  Descriptions
} from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Form);
Vue.use(Modal);
Vue.use(Input);
Vue.use(Select);
Vue.use(Descriptions);
Vue.prototype.$message = message;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
