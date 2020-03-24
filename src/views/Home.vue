<template>
  <div id="Home">
    <Head />
    <div class="hello">
      <div ref="mapbox" style="width:730px;height:600px;margin:0 auto"></div>
      <!-- 初始化echarts需要有个宽高的盒子 -->
    </div>
    <CTable :countryList="countryList" />
    
  </div>
</template>

<script>
import { getCountry } from "../network/getData";

import CTable from "./Table/CTable";
import Head from "./Head/Head";
import echarts from "echarts";
import "echarts/map/js/china.js";
import jsonp from "jsonp";
const option = {
  title: {
    // 标题内容
    text: "全国疫情图",
    link: "https://baidu.com",
    subtext: "123456",
    sublink: "https://baidu.com"
  },
  series: [
    {
      name: "确诊人数",
      type: "map",
      // 告诉echarts渲染一个地图
      map: "china",
      // 告诉echarts渲染中国地图
      label: {
        // 设置地区汉字
        show: true,
        color: "#333",
        fontSize: 10
      },
      itemStyle: {
        // 地图区域样式
        areaColor: "#eee"
      },
      roam: true,
      // 鼠标滚轮效果
      zoom: 1.2,
      // 地图放大缩小
      emphasis: {
        // 鼠标经过地图和字体样式
        label: {
          color: "#fff",
          fontSize: 12
        },
        itemStyle: {
          areaColor: "#ccc"
        }
      },
      data: []
      // 展示后台给的数据，必须格式（name:xxx;value:xxx）
    }
  ],
  visualMap: [
    {
      // 区域显示颜色
      type: "piecewise",
      show: true,
      // splitNumber: 4
      pieces: [
        { min: 10000 },
        { min: 1000, max: 9999 },
        { min: 100, max: 999 },
        { min: 10, max: 99 },
        { min: 1, max: 9 },
        { max: 0 }
      ],
      inRange: {
        // 区域图标样式
        symbol: "rect",
        color: [
          "#FFFFFF",
          "#FFAA85",
          "#FF7B69",
          "#CC2929",
          "#8C0D0D",
          "#660208"
        ]
      }
    }
  ],
  tooltip: {
    // 鼠标放上去显示内容
    trigger: "item"
  },
  toolbox: {
    // 下载
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      dataView: { readyOnly: false },
      restore: {},
      saveAsImage: {}
    }
  }
};

export default {
  name: "Home",
  mounted() {
    this.getData();
    this.mycharts = echarts.init(this.$refs.mapbox);
    // 初始化echarts
    this.mycharts.setOption(option);
  },
  data() {
    return {
      countryList: [],
      worldlist:[]
    };
  },
  components: {
    CTable,
    Head
  },
  created() {
    this.getCountry();
  },
  methods: {
    async getCountry() {
      const data = await getCountry();
      // console.log(data.data);
      this.countryList = data.data;
    },
    getData () {
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.jsonp?_=1580892522427', {}, (err, data) => {
        if (!err) {
          console.log(data)
          this.worldlist=data.data.worldlist
          let list = data.data.list.map(item => ({name: item.name, value: item.value}))
          option.series[0].data = list
          this.mycharts.setOption(option)
          // echarts初始化的前提是dom渲染完成
        }
      })
    }
  }
};
</script>

<style scoped>
#Home {
  max-width: 725px;
  margin: 0 auto;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>