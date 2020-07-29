<template>
  <div class="home">
    <div class="banner">小车牌邮寄</div>
    <!-- <div class="infoTitle">
      蒙A小车牌资费标准如下：（仅限一副）
    </div> -->
    <div>
      <a-descriptions title="蒙A小车牌资费标准如下：（仅限一副）" :column="1">
        <a-descriptions-item label="呼和浩特市内">
          一副25元
        </a-descriptions-item>
        <a-descriptions-item label="内蒙古自治区内">
          一副30元
        </a-descriptions-item>
        <a-descriptions-item label="内蒙古自治区外">
          一副35元
        </a-descriptions-item>
      </a-descriptions>
    </div>
    <p class="mark">*请先明确缴费标准*</p>
    <div class="txxx">
      <span>填写信息</span>
    </div>
    <a-form
      :form="form"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
      @submit="handleSubmit"
    >
      <a-form-item label="选择类型">
        <a-select
          v-decorator="[
            'carType',
            {
              rules: [{ required: true, message: '请选择类型' }],
              initialValue: 'male'
            }
          ]"
          placeholder="请选择类型"
          @change="handleSelectChange"
        >
          <a-select-option value="male">
            小车牌
          </a-select-option>
          <a-select-option value="female">
            大车牌
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="填写车牌">
        <a-input
          v-decorator="[
            'carNumber',
            {
              rules: [{ required: true, message: '请填写车牌' }]
            }
          ]"
          style="width: 100%"
        >
          <a-select
            slot="addonBefore"
            v-decorator="['prefix', { initialValue: '蒙A' }]"
            style="width: 70px"
          >
            <a-select-option value="蒙A">
              蒙A
            </a-select-option>
            <a-select-option value="蒙B">
              蒙B
            </a-select-option>
            <a-select-option value="蒙B">
              蒙B
            </a-select-option>
            <a-select-option value="蒙C">
              蒙C
            </a-select-option>
            <a-select-option value="蒙D">
              蒙D
            </a-select-option>
            <a-select-option value="蒙E">
              蒙E
            </a-select-option>
            <a-select-option value="蒙F">
              蒙F
            </a-select-option>
            <a-select-option value="蒙G">
              蒙G
            </a-select-option>
            <a-select-option value="蒙H">
              蒙H
            </a-select-option>
            <a-select-option value="蒙J">
              蒙J
            </a-select-option>
            <a-select-option value="蒙K">
              蒙K
            </a-select-option>
            <a-select-option value="蒙L">
              蒙L
            </a-select-option>
            <a-select-option value="蒙M">
              蒙M
            </a-select-option>
          </a-select>
        </a-input>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 16, offset: 4 }">
        <a-button type="dashed" block>
          开始填写地址
        </a-button>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 16, offset: 4 }">
        <a-button type="primary" html-type="submit" block>
          立即支付
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    }
  }
};
</script>
<style>
.banner {
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #fff;
  background-color: green;
  font-size: 60px;
  font-weight: bolder;
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
@media (max-width: 575px) {
  .ant-form-item-label {
    line-height: 2.5;
  }
}
</style>
