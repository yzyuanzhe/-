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
           <!--<button @click="xb">sss</button> -->
      
    </el-row>
       <!-- 表单开始 -->
       <div class="makepadding">
           <div class="cmargin">
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
               <el-col :span="12">
                <el-form-item label="经费代码:">
                    <el-input v-model="form.fundCode" class="w40"></el-input>
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
                <el-form-item label="经办人手机:">
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
             <el-col :span="24" style="
    margin-left: -135px;
">
              <el-form-item label="经费类型:" >
                    <el-radio-group v-model="form.fundKind">
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
                        <el-input v-model="form.projectName" class="w40"></el-input>
                    </el-form-item>
                    </el-col>
                <el-col :span="12">
                    <el-form-item label="项目预算:">
                        <el-input v-model="form.purchaseBudget" class="w40"></el-input>万元
                    </el-form-item>
                    </el-col>
             </el-row>

           <!-- <el-row>
             <el-col :span="24" style="
    margin-left: -135px;
"> 
              <el-form-item label="采购内容:" >
                    <el-radio-group v-model="form.purchaseContent">
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
                    <el-radio-group v-model="form.purchaseContent">
                    <el-radio label="招标"></el-radio>
                    <el-radio label="比选"></el-radio>
                    <el-radio label="竞争性谈判"></el-radio>
                    <el-radio label="单一来源采购"></el-radio>
                    </el-radio-group>
                 </el-form-item>
             </el-col>
            </el-row> -->

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
                <el-input type="textarea" v-model="form.projectDesc"></el-input>
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
                       <el-button type="danger" @click="handledelete">删除</el-button>
                      
            </el-row>

            <!-- 表格 -->
             <el-table
                :data="list"
                :align="center"
                @selection-change="selsChange"
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
            <a href="#"  @click="changeadd(scope.row)"  style="color: rgb(30, 136, 229);">编辑</a>
          </template>
          <!-- @click="takechange(scope.$index, scope.row)" -->

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
                 <el-button type="primary" @click="takechange">提交</el-button>
                       <el-button type="danger">取消</el-button>
            </el-col>
        </el-row>
        </el-card>
            <!-- 弹出框  -->
                <el-dialog title="修改设备清单" :visible.sync="dialogFormVisible2" class="Popup">
                        <el-form v-model="form3">
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="计划名称:" :label-width="formLabelWidth">
                                    <el-input v-model="form3.purchasePlanName" auto-complete="off"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="产品名称:" :label-width="formLabelWidth">
                                    <el-input v-model="form3.goodName" auto-complete="off"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="数量:" :label-width="formLabelWidth">
                                    <el-input v-model="form3.num" auto-complete="off"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="单价(元):" :label-width="formLabelWidth">
                                    <el-input v-model="form3.unitPrice" auto-complete="off"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="总价(元):" :label-width="formLabelWidth" style="padding-left:0;">
                                    <el-input v-model="form3.total" auto-complete="off"></el-input>
                                    </el-form-item>
                                </el-col>
                                </el-row>
                                <el-row>
                                <el-col :span="8">
                                <el-form-item label="进口设备:" :label-width="formLabelWidth">
                                    <el-select v-model="form3.region">
                                        <el-option label="进口设备1" value="shanghai"></el-option>
                                        <el-option label="进口设备2" value="beijing"></el-option>
                                    </el-select>
                            </el-form-item>
                            </el-col>
                            </el-row>
                            <el-row>
                                    <el-form-item label="技术指标:">
                                    <el-input type="textarea" v-model="form3.technicalIndicators"></el-input>
                                </el-form-item>
                                </el-row>
                        </el-form>
                        <div slot="footer" class="dialog-footer"> 
                            <el-button type="primary" @click="handlebtn2">确认</el-button>
                            <el-button type="danger"  @click="dialogFormVisible2 = false">返回</el-button>
                        </div>
                    </el-dialog>


   </div>
   
</template>
<script>
    export default {
    data() {
      return {
      
        dialogFormVisible: false,
         formLabelWidth: '120px',
        form: {
          applyDeptName: '',
          applyTime: '',
          purchaseName: '',
          fundCode: '',
          agent:'',
          agentMobile:'',
          fundManager:'',
          fundManagerMobile:'',
          fundKind:'',
          projectName:'',
          purchaseBudget:'',
          projectDesc:'',
          delivery: false,
          id:'',
           list: [{
          id:'',
          purchasePlanName: '',
          goodName: '',
          technicalIndicators: '',
          num:'',
          unitPrice:'',
          total:'',
          purchaseType:'',
          purchaseKind:'',
          isImported:''
        }],
          },
        
        
        form2:{

        },
        form3:{
            purchasePlanName:'',
            goodName:'',
            num:'',
            unitPrice:'',
            total:'',
            isImported :'',
            technicalIndicators:'',
            id:'',
            purchasePlanId:''

        },
          dialogFormVisible: false,
          dialogFormVisible2: false,
            sels: [],//选中显示的值       
            takeid:''
          

   

       
      }

    },
    created() {
      this.loadData()
    },
    methods: {
      async loadData() {
                var xb = this.$route.params.id;
                const res =await this.$http.get('purchasePlan/getById', {
                params: {
                id:xb
                }
                })

            // console.log(res)
            this.form = res.data;
            this.list = res.data.list;
            this.purchasePlanId=xb;
            console.log(purchasePlanId)
           
       }, 
          async Submission (){
                var xb = this.$route.params.id;      
                this.id=xb;  
                //  console.log(xb);
            const res =await this.$http.post('purchasePlan/update',this.form)
            console.log(res);
            const status = res.status;
            if (status == 200) {
                this.message.success("成功");
            } else {
                this.$message.error("错误");
            }
        },
        // 点击修改按钮
        async changeadd (row){
         this.dialogFormVisible2 = true;
        //  console.log(row.goodName);
         this.form3.purchasePlanName = row.purchasePlanName;
         this.form3.goodName = row.goodName;
         this.form3.num = row.num;
         this.form3.unitPrice = row.unitPrice;
         this.form3.isImported = row.isImported;
         this.form3.technicalIndicators= row.technicalIndicators;
         this.form3.id=row.id;
         
 
        },
        async handlebtn2 (){
            // var xb = this.$route.params.id;   
            this.form3.purchasePlanId=this.$route.params.id; 
            console.log(this.form3.purchasePlanId);
            // this.list=form2;
           const res =await this.$http.post('purchasePlanInfoInfo/update',this.form3);
        //    console.log(res);
         let message = res.data.message;

       if (message == "success") {
        // 修改成功
        // 提示成功
        this.$message.success('修改成功');
        // 关闭对话框
        this.dialogFormVisible2 = false;
        // 重新加载列表
        // this.loadData();
        // // 清空文本框
        // for (let key in this.formData) {
        //   this.formData[key] = '';
        // }
      } else {
        this.$message.error('修改失败');
      }

        },
         selsChange(sels){
        //被选中的行组成数
        this.sels = sels;
        //遍历被选中行数所组成的数组
        for(let element of this.sels){
        console.log(element.id);
         this.takeid = element.id;
        }
  },
        async handledelete (){
            let id = this.takeid;
            // console.log(id)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        // 包裹 await 的函数都需要加上async
        // 点击确定按钮执行
        const res = await this.$http.get('purchasePlanInfoInfo/delete',{
                 params: {
                 id:id
                }
               });

        // 服务器返回的数据
         let message = res.data.message;
       if (message == "success"){
          // 删除成功 重新加载数据
          this.pagenum = 1;
          this.loadData();

          this.$message.success('成功');
        } else {
          this.$message.error('失败');
        }
      })
    },
    // 提交
    async takechange(){
                var xb = this.$route.params.id;
           const res =await this.$http.post('purchasePlan/update',this.form) 
         let message = res.data.message;

       if (message == "success") {
        // 修改成功
        // 提示成功
        this.$message.success('审核成功');
        // 关闭对话框
        this.dialogFormVisible2 = false;
        // 重新加载列表
        // this.loadData();
        // // 清空文本框
        // for (let key in this.formData) {
        //   this.formData[key] = '';
        // }
      } else {
        this.$message.error('审核失败');
      }
       
    }

        }


    }

  
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
