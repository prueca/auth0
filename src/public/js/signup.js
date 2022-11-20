const signup = evt => {
  evt.preventDefault()

  const options = {
    email: $('#email').val(),
    password: $('#pwd').val(),
    connection: REALM
  }

  const callback = (error, result) => {
    if (error) {
      console.log('Oops! Registration failed.')
      console.log(error)
      return
    }

    console.log('Registration successful!')
    console.log(result)
    window.location.href = '/embedded?signup=1'
  }

  auth.signup(options, callback)
}

$(() => $('#signup-form').on('submit', signup))