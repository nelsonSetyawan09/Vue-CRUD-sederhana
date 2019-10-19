<template>
  <div>
       	<div class="row users" >
		    <div class="col s12 m4 user" v-for="user in users" :key="user.id">
		      <div class="card blue-grey darken-1">
		        <div class="card-content white-text">
		          <span class="card-title">{{user.name}}</span>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		          consequat.</p>
		        </div>
		        <div class="card-action">
		          <router-link :to="{name: 'User', params:{id: user.id}}">View</router-link>
		          <router-link :to="{name: 'EditUser', params:{id: user.id}}">Edit</router-link>
		          <a @click.prevent="deleteUser(user.id)">remove</a>
		        </div>
		      </div>
		    </div>
  		</div>

  		
  </div>
</template>

<script>

	import {mapGetters, mapActions} from 'vuex';
	export default {
	  name:"Users",
	  data(){
	  	return {
	  		
	  	}
	  },
	  methods:{
	  	...mapActions(['fetchUsers','deleteUser'])
	  },
	  computed:mapGetters(['users']),
	  created(){
	  	this.fetchUsers();
	  }
	}
</script>
<style scoped>
	.card-action a{
		cursor: pointer;
	}
</style>
