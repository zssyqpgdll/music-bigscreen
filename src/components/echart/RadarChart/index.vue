<template>
  <div>
    <!--把cdata数据传到./chart.vue中-->
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
import {top5singers} from "../../../api/spark";

export default {
  data () {
    return {
      //初始的cdata数据
      cdata: {
        y:[]
      }
    }
  },

  //加载完成后调用loadData方法
  mounted() {
    this.loadData()
  },
  
  methods:{
    loadData(){
      top5singers().then(res=>{
        const top = res.data.data.topsingers
        // console.log(top);
        this.cdata.x = top//x是歌手名列表
        for(let i=0;i<5;i++){
          let o = new Object()
          o.name = top[i]//歌手名
          o.value = 100-i*20//手动设置
          this.cdata.y.push(o)
        }
        this.cdata = {...this.cdata}
        console.log(this.cdata)
      })
    }
  },

  components: {
    Chart,
  }
}
</script>
