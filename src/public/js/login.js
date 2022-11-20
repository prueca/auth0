const login = evt => {
  evt.preventDefault()

  const opt = {
    headers: {
      'content-type': 'application/json'
    }
  }
  const data = {
    client_id: CLIENT_ID,
    client_secret: SECRET,
    connection: 'email',
    email: $('#email').val(),
    send: 'code'
  }

  axios.post(`${BASE_URL}/passwordless/start`, data, opt)
    .then(response => console.log(response.data))
    .catch(error => console.log(error.message))
}

$(() => $('#login-form').on('submit', login))