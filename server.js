const express = require("express");
const database = require('./database')
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/", (req, res) => {
  
  res.render("index.ejs");
});

app.get("/notes", (req, res) => {
  const notes =database.getNotes()
  res.render("notes.ejs",{notes});
});

app.get('/notes/:id',(req,res) => {
  const id = +req.params.id;
  const note = database.getNote(id)
  if(!note){
    res.status(404).render("notes404.ejs");
    return
  }
  res.render("note.ejs",{note})
})

app.get("/createNote",(req,res)=>{
  res.render("createNote.ejs")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
