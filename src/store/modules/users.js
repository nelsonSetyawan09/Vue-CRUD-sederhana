import axios from 'axios';

const state = {
	users:[
		{
			id:1,
			name:'qwe',
			city: 'makassar'
		},
				{
			id:2,
			name:'wer',
			city: 'palu'
		},
		{
			id:3,
			name:'rty',
			city: 'manado'
		}
	]
}
const getters = {
	users: (state) => state.users

}

const mutations = {
	setUsers: (state, users) => (state.users = users),
	addUser: (state, user) => state.users.unshift(user),
	deleteUser: (state, id) => (state.users = state.users.filter(user => user.id !== id)),
	updateUser: (state, updateuser) =>{
		const index = state.users.findIndex(user => user.id == updateuser.id);
		if(index){
			state.users.splice(index,1,updateuser);
		}
	}
}

const actions = {
	async fetchUsers({commit}){
		let response = await axios.get('https://jsonplaceholder.typicode.com/users');
		let data = response.data.map(({id,name, phone,website}) => ({id,name, phone,website}))
		commit('setUsers', data);
		console.log( data);
		
	},
	async addUser({commit}, obj){
		let response = await axios.post('https://jsonplaceholder.typicode.com/users',obj);
		commit('addUser', obj)
	},
	async deleteUser({commit},id){
		commit('deleteUser', id);
		await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
		
	},
	async updateUser({commit}, obj){
		let response = await axios.put(`https://jsonplaceholder.typicode.com/users/${obj.id}`, obj);
		commit('updateUser', obj);

	}
}

export default{
	state,
	getters,
	mutations,
	actions
}