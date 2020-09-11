import Vue from "vue";
import {
  Row,
  Col,
  Button,
  message,
  Form,
  Modal,
  Input,
  Select,
  List,
  Avatar,
  Descriptions,
  Spin
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
Vue.use(Row);
Vue.use(Col);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Spin);
Vue.prototype.$message = message;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
