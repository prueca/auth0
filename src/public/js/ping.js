const pingPublic = () => {
  axios.post('/api/public')
    .then(({ status, data }) => {
      $('#result').text(`${status}: ${data.message}`)
    })
    .catch(error => $('#result').text(error.message))
}

const pingPrivate = () => {
  axios.post('/api/private')
    .then(({ status, data }) => {
      $('#result').text(`${status}: ${data.message}`)
    })
    .catch(error => $('#result').text(error.message))
}

$(function () {
  $('#public').on('click', pingPublic)
  $('#private').on('click', pingPrivate)
})