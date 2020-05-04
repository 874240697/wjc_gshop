import Vue from "vue"
import VueRouter from "vue-router"
import Msite from "../pages/Msite/Msite"
import Order from "../pages/Order/Order"
import Profile from "../pages/Profile/Profile"
import Search from "../pages/Search/Search"
import Login from "../pages/Login/Login"
Vue.use(VueRouter);
export default new VueRouter({
  routes:[
    {
      path:"/msite",
      component:Msite,
      meta:{
        showFooter:true
      }
    },

    {
      path:"/order",
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/profile",
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/search",
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/login",
      component:Login
    },
    //设置默认路由
    {
      path:"/",
      redirect:"/msite"
    }
  ]
})
