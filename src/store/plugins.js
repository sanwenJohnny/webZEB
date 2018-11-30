import storage from '@/utils/session-lite'
import Tools from '@/utils/tools'

export const createSessionPlugin = (key, mappings, whitelist = []) => {
  let k = key || 'hqbsfe'
  return (store) => {
    store.subscribe((mutation, state) => {
      if (whitelist.findIndex(m => m === mutation.type) >= 0) {
        let cd = Object.create(null)
        Object.keys(state).forEach(k => {
          if (mappings[k]) {
            cd[k] = Tools.copy(state[k], mappings[k])
          }
        })
        console.log(cd)
        storage.set(k, cd)
      }
    })
  }
}
