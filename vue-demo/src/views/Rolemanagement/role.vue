<template>
<div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>系统管理</el-breadcrumb-item>
              <el-breadcrumb-item>角色管理</el-breadcrumb-item>
            </el-breadcrumb>
            </div>

          
          <el-card shadow="never" class="Purchase" style="height:100%;">
               <el-form ref="form" :model="form" label-width="80px">
       <el-row>
         <el-col :span="16">
            <el-form-item label="用户名称">
                <el-input v-model="form.name" style="width: 49%;"></el-input>
            </el-form-item>
         </el-col>
         <el-col :span="8">
            <el-form-item>
                <el-button type="primary"  >查询</el-button>
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
            <el-button type="primary" @click="addrole">新增角色</el-button>
            <el-button type="danger">删除</el-button>
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
         </el-table-column>
          <el-table-column
            prop="name"
            label="角色名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="描述">
          </el-table-column>

              <el-table-column
            prop="address"
            label="用户名">
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
            :current-page="pagenum"
            :page-sizes="[2, 4, 6, 8]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
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
                take: '张三',
                name: '管理员'
            },
            {
                num: 2,
                take: '李四',
                name: '管理员'
            },
            {
                num: 3,
                take: '张三',
                name: '管理员'
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
    // created (){
    //    this.loadDate ()
    // },
    methods: {
      addrole() {
        this.$router.push({ path: '/addrole'})
      },
    async loadData(){
      const res = await this.$http.get('sysRole/getAll');
      console.log(res);
      // const { data} = res;
      // if (status === 200) {
      //   this.list = data;
      // } else {
      //   this.$message.error(msg);
      // }
      }

    }
  }
</script>
<style>

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
