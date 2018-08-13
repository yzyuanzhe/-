<template>
<div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>采购计划申请</el-breadcrumb-item>
              <el-breadcrumb-item>工程新增</el-breadcrumb-item>

            </el-breadcrumb>
            </div>
    <el-card style="margin-top:50px;padding:26px;padding-top: 0;">
        <el-row>
          <el-col class="h4border">
           <h4>新增信息</h4>
          </el-col>
    </el-row>
       <!-- 表单开始 -->
       <div class="makepadding">
           <div class="cmargin">
       <el-form ref="form" :model="form" label-width="20%">
           <el-row>
               <el-col :span="12">
                <el-form-item label="申请单位:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="申请日期:">
                    <el-input v-model="form.time" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
           <el-row>
               <el-col :span="12">
                <el-form-item label="经费项目名称:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="经费代码:">
                    <el-input v-model="form.time" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
           <el-row>
               <el-col :span="12">
                <el-form-item label="使用人:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="手机号码:">
                    <el-input v-model="form.time" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
           <el-row>
               <el-col :span="12">
                <el-form-item label="经费负责人:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="手机号码:">
                    <el-input v-model="form.time" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
           
         <el-row>
             <el-col :span="24" style="
    margin-left: -135px;
">
              <el-form-item label="经费类型:" >
                    <el-radio-group v-model="form.use">
                    <el-radio label="部分预算"></el-radio>
                    <el-radio label="科研"></el-radio>
                    <el-radio label="修购"></el-radio>
                    <el-radio label="基建"></el-radio>
                    <el-radio label="958工程"></el-radio>
                    <el-radio label="211工程"></el-radio>
                    <el-radio label="其他经费"></el-radio>
                    </el-radio-group>
                 </el-form-item>
             </el-col>
       
         </el-row>
                    <el-row>
               <el-col :span="12">
                <el-form-item label="项目名称:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="项目预算:">
                    <el-input v-model="form.time" class="w40"></el-input>万元
                </el-form-item>
                </el-col>
         </el-row>

           <el-row>
             <el-col :span="24" style="
    margin-left: -135px;
">
              <el-form-item label="采购内容:" >
                    <el-radio-group v-model="form.use">
                    <el-radio label="设计"></el-radio>
                    <el-radio label="施工"></el-radio>
                    <el-radio label="监理"></el-radio>
                    <el-radio label="设备"></el-radio>
                    <el-radio label="其他"></el-radio>
                    </el-radio-group>
                 </el-form-item>
             </el-col>
            </el-row>
           <el-row>
             <el-col :span="24" style="
    margin-left: -135px;
">
              <el-form-item label="采购内容:">
                    <el-radio-group v-model="form.use">
                    <el-radio label="招标"></el-radio>
                    <el-radio label="比选"></el-radio>
                    <el-radio label="竞争性谈判"></el-radio>
                    <el-radio label="单一来源采购"></el-radio>
                    </el-radio-group>
                 </el-form-item>
             </el-col>
            </el-row>

         <!-- 上传 -->
         <el-row>
             <div class="onload1">  
             <el-col :span="8">
                 <div style="float: left;margin-left: 14px;margin-right: 11px;">需求技术指标:</div>
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
             <el-col :span="8">
                 <div style="float: left;margin-left: 14px;margin-right: 11px;">单一来源论证附件:</div>
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
             <el-col :span="8">
                 <div style="float: left;margin-left: 14px;margin-right: 11px;">其他附件:</div>
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

           <el-row>
              
               <el-form-item label="项目描述:" style="
    margin-left: -258px;margin-top:10px;
">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
           </el-row>


</el-form>
    </div> 
    </div> 

    </el-card>

<!-- 产品清单 -->
        <el-card style="margin-top:20px;">
            <!-- 标题 -->
            <el-row>
                <el-col class="h4border">
                    <h4>产品清单</h4>
                </el-col>
            </el-row>

            <!-- 按钮 -->
            <el-row style="margin-top:20px;">
                  <el-button type="primary"  @click="dialogFormVisible = true">手工输入非计划产品清单</el-button>
                  
                   <!-- 弹出框 -->
                  <el-dialog title="编辑设备清单" :visible.sync="dialogFormVisible" class="Popup">
                    <el-form :model="form">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="名称:" :label-width="formLabelWidth">
                                <el-input v-model="form.name" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                        <el-form-item label="产品属性:" :label-width="formLabelWidth">
                        <el-select v-model="form.region">
                            <el-option label="产品属性1" value="shanghai"></el-option>
                            <el-option label="产品属性2" value="beijing"></el-option>
                        </el-select>
                        </el-form-item>
                        </el-col>
                        </el-row>
                        <el-row>
                             <el-col :span="12">
                                <el-form-item label="数量:" :label-width="formLabelWidth">
                                <el-input v-model="form.name" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                             <el-col :span="12">
                                <el-form-item label="单价(元):" :label-width="formLabelWidth">
                                <el-input v-model="form.name" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                             <el-col :span="12">
                                <el-form-item label="总价(元):" :label-width="formLabelWidth" style="padding-left:0;">
                                <el-input v-model="form.name" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                             <el-col :span="12">
                               <el-form-item label="进口设备:" :label-width="formLabelWidth">
                                 <el-select v-model="form.region">
                                    <el-option label="进口设备1" value="shanghai"></el-option>
                                    <el-option label="进口设备2" value="beijing"></el-option>
                                </el-select>
                        </el-form-item>
                            </el-col>
                        </el-row>
                           <el-row>
                                技术指标:<el-input
                                    type="textarea"
                                    :autosize="{ minRows: 3, maxRows: auto}"
                                    placeholder="请输入内容"
                                    v-model="textarea2"
                                    style="margin-top: 4px;"
                                >
                                    </el-input>
                            </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer"> 
                        <el-button type="primary" @click="dialogFormVisible = false">确认</el-button>
                        <el-button type="danger"  @click="dialogFormVisible = false">返回</el-button>
                    </div>
                </el-dialog>


                    <el-button type="primary">导入产品清单</el-button>
                      <el-button type="primary">模板下载</el-button>
                       <el-button type="danger">删除</el-button>
                      合计： 0元
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
                    label="操作"
                >
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="计划名称">
                </el-table-column>
                    <el-table-column
                    prop="address"
                    label="产品名称">
                </el-table-column>
                    <el-table-column
                    prop="address"
                    label="技术指标">
                </el-table-column>
                    <el-table-column
                    prop="address"
                    label="数量">
                </el-table-column>
                    <el-table-column
                    prop="address"
                    label="单价（元）">
                </el-table-column>
                    <el-table-column
                    prop="address"
                    label="总价（元）">
                </el-table-column>
                    <el-table-column
                    prop="address"
                    label="采购分类">
                </el-table-column>
                    <el-table-column
                    prop="address"
                    label="申请采购方式">
                </el-table-column>
                    <el-table-column
                    prop="address"
                    label="进口设备">
                </el-table-column>
             </el-table>
        <el-row>
            <el-col style="margin-top:20px;">
                 <el-button type="primary">提交</el-button>
                       <el-button type="danger">取消</el-button>
            </el-col>
        </el-row>
        </el-card>


   </div>
</template>
<script>
    export default {
    data() {
      return {
      
        dialogFormVisible: false,
         formLabelWidth: '120px',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
       
      };
    }
  };
</script>
<style>

.el-radio+.el-radio {
    margin-left: 10px;
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
    color: red;
}
.textcenter h4{
    margin: 10px;
}
.takem .el-row{
    margin-top: 20px;
    padding-left: 28px;
}
/* 弹出框 */
.Popup .el-dialog__header{
   background: #1E88E5;
   color: #fff;
}
.Popup .el-dialog__header .el-dialog__title {
color: #fff;
border-left: 2px solid #fff;
padding-left: 10px;
}
.Popup .el-form-item__content {
    width: 47%;
}
.cmargin .el-form-item__label {
    width: 10%;
}


</style>
