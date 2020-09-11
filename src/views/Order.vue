<!--  -->
<template>
  <div class="orderList">
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
    <a-list
      class="demo-loadmore-list"
      :loading="loading"
      item-layout="vertical"
      :data-source="data"
      :split="false"
    >
      <div
        v-if="showLoadingMore"
        slot="loadMore"
        :style="{
          textAlign: 'center',
          marginTop: '12px',
          height: '32px',
          lineHeight: '32px'
        }"
      >
        <a-spin v-if="loadingMore" />
        <a-button v-else @click="onLoadMore">
          loading more
        </a-button>
      </div>
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta description="">
          <a slot="title">订单编号：{{ item.title }}</a>
        </a-list-item-meta>
        <div>
          <p>
            <img src="@/assets/img/car.png" alt="" class="carImg" />
            <span>蒙J 66666</span>
          </p>
          <p class="status">已发货</p>
          <p class="status">付款金额：20元</p>
          <p>订单时间：<span>2020-9-11 14:12:30</span></p>
          <p>邮递单号：<span>123456789</span></p>
        </div>
        <div
          slot="actions"
          :style="{
            textAlign: 'right'
          }"
        >
          <a-button>查看物流</a-button>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// const fakeDataUrl =
//   "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";
// import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [
        {
          title: "Title 1"
        },
        {
          title: "Title 2"
        },
        {
          title: "Title 3"
        },
        {
          title: "Title 4"
        },
        {
          title: "Title 5"
        },
        {
          title: "Title 6"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // getData(callback) {
    //   let token = window.localStorage.getItem("token");
    //   axios
    //     .get(fakeDataUrl, {
    //       headers: {
    //         Authorization: "Bearer " + token
    //       }
    //     })
    //     .then(res => {
    //       //alert("info返回的数据："+res.data);
    //       if (res.data.code == 401) {
    //         window.localStorage.removeItem("token");
    //         //   this.gotoWxOauth();
    //       }
    //       callback(res);
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       alert("/wx/info请求出错！");
    //     });
    // },
    onLoadMore() {
      //   this.loadingMore = true;
      //   this.getData(res => {
      //     this.data = this.data.concat(res.results);
      //     this.loadingMore = false;
      //     this.$nextTick(() => {
      //       window.dispatchEvent(new Event('resize'));
      //     });
      //   });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.loading = false;
    // this.getData(res => {
    //   this.loading = false;
    //   this.data = res.results;
    // });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="css" scoped>
/* @import url(); 引入公共css类*/
</style>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
.orderList .ant-list-item-action > li {
  display: block;
}
.orderList .ant-list-item {
  border: 1px solid #5d5d5d;
  background: #eeeeee;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
}
.orderList .ant-list-item-meta-title {
  border-bottom: 1px solid #5d5d5d;
}
.orderList .carImg {
  width: 80px;
  margin-right: 10px;
}
.orderList .status {
  text-align: right;
}
</style>
