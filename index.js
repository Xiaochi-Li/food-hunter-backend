const express = require('express');
const app = express();

app.get('/', (req,res)=> {
  res.send("Hello World");
});

app.get('/api/lists',(req,res)=>{
  res.send([{a:"noodle"},{a:"chicken"}])
})

const port = 3000;
app.listen(port, () => console.log(`Listening on oprt ${port}...`))
