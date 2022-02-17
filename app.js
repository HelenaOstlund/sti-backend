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

app.get("/fotboll", (req ,res)=>{
    headers={"http_status":200, "cache-control": "no-cache"}
    body=
    [
        {
            "name": "AIK",
            "points":9,
            "logo":"https://www.allsvenskan.se/_/image/0c02711d-d44e-4124-a555-0df3d8264551:0fb201f22e823629dada3ee33327a5b70963120b/width-110/AIK.svg"
        },
        {
            "name": "DIF",
            "points":6,
            "logo":"https://www.allsvenskan.se/_/image/939ceff1-1923-48b0-af9a-997dfe4fba51:126ef93a454f04822c9f8575831a0871abd06398/width-110/Djurg%C3%A5rden.svg"
        },
        {
            "name": "HIF",
            "points":5,
            "logo":"https://www.allsvenskan.se/_/image/2d712890-bb18-4855-92fa-c8fdaae520ad:c18dd882a8d722f14665b054d25483089cf57a12/width-110/Hammarby.svg"
        },
        {
            "name": "HIF",
            "points":3,
            "logo":"https://www.allsvenskan.se/_/image/e0013018-34ee-4f8f-8ffb-8af994b18a25:c8175bb4562ee694fbdfc6acd7e9ceb1848ea83f/width-110/Helsingborgs%20IF.svg"
        },
        {
            "name": "BP",
            "points":3,
            "logo":"https://www.allsvenskan.se/_/image/e0013018-34ee-4f8f-8ffb-8af994b18a25:c8175bb4562ee694fbdfc6acd7e9ceb1848ea83f/width-110/Helsingborgs%20IF.svg"
        }
    ]
    res.status(200).send(body)
})

app.listen(PORT , ()=>{
    console.log(`STARTED LISTENING ON PORT ${PORT}`)
});