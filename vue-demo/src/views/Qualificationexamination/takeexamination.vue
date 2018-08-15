<template>
<div>
            <!-- <router-view></router-view> -->
            <!-- 面包屑 -->
            <div class="box-card1">
              <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"> <i class="el-icon-location"></i>招投标管理</el-breadcrumb-item>
              <el-breadcrumb-item>审查详情</el-breadcrumb-item>
            </el-breadcrumb>
            </div>

          
          <el-card shadow="never" class="Purchase" style="height:100%;">
              <el-row>
                    <el-col class="h4border">
                        <h4>基本信息</h4>
                    </el-col>
                </el-row> 

             <table width="1200px" cellspacing="0" class="Companyform"  align="center">
                <tbody>
                        <tr>
                            <td class="companytitle">公司名称</td>
                            <td colspan=4></td>
                        </tr>
                        <tr>
                            <td class="companytitle">公司简称</td>
                            <td colspan=4></td>
                        </tr>
                        <tr>
                            <td class="companytitle">公司地址</td>
                            <td colspan=4></td>
                        </tr>
                        <tr>
                            <td class="companytitle">注册资金</td>
                            <td colspan=4></td>
                        </tr>
                        <tr>
                            <td class="companytitle">成立日期</td>
                            <td colspan=4></td>
                        </tr>
                        <tr>
                            <td class="companytitle">法人代表</td>
                            <td class="companytitle1"></td>
                            <td class="companytitle">企业性质</td>
                            <td class="companytitle1" colspan="2"></td>
                        </tr>
                        <tr>
                            <td class="companytitle">国家</td>
                            <td class="companytitle1"></td>
                            <td class="companytitle">城市</td>
                            <td class="companytitle1" colspan="2"></td>
                        </tr>
                        <tr>
                          
                            <td  class="companytitle">姓名</td>
                            <td class="companytitle1"></td>
                            <td class="companytitle">职务</td>
                            <td class="companytitle1"></td>
                        </tr>
                        <tr>
                            <td class="companytitle">手机</td>
                            <td class="companytitle1"></td>
                            <td class="companytitle">传真</td>
                            <td class="companytitle1"></td>
                        </tr>
                        <tr>
                            <td class="companytitle">固定电话</td>
                            <td class="companytitle1"></td>
                            <td class="companytitle" >E-mail</td>
                            <td class="companytitle1"></td>
                        </tr>
                        <tr>
                            <td class="companytitle">供应商性质</td>
                            <td></td>
                            <td class="companytitle">申请日期</td>
                            <td colspan="2"></td>
                        </tr>
                 </tbody>
	        </table>
          </el-card>
          <el-card shadow="never" class="Purchase" style="height:100%;" >
              <el-row>
                    <el-col class="h4border">
                        <h4>资质证件</h4>
                    </el-col>
                </el-row> 

             <table width="1200px" cellspacing="0" class="Companyform"  align="center">
                <tbody>
                    <tr>
                        <td class="companytitle" rowspan="7">企业资质证件</td>
                        <td class="companytitle">证件</td>
                        <td class="companytitle1" style=" background: #F9FAFC;">证件名称</td>
                        <td class="companytitle1" style=" background: #F9FAFC;">附件上传</td>
                    </tr>
                    <tr>
                        <td class="companytitle">营业执照</td>
                        <td class="companytitle1"></td>
                        <td class="companytitle1"></td>
                    </tr>
                    <tr>
                        <td class="companytitle">生产/经营许可证</td>
                        <td class="companytitle1"></td>
                        <td class="companytitle1"></td>
                    </tr>
                    <tr>
                        <td class="companytitle">体系认证证书</td>
                        <td class="companytitle1"></td>
                        <td class="companytitle1"></td>
                    </tr>
                    <tr>
                        <td class="companytitle">专利证书</td>
                        <td class="companytitle1"></td>
                        <td class="companytitle1"></td>
                    </tr>
                    <tr>
                        <td class="companytitle">代理证书</td>
                        <td class="companytitle1"></td>
                        <td class="companytitle1"></td>
                    </tr>
                    <tr>
                        <td class="companytitle">其他相关资料</td>
                        <td class="companytitle1"></td>
                        <td class="companytitle1"></td>
                    </tr>
                    <tr>
                        <td class="companytitle">备注信息</td>
                        <td class="companytitle2" colspan="3"></td>
                    </tr>
                 </tbody>
	        </table>
          </el-card>
</div>
</template>
<script>
     export default {
    
  }
</script>
<style>
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
.Companyform tr {
    width: 100%;
    text-align: center;
}
.Companyform td {
  border: 1px solid #E2E2E2 ;
}
.Companyform{
 margin-top:40px;
 color: #323232;
 border: 1px solid #E2E2E2 ;
}
.Companyform .companytitle{
   width: 100px;
   background: #F9FAFC;
}
.Companyform .companytitle1{
   width: 200px;
}
.Companyform .companytitle2{
   width: 500px;
}
.Companyform td{
   height: 46px;
   line-height: 46px;
}


</style>
