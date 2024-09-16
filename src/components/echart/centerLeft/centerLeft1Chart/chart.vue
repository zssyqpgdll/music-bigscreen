<template>
  <div>
    <!--把对应参数传到@/common/echart/index中-->
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="330px"
      width="260px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'

export default {
  data () {
    return {
      options: {},//初始数据为空
    };
  },

  //将其设为组件，可在标签中直接引用
  components: {
    Echart,
  },

  //将其父组件所传递的“cdata”属性传输过来（要与父组件定义的名称保持一致）
  //接收同级目录下的index.vue传过来的参数cdata
  //没传过来默认就是空
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },

  //监听，当cdata值发生变化时触发
  watch: {
    cdata: {
      handler (newData) {
        //设置options，然后传到@/common/echart/index中
        this.options = {
          //设置每一个柱条的颜色，可重复使用
          color: [
            "#37a2da",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#fb7293",
            "#e7bcf3",
            "#8378ea"
          ],

          //工具——提示框
          tooltip: {
            trigger: "item",//方式——鼠标悬浮
            formatter: "{a} <br/>{b} : {c} ({d}%)"//文字格式化，a是title，b是省份，c是数量，d是所占比例
          },

          //工具栏、工具箱
          toolbox: {
            show: true//设置：显示工具箱
          },

          //图表计算
          calculable: true,

          //对图例组件的相关配置
          legend: {
            // 布局方式，默认为水平布局，可选为：'horizontal' 或 'vertical'
            orient: "horizontal",
            //图例的图标为圆形
            icon: "circle",
            //图例放在饼图下方
            bottom: 0,
            //水平安放位置，默认为全图居中，可选为：'center' 、 'left' 、 'right'
            x: "center",
            //数据
            data: newData.xData,
            //文字格式
            textStyle: {
              color: "#fff"//图例中文字白色
            }
          },

          series: [
            {
              name: "用户分布",//图表名称
              type: "pie",//图表类型饼图
              radius: [10, 50],
              //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
              //'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
              //'area' 所有扇区圆心角相同，仅通过半径展现数据大小
              roseType: "area",
              center: ["50%", "40%"],// 左右居中，距离上面40%
              data: newData.seriesData//数据
            }
          ]
        }
      },

      //第一次就可以被监听到
      immediate: true,
      //深度监听
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
