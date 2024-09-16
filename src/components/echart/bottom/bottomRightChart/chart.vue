<template>
  <div>
    <!--把对应参数传到@/common/echart/index中-->
    <Echart
      :options="options"
      id="centreLeft1Chart"
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
      options: {},
      // 定义颜色
      colorList: {
        linearYtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#f5b44d"
            },
            {
              offset: 1,
              color: "#28f8de"
            }
          ]
        },
        linearGtoB: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#43dfa2"
            },
            {
              offset: 1,
              color: "#28f8de"
            }
          ]
        },
        linearBtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#1c98e8"
            },
            {
              offset: 1,
              color: "#28f8de"
            }
          ]
        },
        areaBtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(35,184,210,.2)"
            },
            {
              offset: 1,
              color: "rgba(35,184,210,0)"
            }
          ]
        }
      }
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

  //监听，当cdata值发生变化时触发
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          //标题
          title: {
            text: "",
            //文字风格
            textStyle: {
              color: "#D3D6DD",
              fontSize: 24,
              fontWeight: "normal"
            },
            // subtext: newData.year + "/" + newData.weekCategory[6],
            //子标题风格
            subtextStyle: {
              color: "#fff",
              fontSize: 16
            },
            top: 50,
            left: 80
          },
          // legend: {
          //   top: 30,
          //   left: 70,
          //   orient: "vertical",
          //   itemGap: 15,
          //   itemWidth: 12,
          //   itemHeight: 12,
          //   data: ["平均指标", "我的指标"],
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 14
          //   }
          // },
          tooltip: {
            trigger: "item"//触发类型；轴触发，axis则鼠标hover到一条柱状图显示所有数据，item则鼠标hover到折线点显示相应数据
          },
          // radar: {
          //   center: ["68%", "27%"],
          //   radius: "40%",
          //   name: {
          //     color: "#fff"
          //   },
          //   splitNumber: 8,
          //   axisLine: {
          //     lineStyle: {
          //       color: this.colorList.linearYtoG,
          //       opacity: 0.6
          //     }
          //   },
          //   splitLine: {
          //     lineStyle: {
          //       color: this.colorList.linearYtoG,
          //       opacity: 0.6
          //     }
          //   },
          //   splitArea: {
          //     areaStyle: {
          //       color: "#fff",
          //       opacity: 0.1,
          //       shadowBlur: 25,
          //       shadowColor: "#000",
          //       shadowOffsetX: 0,
          //       shadowOffsetY: 5
          //     }
          //   },
          //   indicator: [
          //     {
          //       name: "服务态度",
          //       max: newData.maxData
          //     },
          //     {
          //       name: "音乐质量",
          //       max: 10
          //     },
          //     {
          //       name: "服务效率",
          //       max: 12
          //     },
          //     {
          //       name: "售后保障",
          //       max: 3.5
          //     }
          //   ]
          // },
          
          //网格线
          grid: {
            left: 90,
            right: 80,
            bottom: 40,
            top: "10%"
          },

          xAxis: {
            type: "category",
            position: "bottom",
            axisLine: true,
            axisLabel: {
              color: "rgba(255,255,255,.8)",
              fontSize: 12
            },
            data: newData.weekCategory//x轴数据
          },
          
          // 下方Y轴
          yAxis: {
            name: "播放量",
            nameLocation: "end",
            nameGap: 20,//距离
            nameTextStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: 14
            },
            max: newData.maxData,
            splitNumber: 5,//将y轴坐标按最大值分成5部分

            axisLine: {
              lineStyle: {
                opacity: 0//隐藏y轴线
              }
            },

            //分割网格线
            splitLine: {
              show: true,
              lineStyle: {
                color: "#fff",
                opacity: 0.1
              }
            },

            axisLabel: {
              color: "rgba(255,255,255,.8)",
              fontSize: 12
            }
          },

          series: [
            // {
            //   name: "",
            //   type: "radar",
            //   symbolSize: 0,
            //   data: [
            //     {
            //       value: newData.radarDataAvg[6],
            //       name: "平均指标",
            //       itemStyle: {
            //         normal: {
            //           color: "#f8d351"
            //         }
            //       },
            //       lineStyle: {
            //         normal: {
            //           opacity: 0
            //         }
            //       },
            //       areaStyle: {
            //         normal: {
            //           color: "#f8d351",
            //           shadowBlur: 25,
            //           shadowColor: "rgba(248,211,81,.3)",
            //           shadowOffsetX: 0,
            //           shadowOffsetY: -10,
            //           opacity: 1
            //         }
            //       }
            //     },
            //     {
            //       value: newData.radarData[6],
            //       name: "我的指标",
            //       itemStyle: {
            //         normal: {
            //           color: "#43dfa2"
            //         }
            //       },
            //       lineStyle: {
            //         normal: {
            //           opacity: 0
            //         }
            //       },
            //       areaStyle: {
            //         normal: {
            //           color: this.colorList.linearGtoB,
            //           shadowBlur: 15,
            //           shadowColor: "rgba(0,0,0,.2)",
            //           shadowOffsetX: 0,
            //           shadowOffsetY: 5,
            //           opacity: 0.8
            //         }
            //       }
            //     }
            //   ]
            // },
            {
              name: "",
              type: "line",//折线图
              smooth: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: "#fff"
                }
              },
              lineStyle: {
                normal: {
                  color: this.colorList.linearBtoG,
                  width: 3
                }
              },
              //折线图围住的下方的区域
              areaStyle: {
                normal: {
                  // color: this.colorList.areaBtoG
                  // color: this.colorList.linearBtoG
                  color: this.colorList.linearYtoG,
                  opacity: 0.3//透明
                }
              },
              data: newData.weekLineData,
              lineSmooth: true,

              //平均值标记线
              markLine: {
                silent: true,
                data: [
                  {
                    type: "average",
                    name: "平均值"
                  }
                ],
                precision: 0,
                label: {
                  normal: {
                    formatter: "平均值：{c}"
                  }
                },
                lineStyle: {
                  normal: {
                    color: "rgba(248,211,81,.7)"
                  }
                }
              },
              //提示框
              tooltip: {
                position: "top",//显示在上面
                formatter: "{c} m",
                backgroundColor: "rgba(28,152,232,.2)",
                padding: 6
              }
            },

            {
              name: "占位背景",
              type: "bar",//柱状图
              itemStyle: {
                normal: {
                  show: true,
                  barBorderRadius: 10,//使柱体圆润一点
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(156,107,211,0.8)" },
                    { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                    { offset: 1, color: "rgba(156,107,211,0.2)" }
                  ]),
                  opacity: 0.5//透明
                }
              },
              silent: true,
              barWidth: "30%",
              data: newData.weekMaxData,
              animation: false
            }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>
