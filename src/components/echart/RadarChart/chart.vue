<template>
  <div>
    <!--把对应参数传到@/common/echart/index中-->
    <Echart
      :options="options"
      id="redarchart"
      height="320px"
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
        console.log(newData)
        //设置options，然后传到@/common/echart/index中
        this.options = {
          title: {
            text: newData.title
          },

          //图例
          legend: {
            top: '15%',//距离顶部15%
            data: newData.x//数据，即歌手名列表
          },

          series: [
            {
              name: 'Funnel',
              type: 'funnel',//类型——漏斗图
              left: '10%',
              top: '40%',
              bottom: 0,//图放下边
              width: '90%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',//下降，即倒金字塔
              gap: 2,//数据图形间距
              //在图中显示标签
              label: {
                show: true,
                position: 'inside'//标签位置：里面
              },
              //每一个标签中间加一条线
              //添加引导线效果
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              },
              //每一项的风格
              itemStyle: {
                borderColor: '#fff',//边框白色
                borderWidth: 1//边框厚度
              },
              //高亮的图形样式和标签样式
              emphasis: {
                //即鼠标放在某一项上，则他的标签变大
                label: {
                  fontSize: 20
                }
              },
              data: newData.y//数据，歌手+手动写的数值
            }
          ]
        }
      },

      //第一次就可以被监听到
      immediate: true,
      //深度监听
      deep: true
    }
  },

  mounted() {
  },
  
  methods:{
  }
};
</script>
