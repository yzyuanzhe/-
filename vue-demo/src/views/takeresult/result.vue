<template>
      <div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>招标结果定夺</el-breadcrumb-item>
            </el-breadcrumb>
            </div>

          
          <el-card shadow="never" class="Purchase">
            <el-row>
              <el-col :span="8"> 
                采购类型：
                <el-select v-model="value4" clearable placeholder="科研经费">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
                <el-col :span="8"> 
                经费：
                <el-select v-model="value4" clearable placeholder="招标采购">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>

                <el-col :span="8"> 
                状态：
                <el-select v-model="value4" clearable placeholder="暂存">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
          <el-row style="margin-top:10px;">
            <el-col :span="18">
               采购名称：<el-input style="width:27%;"></el-input>
            </el-col>
            <el-col :span="4" class="fr">
            <el-button type="primary">查询</el-button>
            <el-button type="success">重置</el-button>
            </el-col>
          </el-row>
          </el-card>
        


      <el-card class="fromlist">
        <el-row>
          <el-col :span="24">
        <div class="button3">
            <el-button type="primary">导出列表数据</el-button>
        </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">

        <el-table
          :data="tableData"
          :align="center"
          border
          class="fromlist1">
            <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="num"
            label="序号"
        >
          </el-table-column>
          <el-table-column
            prop="take"
            label="操作"
          >
             <template slot-scope="scope">
            <a href="#" @click="takepurchase" style="color: rgb(30, 136, 229);">查看</a>
          </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="采购名称">
          </el-table-column>
              <el-table-column
            prop="address"
            label="中标单位">
          </el-table-column>
              <el-table-column
            prop="address"
            label="中标金额（元）">
          </el-table-column>
              <el-table-column
            prop="address"
            label="项目联系人">
          </el-table-column>
              <el-table-column
            prop="address"
            label="联系方式">
          </el-table-column>
              <el-table-column
            prop="address"
            label="状态">
          </el-table-column>
        </el-table>
        </el-col>
      </el-row>


      <el-row>
        <el-col :span="24">
      <div class="block">
          <el-pagination
             @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
            :align="right">
          </el-pagination>
        </div>
        </el-col>
      </el-row>
      </el-card>

   </div>
</template>
<script>
     export default {
    data(){
      return {
          tableData: [{
            num: 1,
            take: '查看',
            name: '服务器设备采购'
          }
         
        
          ]
    }
    }
  }
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
.container {
  height: 100%;
}
.aside .menu {
  height: 100%;
}
.header {
  background-color: #1E88E5;
  padding: 0;
  color: #fff;
}
.titleimg img{
 height: 30px;
}

.header .users {
  color: #fff;
  font-size: 18px;
  line-height: 60px;
  text-decoration: none;
 

}
.aside {
  background-color: #d3dce6;
   height: 100%;

}
.aside .menu {
  height: 100%;
}
.tleftimg img{
  height: 100%;
  margin-top: 8px;
  margin-left: 8px;
}
.fl {
  float: left;
}
.fr{
  float: right;
}
.toptitle {
  width: 90px;
  margin-top: 4px;
  height: 100%;
  text-align: center;
}
.toptitle img {
  width: 24px;
  height: 24px;
}
.toptitle h3{
  font-size: 18px;
  font-weight: 400px;
  margin: 0;
}
.rightimg img{
  width: 24px;
  height: 24px;
 margin-top: 20px;
}
.main {
  background-color: #e9eef3;
  height: 100%;
    position: relative;
}
.box-card1{
  background-color: #fff;
  height: 50px;
  font-size: 16px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  height: 50px;
  padding: 0;
 
}
.el-breadcrumb__item {
    line-height: 50px;
    padding-left: 20px;
}
.Purchase{
  width: 100%;
  height: 120px;
  margin-top: 50px;
}
.fromlist{
  height: 100%;
  margin-top: 20px;
}
.button3{
  height: 50px;
  border-bottom: 2px dashed #ccc;
}
.fromlist1 {
 width: 100%;
 margin-top:10px;
}

</style>
