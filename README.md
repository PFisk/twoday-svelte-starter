# Svelte + twoday!

Welcome to a workshop where the point is to learn a bit more about frontend-development using svelte as UI-framework

As you already know, prequisites for completing this workshop is the following:
* a computer...
* node
* npm
* your favorite code-editor

In order to get the source code for this workshop, go to the github-repo here: 

https://github.com/JonasJore/twoday-svelte-starter
L
then fork the repo to your account and clone to your computer using:

`git clone git@github.com:<user-name>/twoday-svelte-starter.git`

in order to get started with local development, navigate to the project in the terminal and use

`npm install`

then finally, run the development of the project using

`npm run dev`

You should now be running the workshop-project locally on your machine. Congrats!

Calls against backend are done in `./src/api/HttpClient.ts` 

# The backend  

Route for the backend we are going to fetch from is:

`https://elastic.snaplogic.com/api/1/rest/slsched/feed/twoday/NGG/admin/SQL-to-REST%20Task`

query params we will use in the url:
| Key | Value | Description |
| -- | -- | -- |
| tableName | brewer_sensor | table name we will request from the backend |
| limit | 100 | Number of entries we wish to limit the response to |

example: 

GET `https://elastic.snaplogic.com/api/1/rest/slsched/feed/twoday/NGG/admin/SQL-to-REST%20Task?tableName=brewer_sensor&limit=2` will yield following response:

```json
[
    {
        "Timestamp": "0",
        "Temperature": 25.000000000000000000,
        "Humidity": 50.000000000000000000,
        "Pressure": 1000,
        "ProductID": 1,
        "beer_name": "Dale's Pale Ale",
        "brewery_id": 1,
        "brewery_name": "Against the Grain Brewery"
    },
    {
        "Timestamp": "1",
        "Temperature": 24.951488314681864011,
        "Humidity": 50.841989473948146383,
        "Pressure": 1005,
        "ProductID": 1,
        "beer_name": "Dale's Pale Ale",
        "brewery_id": 1,
        "brewery_name": "Against the Grain Brewery"
    }
]
```

Bearer token will have to be included as a Authorization header: `Authorization: "Bearer {bearer_token}"`

Good luck!
