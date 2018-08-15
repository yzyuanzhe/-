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
   
              <el-row style="
    margin-top: 23px;
">
                   <el-col style="margin-top:24px;text-align:center;">
                    <h2>招标代理机构随机抽选</h2>
                </el-col>
              </el-row>
          <!-- 确定项目内容及名单 -->
              <el-card shadow="never" class="Purchase" style="height:100%;margin-top:20px;">
              <el-row style="
    margin-bottom: 20px;
">
                <el-col class="h4border" >
                    <h4>确定项目内容及名单</h4>
                </el-col>
            </el-row>

              <!-- 数据 -->
           
                      <el-form ref="form1" :model="form1" label-width="80px" style="
    padding-left: 3%;
">
             
            <el-row>
              <el-col :span="8">
                  <el-form-item label="采购名称:">
                      <el-input v-model="form1.name" style="width: 49%;"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                  <el-form-item label="抽取家数:">
                      <el-input v-model="form1.num" style="width: 49%;"></el-input>
                  </el-form-item>
              </el-col>
            
                  </el-row>
                  </el-form>
  

          </el-card>

          <!-- 抽选范围 -->
               <el-card shadow="never" class="Purchase" style="height:100%;;margin-top:20px;">
              <el-row style="
    margin-bottom: 20px;
">
                <el-col class="h4border">
                    <h4>抽选范围</h4>
                </el-col>
            </el-row>

                      <el-form ref="form" :model="form2" label-width="80px" style="
    padding-left: 3%;
">
                <el-row>
                    <el-col :span="8">
                      <el-form-item label="抽选条件">
                          <el-select v-model="form2.take1" placeholder="不设定抽取范围">
                          <el-option label="类型一" value="shanghai"></el-option>
                          <el-option label="类型二" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                  </el-col>
                    <el-col :span="8">
                      <el-form-item label="所属区域">
                          <el-select v-model="form2.take2">
                          <el-option label="类型一" value="shanghai"></el-option>
                          <el-option label="类型二" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                  </el-col>
                   <el-col :span="8">
                  <el-form-item label="资质等级">
                      <el-input v-model="form2.name" style="width: 49%;" placeholder="高级代理机构"></el-input>
                  </el-form-item>
              </el-col>
                
          </el-row>
                  </el-form>
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
                type="index"
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
                type="index"
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
                type="index"
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
 export default {
    data(){
      return {
           form1: {
          delivery: false,
          name:'',
          num:''
        },
        form2:
        {
            take1:'',
            take2:'',
            name:''
        },
          tableData: [{
          date: '2016-05-02',
          name: '抽选机构',
          address: '机构1'
        },{
          date: '2016-05-02',
          name: '抽选机构',
          address: '机构1'
        },{
          date: '2016-05-02',
          name: '抽选机构',
          address: '机构1'
        }
        ]   
         }
    }
  }
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
