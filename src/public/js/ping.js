const getAccessToken = () => {
  const data = {
    grant_type: 'client_credentials',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    audience: AUDIENCE
  }

  const options = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  return axios.post(REQUEST_URL, data, options)
}

const pingPublic = () => {
  axios.post('/api/public')
    .then(({ status, data }) => {
      $('#result').text(`${status}: ${data.message}`)
    })
    .catch(error => $('#result').text(error))
}

const pingPrivate = () => {
  getAccessToken()
    .then((result) => {
      const {
        access_token: accessToken,
        token_type: tokenType
      } = result.data
      const headers = { authorization: `${tokenType} ${accessToken}` }

      return axios.post('/api/private', null, { headers })
    })
    .then(({ status, data }) => {
      $('#result').text(`${status}: ${data.message}`)
    })
    .catch((error) => {
      $('#result').text(error.message)
    })
}

$(function () {
  $('#public').on('click', pingPublic)
  $('#private').on('click', pingPrivate)
})