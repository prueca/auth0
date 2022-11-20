const login = evt => {
  evt.preventDefault()

  const options = {
    username: $('#email').val(),
    password: $('#pwd').val(),
    realm: REALM,
    redirectUri: LOGIN_REDIRECT_URI,
    responseType: LOGIN_RESPONSE_TYPE
  }

  const callback = (error, result) => {
    if (error) {
      console.log('Oops! Login failed.')
      console.log(error)
      return
    }

    console.log('Login successful!')
    console.log(result)
  }

  // immediately redirects to LOGIN_REDIRECT_URI
  auth.login(options, callback)
}

$(() => $('#login-form').on('submit', login))