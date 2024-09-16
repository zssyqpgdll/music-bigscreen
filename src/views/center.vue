<template>
  <div id="center">
    <!--第三个图分成三部分，三部分又分为上下结构，其中第三个图的上部是一个小图，第三个图的下部是两个小图，两个小图分为左右结构-->
    <!--上部-->
    <div class="up">
      <!--v-for循环-->
      <!--“:” 是指令 “v-bind”的缩写-->
      <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
        <p class="ml-3 colorBlue fw-b fs-xl">{{ item.title }}</p>
        <div>
          <dv-digital-flop class="dv-dig-flop ml-1 mt-2 pl-3" :config="item.number"/>
        </div>
      </div>
    </div>

    <!--下部-->
    <div class="down">
      <!--下部左边-->
      <div class="ranking bg-color-black">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <span class="fs-xl text mx-2 mb-1 pl-3">歌手歌曲数量Top20</span>
        <dv-scroll-ranking-board class="dv-scr-rank-board mt-1" :config="ranking"/>
      </div>

      <!--下部右边-->
      <div class="percent">
        <div class="item bg-color-black">
          <span>播放比率</span>
          <!--把对应参数传到components\echart\center\centerChartRate\index.vue中-->
          <CenterChart :id="rate[0].id" :tips="rate[0].tips" :colorObj="rate[0].colorData" />
        </div>

        <div class="item bg-color-black">
          <span>收藏比率</span>
          <!--把对应参数传到components\echart\center\centerChartRate\index.vue中-->
          <CenterChart :id="rate[1].id" :tips="rate[1].tips" :colorObj="rate[1].colorData" />
        </div>
        
        <div class="water">
          <span>系统负载率</span>
          <!--水滴波浪组件-->
          <dv-water-level-pond class="dv-wa-le-po" :config="water"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterChart from '@/components/echart/center/centerChartRate'
import {dash1, getcup} from "../api/spark";

export default {
  data() {
    return {
      sparkData: {},
      titleItem: [
        {
          title: '歌手总数',
          number: {
            number: [0],
            toFixed: 1,
            textAlign: 'left',//居左
            content: '{nt}',
            style: {
              fontSize: 26//字体大小
            }
          }
        },
        {
          title: '歌曲总数',
          number: {
            number: [18],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '用户数量',
          number: {
            number: [2],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '下载数量',
          number: {
            number: [14],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '收藏数量',
          number: {
            number: [106],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '播放数量',
          number: {
            number: [100],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        }
      ],

      ranking: {
        //设初始值
        data: [
          {name:'周杰伦',value:130},{name:'林俊杰',value:110},{name:'邓紫棋',value:90},{name:'张杰',value:70},{name:'毛不易',value:50}
        ],
        carousel: 'single',
        unit: '首'//单位
      },

      water: {
        //设初始值
        data: [24, 33],
        shape: 'roundRect',//圆形矩阵
        formatter: '{value}%',
        waveNum: 3//波浪数量
      },

      // 播放率和登陆率的组件复用数据
      rate: [
        //播放率
        {
          id: 'centerRate1',
          tips: 60,//初始值
          colorData: {
            textStyle: '#3fc0fb',
            series: {
              color: ['#00bcd44a', 'transparent'],
              dataColor: {
                normal: '#03a9f4',
                shadowColor: '#97e2f5'
              }
            }
          }
        },
        //收藏比率
        {
          id: 'centerRate2',
          tips: 40,//初始值
          colorData: {
            textStyle: '#67e0e3',
            series: {
              color: ['#faf3a378', 'transparent'],
              dataColor: {
                normal: '#ff9800',
                shadowColor: '#fcebad'
              }
            }
          }
        }
      ]
    }
  },

  mounted() {
    //将回调延迟到下次DOM更新循环之后执行
    this.$nextTick(() => {
      dash1().then(res => {
        this.sparkData = res.data.data
        this.titleItem = []
        let item = this.getTitleItem('歌手数量',this.sparkData.singers)
        this.titleItem.push(item)
        item = this.getTitleItem('歌曲数量',this.sparkData.songs)
        this.titleItem.push(item)
        item = this.getTitleItem('用户数量',this.sparkData.user)
        this.titleItem.push(item)
        item = this.getTitleItem('下载数量',this.sparkData.downloads)
        this.titleItem.push(item)
        item = this.getTitleItem('收藏数量',this.sparkData.favs)
        this.titleItem.push(item)
        item = this.getTitleItem('播放数量',this.sparkData.plays)
        this.titleItem.push(item)

        //播放比率
        const play_rate = this.sparkData.plays / (this.sparkData.logins + this.sparkData.favs + this.sparkData.downloads
         + this.sparkData.plays + this.sparkData.idconfirm)
        //收藏比率
        const favs_rate = this.sparkData.favs / (this.sparkData.favs + this.sparkData.plays)
        this.rate[0].tips = parseInt(play_rate*100)
        this.rate[1].tips = parseInt(favs_rate*100)

        //歌手发布歌曲数量
        this.ranking.data = this.sparkData.singer_songs
        // console.log("歌手歌曲数量:" + this.sparkData.singer_songs)
        this.ranking = {...this.ranking}  //ES6拓展预算符(注意是浅拷贝)

        //系统负载率
        this.water.data = [parseInt(this.sparkData.CpuRatio*100)]
        this.water = {...this.water}
        // console.log("系统负载率：" + this.water.data)
      })
    }),

    this.drawTimingFn();

  },

  beforeDestroy () {
    //销毁定时器
    clearInterval(this.drawTiming);
  },

  methods: {
    //设置定时器，每6秒执行一次setData()方法
    drawTimingFn () {
      this.drawTiming = setInterval(() => {
        this.getwater();
      }, 10000);
    },

    getwater(){
      getcup().then(res => {
        const cup = res.data.data
        this.water.data = [parseInt(cup.CpuRatio*100)]
        this.water = {...this.water}
        console.log(parseInt(cup.CpuRatio*100))
      })
    },

    getTitleItem(title, value) {
      let item = {}
      let number = {}
      number.number = [value]
      number.toFixed = 0
      number.textAlign = 'left'
      number.content = '{nt}'
      number.style = {
        fontSize: 26
      }
      item.title = title
      item.number = number
      return item
    }
  },
  
  components: {
    CenterChart
  }
}
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;

  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .item {
      border-radius: 6px;
      padding-top: 8px;
      margin-top: 8px;
      width: 32%;
      height: 70px;

      .dv-dig-flop {
        width: 150px;
        height: 30px;
      }
    }
  }

  .down {
    padding: 6px 4px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 255px;
    justify-content: space-between;

    .bg-color-black {
      border-radius: 5px;
    }

    .ranking {
      padding: 10px;
      width: 59%;

      .dv-scr-rank-board {
        height: 225px;
      }
    }

    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 120px;

        span {
          margin-top: 8px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        }
      }

      .water {
        width: 100%;

        .dv-wa-le-po {
          height: 120px;
        }
      }
    }
  }
}
</style>
