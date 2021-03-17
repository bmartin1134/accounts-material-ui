Package.describe({
  summary: 'Material UI Components for Useraccounts-React',
  version: '1.0.5',
  name: 'bmartin1134:accounts-material-ui',
  git: 'https://github.com/bmartin1134/accounts-material-ui.git',
  documentation: null
})

Package.onUse(api => {
  api.versionsFrom('1.6.1')

  api.use('ecmascript')
  api.mainModule('index.js', 'client')
})
