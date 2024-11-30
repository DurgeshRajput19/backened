require('dotenv').config()


const express = require('express')

const app = express()

const Githubdata = {
    "login": "DurgeshRajput19",
    "id": 161695165,
    "node_id": "U_kgDOCaNFvQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/161695165?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/DurgeshRajput19",
    "html_url": "https://github.com/DurgeshRajput19",
    "followers_url": "https://api.github.com/users/DurgeshRajput19/followers",
    "following_url": "https://api.github.com/users/DurgeshRajput19/following{/other_user}",
    "gists_url": "https://api.github.com/users/DurgeshRajput19/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/DurgeshRajput19/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/DurgeshRajput19/subscriptions",
    "organizations_url": "https://api.github.com/users/DurgeshRajput19/orgs",
    "repos_url": "https://api.github.com/users/DurgeshRajput19/repos",
    "events_url": "https://api.github.com/users/DurgeshRajput19/events{/privacy}",
    "received_events_url": "https://api.github.com/users/DurgeshRajput19/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-02-29T07:53:24Z",
    "updated_at": "2024-11-26T13:03:23Z"
  }

app.get('/',(req,res) => {
    res.send('hello world')
})
app.get('/github',(req,res) => {
    res.json(Githubdata)
})

app.get('/home',(req,res) => {
    res.send('hello world home page')
})

app.get('/about',(req,res) => {
    res.send('<h1> about section </h1>')
})

app.listen(process.env.PORT, () =>{
    console.log("your website  ")
})