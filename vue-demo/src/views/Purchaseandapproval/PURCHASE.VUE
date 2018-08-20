<template>
      <div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>采购计划审批</el-breadcrumb-item>
            </el-breadcrumb>
            </div>

          
 <el-card shadow="never" class="Purchase" style="height:100%;">
                      <el-form ref="form" :model="form" label-width="80px">
                <el-row>
                    <el-col :span="8">
                      <el-form-item label="采购类型">
                          <el-select v-model="form.purchaseType">
                          <el-option label="货物" value="shanghai"></el-option>
                          <el-option label="服务" value="beijing"></el-option>
                          <el-option label="工程" value="beijing"></el-option>
                          
                          </el-select>
                      </el-form-item>
                  </el-col>
                    <el-col :span="8">
                      <el-form-item label="经费类型">
                          <el-select v-model="form.fundKind">
                          <el-option label="教学-货物与服务" value="shanghai"></el-option>
                          <el-option label="科研-货物与服务" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                  </el-col>
                    <el-col :span="8">
                      <el-form-item label="采购方式">
                          <el-select v-model="form.purchaseKind">
                          <el-option label="公开招标" value="shanghai"></el-option>
                          <el-option label="单一性来源" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                  </el-col>
          </el-row>
            <el-row>
                <el-col :span="8">
                        <el-form-item label="状态">
                          <el-select v-model="form.status">
                          <el-option label="待审核" value="shanghai"></el-option>
                          <el-option label="已审核" value="beijing"></el-option>
                          <el-option label="已驳回" value="beijing"></el-option>
                          
                          </el-select>
                      </el-form-item>
                </el-col>
              <el-col :span="8">
                  <el-form-item label="采购名称">
                      <el-input v-model="form.purchaseName" style="width: 49%;"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="4">
                  <el-form-item>
                      <el-button type="primary" @click="takequery">查询</el-button>
                      <el-button type="success">重置</el-button>
                  </el-form-item>
                  </el-col>
                  </el-row>
                  </el-form>
     </el-card>
        


      <el-card class="fromlist">
            <el-row>
              <el-col :span="24">
            <div class="button3">
                <el-button type="primary">导出列表数据</el-button>
                <!-- <el-button type="primary" @click="loadData">测试按钮</el-button> -->
                
            </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">

            <el-table
              :data="tableData1"
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
                <a href="#" @click="takepurchase(scope.row.id)" style="color: rgb(30, 136, 229);">查看并审批</a>
              </template>
              </el-table-column>
              <el-table-column
                prop="purchaseName"
                label="采购名称">
              </el-table-column>
                  <el-table-column
                prop="purchaseBudget"
                label="采购预算（元）">
              </el-table-column>
                  <el-table-column
                prop="purchaseType"
                label="采购类型">
              </el-table-column>
                  <el-table-column
                prop="fundType"
                label="经费类型">
              </el-table-column>
                  <el-table-column
                prop="purchaseKind"
                label="采购方式">
              </el-table-column>
                  <el-table-column
                prop="status"
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
          tableData1: [],
           form: {
          purchaseType: '',
          fundKind: '',
          delivery: false,
          purchaseKind: '',
          status: '',
          purchaseName :''
        },

            // 页码
     pagenum: 1,
      // 每页条数
      pagesize: 4,
      // 总共的数据条数，从服务器获取
      total: 0

    }
    },
    created(){
      this.loadData();
    },
    methods: {
      takepurchase(id) {
        this.$router.push({path: `/takepurchase/${id}`})
      },
       async loadData(){
     const res =await this.$http.get('purchasePlan/getPageForAudit', {
            params: {
            page:1,
            rows:10,
           
            }
            })
            console.log(res);
        this.tableData1 = res.data.list;
        // this.tableData1.purchaseName=res.data.list.purchaseName;
        // this.tableData.id=res.data.list.id;
      
    },
        async takequery(){
          let form = this.form;
          let purchaseType =this.form.purchaseType;
          let fundKind =this.form.fundKind;
          let  purchaseKind =this.form.purchaseKind;
          let status =this.form.status;
          let  purchaseName =this.form.purchaseName;
     
     const res =await this.$http.get('purchasePlan/getPageForAudit', {
            params: {
            page:1,
            rows:10, 
            purchaseType,
            fundKind,
            purchaseKind,
            status,
            purchaseName
            }
            })
            // console.log(res);
           this.tableData1 = res.data.list;
      //     let message = res.data.message;
      //  if (message == "success") {
      //   // 修改成功
      //   // 提示成功
      //   this.$message.success('查询成功');
      //   // 关闭对话框
      //   this.dialogFormVisible2 = false;
      //   // 重新加载列表
      //   // this.loadData();
      //   // // 清空文本框
      //   // for (let key in this.formData) {
      //   //   this.formData[key] = '';
      //   // }
      // } else {
      //   this.$message.error('查询失败');
      // }
  },
    
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
