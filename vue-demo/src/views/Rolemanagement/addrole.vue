<template>
<div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>系统管理</el-breadcrumb-item>
              <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            </el-breadcrumb>
            </div>

          
          <el-card shadow="never" class="Purchase" style="height:100%;">
               <el-form ref="form" :model="form" label-width="80px" style="
    padding: 0% 21%;
">
       <el-row>
      
            <el-form-item label="角色名称" style="
    width: 53%;
">
                <el-input v-model="form.name" style="width: 217px;"></el-input>
            </el-form-item>
      </el-row>
         <el-row>
         <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
         </el-row>
         <el-row>
           <el-form-item label="权限菜单">
            <el-select v-model="form.region">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
         </el-row>
          
         <el-row>
         <el-col>
            <el-form-item>
                <el-button type="primary">保存</el-button>
                <el-button type="danger" @click="takerole">返回</el-button>
            </el-form-item>
            </el-col>
          </el-row>
            </el-form>
                        
          </el-card>
</div>
</template>
<script>
     export default {
    data(){
      return {
          form:{
              name:'',
              desc:'',
              region:'',
          }
    }
    },
    methods: {
      takerole() {
        this.$router.push({ path: '/role'})
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

.aside {
  background-color: #d3dce6;
   height: 100%;

}
.aside .menu {
  height: 100%;
}

.main {
  background-color: #e9eef3;
  height: 100%;
    position: relative;
}


</style>
