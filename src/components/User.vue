<template>
	<div>
		<div class="row">
		    <div class="col s12 m6 offset-m3">
		      <div class="card blue-grey darken-1">
		        <div class="card-content white-text">
		          <span class="card-title">{{user.name}}</span>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		          consequat.</p>
		          <hr>
		          <span style="color: orange">phone : {{user.phone}}</span><br>
		          <span style="color: orange">website : {{user.website}}</span>

		        </div>
		        <div class="card-action view-user">
		          <router-link :to="{name: 'EditUser'}">Edit</router-link>
		          <a @click.prevent="removeUser(user.id)">remove</a>
		        </div>
		      </div>
		    </div>
	 	 </div>
	</div>
</template>


<script>

	import {mapGetters, mapActions} from 'vuex';
	export default {
	  name:"User",
	  data(){
	  	return {
	  		user:null
	  	}
	  	
	  },
	  methods:{
			...mapActions(['deleteUser']),

			// saat user terhapus dan page di arahkan ke home page,
			// di home page user akan kembali muncul karena user tidak benar-benar terhapus 
			// di server JSONPlaceholder
			removeUser(id){
				this.deleteUser(id);
				this.$router.push({name:'Home'})
			}
	  },
	  computed:{
	  		...mapGetters(['users'])
	  },
	  created(){
	  		this.user = this.users.filter(user => user.id ==this.$route.params.id)[0];
	  		console.log(this.$route.params);
	  }
	 
	}
</script>

<style scoped>
	.view-user a{
		cursor: pointer;
	}
</style>
