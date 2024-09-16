<template>
  <div>
    <!--把cdata数据传到./chart.vue中-->
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
import {dash1} from "../../../../api/spark";

export default {
  data () {
    return {
      cdata: {
        indicatorData: [
          { name: "登录", max: 100 },
          { name: "充值", max: 50 },
          { name: "实名认证", max: 50 },
          { name: "播放", max: 300},
          { name: "收藏", max: 50 },
          { name: "下载", max: 50 }
        ],

        dataBJ: [
          [50, 20, 15, 150, 40, 10],
          // [99, 73, 110, 2.43, 76, 48, 23],
          // [31, 12, 30, 0.5, 32, 16, 24],
          // [42, 27, 43, 1, 53, 22, 25],
          // [154, 117, 157, 3.05, 92, 58, 26],
          // [234, 185, 230, 4.09, 123, 69, 27],
          // [160, 120, 186, 2.77, 91, 50, 28]
        ],
        // dataGZ: [
        //   [84, 94, 140, 2.238, 68, 18, 22],
        //   [93, 77, 104, 1.165, 53, 7, 23],
        //   [99, 130, 227, 3.97, 55, 15, 24],
        //   [146, 84, 139, 1.094, 40, 17, 25],
        //   [113, 108, 137, 1.481, 48, 15, 26],
        //   [81, 48, 62, 1.619, 26, 3, 27],
        //   [56, 48, 68, 1.336, 37, 9, 28]
        // ],
        // dataSH: [
        //   [91, 45, 125, 0.82, 34, 23, 1],
        //   [65, 27, 78, 0.86, 45, 29, 2],
        //   [83, 60, 84, 1.09, 73, 27, 3],
        //   [109, 81, 121, 1.28, 68, 51, 4],
        //   [106, 77, 114, 1.07, 55, 51, 5],
        //   [109, 81, 121, 1.28, 68, 51, 6],
        //   [106, 77, 114, 1.07, 55, 51, 7]
        // ]
      }
    }
  },
  
  mounted() {
    this.loadData()
  },

  methods:{
    loadData() {
      dash1().then(res=>{
        let spark =  res.data.data
        this.cdata.dataBJ = []
        let test = [spark.logins, spark.deposits, spark.idconfirm, spark.plays, spark.favs, spark.downloads]
        this.cdata.dataBJ.push(test)//登陆次数
        // this.cdata.dataBJ.push(spark.deposits)//订单数量
        // this.cdata.dataBJ.push(spark.idconfirm)//实名认证次数
        // this.cdata.dataBJ.push(spark.plays)//播放次数
        // this.cdata.dataBJ.push(spark.favs)//收藏次数
        // this.cdata.dataBJ.push(spark.downloads)//下载次数
        console.log(this.cdata)
        this.cdata = {...this.cdata}
      })
    }
  },

  components: {
    Chart,
  }
}
</script>
