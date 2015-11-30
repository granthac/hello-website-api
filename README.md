# hello-website-api

### Mon Nov 30 16:06:05 MST 2015 - Define create endpoints and test'em

- [x] create beta signup route and callback
- [x] create friend referral route and callback
- [x] create sales demo route and callback

- [x] test'em with `curl`

```
########################################################
####### interact with create beta signup
$ curl --verbose -XPOST http://localhost:5000/api/beta-signups
*   Trying ::1...
* Connected to localhost (::1) port 5000 (#0)
> POST /api/beta-signups HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 501 Not Implemented
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 15
< ETag: W/"f-JXt8VLVJ68hSR+zkU49oHw"
< Date: Mon, 30 Nov 2015 23:05:09 GMT
< Connection: keep-alive
<
* Connection #0 to host localhost left intact
Not Implemented


########################################################
####### interact with create friend referral
$ curl --verbose -XPOST http://localhost:5000/api/friend-referrals
*   Trying ::1...
* Connected to localhost (::1) port 5000 (#0)
> POST /api/friend-referrals HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 501 Not Implemented
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 15
< ETag: W/"f-JXt8VLVJ68hSR+zkU49oHw"
< Date: Mon, 30 Nov 2015 23:05:22 GMT
< Connection: keep-alive
<
* Connection #0 to host localhost left intact
Not Implemented


########################################################
####### interact with create sales demo request
$ curl --verbose -XPOST http://localhost:5000/api/sales-demo-requests
*   Trying ::1...
* Connected to localhost (::1) port 5000 (#0)
> POST /api/sales-demo-requests HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 501 Not Implemented
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 15
< ETag: W/"f-JXt8VLVJ68hSR+zkU49oHw"
< Date: Mon, 30 Nov 2015 23:05:33 GMT
< Connection: keep-alive
<
* Connection #0 to host localhost left intact
Not Implemented


########################################################
####### interact with stuff that doesn't exist:

####### a resource we don't support
$ curl --verbose -XPOST http://localhost:5000/api/some-other-things
*   Trying ::1...
* Connected to localhost (::1) port 5000 (#0)
> POST /api/some-other-things HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 404 Not Found
< X-Powered-By: Express
< X-Content-Type-Options: nosniff
< Content-Type: text/html; charset=utf-8
< Content-Length: 35
< Date: Mon, 30 Nov 2015 23:05:43 GMT
< Connection: keep-alive
<
Cannot POST /api/some-other-things
* Connection #0 to host localhost left intact


####### a method we don't support
$ curl --verbose -XGET http://localhost:5000/api/sales-demo-requests
*   Trying ::1...
* Connected to localhost (::1) port 5000 (#0)
> GET /api/sales-demo-requests HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 404 Not Found
< X-Powered-By: Express
< X-Content-Type-Options: nosniff
< Content-Type: text/html; charset=utf-8
< Content-Length: 36
< Date: Mon, 30 Nov 2015 23:09:43 GMT
< Connection: keep-alive
<
Cannot GET /api/sales-demo-requests
* Connection #0 to host localhost left intact

```


### Mon Nov 30 15:50:15 MST 2015 - Get things running on heroku...

- [x] `git push heroku`
- [x] `heroku open`
- [x] bugfix: use PORT environment variable heroku passes to us or we won't be able to start

### Mon Nov 30 15:32:11 MST 2015 - Setup node + heroku plumbing

Some useful ideas here:
https://devcenter.heroku.com/articles/node-best-practices

Initial content for server.js came from here:
http://expressjs.com/starter/hello-world.html

- [x] create Procfile
  - [x] Define web process - `web: node server.js`
- [x] generate package.json with `npm init --yes`
- [x] install express and track the dependency
  - [x] `npm install express --save` (output below)
- [x] create project on heroku
  - [x] `heroku create` (output below)

```
$ npm init --yes
Wrote to /Users/levi/hello-website-api/package.json:

{
  "name": "hello-website-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/levicook/hello-website-api.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/levicook/hello-website-api/issues"
  },
  "homepage": "https://github.com/levicook/hello-website-api#readme"
}
```

```
$ npm install express --save
npm WARN package.json hello-website-api@1.0.0 No description
express@4.13.3 node_modules/express
├── utils-merge@1.0.0
├── content-type@1.0.1
├── methods@1.1.1
├── range-parser@1.0.3
├── etag@1.7.0
├── path-to-regexp@0.1.7
├── vary@1.0.1
├── serve-static@1.10.0
├── escape-html@1.0.2
├── merge-descriptors@1.0.0
├── cookie@0.1.3
├── array-flatten@1.1.1
├── parseurl@1.3.0
├── cookie-signature@1.0.6
├── fresh@0.3.0
├── content-disposition@0.5.0
├── depd@1.0.1
├── qs@4.0.0
├── finalhandler@0.4.0 (unpipe@1.0.0)
├── on-finished@2.3.0 (ee-first@1.1.1)
├── debug@2.2.0 (ms@0.7.1)
├── proxy-addr@1.0.8 (forwarded@0.1.0, ipaddr.js@1.0.1)
├── type-is@1.6.9 (media-typer@0.3.0, mime-types@2.1.7)
├── accepts@1.2.13 (negotiator@0.5.3, mime-types@2.1.7)
└── send@0.13.0 (destroy@1.0.3, statuses@1.2.1, ms@0.7.1, mime@1.3.4, http-errors@1.3.1)
```

```
$ heroku create
Creating arcane-fortress-3524... done, stack is cedar-14
https://arcane-fortress-3524.herokuapp.com/ | https://git.heroku.com/arcane-fortress-3524.git
Git remote heroku added
```

### Mon Nov 30 15:29:01 MST 2015 - Setup source code repository

- [x] create project on github
  - [x] github.com/{username}/hello-website-api
  - [x] cloned the project `git clone github.com/{username}/hello-website-api ~/hello-website-api`
  - [x] seleced .gitignore for node
  - [x] seleced MIT license
