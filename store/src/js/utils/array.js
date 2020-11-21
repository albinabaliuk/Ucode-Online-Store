export const indexOf = (array, cb) => {
  for(let i = 0; i < array.length; i++) {
    const isSuccess = cb(array[i], i, array)

    if(isSuccess) {
      return i
    }
  }

  return -1
}