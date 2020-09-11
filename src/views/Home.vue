<template>
  <div class="home">
    <div class="banner">
      <a-row>
        <a-col :span="12">
          <img src="@/assets/img/logo.png" height="40px" />
        </a-col>
        <a-col :span="12">
          <div class="title">警邮合作</div>
          <div class="title">号牌邮寄</div>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-descriptions title="蒙J车牌资费标准如下：（仅限一副）" :column="1">
        <a-descriptions-item label="乌兰察布市内">一副25元</a-descriptions-item>
        <a-descriptions-item label="内蒙古自治区内">一副30元</a-descriptions-item>
        <a-descriptions-item label="内蒙古自治区外">一副35元</a-descriptions-item>
      </a-descriptions>
    </div>
    <div class="txxx">
      <span>填写信息</span>
    </div>
    <a-form
      :form="form"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-form-item label="选择业务类型">
        <a-select
          v-decorator="[
            'businessType',
            {
              rules: [{ required: true, message: '请选择业务类型' }],
              initialValue: 'small_car'
            }
          ]"
          placeholder="请选择业务类型"
          @change="handleSelectChange"
        >
          <a-select-option value="small_car">小型汽车</a-select-option>
          <a-select-option value="big_car">大型汽车</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="填写车牌">
        <a-input
          v-decorator="[
            'businessName',
            {
              rules: [{ required: true, message: '请填写车牌' }]
            }
          ]"
          style="width: 100%"
        >
          <a-select
            slot="addonBefore"
            v-decorator="['prefix', { initialValue: '蒙J' }]"
            style="width: 70px"
          >
            <a-select-option value="蒙A">蒙A</a-select-option>
            <a-select-option value="蒙B">蒙B</a-select-option>
            <a-select-option value="蒙B">蒙B</a-select-option>
            <a-select-option value="蒙C">蒙C</a-select-option>
            <a-select-option value="蒙D">蒙D</a-select-option>
            <a-select-option value="蒙E">蒙E</a-select-option>
            <a-select-option value="蒙F">蒙F</a-select-option>
            <a-select-option value="蒙G">蒙G</a-select-option>
            <a-select-option value="蒙H">蒙H</a-select-option>
            <a-select-option value="蒙J">蒙J</a-select-option>
            <a-select-option value="蒙K">蒙K</a-select-option>
            <a-select-option value="蒙L">蒙L</a-select-option>
            <a-select-option value="蒙M">蒙M</a-select-option>
          </a-select>
        </a-input>
      </a-form-item>

      <a-form-item
        :wrapper-col="formItemLayoutWithOutLabel.wrapperCol"
        class="address"
        v-show="isShowAddress"
      >
        <div class="address-content">
          <div>{{ orderInfo.recipientName }} {{ orderInfo.tel }}</div>
          <div>{{ orderInfo.province }} {{ orderInfo.city }} {{ orderInfo.area }}</div>
          <div>{{ orderInfo.address }} {{ orderInfo.postcode }}</div>
        </div>
      </a-form-item>

      <a-form-item :wrapper-col="formItemLayoutWithOutLabel.wrapperCol">
        <a-button type="dashed" block @click="selectAddress">开始填写地址</a-button>
      </a-form-item>

      <a-form-item :wrapper-col="formItemLayoutWithOutLabel.wrapperCol">
        <a-button type="primary" html-type="submit" @click="commitOrder" block>立即支付</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import wx from "weixin-js-sdk";
// import qs from "qs";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 4 }
        }
      },
      orderInfo: {
        //省
        province: undefined,
        //市
        city: undefined,
        //区
        area: undefined,
        //详细地址
        address: undefined,
        //电话
        tel: undefined,
        //收件人姓名
        recipientName: undefined,
        //邮编
        postcode: undefined

        // //省
        // province: "内蒙古自治区",
        // //市
        // city: "乌兰察布盟",
        // //区
        // area: "集宁市",
        // //详细地址
        // address: "云中路xxxx",
        // //电话
        // tel: "18734258018",
        // //收件人姓名
        // recipientName: "王小小",
        // //邮编
        // postcode: "037000"
      }
    };
  },
  created: function() {
    this.getCode();
  },

  computed: {
    isShowAddress: function() {
      if (this.orderInfo.recipientName) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    handleSelectChange(value) {
      console.log(value);
      // this.form.setFieldsValue({
      //   note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      //   carType
      // });
    },
    async getCode() {
      debugger;
      let token = window.localStorage.getItem("token");
      let code = this.getQueryValue("code");

      //alert(`token:${token},code:${code}`);
      if (token) {
        //如果存在,就携带. token过期了没
        console.log("/wx/info");
        await axios
          .get("/wx/info", {
            headers: {
              Authorization: "Bearer " + token
            }
          })
          .then(res => {
            //alert("info返回的数据："+res.data);
            if (res.data.code == 401) {
              window.localStorage.removeItem("token");
              this.gotoWxOauth();
            }
            console.log(res);
          })
          .catch(err => {
            console.log(err);
            alert("/wx/info请求出错！");
          });
        this.wxinit();
      } else {
        if (code) {
          console.log("/wxlogin");
          await axios
            .get("/wxlogin", {
              params: {
                code: code
              }
            })
            .then(res => {
              //alert(res.data.token);
              window.localStorage.setItem("token", res.data.token);
              console.log(res);
              this.wxinit();
            })
            .catch(err => {
              console.log(err);
              alert("wxlogin请求出错！");
            });
        } else {
          console.log("调用getCode里面的gotoWxOauth");
          this.gotoWxOauth();
        }
      }
    },
    wxinit() {
      let token = window.localStorage.getItem("token");
      axios
        .get("/wx/jsapi", {
          headers: {
            Authorization: "Bearer " + token
          },
          params: {
            url: window.location.href
          }
        })
        .then(res => {
          let data = res.data.data;
          //alert(data);
          wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名
            jsApiList: ["openAddress", "chooseWXPay"] // 必填，需要使用的JS接口列表
          });

          console.log(res);
        })
        .catch(err => {
          console.log(err);
          alert("wxinit请求出错！");
        });
    },

    gotoWxOauth() {
      let baseUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?";
      let appid = "wx3cb068d12330415d";
      let redirect_uri = encodeURIComponent(
        `https://ngrok.0352it.com/service.html`
      );

      window.location.href = `${baseUrl}appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`;
      //let url=`${baseUrl}appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`;
      //console.info(url);
    },

    selectAddress() {
      let _this = this;
      wx.openAddress({
        success: function(res) {
          _this.orderInfo.province = res.provinceName; // 国标收货地址第一级地址（省）
          _this.orderInfo.city = res.cityName; // 国标收货地址第二级地址（市）
          _this.orderInfo.area = res.countryName; // 国标收货地址第三级地址（国家）
          _this.orderInfo.address = res.detailInfo;
          _this.orderInfo.recipientName = res.userName; // 收货人姓名
          _this.orderInfo.tel = res.telNumber;
          _this.orderInfo.postcode = res.postalCode; // 收货人手机号码
        }
      });
    },
    getQueryValue(queryName) {
      var query = decodeURI(window.location.search.substring(1));
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) {
          return pair[1];
        }
      }
      return null;
    },

    commitOrder(e) {
      e.preventDefault();
      let token = window.localStorage.getItem("token");
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const postData = JSON.stringify({ ...this.orderInfo, ...values });
          axios
            .post("/wx/order", postData, {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
              }
            })
            .then(res => {
              let data = res.data.data;
              alert("data.packageValue" + data.packageValue);
              alert("data.timeStamp" + data.timeStamp);
              wx.chooseWXPay({
                timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
                package: data.packageValue, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: data.paySign, // 支付签名
                success: function(res) {
                  // 支付成功后的回调函数
                  console.log(res);
                  alert("支付成功");
                }
              });
            })
            .catch(err => {
              console.log(err);
              alert("commitOrder请求出错！");
            });
        }
      });
    }
  }
};
</script>
<style>
.banner {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #fff;
  background-color: green;
  font-size: 30px;
  font-weight: bolder;
  /* padding: 20px 0px; */
}
.banner .title {
  line-height: 40px;
}
.home .ant-descriptions-title {
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
  padding-left: 20px;
}
.home .ant-descriptions-item-label,
.home .ant-descriptions-item-content {
  font-size: 16px;
  font-weight: bolder;
}
.home .ant-descriptions-item-label {
  border-left: 5px solid green;
  padding-left: 10px;
  margin-left: 20px;
}
.mark {
  color: red;
  font-size: 14px;
  text-align: center;
}
.txxx {
  margin-top: 10px;
  padding: 20px 0;
  border-bottom: 1px solid rgb(242, 242, 242);
}
.txxx span {
  width: 3px;
  border-left: 3px solid rgb(9, 137, 228);
  margin-left: 15px;
  padding-left: 10px;
  font-size: 20px;
  font-weight: bold;
}
.home .ant-form {
  padding: 20px;
}

.address {
  border: 3px dashed green;
  border-radius: 30px;
}

.address-content {
  padding-left: 30px;
}
/* @media (max-width: 575px) {
  .ant-form-item-label {
    line-height: 2.5;
  }
} */
</style>
