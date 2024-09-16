<template>
  <div>
    <!--把对应参数传到@/common/echart/index中-->
    <Echart
      :options="options"
      id="bottomLeftChart"
      height="480px"
      width="100%"
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
          title: {
            text: "",
          },

          //提示框
          tooltip: {
            trigger: "axis",//触发类型；轴触发，axis则鼠标hover到一条柱状图显示所有数据，item则鼠标hover到折线点显示相应数据
            backgroundColor: "rgba(255,255,255,0.1)",
            axisPointer: {
              type: "shadow",
              label: {
                show: true,//鼠标放到某一条柱子上时，坐标轴显示对应的值
                backgroundColor: "#7B7DDC"
              }
            }
          },

          //图例
          legend: {
            data: ["下载消费量", "总行为量", "下载趋势"],
            textStyle: {
              color: "#B4B4B4"
            },
            top: "0%"
          },

          //网格
          grid: {
            x: "8%",
            width: "88%",
            y: "4%"
          },

          //1个x轴
          xAxis: {
            data: newData.category,
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisTick: {
              show: false
            },
          },

          //2个y轴
          yAxis: [
            {
              splitLine: { show: false },//去掉y轴的网格线
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4"
                }
              },

              axisLabel: {
                formatter: "{value} "
              }
            },
            //折线图的y轴
            {
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4"
                }
              },
              axisLabel: {
                formatter: "{value} "
              }
            }
          ],

          series: [
            {
              name: "下载趋势",
              type: "line",//折线图
              smooth: true,
              showAllSymbol: true,//标注所有数据点
              symbol: "emptyCircle",//点用空心圆表示
              symbolSize: 8,//点的大小
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: "#F02FC2"
                }
              },
              data: newData.rateData
            },

            {
              name: "总行为量",
              type: "bar",//柱状图
              //柱间距离，如果想让两个系列的柱子重叠，设其为-100%
              barGap: "-100%",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,//使柱体圆润一点
                  //渐变颜色
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(156,107,211,0.8)" },
                    { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                    { offset: 1, color: "rgba(156,107,211,0.2)" }
                  ])
                }
              },
              z: -12,
              data: newData.lineData
            },

            {
              name: "下载消费量",
              type: "bar",//柱状图
              barWidth: 10,//每一个柱的宽度
              itemStyle: {
                normal: {
                  barBorderRadius: 5,//使柱体圆润一点
                  //渐变颜色
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#956FD4" },
                    { offset: 1, color: "#3EACE5" }
                  ])
                }
              },  
              data: newData.barData
            },
          ]
        }
      },
      immediate: true,
      deep: true
    },
  },
}
</script>
