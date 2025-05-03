import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const auth = await AsyncStorage.getItem(
      `${this.namespace}:auth`
    )

    return auth? auth: undefined;
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    try {
      await AsyncStorage.setItem(
        `${this.namespace}:auth`,
        accessToken
      )
    } catch(error){
      console.log('error', error)
      throw error
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(
        `${this.namespace}:auth`,
      )
    } catch(error){
      console.log('error', error)
      throw error
    }
  }
}

export default AuthStorage;