<template>
  <div>
    <!-- 播放比率/登陆比率 -->
    <Echart
      :options="options"
      :id="id"
      height="100px"
      width="100px"
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

  //将其父组件所传递属性传输过来（要与父组件定义的名称保持一致）
  props: {
    id: {
      type: String,
      required: true,
      default: "chartRate"
    },

    tips: {
      type: Number,
      required: true,
      default: 50//默认数值
    },

    colorObj: {
      type: Object,
      default: function () {
        return {
          textStyle: "#3fc0fb",
          series: {
            color: ["#00bcd44a", "transparent"],
            dataColor: {
              normal: "#03a9f4",
              shadowColor: "#97e2f5"
            }
          }
        };
      }
    }
  },

  //监听，当tips值发生变化时触发
  watch: {
    // tips 是会变更的数据，所以进行监听
    tips: {
      handler (newData) {
        this.options = {
          title:{
            text: newData * 1 + "%",
            x: "center",
            y: "center",
            textStyle: {
              color: this.colorObj.textStyle,
              fontSize: 16
            }
          },
          series: [
            {
              type: "pie",//饼图中的环形图
              radius: ["75%", "80%"],
              center: ["50%", "50%"],
              hoverAnimation: false,//关闭放大的效果
              color: this.colorObj.series.color,
              label: {
                normal: {
                  show: false//不显示标签
                }
              },
              data: [
                {
                  value: newData,
                  itemStyle: {
                    normal: {
                      color: this.colorObj.series.dataColor.normal,
                      shadowBlur: 10,
                      shadowColor: this.colorObj.series.dataColor.shadowColor
                    }
                  }
                },
                {
                  value: 100 - newData
                }
              ]
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

<style lang="scss" scoped>
</style>