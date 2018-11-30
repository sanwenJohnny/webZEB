const cityLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const getItem = (letter, list) => {
  let arr = []
  list && list.map(item => {
    if (item.searchKey == letter) {
      var _item = {
        name: item.addressName,
        code: item.addressCode
      }
      arr.push(_item)
    }
  })
  return arr
}
export default {
  addrList: state => {
    return state.addrData && state.addrData.allCodeList
  },
  isHideSea: state => {
    return state.addrData && state.addrData.isHideSea
  },
  stateArr: state => {
    if (state.addrData) {
      let arr = []
      const allList = state.addrData.allCodeList
      cityLetter.map(listItem => {
        let itemArr = getItem(listItem, allList)
        if (itemArr.length > 0) {
          arr.push({
            letter: listItem,
            list: itemArr
          })
        }
      })
      return arr
    }
    return null
  },
  hostList: state => {
    return state.addrData && state.addrData.hotCodeList
  },
  userInfo: state => {
    return state.userInfo
  }
}
