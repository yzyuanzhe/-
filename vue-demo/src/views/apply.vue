<template>
<el-main class="main" >
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
<div class="takem">
    <el-row>
        <el-col :span="12">申请单位：<el-input v-model="input" style="width:40%;"></el-input></el-col>
        <el-col :span="12">申请类型：<el-input v-model="input" style="width:40%;"></el-input></el-col>
    </el-row>
      <el-row>
        <el-col :span="12">采购名称：<el-input v-model="input" style="width:40%;"></el-input></el-col>
        <el-col :span="12">采购类型：
             <el-radio v-model="radio" label="1">进口货物</el-radio>
             <el-radio v-model="radio" label="2">备国产货物</el-radio>
        </el-col>
    </el-row>
    <el-row>
        <el-col>
             <el-col :span="12">采购用途：<el-radio v-model="radio" label="1">教学</el-radio>
                 <el-radio v-model="radio" label="2">科研</el-radio>
                 <el-radio v-model="radio" label="3">保障运行</el-radio>
                 <el-radio v-model="radio" label="4">其他</el-radio>
             </el-col>
             <el-col :span="12">申请单位：<el-input v-model="input" style="width:40%;"></el-input> 万元</el-col>
        </el-col>
    </el-row>
    
     <el-row>
        <el-col :span="12" style="padding-left: 15px;">使用人：<el-input v-model="input" style="width:41%;"></el-input></el-col>
        <el-col :span="12">手机号码：<el-input v-model="input" style="width:40%;"></el-input></el-col>
    </el-row>

    <el-row>
        <el-col :span="12" style="margin-left:-17px;">经费负责人：<el-input v-model="input" style="width:40%;"></el-input></el-col>
        <el-col :span="12"  style="margin-left:17px;">手机号码：<el-input v-model="input" style="width:40%;"></el-input></el-col>
    </el-row>

    <el-row>
        <el-col :span="12">经费代码：<el-input v-model="input" style="width:40%;"></el-input></el-col>
        <el-col :span="12" style="margin-left:-97px;">采购依托建设项目名称：<el-input v-model="input" style="width:40%;"></el-input></el-col>
    </el-row>

    <el-row style="margin-top:10px;">
        <el-col :span="12">执行机构：<el-select v-model="value" placeholder="中央政府采购中心">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="12">经费类型：<el-select v-model="value" placeholder="科研经费">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-col>
    </el-row>
   
    <el-row>
        <el-col :span="12">采购方式：<el-select v-model="value" placeholder="比选">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="12" style="margin-left: -32px;">需求技术指标：<el-button type="primary"><i class="el-icon-upload2"></i>上传</el-button>
        </el-col>
    </el-row>


    <el-row>
        <el-col :span="12">单一来源论证附件：<el-button type="primary"><i class="el-icon-upload2"></i>上传</el-button></el-col>
        <el-col :span="12">其他附件：<el-button type="primary"><i class="el-icon-upload2"></i>上传</el-button></el-col>
    </el-row>

    <el-row>
        采购方式理由：<el-input
                        type="textarea"
                        autosize
                        placeholder="请输入内容"
                        v-model="textarea2"
                        style="width:80%;"
                        >
                    </el-input>
    </el-row>
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
                  <el-button type="primary">手工输入非计划产品清单</el-button>
                    <el-button type="primary">导入产品清单</el-button>
                      <el-button type="primary">模板下载</el-button>
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


    </el-main>
</template>
<script>
    export default {
        data:{
            
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


</style>
