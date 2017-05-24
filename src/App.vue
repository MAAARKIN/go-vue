<template>
	<div id="app" class="container-fluid">
		<navbar></navbar>
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
