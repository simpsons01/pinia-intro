import { ref } from "vue"

export default function(key, fallbackValue) {

  let _localStorageVal
  try {
    _localStorageVal = JSON.parse(localStorage.getItem(key))
  }catch(error) {
    console.warn(error)
  }

  const localStorageVal = ref(_localStorageVal || fallbackValue)

  const updateLocalStorageVal = (val) => {
    try {
      localStorageVal.value = val
      localStorage.setItem(key, JSON.stringify(localStorageVal.value))
    }catch(error) {
      console.log(error)
    }
  }

  return {
    val: localStorageVal,
    updateVal: updateLocalStorageVal
  }
}