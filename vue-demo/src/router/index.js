import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Apply from '@/views/apply.vue'
import Check from '@/views/check.vue'
import Revise from '@/views/revise.vue'
import Homepage from '@/views/homepage.vue'
import Result from '@/views/takeresult/result.vue'
import Purchase from '@/views/purchaseandapproval/purchase.vue'
import TakepurChase from '@/views/Purchaseandapproval/takepurchase.vue'
import Proxy from '@/views/Proxyselection/proxy.vue'
import Takeproxy from '@/views/Proxyselection/Takeproxy.vue'
import ConfirMation from '@/views/Confirmationoftendering/confirmation.vue'
import Takeconfirmation from '@/views/Confirmationoftendering/takeconfirmation.vue'
import Biddingdocuments from '@/views/Declarationoftenderdocuments/biddingdocuments.vue'
import Takedeclare from '@/views/Declarationoftenderdocuments/takedeclare.vue'
import Documentaudit from '@/views/biddingreview/documentaudit.vue'
import Takeaudit from '@/views/biddingreview/takeaudit.vue'
import Uploadresults from '@/views/Uploadresults/uploadresults.vue'







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
              path:'/check',
              component:Check
            },
            {
              name:'revise',
              path:'/revise',
              component:Revise
            },
            {
              name:'result',
              path:'/result',
              component:Result
            },
            {
              name:'purchase',
              path:'/purchase',
              component:Purchase,
            }, 
            {
              name: 'takepurchase',
              path: '/takepurchase',
              component: TakepurChase
            },
            {
              name:'proxy',
              path:'/proxy',
              component:Proxy
            },
            {
              name:'takeproxy',
              path:'/takeproxy',
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
              name:'documentaudit',
              path:'/documentaudit',
              component:Documentaudit
            },
            {
              name:'takeaudit',
              path:'/takeaudit',
              component:Takeaudit
            },
            {
              name:'uploadresults',
              path:'/uploadresults',
              component:Uploadresults
            }
            
          ]
        },
        
      ]
    })
   