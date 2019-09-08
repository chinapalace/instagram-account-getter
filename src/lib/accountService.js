const baseUrl = ' https://fe-test-zyper-engagement.herokuapp.com'

export const fetchAccounts = (accountName) => {
  return fetch(baseUrl + '/start', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(accountName)
  }).then(res => console.log(res.json()))
}