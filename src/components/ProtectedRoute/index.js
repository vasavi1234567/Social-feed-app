import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({element, ...rest}) => {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
        return <Navigate to="/login" />
    }
    return element
}

export default ProtectedRoute
