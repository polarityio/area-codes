module.exports = {
  name: 'Area Code Lookup',
  acronym: 'AreaCode',
  description: 'Looks up area code prefix to determine US State',
  customTypes: [
    {
      key: 'USPhoneNumber',
      regex: /\(?(\d{3})[\)?\ |\.|\-]\d{3}[\ |\.|\-]\d{4}/
    }
  ]
};
