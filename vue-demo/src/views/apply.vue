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
    <el-card style="margin-top:50px;padding:26px;padding-top: 0;">
        <el-row>
          <el-col class="h4border">
           <h4>新增信息</h4>
          </el-col>
    </el-row>

    <el-row class="textcenter">
        <h4>本次采购如包含政府集中采购目录内产品，则报送中央政府采购中心从其要求执行采购;添加财政部连接功能，显示目录</h4>
    </el-row>
       <!-- 表单开始 -->
       <div class="makepadding">
       <el-form ref="form" :model="form" label-width="20%">
           <el-row>
               <el-col :span="12">
                <el-form-item label="申请单位:">
                    <el-input v-model="form.applyDeptName" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="申请日期:">
                    <el-input v-model="form.applyTime" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
           <el-row>
               <el-col :span="12">
                <el-form-item label="采购名称:">
                    <el-input v-model="form.purchaseName" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12" style="position:relative">
                    <el-form-item label="采购类型">
                    <el-select v-model="form.purchaseType" placeholder="货物采购">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            
<!--                
              <div class="bottom">
                 <el-form-item >
                    <el-radio-group v-model="form.resource" style="margin-left: 20%;position:  absolute;top: -51px;left: 124px;">
                    <el-radio label="进口货物"></el-radio>
                    <el-radio label="国产货物"></el-radio>
                    </el-radio-group>
                 </el-form-item>
                 </div> -->
                 </el-col>
         </el-row>

         <el-row>
             <el-col :span="12">
              <el-form-item label="采购用途:" >
                    <el-radio-group v-model="form.purchaseUse">
                    <el-radio label="教学"></el-radio>
                    <el-radio label="科研"></el-radio>
                    <el-radio label="保障运行"></el-radio>
                    <el-radio label="其他"></el-radio>
                    </el-radio-group>
                 </el-form-item>
             </el-col>
             <el-col :span="12">
                    <el-form-item label="采购预算:">
                    <el-input v-model="form.purchaseBudget" class="w40"></el-input>万元
                </el-form-item>
             </el-col>
         </el-row>

          <el-row>
               <el-col :span="12">
                <el-form-item label="经办人:">
                    <el-input v-model="form.agent" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="手机号码:">
                    <el-input v-model="form.agentMobile" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
          <el-row>
               <el-col :span="12">
                <el-form-item label="经费负责人:">
                    <el-input v-model="form.fundManager" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="手机号码:">
                    <el-input v-model="form.fundManagerMobile" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
          <el-row>
               <el-col :span="12">
                <el-form-item label="经费代码:">
                    <el-input v-model="form.fundCode" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="采购依托建设项目名称:">
                    <el-input v-model="form.projectName" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
         <el-row>
             <el-col :span="12">
                    <el-form-item label="执行机构:">
                    <el-select v-model="form.executiveAgencyId" placeholder="中央政府采购中心">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
             </el-col>
             <el-col :span="12">
                    <el-form-item label="经费类型:">
                    <el-select v-model="form.fundKind" placeholder="科研经费">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
             </el-col>
           
         </el-row>
         <el-row>
             <el-col :span="12">
                    <el-form-item label="采购方式:">
                    <el-select v-model="form.purchaseKind" placeholder="比选">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
             </el-col>
             <el-col :span="12" style="
    padding-left: 27px;
">
                     <div style="float: left;margin-left: 14px;margin-right: 11px;">需求技术指标:</div>
              <!-- <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                
              </el-upload> -->
              <el-button size="small" type="primary"><i class="el-icon-upload2"></i>上传</el-button>
             </el-col>
           
         </el-row>


         <!-- 上传 -->
            <el-row>
                <div class="onload1">  
                <el-col :span="12">
                    <div style="float: left;margin-left: 14px;margin-right: 11px;">单一来源论证附件:</div>
                <!-- <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                   
                </el-upload> <el-button size="small" type="primary"><i class="el-icon-upload2"></i>上传</el-button> -->
                </el-col>
                <el-col :span="12" style="
                    padding-left: 56px;
                ">
                    <div style="float: left;margin-left: 14px;margin-right: 11px;">其他附件:</div>
                <!-- <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    
                </el-upload><el-button size="small" type="primary"><i class="el-icon-upload2"></i>上传</el-button> -->
                </el-col>
                
                </div>    
         </el-row>

           <el-row>
              
               <el-form-item label="采购方式理由:" style="
    margin-left: -258px;
">
                <el-input type="textarea" v-model="form.purchaseTypeReason"></el-input>
            </el-form-item>
           </el-row>


</el-form>
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
                    <el-form v-model="form2">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="计划名称:" :label-width="formLabelWidth">
                                <el-input v-model="form2.purchaseName" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                               <el-col :span="8">
                                <el-form-item label="产品名称:" :label-width="formLabelWidth">
                                <el-input v-model="form2.goodName" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                             <el-col :span="8">
                                <el-form-item label="数量:" :label-width="formLabelWidth">
                                <el-input v-model="form2.num" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                             <el-col :span="12">
                                <el-form-item label="单价(元):" :label-width="formLabelWidth">
                                <el-input v-model="form2.unitPrice" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                             <el-col :span="12">
                                <el-form-item label="总价(元):" :label-width="formLabelWidth" style="padding-left:0;">
                                <el-input v-model="form2.total" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            </el-row>
                            <el-row>
                             <el-col :span="8">
                               <el-form-item label="进口设备:" :label-width="formLabelWidth">
                                 <el-select v-model="form2.region">
                                    <el-option label="进口设备1" value="shanghai"></el-option>
                                    <el-option label="进口设备2" value="beijing"></el-option>
                                </el-select>
                        </el-form-item>
                        </el-col>
                        </el-row>
                           <el-row>
                                <el-form-item label="技术指标:">
                                <el-input type="textarea" v-model="form2.technicalIndicators"></el-input>
                            </el-form-item>
                            </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer"> 
                        <el-button type="primary" @click="handlebtn">确认</el-button>
                        <el-button type="danger"  @click="dialogFormVisible = false">返回</el-button>
                    </div>
                </el-dialog>
            
                    <el-button type="primary">导入产品清单</el-button>
                      <el-button type="primary">模板下载</el-button>
                       <el-button type="danger">删除</el-button>
                      
            </el-row>

            <!-- 表格 -->
             <el-table
                :data="form.list"
                :align="center"
                border
                class="fromlist1">
                    <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="序号"
                >
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="操作"
                >
                 <template slot-scope="scope" style="padding: 0 1%;">
            <a href="#" @click="editlist(scope.$index, scope.row)" style="color: rgb(30, 136, 229);">编辑</a>
          </template>
                </el-table-column>
                <el-table-column
                    prop="purchaseName"
                    label="计划名称">
                </el-table-column>
                 <el-table-column
                    prop="goodName"
                    label="产品名称">
                </el-table-column>
                    <el-table-column
                    prop="num"
                    label="数量">
                </el-table-column>
                    <el-table-column
                    prop="unitPrice"
                    label="单价（元）">
                </el-table-column>
                    <el-table-column
                    prop="total"
                    label="总价（元）">
                </el-table-column>
                    <el-table-column
                    prop="name"
                    label="进口设备">
                </el-table-column>
                <el-table-column
                    prop="technicalIndicators"
                    label="技术指标">
                </el-table-column>
        </el-table>
        <el-row>
            <el-col style="margin-top:20px;">
                 <el-button type="primary" @click="handleadd">提交</el-button>
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

      form: {
        applyDeptId: "",
        applyTime: "",
        purchaseName: "",
        purchaseType: "",
        purchaseUse: "",
        purchaseBudget: "",
        agent: "",
        agentMobile: "",
        fundManager: "",
        fundManagerMobile: "",
        fundCode: "",
        projectName: "",
        executiveAgencyId: "",
        fundKind: "",
        purchaseKind: "",
        purchaseTypeReason: "",
        list: []
      },
      form2: {}
    };
  },
  methods: {
    async handleadd() {
      const res = await this.$http.post("purchasePlan/save", this.form);
      const data = res.data;
      if (status == 200) {
        this.message.success("成功");
      } else {
        this.$message.error("错误");
      }
    },
    handlebtn() {
      this.dialogFormVisible = false;
      this.form.list.push(this.form2);
      this.form2 = {};
    },
    editlist (index, rows){
       console.log()
    
    }
  }
};
</script>
<style>
.el-radio + .el-radio {
  margin-left: 10px;
}
.h4border {
  padding: 18px;
  border-bottom: 2px dashed #ccc;
}
.h4border h4 {
  margin: 0;
  padding: 0;
  padding-left: 14px;
  border-left: 4px solid #1e88e5;
}
.textcenter {
  text-align: center;
  color: red;
}
.textcenter h4 {
  margin: 10px;
}
.takem .el-row {
  margin-top: 20px;
  padding-left: 28px;
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
.onload1 .el-form-item__content {
  margin-left: 0;
}
.onload1 .el-form-item__label {
  width: 20%;
}

.w40 {
  width: 60%;
}
.makepadding {
  padding-left: 70px;
  padding-right: 70px;
  margin-top: 20px;
}
.bottom .el-radio__label {
  padding-left: 0;
}

.el-radio + .el-radio {
  margin-left: 10px;
}
.h4border {
  padding: 18px;
  border-bottom: 2px dashed #ccc;
}
.h4border h4 {
  margin: 0;
  padding: 0;
  padding-left: 14px;
  border-left: 4px solid #1e88e5;
}
.textcenter {
  text-align: center;
  color: red;
}
.textcenter h4 {
  margin: 10px;
}
.takem .el-row {
  margin-top: 20px;
  padding-left: 28px;
}
/* 弹出框 */
.Popup .el-dialog__header {
  background: #1e88e5;
  color: #fff;
}
.Popup .el-dialog__header .el-dialog__title {
  color: #fff;
  border-left: 2px solid #fff;
  padding-left: 10px;
}
.Popup .el-form-item__content {
  width: 80%;
}
.cmargin .el-form-item__label {
  width: 10%;
}
</style>
