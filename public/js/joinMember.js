document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const signupUsername = document.getElementById('signupUsername');
    const signupPassword = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordCheckMessage = document.getElementById('passwordCheckMessage');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 비밀번호 확인
        if (signupPassword.value !== confirmPassword.value) {
            passwordCheckMessage.textContent = '비밀번호가 일치하지 않습니다.';
            return;
        }

        // 회원가입 정보 localStorage에 저장
        localStorage.setItem('username', signupUsername.value);
        localStorage.setItem('password', signupPassword.value);

        alert("회원가입이 완료되었습니다.");

        // 회원가입 후 로그인 페이지로 이동
        window.location.href = 'login.html';
    });
});
