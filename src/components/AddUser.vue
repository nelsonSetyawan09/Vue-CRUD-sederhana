<template>
	<div>
		<div class="row">
			<div class="col s12 m12 l6 offset-l3">
                  <div class="card-panel">
                    <h4 class="header2">Add User </h4>

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

	import {mapActions} from 'vuex';
	export default {
	  name:"AddUser",
	  data(){
	  	return {
	  		user:{
	  			name:'',
	  			phone:'',
	  			website:''
	  		}
	  	}
	  },
	  methods:{
	  		...mapActions(['addUser']),

	  		// saat user ditambahkan dan page di arahkan ke home page,
			// di home page user yang ditambahkan akan hilang karena user tidak benar-benar tersimpan 
			// di server JSONPlaceholder
	  		submitted(){
	  			this.addUser(this.user);
	  			this.$router.push({name:'Home'});
	  		}
	  	}
	 
	}
</script>