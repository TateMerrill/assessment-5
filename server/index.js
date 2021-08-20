const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json()); // When we want to be able to accept JSON.
app.use(cors());

const ctrl = (require('./controller.js'))

app.get('/api/bucketlist', ctrl.getBucketList);

app.post('/api/bucklist', ctrl.createBucketList);

app.delete('/api/bucketlist', ctrl.deleteBucketList);

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
          ];
          // choose random compliment
          let randomIndex = Math.floor(Math.random() * compliments.length);
          let randomCompliment = compliments[randomIndex];
          
          res.status(200).send(randomCompliment);
          
          });

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A golden egg of opportunity falls into your lap this month.",
          "A fresh start will put you on your way",
          "A pleasant surprise is waiting for you.",
          "Advice, when most needed, is least heeded",
          "Pick battles big enough to matter, small enough to win.",];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
        return
});

app.get("/api/threat", (req, res) => {
  const threats = ["I hope you wake up with wet socks on.",
            "I hope you step on lego while walking downstairs barefoot.",
            "I hope both sides of your pillow are warm at night.",
            "I hope the next time you eat a chocolate chip cookie its actually a pumpkin raisen cookie.",
            ];

        let randomIndex = Math.floor(Math.random() * threats.length);
        let randomThreat = threats[randomIndex];

        res.status(200).send(randomThreat)
        return
});


app.listen(4000, () => console.log("Server running on 4000"));
