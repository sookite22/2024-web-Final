// 공통된 로그인/로그아웃 새로고침 기능
function updateUIForLoggedInUser() {
    const loginDiv = document.querySelector('#login');
    const mypageDiv = document.querySelector('#mypage');

    if (localStorage.getItem('loggedIn')) {
        loginDiv.innerHTML = '<p id="logoutButton">로그아웃</p>';
        document.querySelector('#logoutButton').addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('loggedInUser');
            location.reload();
        });
    } else {
        loginDiv.innerHTML = '<a href="login.html"><p>로그인</p></a>';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateUIForLoggedInUser();
});
