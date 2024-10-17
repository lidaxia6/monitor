const express = require('express');
const path = require('path');
const app = express();

// 将打包后的目录作为静态资源目录
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, './')));

app.get('/l-monitor-upload', (req, res) => {
  console.log('req ==>', req.query);
  res.send('upload');
});

const port = 3000;
app.listen(port, () => {
  console.log(`monitor server running on port ${port}`);
});
