# Web Interface To Embedded system
<img src="./static/flow.jpg">

## Setting Up Environment
### Tech Stacks
React<br>
Flask<br>
SQlite(3)<br>
ngrok
### Frontend
<strong>Prerequisites</strong>: Node.js, npm/npx/yarn

Navigate to the `frontend/` directory

Run `npm install`


## Backend
<strong>Prerequisites</strong>: python, pip

Run:

`pip install -r requirements.txt`<br>
`flask run --host=0.0.0.0`

## Database
<strong>Prerequisites</strong>: sqlite(3)

To open database run

` sqlite3 door.db `


## Make server visible on the internet
`ngrok http 5000  `