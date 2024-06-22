const express = require('express');
const cors = require('cors');
const app = express();
const port = 5500;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const users = [
    { username: 'admin', password: 'admin123' }
];

// 라우트 설정
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html'); // 로그인 페이지 파일
});

// 회원가입 라우트
app.post('/signup', (req, res) => {
    console.log('회원가입 요청 받음:', req.body); // 요청 데이터 로깅
    const { username, password } = req.body;
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
        console.log('이미 존재하는 사용자:', username);
        res.status(409).json({ result: 'fail', message: '이미 존재하는 사용자입니다.' });
    } else {
        users.push({ username, password });
        console.log('새 사용자 추가:', { username, password });
        res.json({ result: 'success' });
    }
});

// 로그인 라우트
app.post('/admin-login', (req, res) => {
    console.log('로그인 요청 받음:', req.body); // 요청 데이터 로깅
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        console.log('로그인 성공:', username);
        res.json({ result: 'success' });
    } else {
        console.log('로그인 실패:', username);
        res.status(401).json({ result: 'fail', message: '아이디 또는 비밀번호가 잘못되었습니다.' });
    }
});

// 서버 시작 알림
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

// cmd: 서버 실행한 상태에서 로그인 시스템 동작
// node server.js // 서버 실행
// netstat -ano | findstr :5500 // PID 검색
// taskkill /PID <PID> /F // 서버 강제 종료
// ctrl+c // 서버 종료