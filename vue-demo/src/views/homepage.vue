<template>
<div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>采购计划申请</el-breadcrumb-item>
            </el-breadcrumb>
            </div>

          <el-card shadow="never" class="Purchase" style="height:100%;">
               <el-form ref="form" :model="form" label-width="80px">
          <el-row>
              <el-col :span="8">
                <el-form-item label="经费类型">
                    <el-select v-model="form.fundKind">
                    <el-option label="科研经费" value="科研经费"></el-option>
                    <el-option label="基建经费" value="基建经费"></el-option>
                    <el-option label="修购经费" value="修购经费"></el-option>
                    <el-option label="双一流、教育事业经费" value="beijing"></el-option>
                    
                    </el-select>
                </el-form-item>
            </el-col>
              <el-col :span="8">
                <el-form-item label="采购方式">
                    <el-select v-model="form.purchaseKind">
                    <el-option label="招标采购" value="招标采购"></el-option>
                    <el-option label="比选" value="比选"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
              <el-col :span="8">
                <el-form-item label="状态">
                    <el-select v-model="form.status">
                    <el-option label="暂存" value="1"></el-option>
                    <el-option label="待审核" value="2"></el-option>
                    <el-option label="审核通过" value="3"></el-option>
                    <el-option label="驳回" value="4"></el-option>
                    
                    
                    </el-select>
                </el-form-item>
            </el-col>
     </el-row>

   <el-row>
        <el-col :span="8">
        <el-form-item label="开始时间:">
             <el-date-picker
              v-model="form.startAt"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            </el-form-item>
         </el-col>
           <el-col :span="8">
        <el-form-item label="结束时间:">
             <el-date-picker
              v-model="form.endAt"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            </el-form-item>
         </el-col>
      
         <el-col :span="8">
            <el-form-item>
                <el-button type="primary" @click="takequery" >查询</el-button>
                <el-button type="success">重置</el-button>
            </el-form-item>
            </el-col>
            </el-row>
            </el-form>
                        
          </el-card>


      <el-card class="fromlist">
        <el-row>
          <el-col :span="24">
        <div class="button3">
            <el-button type="primary" @click="takeapply">新增
              <router-view></router-view>
            </el-button>
            
             <el-button type="danger" @click="handleDelete">删除</el-button>
            <el-button type="primary">导出列表数据</el-button>
        </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">

        <el-table
              :data="tableData"
              :align="center"
              border
              @selection-change="selsChange"
              class="fromlist1">
                <el-table-column
                type="selection"
                width="55"
                >

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
                <template slot-scope="scope" style="padding: 0 1%;">
                <a href="#" @click="takecheck(scope.row.id)" style="color: rgb(30, 136, 229);">查看</a>
                <a href="#" @click="takerevise(scope.row.id)" style="color:#009F44;float:right;">修改</a>
              </template>
              </el-table-column>
              <el-table-column
                prop="purchaseName"
                label="采购名称">
              </el-table-column>
                  <el-table-column
                prop="purchaseBudget"
                label="采购预算">
              </el-table-column>
                  <el-table-column
                prop="fundKind"
                label="经费类型">
              </el-table-column>
                  <el-table-column
                prop="purchaseKind"
                label="采购方式">
              </el-table-column>
                  <el-table-column
                prop="purchaseUse"
                label="采购用途">
              </el-table-column>
                  <el-table-column
                prop="applyTime"
                label="申请时间">
              </el-table-column>
                  <el-table-column
                prop="status"
                label="状态">
              </el-table-column>
        </el-table>
        </el-col>
      </el-row>


      <el-row>
        <el-col :span="24">
      <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pagenum"
            :page-sizes="[100,200,300,400]"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
            :align="right">
          </el-pagination>
        </div>
        </el-col>
      </el-row>
      </el-card>
</div>
</template>
<script>
     export default {
    data(){
      return {
         
           form: {
          fundKind: '',
          purchaseKind: '',
          delivery: false,
          status: '',
         startAt:'',
         endAt:''
        },
        // 页码
     pagenum: 1,
      // 每页条数
      pagesize: 4,
      // 总共的数据条数，从服务器获取
      total: 0,

       tableData: [],   
       sels: [],//选中显示的值       
       takeid:'',
      
    }
    },
    methods: {
      created() {
    // 发送请求获取数据
    // this.loadData();
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
 async  handleDelete() {
    let id = this.takeid;
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
           const res = await this.$http.get('purchasePlan/delete',{
             params:{
               id:id
             }
           });
           
           
         
        });
        this.loadData();
      },
      takeapply() {
        this.$router.push({ path: '/apply'})
      },
      takecheck(id){//查看
        this.$router.push({path: `/check/${id}`})
      },
      takerevise(id){//编辑按钮
         this.$router.push({path:`/revise/${id}`});
        //  this.$router.push({name:'param'  ,params:this.stu})
         console.log(id);
        // 
      },

    //    handleSizeChange(val) {
    //   // 每页条数改变的时候
    //   this.pagesize = val;
    //   this.loadData();
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange(val) {
    //   // 页码改变的时候
    //   this.page = val;
    //   this.loadData();
    //   console.log(`当前页: ${val}`);
    // },
      // async loadData (){
      //   const res =await this.$http.get('purchasePlan/getPage?page=1&rows=3');
      //   axios
      //   console.log(res);
      //   this.tableData =res.data;
      // if (status === 200) {
      //   this.$message.success('成功');
        
      // } else {
      //   this.$message.error('失败');
      // }
      
      // }
    
    async loadData(){
     const res =await this.$http.get('purchasePlan/getPage', {
            params: {
            page:1,
            rows:10,
           
            }
            })
            this.tableData = res.data.list;
            this.tableData.id=res.data.list.id;
            
            // console.log(res.data.listSes);
            // .then(function (response) {
            //   console.log(22,response.data.list);

            //  this.tableData =response.data.list;
            //  console.log(tableData)
            //  console.log(11,this.id)
            // })
            // .catch(function (error) {
            // console.log(error);
            // });
      },
    async takequery(){
     let form = this.form;
     let fundKind =this.form.fundKind;
     let purchaseKind =this.form.fundKind;
     let  status =this.form.status;
     let startAt =this.form.startAt;
     let  endAt =this.form.endAt;
     
     const res =await this.$http.get('purchasePlan/getPage', {
            params: {
            page:1,
            rows:10, 
            fundKind,
            purchaseKind,
            status,
            startAt,
            endAt
            }
            })
            // console.log(res);
            this.tableData = res.data.list;
  },
  


    },
    mounted(){
          this.loadData();
    },
   
     }
</script>
<style>

.aside .menu {
  height: 100%;
}
.header {
  background-color: #1E88E5;
  padding: 0;
  color: #fff;
}
.titleimg img{
 height: 30px;
}

.header .users {
  color: #fff;
  font-size: 18px;
  line-height: 60px;
  text-decoration: none;
 

}
.aside {
  background-color: #d3dce6;
   height: 100%;

}
.aside .menu {
  height: 100%;
}
.tleftimg img{
  height: 100%;
  margin-top: 8px;
  margin-left: 8px;
}
.fl {
  float: left;
}
.fr{
  float: right;
}
.toptitle {
  width: 90px;
  margin-top: 4px;
  height: 100%;
  text-align: center;
}
.toptitle img {
  width: 24px;
  height: 24px;
}
.toptitle h3{
  font-size: 18px;
  font-weight: 400px;
  margin: 0;
}
.rightimg img{
  width: 24px;
  height: 24px;
 margin-top: 20px;
}
.main {
  background-color: #e9eef3;
  height: 100%;
    position: relative;
}
.box-card1{
  background-color: #fff;
  height: 50px;
  font-size: 16px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  height: 50px;
  padding: 0;
 
}
.el-breadcrumb__item {
    line-height: 50px;
    padding-left: 20px;
}
.Purchase{
  width: 100%;
  height: 120px;
  margin-top: 50px;
}
.fromlist{
  height: 100%;
  margin-top: 20px;
}
.button3{
  height: 50px;
  border-bottom: 2px dashed #ccc;
}
.fromlist1 {
 width: 100%;
 margin-top:10px;
}

</style>
