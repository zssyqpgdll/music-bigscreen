<template>
  <div>
    <!--把cdata数据传到./chart.vue中-->
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
import {provinces} from "../../../../api/spark";

export default {
  data () {
    return {
      //初始的cdata数据
      cdata: {
        xData: ["data1", "data2", "data3", "data4", "data5", "data6"],
        seriesData: [
          { value: 10, name: "data1" },
          { value: 5, name: "data2" },
          { value: 15, name: "data3" },
          { value: 25, name: "data4" },
          { value: 20, name: "data5" },
          { value: 35, name: "data6" }
        ]
      }
    }
  },

  components: {
    Chart,
  },

  //加载完成后调用loadData方法
  mounted () {
    this.loadData()
  },

  methods: {
    loadData(){
      provinces().then(res=>{
        //p是一个map类型，即key-value，其中key是name是用户所在地的前3个字，value就是所在地一样的用户数量
        const p = res.data.data.province_users
        //先把cdata设为空，因为初始时写了无用数据
        this.cdata.xData=[]
        this.cdata.seriesData=[]

        //记录12个数据
        for(let i=0;i<12;i++){
          this.cdata.xData.push(p[i].name)
          this.cdata.seriesData.push(p[i])
        }
        // console.log(p);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
