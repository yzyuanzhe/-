import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Apply from '@/views/apply.vue'
import Check from '@/views/check.vue'
import Openstep from '@/views/openstep.vue'
import Revise from '@/views/revise.vue'
import Homepage from '@/views/homepage.vue'
import Purchase from '@/views/purchaseandapproval/purchase.vue'   //采购计划审批
import TakepurChase from '@/views/Purchaseandapproval/takepurchase.vue'
import Openstep2 from '@/views/Purchaseandapproval/openstep2.vue'
import Proxy from '@/views/Proxyselection/proxy.vue' //代理机构抽选
import Takeproxy from '@/views/Proxyselection/Takeproxy.vue'
import ConfirMation from '@/views/Confirmationoftendering/confirmation.vue'//确认招标任务
import Takeconfirmation from '@/views/Confirmationoftendering/takeconfirmation.vue'
import Biddingdocuments from '@/views/Declarationoftenderdocuments/biddingdocuments.vue'
import Takedeclare from '@/views/Declarationoftenderdocuments/takedeclare.vue'
import Examine from '@/views/biddingreview/examine.vue'//招标文件审核
import Takeexamine from '@/views/biddingreview/takeexamine.vue'
import Uploadresults from '@/views/Uploadresults/uploadresults.vue' //上传招标结果
import Takeupload from '@/views/Uploadresults/takeupload.vue'
import Result from '@/views/takeresult/result.vue'//招标结果定标
import Takeresult from '@/views/takeresult/takeresult.vue'
import Resultaudit from '@/views/Calibrationresultaudit/resultaudit.vue' //定标结果审核
import Takeresultaudit from '@/views/Calibrationresultaudit/takeresultaudit.vue' 
import Notice from '@/views/Noticeofuploading/notice.vue' //上传中标通知书
import Takenotice from '@/views/Noticeofuploading/takenotice.vue'
import Participate from '@/views/Havebeeninvolved/participate.vue'
import Signup from '@/views/Iwanttosignup/signup.vue'//我要报名
import User from '@/views/Usermanagement/user.vue'//用户管理
import Role from '@/views/Rolemanagement/role.vue'//角色管理
import Addrole from '@/views/Rolemanagement/addrole.vue'
import Examination from '@/views/Qualificationexamination/examination.vue' //资质审查
import Takeexamination from '@/views/Qualificationexamination/takeexamination.vue' 
import Information from '@/views/Companyinformation/information.vue' //企业资料







Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          name: 'homepage',
          path: '/homepage',
          component: Homepage,
        },
             {
              name: 'apply',
              path: '/apply',
              component: Apply
            },
            {
              name:'check',
              path:'/check/:id',
              component:Check
            },
            {
              name:'openstep',
              path:'/openstep',
              component:Openstep
            },
            {
              name:'revise',
              path:'/revise/:id',
              component:Revise
            },
            {
              name:'takeresult',
              path:'/takeresult',
              component:Takeresult
            },
            {
              name:'purchase',
              path:'/purchase',
              component:Purchase,
            }, 
            {
              name: 'takepurchase',
              path: '/takepurchase/:id',
              component: TakepurChase
            },
            {//采购计划审批的审批历程
              name:'openstep2',
              path:'/openstep2',
              component:Openstep2
            },
            {
              name:'proxy',
              path:'/proxy',
              component:Proxy
            },
            {
              name:'takeproxy',
              path:'/takeproxy/:id',
              component:Takeproxy
            },
            {
              name:'confirmation',
              path:'/confirmation',
              component:ConfirMation
            },
            {
              name:'takeconfirmation',
              path:'/takeconfirmation',
              component:Takeconfirmation
            },
            {
              name:'biddingdocuments',
              path:'/biddingdocuments',
              component:Biddingdocuments
            },
            {
              name:'takedeclare',
              path:'/takedeclare',
              component:Takedeclare
            },
            {
              name:'examine',
              path:'/examine',
              component:Examine
            },
            {
              name:'takeexamine',
              path:'/takeexamine',
              component:Takeexamine
            },
            {
              name:'uploadresults',
              path:'/uploadresults',
              component:Uploadresults
            },
            {
              name:'takeupload',
              path:'/takeupload',
              component:Takeupload
            },
            {
              name:'result',
              path:'/result',
              component:Result
            },
            {
              name:'takeresult',
              path:'/takeresult',
              component:Takeresult
            },
            {
              name:'resultaudit',
              path:'/resultaudit',
              component:Resultaudit
            },
            {
              name:'takeresultaudit',
              path:'/takeresultaudit',
              component:Takeresultaudit
            },
            {
              name:'notice',
              path:'/notice',
              component:Notice
            },
            {
              name:'takenotice',
              path:'/takenotice',
              component:Takenotice
            },
            {
              name:'participate',
              path:'/participate',
              component:Participate
            },
            {
              
              name:'signup',
              path:'/signup',
              component:Signup
            },
            {
              name:'user',
              path:'/user',
              component:User
            },
            {
              name:'role',
              path:'/role',
              component:Role
            },
            {
              name:'addrole',
              path:'/addrole',
              component:Addrole
            },
            {//资质审查
              name:'examination',
              path:'/examination',
              component:Examination
            },
            {
              name:'takeexamination',
              path:'/takeexamination',
              component:Takeexamination
            },
            {//资料管理
              name:'information',
              path:'/information',
              component:Information
            }
            
          ]
        },
        
      ]
    })
   