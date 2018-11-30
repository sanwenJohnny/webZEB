export default {
  name: 'arrayAddon',
  // indexOf (arr, val) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] == val) return i
  //   }
  //   return -1
  // },
  remove (arr, val) {
    const index = arr.indexOf(val)
    if (index > -1) {
      arr.splice(index, 1)
    }
  }
}
