import React from 'react'

export const AccountInfo = (props) => {
  const accounts = props.accounts[0].output
  const accountItems =  Object.keys(accounts).map(function(key) {
    return <li>Key: {key}, Value: {accounts[key]}</li>})

  return (
    <div>
      <h3>Results</h3>
      <hr/>
      <div>
        <ul>
          {accountItems}
        </ul>
      </div>
    </div>
  )
}
