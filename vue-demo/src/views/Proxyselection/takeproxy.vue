<template>
   <div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>代理机构抽选</el-breadcrumb-item>
              <el-breadcrumb-item>代理机构确认</el-breadcrumb-item>

            </el-breadcrumb>
            </div>
   
              <el-row>
                   <el-col style="margin-top:24px;text-align:center;">
                    <h2>招标代理机构随机抽选</h2>
                </el-col>
              </el-row>
          <!-- 确定项目内容及名单 -->
          <el-card>
              <el-row>
                <el-col class="h4border">
                    <h4>确定项目内容及名单</h4>
                </el-col>
            </el-row>

              <!-- 数据 -->
             <div class="takem">
              <el-row>
                  <el-col :span="8">经办人：
                      <el-input v-model="input" class="w4" style="width:217px;"></el-input>
                  </el-col>
                  <el-col :span="8">抽取家数：
                      <el-input v-model="input" class="w4" style="width:217px;"></el-input>
                  </el-col>
              </el-row>
            
         </div>

          </el-card>

          <!-- 抽选范围 -->
               <el-card style="margin-top:20px;">
              <el-row>
                <el-col class="h4border">
                    <h4>抽选范围</h4>
                </el-col>
            </el-row>

              <!-- 数据 -->
       
                 <div class="takem">
              <el-row>
                  <el-col :span="8">抽选条件：
                        <el-select v-model="value" placeholder="不设定抽选范围">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                  </el-col>
                      <el-col :span="8">所属区域：
                        <el-select v-model="value">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                  </el-col>
                  <el-col :span="8">资质等级：
                      <el-input v-model="input" class="w4"  placeholder="高级代理机构"></el-input>
                  </el-col>
              </el-row>
            
         </div>

          </el-card>

      
      
       <!-- 抽选机构列表 -->
        <el-card style="margin-top:20px;">
                <!-- 标题 -->
                <el-row>
                    <el-col class="h4border">
                        <h4>抽选机构列表</h4>
                    </el-col>
                </el-row>

                <!-- 表格 -->
                <el-table
            :data="tableData"
            :align="center"
            border
            class="fromlist1">
           
            <el-table-column
                prop="num"
                label="序号"
            >
            </el-table-column>
            <el-table-column
                prop="name"
                label="计划名称">
            </el-table-column>
                <el-table-column
                prop="address"
                label="当前入选">
            </el-table-column>
                <el-table-column
                prop="address"
                label="资质等级">
            </el-table-column>
                <el-table-column
                prop="address"
                label="地区">
            </el-table-column>
                <el-table-column
                prop="address"
                label="联系人">
            </el-table-column>
                <el-table-column
                prop="address"
                label="联系电话">
            </el-table-column>
                <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            </el-table>
            <p>显示第1条到第5条记录，总共5条记录</p>
            <el-row>
                <el-button type="danger" style="margin-left: 44%;">开始抽选</el-button>
            </el-row>
        </el-card>
        
        
        <!-- 外贸代理机构列表 -->
         <el-card style="margin-top:20px;">
                <!-- 标题 -->
                <el-row>
                    <el-col class="h4border">
                        <h4>外贸代理机构列表</h4>
                    </el-col>
                </el-row>

                <!-- 表格 -->
                <el-table
            :data="tableData"
            :align="center"
            border
            class="fromlist1">
           
            <el-table-column
                prop="num"
                label="序号"
            >
            </el-table-column>
            <el-table-column
                prop="name"
                label="计划名称">
            </el-table-column>
                <el-table-column
                prop="address"
                label="当前入选">
            </el-table-column>
                <el-table-column
                prop="address"
                label="资质等级">
            </el-table-column>
                <el-table-column
                prop="address"
                label="地区">
            </el-table-column>
                <el-table-column
                prop="address"
                label="联系人">
            </el-table-column>
                <el-table-column
                prop="address"
                label="联系电话">
            </el-table-column>
                <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            </el-table>
            <p>显示第1条到第5条记录，总共5条记录</p>
            <el-row>
                <el-button type="danger" style="margin-left: 44%;">开始抽选</el-button>
            </el-row>
        </el-card>


           <!-- 机构抽选列表 -->
         <el-card style="margin-top:20px;">
                <!-- 标题 -->
                <el-row>
                    <el-col class="h4border">
                        <h4>机构抽选列表</h4>
                    </el-col>
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
                prop="name"
                label="计划名称">
            </el-table-column>
                <el-table-column
                prop="address"
                label="资质等级">
            </el-table-column>
                <el-table-column
                prop="address"
                label="地区">
            </el-table-column>
                <el-table-column
                prop="address"
                label="联系人">
            </el-table-column>
                <el-table-column
                prop="address"
                label="联系电话">
            </el-table-column>
                <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
                <el-table-column
                prop="address"
                label="传真">
            </el-table-column>
             <el-table-column
                prop="address"
                label="邮政编码">
            </el-table-column>
             <el-table-column
                prop="address"
                label="入选年度">
            </el-table-column>
            
            
            </el-table>
            <!-- <p>显示第1条到第5条记录，总共5条记录</p> -->
            <el-row>
                <el-button type="success" style="margin-left: 44%;">确定结果</el-button>
            </el-row>
        </el-card>
   
       </div>
</template>
<script>
export default {};
</script>
<style>
.fl {
  float: left;
}
.main {
  background-color: #e9eef3;
  height: 100%;
  position: relative;
}
.h4border {
  color: #1e88e5;
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
  margin-bottom: 20px;
  color: red;
}
.textcenter h4 {
  margin: 10px;
}
.takem .el-row {
  margin-top: 20px;
  padding-left: 50px;
}
.takem .w4 {
  width: 40%;
}
.takem .el-radio + .el-radio {
  margin-left: 0;
}
.takem .el-radio__label {
  padding-left: 0px;
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
.takebtn .el-button + .el-button {
  margin-left: 0px;
}
</style>
