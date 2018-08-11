<template>
    <el-main class="main" >
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>采购计划审批</el-breadcrumb-item>
              <el-breadcrumb-item>审批详情</el-breadcrumb-item>

            </el-breadcrumb>
            </div>
   
     
            <el-card class="box6">
             <el-row>
               
                 <el-col :span="3">
                      <div class="leftimg">
                        <img src="../../assets/QQ图片20180809181353.png" alt="">
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
               <el-button>内容</el-button>
            <el-button type="primary" style="margin-left:none;">审批历程</el-button>
          </el-row>
          <!-- 内容 -->
          <el-card>
              <el-row>
                <el-col class="h4border">
                    <h4>内容</h4>
                </el-col>
            </el-row>
              <el-row class="textcenter">
                <h4>本次采购如包含政府集中采购目录内产品，则报送中央政府采购中心从其要求执行采购;添加财政部连接功能，显示目录</h4>
              </el-row>

              <!-- 数据 -->
              <div class="takem">
              <el-row>
                  <el-col :span="12">申请单位：
                      <el-input v-model="input" class="w4"></el-input>
                  </el-col>
                  <el-col :span="12">申请日期：
                      <el-input v-model="input" class="w4"></el-input>
                  </el-col>
              </el-row>
                <el-row>
                  <el-col :span="12">采购名称：
                      <el-input v-model="input" class="w4"></el-input>

                  </el-col>
                  <el-col :span="12">采购类型：
                       <el-select v-model="value" placeholder="货物采购">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <!-- 单选按钮 -->
                       <el-radio v-model="radio" label="1">进口货物</el-radio>
                       <el-radio v-model="radio" label="2">国产货物</el-radio>
                  </el-col>
              </el-row>
              <el-row>
                  <el-col :span="12">采购用途：
                       <el-radio v-model="radio" label="1">教学</el-radio>
                       <el-radio v-model="radio" label="2">科研</el-radio>
                       <el-radio v-model="radio" label="3">保障运行</el-radio>
                       <el-radio v-model="radio" label="4">其他</el-radio>
                  </el-col>
                  <el-col :span="12">采购预算：
                       <el-input v-model="input"  class="w4"></el-input>  万元
                  </el-col>
              </el-row>

              <el-row>
                  <el-col :span="12" style="padding-left: 17px;">经办人：
                       <el-input v-model="input"  class="w4"></el-input>
                  </el-col>
                  <el-col :span="12">手机号码：
                       <el-input v-model="input"  class="w4"></el-input>
                  </el-col>
              </el-row>

              <el-row>
                  <el-col :span="12" style="margin-left: -15px;">经费负责人：
                     <el-input v-model="input"  class="w4"></el-input>
                  </el-col>
                    <el-col :span="12" style="padding-left: 15px;">手机号码：
                     <el-input v-model="input"  class="w4"></el-input>
                  </el-col>
              </el-row>

                <el-row>
                  <el-col :span="12">经费代码：
                     <el-input v-model="input"  class="w4"></el-input>
                  </el-col>
                    <el-col :span="12" style="margin-left: -98px;">建构依托建设项目名称：
                     <el-input v-model="input"  class="w4"></el-input>
                  </el-col>
              </el-row>
            
            <el-row>
                <el-col :span="12">经费类型：
                     <el-select v-model="value" placeholder="科研经费">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </el-col>
                    <el-col :span="12">采购方式：
                     <el-select v-model="value" placeholder="公开招标">
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
                <el-col :span="12">组织形式：
                     <el-select v-model="value" placeholder="集中采购">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </el-col>
                    <el-col :span="12">执行机构：
                     <el-select v-model="value" placeholder="招标代理机构">
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
               <el-col :span="12">需求技术指标：
                   <el-button type="primary"><i class="el-icon-upload2"></i>上传</el-button>
                   </el-col> 
               <el-col :span="12">单一来源论证附件：
                <el-button type="primary"><i class="el-icon-upload2"></i>上传</el-button>
                   </el-col> 
            </el-row>

            <el-row>
                <el-col :span="24" style="padding-left: 30px;">其他附件：
                    <el-button type="primary"><i class="el-icon-upload2"></i>上传</el-button>
                </el-col>
            </el-row>

            <el-row>
                采购方式理由：<el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: auto}"
                    placeholder="请输入内容"
                    v-model="textarea2">
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
                    <el-button type="primary">计划选择产品清单</el-button>
                        <el-button type="primary">手工输入非计划产品清单</el-button>
                        <el-button type="primary">导入产品清单</el-button>
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
            
        </el-card>

        <el-card style="margin-top:20px;">
           <el-row>
                    <el-col class="h4border">
                        <h4>经费负责人承诺说明</h4>
                    </el-col>
                </el-row> 
            <el-row style="margin-top:6px;">
                 <el-radio v-model="radio" label="1" style="margin-left:20px;">我承诺</el-radio>
            </el-row>
            <el-row style="background-color:#F9FAFC;text-align: center;padding: 18px;">
             项目资金来源已落实，可行性论证已通过，相关审批手续已经获取，具备招标条件，且设备安装地点已确定，先申请启动进行招标采购。
            </el-row>
            
        </el-card>

        <el-card style="margin-top:20px;">
             <el-row>
                    <el-col class="h4border">
                        <h4>审批意见</h4>
                    </el-col>
                </el-row> 
                 <el-row style="margin-top:20px;">
              <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: auto}"
                    placeholder="请输入内容"
                    v-model="textarea2">
                    </el-input>
            </el-row>
        </el-card>
         <el-row style="margin-left:40%;margin-top:10px;" class="takebtn">
                   <el-button type="primary">同意</el-button>
                   <el-button type="warning">拒绝</el-button>
                   <el-button type="danger">取消</el-button>
         </el-row>
           



   
        </el-main>
</template>
<script>
    export default {

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


</style>
