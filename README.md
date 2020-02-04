# Info

This is a project that summarizes articles.
You have to provide a URL to the article that you want to summarize and hit submit.
The app will spit out several sentences that best summarize the article.

## Technical Details

The application is using Aylien NLP service API.
The application is calling Aylien endpoints from the node.js server. 
The application uses service-workers for best performance.

## Tests

Use jest to run tests.

There is only one test written and it's checking if the formatResponse function is working correctly.