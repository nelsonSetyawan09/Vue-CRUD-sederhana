<template>
	<header class="header">
		<nav>
		    <div class="nav-wrapper">
		      <router-link class="brand-logo" :to="{name: 'Home'}">Vue-Crud</router-link>
		      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

		      <ul id="nav-mobile" class="right hide-on-med-and-down">
		        <li>
		        	<router-link :to="{name: 'AddUser'}">Upload</router-link>
		        </li>
		      </ul>
		      <ul class="sidenav" id="mobile-demo">
			     <li>
		        	<router-link :to="{name: 'AddUser'}">Upload</router-link>
		        </li>
		        <li><a href="sass.html">About</a></li>
			  </ul>
		    </div>
  		</nav>
        
	</header>
</template>


<script>

	
	export default {
	  name:"Header",
	  data(){
	  	return {
	  		
	  	}
	  }
	 
	}
</script>

</script>

<style scoped>
 .header{
 	margin-bottom: 25px;
 }
 .brand-logo{
 	padding-right: 15px !important;
 }
</style>
