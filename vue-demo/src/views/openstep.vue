<template>
 <div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>采购计划申请</el-breadcrumb-item>
              <el-breadcrumb-item>货物（服务）新增</el-breadcrumb-item>

            </el-breadcrumb>
            </div>
   
     
            <el-card class="box6">
             <el-row>
               
                 <el-col :span="3">
                      <div class="leftimg">
                        <img src="../assets/QQ图片20180809181353.png" alt="">
                      </div>
                 </el-col>
                 <div style="margin-top:16px;">
                   <el-col :span="2"><div class="one box">经办人拟制合同</div></el-col>
                   <el-col :span="1" fl>
                       <div class="arrow">
                        <img src="../assets/left.png" alt="">
                        <img src="../assets/right.png" alt="">
                       </div>
                       </el-col>
                   <el-col :span="2"><div class="two box">经费负责人审批</div></el-col>
                   <el-col :span="1">
                        <div class="arrow">
                        <img src="../assets/left.png" alt="">
                        <img src="../assets/right.png" alt="">
                       </div>
                   </el-col>
                   <el-col :span="2"><div class="three box">招标中心初审</div></el-col>
                   <el-col :span="1">
                        <div class="arrow">
                        <img src="../assets/left.png" alt="">
                        <img src="../assets/right.png" alt="">
                       </div>
                   </el-col>
                   <el-col :span="2"><div class="four box">法务审核</div></el-col>
                   <el-col :span="1">
                        <div class="arrow">
                        <img src="../assets/left.png" alt="">
                        <img src="../assets/right.png" alt="">
                       </div>
                   </el-col>
                   <el-col :span="2"><div class="five box">招标中心复审</div></el-col>
                   <el-col :span="1">
                        <div class="arrow">
                        <img src="../assets/left.png" alt="">
                        <img src="../assets/right.png" alt="">
                       </div>
                   </el-col>
                   <el-col :span="2"><div class="six box">生成合同</div></el-col>    
                    </div>
             </el-row>                   
            </el-card>
          
          <!-- 按钮-审批历程 -->
          <el-row>
               <el-button @click="opencheck">内容</el-button>
            <el-button type="primary" style="margin-left:none;" @click="openstep">审批历程</el-button>
          </el-row>
          <el-card>
              <div style="height: 500px;">
                <el-steps direction="vertical" :active="1">
                    <el-step title="经办人于2018-7-26 11：:3:45创建采购"  description="送至经理负责人"></el-step>
                    <el-step title="经办人于2018-7-26 11：:3:45创建采购"  description="送至经理负责人"></el-step>
                    <el-step title="经办人于2018-7-26 11：:3:45创建采购"  description="送至经理负责人"></el-step>
                    <el-step title="经办人于2018-7-26 11：:3:45创建采购"  description="已审批"></el-step>
                    <el-step title="审核通过"></el-step>
                    
                </el-steps>
                </div>
          </el-card>
</div>
</template>
<script>
    export default {
     data (){ 
           return{

         }
     },
     methods: {
      openstep() {
        this.$router.push({ path: '/openstep'})
      },
      opencheck() {
        this.$router.push({ path: '/check'})
      }

    }
    }
</script>
<style>
.fl{
    float: left;
}
.main {
  background-color: #e9eef3;
  height:100%;
    position: relative;
}
.leftimg img{
    width: 150px;
   
    }
.box6{
    margin-top: 50px;
    width: 100%;
    margin-bottom: 20px;
}
.box{
    text-align: center;
        margin-left: 60px;
    line-height: 90px;
    float: left;
    width: 124px;
    height: 90px;
    border-radius: 17px;
    background-color: #8ABF50;
   
}
.three{
    background: #F6A623;
}
.arrow {
   padding: 20px;
    width: 20px;
    height: 100px;
      padding-top: 18px;
    padding-left: 80px;
}
.arrow img{
   width: 20px;
   margin-bottom: 10px;
   height: 20px;
}
.leftimg img{
    width: 140px;
    height: auto;
}
.h4border{
    padding: 18px;
    border-bottom: 2px dashed #ccc;
}
.h4border h4{
    margin: 0;
    padding: 0;
    padding-left: 14px;
    border-left: 4px solid #1E88E5;
}
.textcenter {
    text-align: center;
    margin-bottom: 20px;
    color: red;
}
.textcenter h4{
    margin: 10px;
}
.takem .el-row{
    margin-top: 20px;
    padding-left: 50px;
   
}
.takem .w4{
     width: 40%;
}
.takem .el-radio+.el-radio {
    margin-left: 0;
}
.takem .el-radio__label {
    padding-left: 0px;
}
.h4border{
    padding: 18px;
    border-bottom: 2px dashed #ccc;
}
.h4border h4{
    margin: 0;
    padding: 0;
    padding-left: 14px;
    border-left: 4px solid #1E88E5;
}
.takebtn .el-button+.el-button{
    margin-left: 0px;
}
.onload1 .el-upload-list {
    float: left;
    margin-top: -16px;
}
.onload1 .el-upload {
    float: left;
}
.onload1 .el-col-12 {
    margin-bottom: 10px;
}
.onload1 .el-form-item__content{
    margin-left: 0;
}
.onload1 .el-form-item__label{
    width: 20%;
}

.w40{
    width: 60%;
}
.makepadding {
    padding-left: 70px;
    padding-right: 70px;
    margin-top: 20px;
}
.bottom .el-radio__label  {
    padding-left: 0;
}



</style>
