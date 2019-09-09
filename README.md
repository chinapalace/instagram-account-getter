
## Available Scripts

Instagram Account project for Zyper Frontend Test

### Notes 

I provided the basic functionality to post a username, receive a jobId, and then poll the GET route until the job has completed. I didn't have time to add the functionality to get multiple accounts. To do this I would add a checkbox component to pass a boolean (individual) to the API. Also I'd wrap the AccountInfo components in an AccountList which would take in a multiple accounts and map each to an individual AccountInfo component. 

### Further Improvements 

Going forward I'd add unit testing for all the functions. My typical practice is to export async functions from their own file (accountService.js) and always have them return a value. This makes them easy to test in isolation. I'd refactor getAccounts() into a Promise which resolves when it receives a 200 response and returns that response. Then I'd mock the HTTP request/responses and test that the functions returned the correct response based on the values passed to them, including error handling. 

I'd style the app based on the needs of the end user. 

I'd add error handling with try/catch blocks in the async functions. It would be easy to set state.message to the error message in order to pass the info to the user. 