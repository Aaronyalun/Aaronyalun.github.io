import httpIns from "../htttp/http";

export default {
  userName(store, val) {
    store.commit("userName", val)

  },
  async Search({state, commit}) {
    commit("initUpdate")
    // let userName = state.userName
    commit("beforeAdddate")
    let {data} = await httpIns.get(`/search/users?q=${state.userName}`)
    let {items} = data
    commit("updateUsers", items)
    if (items.length === 0) {
      commit("beforeNodate")
    } else {
      commit("beforeHasdate")
    }


  }
}
