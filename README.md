
## Available Scripts

Instagram Account project for Zyper Frontend Test

### Notes 

I provided the basic functionality to post a username, receive a jobId, and then poll the GET route until the job has completed. I didn't have time to add the functionality to get multiple accounts. To do this I would add a checkbox component to pass a boolean (individual) to the API. Also I'd wrap the AccountInfo components in an AccountList which would take in a multiple accounts and map each to an individual AccountInfo component. 

### Further Improvements 

Going forward I'd add unit testing for all the functions. I'd refactor the async functions into pure functions and export them from the accountService.js file so that it'd be easy to test them in isolation. I'd mock the HTTP request/responses and make sure that the functions handled errors and returned the correct values based on the arguments passed to them. 

I'd style the app based on the needs of the end user. 

I'd add error handling with try/catch blocks in the async functions. It would be easy to set state.message to the error message in order to pass the info to the user. 