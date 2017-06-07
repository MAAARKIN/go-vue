import Principal from './components/Principal.vue'
import Foo from './components/Foo.vue'
import Login from './components/auth/Login.vue'
import Policy from './helpers/policy-filter'

export default [
	{ path: '/', component: Principal },
	{ path: '/Login', component: Login},
	{ path: '/foo', component: Foo, beforeEnter: Policy},
	{ path: '*', component: Principal }
]