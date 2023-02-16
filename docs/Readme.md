# devxSchool - API REFERENCE 
## TO RUN THE APPLICATION 
-`Run following commands`
-`1. open terminal`
-`2. cd your_own_directory`
-`3. RUN - 'git clone git@github.com:parmeet10/devxSchool-api.git'`
-`4. cd devxSchool-api`
-`5. npm install `
-`6. npm start`


## URLS
 - `http://localhost:3000/pong`
 
 ## 1.ping

 ### Description 

 The reachability of the host can be checked through the Ping API. The API responds with a `pong` to communicate availability to the requesting client.

 ### Method

`GET`

### URL

`/ping`

### Headers

`None`

### Query

`None`

### Body

`None`

### Response Type

`String`

### Response

```
pong
```

## TO TEST WEBSOCKETS

 - `ws://localhost:3000?userId=1`
 
 ### Description 

 EndPoint to connect to web-socket conenction through PostMan

 ### Method

`RAW`

### URL

`ws://localhost:3000`

### Headers

`None`

### Query

`userId=1`

### Message
```
`{
    "message": "Hello welcome to my new WebSocket Connection"
}`
```
### Response Type

`String`

### Response(POST)

```
{ "message": "Hello welcome to my new WebSocket Connection" }
```

________

Send some sample messages and detach from the socket connection to further test the API. Connect again with the same userId parameters and you will be broadcasted with the prior progress on the postman response Section.
You can create as many distinct users as you like by supplying user ids in the parameters, and all progress will be received by the server efficiently.
