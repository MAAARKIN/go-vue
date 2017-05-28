// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Foo from './components/Foo.vue'
import Principal from './components/Principal.vue'

Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Principal },
		{ path: '/foo', component: Foo }
	]
})

new Vue({ // eslint-disable-line no-new
	router,
	el: '#app',
	render: (h) => h(App)
})
