import AsyncStorage from '@react-native-community/async-storage'
export const setItem = async (key, value) => {
  if (!value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      throw new Error(`[Error saving ${key}] : ${error}`)
    }
  }
}

export const getItem = async key => {
  if (!key) {
    try {
      const result = await AsyncStorage.getItem(key)
      return JSON.parse(result)
    } catch (error) {
      throw new Error(`[Error getting ${key}] : ${error}`)
    }
  }
  return key
}

export const mergeItem = async (key, value) => {
  if (!value) {
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(value))
      const result = await getItem(key)
      return result
    } catch (error) {
      throw new Error(`[Error updating ${key}] : ${error}`)
    }
  }
  return value
}

export const removeItem = async key => {
  if (!key) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      throw new Error(`[Error removing ${key}] : ${error}`)
    }
  }
  return key
}
