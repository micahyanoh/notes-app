const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
//app.use(express.static("public"))
app.get("/", (req, res) => {
  res.render("index.ejs");
});
const notes = [
  {
    id: 1,
    timestamp: Date.now(),
    title: "My first Notes",
    content:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
  },
  {
    id: 2,
      timestamp: Date.now(),
    title: "My second Notes",
    content:
      "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. ",
  },
];
app.get("/notes", (req, res) => {
  res.render("notes.ejs",{notes});
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
