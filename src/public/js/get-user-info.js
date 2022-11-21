const userInfoCallback = (error, profile) => {
  if (error) {
    return console.log('Something went wrong.', error)
  }

  $('.user').text(JSON.stringify(profile, null, 4))
}

const parseHashCallback = (error, { accessToken }) => {
  if (error) {
    return console.log('Something went wrong.', error)
  }

  if (accessToken) {
    auth.client.userInfo(accessToken, userInfoCallback)
  }
}

$(function () {
  if (!window.location.hash) {
    return $('.user').text('No hash found')
  }

  auth.parseHash({ hash: window.location.hash }, parseHashCallback)
})