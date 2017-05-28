<template>
	<div id="app">
		<navbar></navbar>
		<router-view class="container-fluid"></router-view>
		<hello></hello>
	</div>
</template>

<script>
	import Hello from './components/Hello.vue'
	import Navbar from './components/Navbar.vue'
	
	export default {
		name: 'app',
		components: {
			Hello,
			Navbar
		}
	}
</script>
