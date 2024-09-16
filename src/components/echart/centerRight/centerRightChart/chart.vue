<template>
  <div>
    <!--把对应参数传到@/common/echart/index中-->
    <Echart
      :options="options"
      id="centreRight2Chart1"
      height="200px"
      width="260px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'

export default {
  data () {
    return {
      options: {},
    };
  },

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

  watch: {
    cdata: {
      handler (newData) {
        // 固定样式数据
        let lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };

        this.options = {
          radar: {//雷达图
            indicator: newData.indicatorData,//雷达图的指示器，可自行定义属性，比如单位unit
            shape: "circle",//圆形
            splitNumber: 5,//分成5层
            radius: ["0%", "65%"],//大小
            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                // 每个区域的边框颜色
                color: [
                  "rgba(238, 197, 102, 0.1)",
                  "rgba(238, 197, 102, 0.2)",
                  "rgba(238, 197, 102, 0.4)",
                  "rgba(238, 197, 102, 0.6)",
                  "rgba(238, 197, 102, 0.8)",
                  "rgba(238, 197, 102, 1)"
                ].reverse()
              }
            },
            // 不显示网格
            splitArea: {
              show: false
            },
            // 雷达坐标发射线颜色
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
          series: [
            {
              name: "北京",
              type: "radar",
              lineStyle: lineStyle,
              data: newData.dataBJ,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#F9713C"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.7//透明度
                }
              }
            },
            {
              name: "上海",
              type: "radar",
              lineStyle: lineStyle,
              data: newData.dataSH,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#B3E4A1"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: "广州",
              type: "radar",
              lineStyle: lineStyle,
              data: newData.dataGZ,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "rgb(238, 197, 102)"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            } //end
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>
