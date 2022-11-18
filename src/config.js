import path from 'path'

export const PORT = process.env.PORT || 3000

export const SASS_CONFIG = {
  src: path.join(__dirname, './sass'),
  dest: path.join(__dirname, './public/css'),
  indentedSyntax: true,
  outputStyle: 'expanded',
  prefix: '/css',
  debug: false
}