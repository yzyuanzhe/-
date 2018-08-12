<template>

  <el-container class="container">
    <!-- 标题栏 -->
  <el-header class="header">

   <el-row>
        <el-col :span="4" class="tleftimg">
          <img src="../assets/北航logo白色.png" alt="">
        </el-col>
        <el-col :span="4" style=" text-align: center;">
         <a class="users" >合同管路系统</a>
        </el-col>
        <el-col :span="10" class="iconlist">
         <div class="toptitle  fl">
           <img src="../assets/电子招投标.png" alt="">
           <h3>招投标</h3>
         </div>
         <div class="toptitle  fl">
             <img src="../assets/合同管理.png" alt="">
           <h3>合同管理</h3>
         </div>
         <div class="toptitle  fl">
            <img src="../assets/资产管理.png" alt="">
           <h3>资产管理</h3>
         </div>
         <div class="toptitle  fl">
           <img src="../assets/系统管理.png" alt="">
           <h3>系统管理</h3>
         </div>
        </el-col>
   <el-col :span="1" class=" rightimg fr">
         <img src="../assets/个人.png" alt="">
        </el-col>
         <el-col :span="1" class="rightimg fr">
        <img src="../assets/退出.png" alt="">
        </el-col>
        <el-col :span="3" class="fr">
          <a class="users" href="#">用户名：经办人</a>
        </el-col>

      
      </el-row>

  </el-header>
  <el-container>
    <el-aside class="aside" width="240px" height="100%">
      <el-menu
            :default-active="$route.path" 
            :router="true"
            :unique-opened="true"
            class="menu"
            :default-openeds="openeds"
            >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>招投标管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/homepage">采购计划申请</el-menu-item>
            <el-menu-item index="/purchase">采购计划审批</el-menu-item>
            <el-menu-item index="/proxy">代理机构抽选</el-menu-item>
            <el-menu-item index="/confirmation">确认招标任务</el-menu-item>
            <el-menu-item index="1-5">招标文件申报</el-menu-item>
            <el-menu-item index="1-6">招标文件审核</el-menu-item>
            <el-menu-item index="1-7">上传招标结果</el-menu-item>
            <el-menu-item index="/result">招标结果定标</el-menu-item>
            <el-menu-item index="1-9">定标结果审核</el-menu-item>
            <el-menu-item index="1-10">上传中标通知书</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
              <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>供应商管理</span>
          </template>
          <el-menu-item-group>
          <el-menu-item index="2-1">资质审查</el-menu-item>
          <el-menu-item index="2-2">供应商库</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      
      </el-menu>
    </el-aside>
    <!-- 内容区域 -->
     <el-main class="main">
       <router-view> </router-view>
     </el-main>
       
  </el-container>
</el-container>

</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          num: 1,
          take: "查看",
          name: "服务器设备采购"
        },
        {
          num: 2,
          take: "查看",
          name: "服务器设备采购"
        },
        {
          num: 3,
          take: "查看",
          name: "服务器设备采购"
        },
        {
          num: 4,
          take: "查看",
          name: "服务器设备采购"
        },
        {
          num: 5,
          take: "查看",
          name: "服务器设备采购"
        },
        {
          num: 6,
          take: "查看",
          name: "服务器设备采购"
        }
      ],
      openeds: ["1", "2"]
    };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.container {
  height: 100%;
}
.el-menu {
  border-right: 0px;
}
.header {
  background-color: #1e88e5;
  padding: 0;
  color: #fff;
}
.titleimg img {
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
.tleftimg img {
  height: 100%;
  margin-top: 8px;
  margin-left: 8px;
}
.fl {
  float: left;
}
.fr {
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
.toptitle h3 {
  font-size: 18px;
  font-weight: 400px;
  margin: 0;
}
.rightimg img {
  width: 24px;
  height: 24px;
  margin-top: 20px;
}
.main {
  background-color: #F7F8FA;
  height: 100%;
  position: relative;
}
.box-card1 {
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
.Purchase {
  width: 100%;
  height: 120px;
  margin-top: 50px;
}
.fromlist {
  height: 450px;
  margin-top: 20px;
}
.button3 {
  height: 50px;
  border-bottom: 2px dashed #ccc;
}
.fromlist1 {
  width: 100%;
  margin-top: 10px;
}
</style>

