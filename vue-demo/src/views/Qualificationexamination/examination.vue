<template>
      <div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>采资质审查</el-breadcrumb-item>
            </el-breadcrumb>
            </div>

          
 <el-card shadow="never" class="Purchase " style="height:100%;">
     <div class="makelable">
                      <el-form ref="form" :model="form" label-width="88px">
                <el-row>
                    <el-col :span="8">
                      <el-form-item label="供应商名称:" >
                          <el-select v-model="form.take1">
                          <el-option label="类型一" value="shanghai"></el-option>
                          <el-option label="类型二" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                  </el-col>
                    <el-col :span="8">
                      <el-form-item label="企业性质:">
                          <el-select v-model="form.take2">
                          <el-option label="类型一" value="shanghai"></el-option>
                          <el-option label="类型二" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                  </el-col>
                    <el-col :span="8">
                      <el-form-item label="状态:">
                          <el-select v-model="form.take3">
                          <el-option label="类型一" value="shanghai"></el-option>
                          <el-option label="类型二" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                  </el-col>
          </el-row>
            <el-row>
                <el-col :span="8">
                        <el-form-item label="企业性质:">
                          <el-select v-model="form.take4">
                          <el-option label="类型一" value="shanghai"></el-option>
                          <el-option label="类型二" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                </el-col>
              <el-col :span="8">
                  <el-form-item label="关键字查询:">
                      <el-input v-model="form.name" style="width: 49%;"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="4">
                  <el-form-item>
                      <el-button type="primary">查询</el-button>
                      <el-button type="success">重置</el-button>
                  </el-form-item>
                  </el-col>
                  </el-row>
                  </el-form>
                  </div>
     </el-card>
        


      <el-card class="fromlist">
        <el-row>
          <el-col :span="24">
        <div class="button3">
            <el-button type="success" @click="takeexamination">审批</el-button>
            <el-button type="primary">黑名单</el-button>
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
            label="供应商名称"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="成立日期">
          </el-table-column>
              <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
              <el-table-column
            prop="address"
            label="联系人">
          </el-table-column>
              <el-table-column
            prop="address"
            label="联系电话">
          </el-table-column>
              <el-table-column
            prop="address"
            label="企业性质">
          </el-table-column>
              <el-table-column
            prop="address"
            label="备注">
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
          },
          {
            num: 2,
            take: '查看',
            name: '服务器设备采购'
          },
          {
            num: 3,
            take: '查看',
            name: '服务器设备采购'
          },
          {
            num: 4,
            take: '查看',
            name: '服务器设备采购'
          },
          {
            num: 5,
            take: '查看',
            name: '服务器设备采购'
          },
          {
            num: 6,
            take: '查看',
            name: '服务器设备采购'
          }
        
          ],
           form: {
          take1: '',
          take2: '',
          delivery: false,
          take3: '',
          take4: '',
          name:''
        }
    }
    },
    methods: {
      takeexamination() {
        this.$router.push({path: '/takeexamination'})
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
.makelable label {
    width: 83px;
}
</style>
