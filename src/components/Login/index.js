import {Component} from 'react'
import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

import {
    MainContainer,
    Content,
    LoginText,
    FormContainer,
    CardContainer,
    CardHeading,
    Button,
    GoogleSignIn,
} from './styledComponents'

class Login extends Component {
    state = {
        email: '',
        showError: false,
        errorMessage: '',
    }

    onSubmitSuccess = jwtToken => {
        const {history} = this.props

        Cookies.set('jwt_token', jwtToken, {
            path: '/',
            expires: 30,
        })
        history.replace('/')
    }

    onSubmitFailure = errorMessage => {
        this.setState({showError: true, errorMessage})
    }

    submitForm = async event => {
        event.preventDefault()
        const url = 'https://apis.ccbp.in/login'
        const {email} = this.state
        const userDetails = {email}
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            this.onSubmitSuccess(data.jwt_token)
        } else {
            this.onSubmitFailure(data.error_msg)
        }
    }

    render() {
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            return <Navigate to="/" />
        }
        return (
            <MainContainer>
                <Content  />
                <LoginText>Users can log in to the application using Google Sign-In, which automatically fetches their username and assigns a default profile picture for new users.</LoginText >
                <FormContainer>
                    <CardContainer src="./assets/Rectangle 42069.png" alt="rectangle-069" />
                        <CardHeading src="./assets/Group 1171276168.png" alt="group-6168" />
                        <Button>
                          <GoogleSignIn src="./assets/Group 1171276160.png" alt="group-6160" />
                        </Button>
                </FormContainer>
            </MainContainer>
        )
    }
}

export default Login
