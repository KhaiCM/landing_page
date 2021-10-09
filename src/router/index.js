import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CountDown from '@/components/CountDown'
import Covid from '@/components/Covid'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'count-down',
      component: CountDown
    },
    {
      path: '/hello',
      name: 'hello-HelloWorld',
      component: HelloWorld
    },
    {
      path: '/covid',
      name: 'covid',
      component: Covid
    },
    {
      path: '/date',
      name: 'date',
      component: Form
    }
  ]
})
