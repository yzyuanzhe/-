<template>
<div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>招标文件申报</el-breadcrumb-item>
              <el-breadcrumb-item>申报详情</el-breadcrumb-item>

            </el-breadcrumb>
            </div>
    <el-card style="margin-top:50px;padding:26px;padding-top: 0;">
        <el-row>
          <el-col class="h4border">
           <h4>审编信息</h4>
          </el-col>
    </el-row>
       
       <!-- 表单开始 -->
       <div class="makepadding">
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
                <el-form-item label="采购名称:">
                    <el-input v-model="form.name" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12" style="position:relative">
                    <el-form-item label="采购类型">
                    <el-select v-model="form.region" placeholder="货物采购">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            
               
              <div class="bottom">
                 <el-form-item >
                    <el-radio-group v-model="form.resource" style="margin-left: 20%;position:  absolute;top: -51px;left: 124px;">
                    <el-radio label="进口货物"></el-radio>
                    <el-radio label="国产货物"></el-radio>
                    </el-radio-group>
                 </el-form-item>
                 </div>
                 </el-col>
         </el-row>

         <el-row>
             <el-col :span="12">
              <el-form-item label="采购用途:" >
                    <el-radio-group v-model="form.use">
                    <el-radio label="教学"></el-radio>
                    <el-radio label="科研"></el-radio>
                    <el-radio label="保障运行"></el-radio>
                    <el-radio label="其他"></el-radio>
                    </el-radio-group>
                 </el-form-item>
             </el-col>
             <el-col :span="12">
                    <el-form-item label="采购预算:">
                    <el-input v-model="form.money" class="w40"></el-input>万元
                </el-form-item>
             </el-col>
         </el-row>

          <el-row>
               <el-col :span="12">
                <el-form-item label="经办人:">
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
                    <el-form-item label="采购方式">
                    <el-select v-model="form.region" placeholder="公开招标">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
             </el-col>
             <el-col :span="12">
                 <el-col :span="2">
                 <div style="width: 250%;margin-left: -10px;">本次采购是否包含政府集中采购目录内产品:</div></el-col>
                    <el-form-item>
                    <el-select v-model="form.region" placeholder="否">
                    <el-option label="是" value="shanghai"></el-option>
                    <el-option label="否" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
             </el-col>
         </el-row>
         <el-row>
               <el-col :span="12">
                <el-form-item label="采购申请号:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
                   <el-col :span="12">
                    <el-form-item label="组织形式">
                    <el-select v-model="form.region" placeholder="集中采购">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
             </el-col>

         </el-row>
         <el-row>
                   <el-col :span="12">
                    <el-form-item label="执行机构">
                    <el-select v-model="form.region" placeholder="招标代理机构">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
             </el-col>
               <el-col :span="12">
                <el-form-item label="采购申请号:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
         <el-row>
                   <el-col :span="12">
                    <el-form-item label="确认状态">
                    <el-select v-model="form.region" placeholder="同意受理">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
             </el-col>
               <el-col :span="12">
                <el-form-item label="代理人工号:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
         
          <el-row>
               <el-col :span="12">
                <el-form-item label="代理人手机号:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="代理机构名称:">
                    <el-input v-model="form.time" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
          <el-row>
               <el-col :span="12">
                <el-form-item label="采购编号:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="报名开始时间:">
                    <el-input v-model="form.time" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>
          <el-row>
               <el-col :span="12">
                <el-form-item label="报名截至时间:">
                    <el-input v-model="form.company" class="w40"></el-input>
                </el-form-item>
                </el-col>
               <el-col :span="12">
                <el-form-item label="开标时间:">
                    <el-input v-model="form.time" class="w40"></el-input>
                </el-form-item>
                </el-col>
         </el-row>

         <!-- 上传 -->
         <el-row>
             <div class="onload1">  
             <el-col :span="12">
                 <div style="float: left;margin-left: 14px;margin-right: 11px;">代理协议:</div>
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
                 <div style="float: left;margin-left: 14px;margin-right: 11px;">招标公告:</div>
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
             <div class="onload1">  
             <el-col :span="12">
                 <div style="float: left;margin-left: 14px;margin-right: 11px;">招标文件:</div>
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
             <el-col :span="12"  style="margin-left: -28px;">
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
            
             </div>    
         </el-row>


         <el-row>
             <div class="onload1">  
             <el-col :span="12" style="margin-left: -55px;">
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
             <el-col :span="12" style="padding-left: 56px;">
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
                  <el-button type="primary">计划选择产品清单</el-button>
                    <el-button type="primary">手工输入非计划产品清单</el-button>
                      <el-button type="primary">导入产品清单</el-button>
                       <el-button type="danger">删除</el-button>
                       合计：0 元
                      
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
                        <template slot-scope="scope">
                        <a href="#" @click="takepurchase" style="color:#009F44;">编辑</a>
                    </template>
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
            <el-col style="margin-top:20px;margin-left: 44%;">
                 <el-button type="primary">确定申报</el-button>
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
         fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
  }
    }
</script>
<style>

.el-radio+.el-radio {
    margin-left: 10px;
}
.h4border{
    color: #1E88E5;
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
/* 处理上传 */
.onload1 .el-upload-list {
    float: left;
    margin-top: -16px;
}
.onload1 .el-upload {
    float: left;
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
