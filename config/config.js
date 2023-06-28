module.exports = {
  name: 'Area Code Lookup',
  acronym: 'AREA',
  description: 'Looks up area code prefix to determine US State',
  customTypes: [
    {
      key: 'USPhoneNumber',
      regex: /\(?(\d{3})[\)?\ |\.|\-]\d{3}[\ |\.|\-]\d{4}/
    }
  ],
  defaultColor: 'light-gray',
  logging: { level: 'info' },
  request: {
    cert: '',
    key: '',
    passphrase: '',
    ca: '',
    proxy: ""
  }
};
