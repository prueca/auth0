import path from 'path'

export const PORT = process.env.PORT || 8000

export const SASS_CONFIG = {
  src: path.join(__dirname, './sass'),
  dest: path.join(__dirname, './public/css'),
  indentedSyntax: true,
  outputStyle: 'expanded',
  prefix: '/css',
  debug: false
}

export const AUTH_CONFIG = {
  authRequired: process.env.AUTH_REQUIRED === '1',
  auth0Logout: process.env.AUTH0_LOGOUT === '1',
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
}