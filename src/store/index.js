import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
  state: () => ({ path: '' }),
  getters: {

  },
  actions: {
    setPath() {
      window.localStorage.setItem("path-lc", this.path)
    }
  }
})
