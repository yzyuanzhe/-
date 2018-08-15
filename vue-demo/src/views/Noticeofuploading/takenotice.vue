<template>
 <div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>上传中标通知书</el-breadcrumb-item>
              <el-breadcrumb-item>上传详情</el-breadcrumb-item>

            </el-breadcrumb>
            </div>
   

          <el-card style="margin-top:40px;">
              <el-row>
                <el-col class="h4border">
                    <h4>审编信息</h4>
                </el-col>
            </el-row>

              <!-- 数据 -->
      <!-- 表单开始 -->
       <div class="makepadding">
       <el-form ref="form" :model="form" label-width="20%" >
           <el-row>
                <el-form-item label="采购任务名称:" style="
    margin-left: -183px;
">
                    <el-input v-model="form.company"></el-input>
                </el-form-item>
         </el-row>
           <el-row>
               <el-col :span="12">
                <el-form-item label="中标单位:">
                    <el-input v-model="form.name" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="中标金额:">
                    <el-input v-model="form.name" class="w40"></el-input>
                </el-form-item>
                </el-col>
        
         </el-row>

           <el-row>
               <el-col :span="12">
                <el-form-item label="项目联系人:">
                    <el-input v-model="form.name" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="联系人电话:">
                    <el-input v-model="form.name" class="w40"></el-input>
                </el-form-item>
                </el-col>
        
         </el-row>

           <el-row>
               <el-col :span="12">
                <el-form-item label="采购二级菜单:">
                    <el-input v-model="form.name" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="流程进度:">
                    <el-input v-model="form.name" class="w40"></el-input>
                </el-form-item>
                </el-col>
        
         </el-row>

          <el-row>
                <el-form-item label="定标意见:" style="
    margin-left: -180px;
">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
          </el-row>


         <!-- 上传 -->
         <el-row>
             <div class="onload1">  
             <el-col :span="12" style="
    padding-left: 60px;
">
                 <div style="float: left;margin-left: 14px;margin-right: 11px;">意见附件:</div>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary"><i class="el-icon-upload2"></i>上传</el-button>
              </el-upload>
             </el-col>
             <el-col :span="12">
                 <div style="float: left;margin-left: 14px;margin-right: 11px;padding-left: 60px;">评估报告:</div>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary"><i class="el-icon-upload2"></i>上传</el-button>
              </el-upload>
             </el-col>
            
             </div>    
         </el-row>

</el-form>
    </div>  


          </el-card>

      
      
       <!-- 评审专家信息 -->
        <el-card style="margin-top:20px;">
                <!-- 标题 -->
                <el-row>
                    <el-col class="h4border">
                        <h4>评审专家信息</h4>
                    </el-col>
                </el-row>

                <!-- 按钮 -->
                <el-row style="margin-top:20px;">
                        <el-button type="primary">添加专家</el-button>
                        <el-button type="danger">删除</el-button>
                        
                </el-row>

                <!-- 表格 -->
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
                label="姓名"
            >
            </el-table-column>
            <el-table-column
                prop="name"
                label="工作单位">
            </el-table-column>
                <el-table-column
                prop="address"
                label="研究方向">
            </el-table-column>
            </el-table>
            
        </el-card>



       <!-- 投标供应商信息 -->
        <el-card style="margin-top:20px;">
                <!-- 标题 -->
                <el-row>
                    <el-col class="h4border">
                        <h4>投标供应商信息</h4>
                    </el-col>
                </el-row>

                <!-- 按钮 -->
                <el-row style="margin-top:20px;">
                        <el-button type="primary">添加供应商</el-button>
                        <el-button type="danger">删除</el-button>
                        
                </el-row>

                <!-- 表格 -->
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
                label="报价">
            </el-table-column>
                <el-table-column
                prop="address"
                label="得分">
            </el-table-column>
                <el-table-column
                prop="address"
                label="排名">
            </el-table-column>
            </el-table>
            
        </el-card>


         <el-row style="margin-left:40%;margin-top:10px;" class="takebtn">
                   <el-button type="primary">提交</el-button>
                   <el-button type="danger">返回</el-button>
         </el-row>
           



   
       </div>
</template>
<script>
    export default {
     data (){ 
           return{
         form: {
          company: '',
          time: '',
          name: '',
         money:'',
          delivery: false,
          type: [],
          resource: '',
          use:'',
          desc: ''
        },
       

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
