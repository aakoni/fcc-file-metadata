
const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.memoryStorage();
let upload = multer({storage: storage});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + ('/views/index.html'));
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({size: req.file.size}));
});

let listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

