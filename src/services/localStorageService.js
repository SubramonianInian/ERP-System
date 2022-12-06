// The local storage service
class LocalStorageService {
  addKey = ({ key, value }) => {
    localStorage.setItem(key, value)
  }

  getKeyValue = (key) => {
    return localStorage.getItem(key)
  }
}

export const LocalStorage = new LocalStorageService()
