import { ref, computed } from "vue";
import { defineStore } from "pinia";
import userDao from '../daos/userDao.js';
import sha256 from 'crypto-js/sha256';

export const useUserStore = defineStore("user", {
state: () => (
	{ 
		users: [],
		selectedUser: {},
	}
	),
	getters: {
		getUsers: (state) => state.users,
	},
	actions: {
		async getAllUsers() {
			await userDao.getAllUsers().then((res) => {
				this.users = res["recordset"];
			});
		},
		getUser(UserUID) {
			
		},
		saveUser(user) {
			const savedUser = userDao.saveUser(user);
			window.console.log("Saved User", savedUser);
		},
		deleteUser(UserUID) {
			
		},
		hashPassword(password) {
			return sha256(password);
		}
	},
});
