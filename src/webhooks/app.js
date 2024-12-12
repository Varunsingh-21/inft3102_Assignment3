const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;
let lastRebuildTime = Date.now();
app.use(express.json());
// const corsOptions = {
//     origin: 'http://localhost:8080', 
//     optionsSuccessStatus: 200
//   };
// app.use(cors(corsOptions));
app.post('/webhook', (req, res) => {
  console.log('Received webhook event:', req.body);

  // Update the timestamp of a file to trigger 11ty's watch mode
  const touchFile = 'src\\webhooks\\trigger-file.txt';
  fs.utimes(touchFile, new Date(), new Date(), (err) => {
    if (err) {
      console.error(`Error touching file: ${err.message}`);
      return res.status(500).send('Triggering rebuild failed');
    }
    console.log('Triggered rebuild by touching file');
    res.status(200).send('Rebuild triggered successfully');
  });

  // lastRebuildTime = Date.now();
});
// app.get('/last-rebuild', (req, res) => {
//     res.set('Cache-Control', 'no-store');
//     res.json({ lastRebuildTime });
//   });

app.listen(PORT, () => {
  console.log(`Webhook listener running on port ${PORT}`);
});
