# Northcoders News

## The Breakdown

`Northcoders News` is a site intended to demonstrate the skills acquired whilst studying the Full Stack Developer Course at Northcoders. 

This application implements a cultivated understanding of `Javascript` and the utilisation of Agile software development practices such as Test-Driven Development.

## The Dependencies Involved

To build the Back End of the project, `Chai`, `Mocha`, `Supertest`, and `Nodemon` were used to test the code to confirm that the system was performing tasks as intended. The server uses `Express` and `Mongoose` to complete these tasks.

As for the front end, the site is built using `React` as the library, and also uses `Axios` for API calls, and `Moment` to assist with handling time and dates.

With that being said, let us get started:

---

## Getting Started

In order to run the App from within your workspace, we must install the necessary dependencies.

First, make sure you are in the right directory. If you aren't, navigate yourself into the workspace folder
```
cd FE2-NC-News
```
Once you are in the right directory, install the dependencies. Type into your terminal:
```
npm install
```
Once the dependencies are installed, you can then launch the site
```
npm start
```
React should then take you to a localhost of the site which you are free to explore


### However,
If you wish to check out the pages directly, the api is hosted on:

https://mason-nc-news.herokuapp.com/api/articles

site can be viewed on: 

http://mason-nc-news.netlify.com

---

## Navigating Through

The site and it's links have been designed in a [Reddit](www.reddit.com) inspired fashion where the Homepage hosts the most recent news articles first, from a combination of topics (or `subreddits` and in this instance `ncategories`).

The topic routes are indicated by
```
/nc/
```
which implies that you are browsing within a topic (`"ncategory"`)

### Routes Available:
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

In the top right hand side of the page there is a `Create Post` link which will take you to the submit article page.
```
/submit
```

If an article ID is input incorrectly in the URL, the error will be handled and you will be redirected to an error page.
```
/error
```

---

## Final Thoughts

Developing this project really opened the door and my mind to all the different parts and components that go into making an application. There were times when I did feel that the combination of tasks was overwhelming, but by implementing Agile software development practices into my process, I was able to overcome those obstacles and really break down the individual task at hand. 

I think some things that I would perhaps plan to do on future projects would be to consider using a UI framework on the front end to create a more visually dynamic page. This was a first time for me building a page with `HTML` and `CSS` and I am pleased with the results and animations that I was able to make, but I think a personal goal that I would work on would be to develop my skills with grids so that I can create a more uniform design and simplify my code.