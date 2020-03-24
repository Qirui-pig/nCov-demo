<template>
  <div class="Head">
    <div class="item">
      <p class="p1">全球现存确诊</p>
      <p class="p1">{{all.cases}}</p>
    </div>
    <div class="item">
      <p class="p3">治愈</p>
      <p class="p3">{{all.recovered}}</p>
    </div>
    <div class="item">
      <p class="p2">死亡</p>
      <p class="p2">{{all.deaths}}</p>
    </div>
  </div>
</template>

<script>
import { getAll } from "../../network/getData";

export default {
  name: "Head",
  data() {
    return {
      all: {}
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    async getAll() {
      const ret = await getAll();
      this.all = ret.data;
    }
  }
};
</script>

<style scoped>
.Head {
  display: flex;
  justify-content: center;
  border: 2px hotpink solid;
  background-image: url("../../assets/1.png");
  background-position: center;
  background-size: auto;
}
.item {
  flex: 1;
}
.item .p1 {
  text-align: center;
  font-weight: 1000;
  color: red;
  font-size: 24px;
}
.item .p2 {
  text-align: center;
  font-weight: 1000;
  font-size: 24px;
  color: green;
}
.item .p3 {
  text-align: center;
  font-weight: 1000;
  font-size: 24px;
  /* color: green; */
}
</style>