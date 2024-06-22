document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profileImage');
    const profileImageInput = document.getElementById('profileImageInput');
    const editProfileOverlay = document.querySelector('.editProfileOverlay');
    const logoutButton = document.getElementById('logout');

    // 파일 입력 시 미리보기
    profileImageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // 마우스 올려 놓으면 '프로필 사진 변경' 버튼 보이기
    profileImageContainer.addEventListener('mouseover', function() {
        editProfileOverlay.style.display = 'flex';
    });

    // 마우스 떼면 '프로필 사진 변경' 버튼 숨김
    profileImageContainer.addEventListener('mouseout', function() {
        editProfileOverlay.style.display = 'none';
    });

    // 프로필 수정 폼 제출 시 이벤트 리스너 추가
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // 프로필 수정 로직 추가
        alert('프로필이 수정되었습니다.');
    });

    // 로그아웃
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('loggedInUser');
        location.href = 'login.html';
    });

    // 로그인 상태 확인
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn || loggedIn !== 'true') {
        alert('로그인이 필요한 서비스입니다. 먼저 로그인 해주세요.');
        location.href = 'login.html';
    }
});








// document.addEventListener('DOMContentLoaded', function() {
//     const profileImage = document.getElementById('profileImage');
//     const profileImageInput = document.getElementById('profileImageInput');
//     const editProfileOverlay = document.querySelector('.editProfileOverlay');

//     // 파일 입력 변경 시 미리보기 기능 추가
//     profileImageInput.addEventListener('change', function() {
//         const file = this.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 profileImage.src = e.target.result;
//             };
//             reader.readAsDataURL(file);
//         }
//     });

//     // 마우스 오버 시 '프로필 사진 변경' 버튼 보이기
//     profileImageContainer.addEventListener('mouseover', function() {
//         editProfileOverlay.style.display = 'flex';
//     });

//     // 마우스 아웃 시 '프로필 사진 변경' 버튼 숨기기
//     profileImageContainer.addEventListener('mouseout', function() {
//         editProfileOverlay.style.display = 'none';
//     });

//     // 프로필 수정 폼 제출 시 이벤트 리스너 추가
//     const profileForm = document.getElementById('profileForm');
//     profileForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         // 프로필 수정 로직 추가
//         alert('프로필이 수정되었습니다.');
//     });

//     // 로그아웃 버튼 클릭 시 로그아웃 로직 추가
//     const logoutButton = document.getElementById('logout');
//     logoutButton.addEventListener('click', function() {
//         localStorage.removeItem('loggedIn');
//         localStorage.removeItem('loggedInUser');
//         location.href = 'login.html';
//     });
// });
