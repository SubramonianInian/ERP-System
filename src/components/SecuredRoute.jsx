import { Navigate, Outlet } from 'react-router-dom'
import { LocalStorage } from '../services/localStorageService'
const SecuredRoute = () => {
  let isAuthorized = LocalStorage.getKeyValue('authToken')
  return isAuthorized ? <Outlet /> : <Navigate to='/' />
}

export default SecuredRoute
