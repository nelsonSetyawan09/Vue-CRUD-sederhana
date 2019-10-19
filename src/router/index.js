import Vue from 'vue';
import VueRouter from 'vue-router';

// import U from '@/components/Home.vue';
import EditUser from '@/components/EditUser.vue';
import Users from '@/components/Users.vue';
import User from '@/components/User.vue';
import AddUser from '@/components/AddUser.vue';


Vue.use(VueRouter);

const routes = [
 	{ path: '', component: Users, name: 'Home' },
 	{ path: '/AddUser', component: AddUser,name: 'AddUser'},
 	{ path: '/edit-user/:id', component: EditUser, name: 'EditUser'},
 	{ path: '/User/:id', component: User,name: 'User'}


];


export default new VueRouter({
    routes,
    mode: 'history'

});
