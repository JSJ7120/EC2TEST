const express = require("express");
const app = express();
const path = require("path");

app.listen(8080, () => {
  console.log("listening on 8080");
});

//특정 폴더의 파일들 전송 가능
app.use(express.static(path.join(__dirname, "../react-test/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../react-test/build/index.html"));
});
