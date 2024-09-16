<template>
  <div>
    <!--把cdata数据传到./chart.vue中-->
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import {logins} from "../../../../api/spark";

export default {
  data () {
    return {
      //初始数据
      cdata: {
        //作为x轴数据
        category: [
          "市区",
          "万州",
          "江北",
          "南岸",
          "北碚",
          "綦南",
          "长寿",
          "永川",
          "璧山",
          "江津",
          "城口",
          "大足",
          "垫江",
          "丰都",
          "奉节",
          "合川",
          "江津区",
          "开州",
          "南川",
          "彭水",
          "黔江",
          "石柱",
          "铜梁",
          "潼南",
          "巫山",
          "巫溪",
          "武隆",
          "秀山",
          "酉阳",
          "云阳",
          "忠县",
          "川东",
          "检修"
        ],
        //作为总量柱状图数值
        lineData: [
          18092,
          20728,
          24045,
          28348,
          32808,
          36097,
          39867,
          44715,
          48444,
          50415,
          56061,
          62677,
          59521,
          67560,
          18092,
          20728,
          24045,
          28348,
          32808,
          36097,
          39867,
          44715,
          48444,
          50415,
          36097,
          39867,
          44715,
          48444,
          50415,
          50061,
          32677,
          49521,
          32808
        ],
        //作为下载消费柱
        barData: [
          4600,
          5000,
          5500,
          6500,
          7500,
          8500,
          9900,
          12500,
          14000,
          21500,
          23200,
          24450,
          25250,
          33300,
          4600,
          5000,
          5500,
          6500,
          7500,
          8500,
          9900,
          22500,
          14000,
          21500,
          8500,
          9900,
          12500,
          14000,
          21500,
          23200,
          24450,
          25250,
          7500
        ],
        //作为折线图数值
        rateData: []
      }
    };
  },

  components: {
    Chart,
  },
  
  mounted () {
    this.loadData()
  },
  
  methods: {
    // 根据自己的业务情况修改
    loadData(){
      logins().then(res=>{
        const logins = res.data.data
        // console.log(logins);
        // for(let i=0;i<logins.xData.length;i++){
        //   logins.logins[i] = logins.logins[i] + logins.applogins[i]
        // }
        this.cdata.lineData = logins.total_action//总行为量
        this.cdata.barData = logins.downloads//下载消费量
        this.cdata.category = logins.xData//x轴数据

        this.setData();
      })
    },

    setData () {
      for (let i = 0; i <= this.cdata.barData.length -1; i++) {
        let rate = this.cdata.barData[i];
        // this.cdata.rateData.push(rate.toFixed(2));//某天下载率,小数点后两位
        this.cdata.rateData.push(rate);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
