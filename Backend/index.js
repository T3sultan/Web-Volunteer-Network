const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pmkd7ku.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const events = client.db("volunteer-networks");
    const volunteerCollection = events.collection("volunteer");

    app.post("/volunteer", async (req, res) => {
      const newVolunteer = req.body;
      const result = await volunteerCollection.insertOne(newVolunteer);
      res.send(result);
    });
    app.get("/volunteer", async (req, res) => {
      const query = {};
      const cursor = volunteerCollection.find(query);
      const volunteer = await cursor.toArray();
      res.send(volunteer);
    });
  } finally {
    //      await client.close()
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("running volunteer network");
});
app.listen(port, () => {
  console.log(`'running volunteer network`, port);
});
