const cors = require("cors")
const express = require("express")

const app = express()
const PORT = process.env.PORT || 3001

app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/", (req ,res)=>{
    headers={"http_status":200, "cache-control": "no-cache"}
    body={"status": "available"}
    res.status(200).send(body)
})

app.get("/highscore", (req ,res)=>{
    headers={"http_status":200, "cache-control": "no-cache"}
    body=
    [
        {
            "name": "Nissen",
            "score":2000
        },
        {
            "name": "Helena",
            "score":1500
        },
        {
            "name": "Ebba",
            "score":700
        },
        {
            "name": "Chris",
            "score":800
        }
    ]
    res.status(200).send(body)
})

app.listen(PORT , ()=>{
    console.log(`STARTED LISTENING ON PORT ${PORT}`)
});