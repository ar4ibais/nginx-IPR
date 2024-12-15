const express = require("express") 
const path = require("path") 

const app = express()
const port = 3000;


app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log(`Request served`);
});


app.listen(port, () => {
  console.log(`server is running by port ${port}`);
})