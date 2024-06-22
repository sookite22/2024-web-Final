document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profileImage');
    const profileImageInput = document.getElementById('profileImageInput');
    const editProfileText = document.getElementById('editProfileText');

    // 마우스를 갖다 대면 '프로필 사진 변경' 텍스트 보이기
    profileImageContainer.addEventListener('mouseover', function() {
        editProfileText.style.opacity = '1';
    });

    profileImageContainer.addEventListener('mouseout', function() {
        editProfileText.style.opacity = '0';
    });

    // 프로필 사진 변경 버튼 클릭 시 파일 입력 클릭
    editProfileText.addEventListener('click', function() {
        profileImageInput.click();
    });

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

    // 프로필 수정 폼 제출 시 이벤트 리스너 추가
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // 프로필 수정 로직 추가
        alert('프로필이 수정되었습니다.');
    });

    // 로그아웃
    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('loggedInUser');
        location.href = 'login.html';
    });
});
