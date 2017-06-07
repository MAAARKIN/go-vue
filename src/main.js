// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({routes})

// router.beforeEach((to, from, next) => {
// 	console.log("to")
// 	console.log(to)
// 	console.log("from")
// 	console.log(from)
// 	next()
// })

new Vue({ // eslint-disable-line no-new
	router,
	el: '#app',
	render: (h) => h(App)
})
