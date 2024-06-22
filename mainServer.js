const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(5500, () => {
    console.log('서버가 포트 5500에서 실행 중입니다.');
});
