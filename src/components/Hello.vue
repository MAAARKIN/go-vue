<template>
	<div id="hello">
		<div id="echo">
			<form id="" example>
				<input type="text" v-model="meuObj.teste">
				<button @click.prevent="greeting">teste</button>
			</form>
		</div>
		<h1>{{ msg }}</h1>
		<h2>Ecosystem</h2>
		<ul>
			<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
			<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li><a href="https://github.com/vuejs/vueify" target="_blank">vueify</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
		</ul>
	</div>
</template>

<script>
	import {HTTP} from '../helpers/http-common'

	export default {
		name: 'hello',
		data () {
			return {
				meuObj: {
					teste: 'teste'
				},
				msg: 'Welcome to Go-Vue.js App'
			}
		},
		methods: {
			greeting: function(event) {
			// alert('Do something')
			this.meuObj.teste = ''

			HTTP.get('/')
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log('error: '+error)
			})
		}
	}
}
</script>

<style scoped>
	#hello {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
