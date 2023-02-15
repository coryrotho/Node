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
  },
  actions: {
    getAllUsers() {
      this.users = userDao.getAllUsers();
    },
    getUser(UserUID) {

    },
    saveUser(User) {

    },
    deleteUser(UserUID) {

    },
    hashPassword(password) {
      return sha256(password);
    }
  },
});
