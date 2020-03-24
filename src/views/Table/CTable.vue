<template>
<div>
  <el-table :data="countryList" row-class-name 
  highlight-current-row
  border stripe style="width:725px">
    <el-table-column prop="country" label="国家" width="140"></el-table-column>
    <el-table-column label="国旗" width="70">
      <template slot-scope="scope">
        <img :src="scope.row.countryInfo.flag" alt="" style="width:48px;height:32px">
      </template>
    </el-table-column>
    <el-table-column prop="cases" label="累计确诊" width="90"></el-table-column>
    <el-table-column prop="todayCases" label="新增" width="70"></el-table-column>
    <el-table-column prop="deaths" label="死亡" width="80"></el-table-column>
    <el-table-column prop="recovered" label="治愈" width="90"></el-table-column>
    <el-table-column prop="active" label="现存" width="90"></el-table-column>
    <el-table-column prop="critical" label="重症" width="90"></el-table-column>
    
  </el-table>
</div>   
</template>

<script>
export default {
  naem:'CTable',
  props:{
    countryList:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>

<style scoped>

</style>