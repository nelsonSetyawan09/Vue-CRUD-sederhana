<template>
	<div>
		<div class="row">
			<div class="col s12 m12 l6 offset-l3">
                  <div class="card-panel">
                    <h4 class="header2">Edit User </h4>

                    <div class="row">
                      <form class="col s12">

                        <div class="row">
                          <div class="input-field col s12">
                            <input placeholder="John Doe" 
                            	id="name" type="text"
                            	v-model="user.name">
                            <label for="name" class="active">Name</label>
                          </div>
                        </div>

                        <div class="row">
                     		<div class="input-field col s12">
	                            <input placeholder="0853-9972-5555" 
	                            	id="phone" type="text"
	                            	v-model="user.phone">
	                            <label for="phone" class="active">phone</label>
                          	</div>
                        </div>
                        <div class="row">
                     		<div class="input-field col s12">
	                            <input placeholder="www.github.com" 
	                            	id="website" type="text"
	                            	v-model="user.website">
	                            <label for="website" class="active">website</label>
                          	</div>
                        </div>

                          <div class="row">
                            <div class="input-field col s12">
                              <button class="btn cyan waves-effect waves-light right" 
                              	type="submit" name="action" @click.prevent="submitted">Submit
                                <i class="mdi-content-send right"></i>
                              </button>
                            </div>
                          </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>


<script>

	import {mapGetters,mapActions} from 'vuex';
	export default {
	  name:"EditUser",
	  data(){
	  	return {
	  		user:null
	  	}
	  	
	  },
	  methods:{
	  	...mapActions(['updateUser']),

	  	// saat user di edit dan page di arahkan ke home page,
		// di home page user yang di edit akan kembali seperti semula karena 
		// user tidak benar-benar tersimpan di server JSONPlaceholder
	  	submitted(){
	  		this.updateUser(this.user);
	  		this.$router.push({name:'Home'});
	  	}
	  },
	  computed:{
	  		...mapGetters(['users']),

	  },
	  created(){
	  		this.user = this.users.filter(user => user.id ==this.$route.params.id)[0];
	  		console.log(this.$route.params);
	  }
	 
	}
</script>