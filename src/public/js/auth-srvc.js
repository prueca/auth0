const auth = new auth0.WebAuth({
  domain: DOMAIN,
  clientID: CLIENT_ID,
  scope: SCOPE
})