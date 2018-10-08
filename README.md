Northcoders News:

Install necessary packages

```
npm install
```

api is hosted on: https://mason-nc-news.herokuapp.com/api

site can be viewed on: http://mason-nc-news.netlify.com


Routes Available:
```
/
```
Takes you to the homepage displaying all articles sorted by the most recent. 
The Northcoders News logo in the top left will be your link back to this homepage.
Create Post will take you to a page to add an article to the availble topics
The NCategories will take you to the pages that display all the articles belonging to that topic, ex:
```
/nc/coding
/nc/football
/nc/cooking
```

Each article has buttons where you can either upvote or downvote the post.
Clicking on the article's title will take you to the page that holds the text belonging to that article as well as user's comments to that article. ex:
```
/nc/:topic/:article_id
```
You can also post your own comment to the article. 
You can delete comments by clicking 'delete' within the comment