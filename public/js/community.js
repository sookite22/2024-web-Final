document.addEventListener('DOMContentLoaded', () => {
    const posts = JSON.parse(localStorage.getItem('communityPosts')) || {
        all: [],
        questions: [],
        free: [],
    };

    const writePostButton = document.getElementById('writePostButton');
    const modal = document.getElementById('writePostModal');
    const closeButton = document.getElementsByClassName('close-button')[0];
    const submitPostButton = document.getElementById('submitPostButton');
    const postTitle = document.getElementById('postTitle');
    const postContent = document.getElementById('postContent');
    const postTypeRadios = document.querySelectorAll('input[name="postType"]');

    // 글쓰기 창 띄우기
    writePostButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // 글쓰기 창 닫기
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 새 게시글 작성
    submitPostButton.addEventListener('click', () => {
        const title = postTitle.value.trim();
        const content = postContent.value.trim();
        let type = 'free'; // 디폴트는 자유 게시글

        postTypeRadios.forEach((radio) => {
            if (radio.checked) {
                type = radio.value;
            }
        });

        if (title && content) {
            const newPost = {
                id: Date.now(),
                title: title,
                content: content,
                type: type,
            };

            posts.all.push(newPost); // 모든 게시글에 추가
            posts[type].push(newPost); // 해당 탭의 게시글에 추가

            // 게시글 데이터를 로컬 스토리지에 저장
            localStorage.setItem('communityPosts', JSON.stringify(posts));

            // 게시글 렌더링
            renderPosts('all');
            renderPosts(type);
            modal.style.display = 'none';
            postTitle.value = '';
            postContent.value = '';
        }
    });

    // 탭 버튼 이벤트 설정
    document.querySelectorAll('.tablink').forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();

            // 활성화된 탭 변경
            document.querySelectorAll('.tablink').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 활성화된 콘텐츠 변경
            document.querySelectorAll('.tabcontent').forEach(content => content.classList.remove('active'));
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');

            renderPosts(tabId); // 게시글 렌더링
        });
    });

    // 페이지 번호 버튼 이벤트 설정
    document.querySelectorAll('.page-number').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const pageNumber = parseInt(event.target.textContent);
            const activeTab = document.querySelector('.tablink.active').getAttribute('data-tab');
            showPage(activeTab, pageNumber);
        });
    });

    // 게시글 렌더링 함수
    function renderPosts(tabId) {
        const container = document.getElementById(tabId);
        container.innerHTML = ""; // 기존 콘텐츠 삭제

        const postsPerPage = 5; // 페이지당 게시글 수
        const currentPosts = posts[tabId];
        const totalPages = Math.ceil(currentPosts.length / postsPerPage); // 페이지 수 계산

        // 페이지 번호 동적으로 생성
        const paginationContainer = document.querySelector('.pagination');
        paginationContainer.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add('page-number');
            paginationContainer.appendChild(button);
        }
        showPage(tabId, 1); // 첫 번째 페이지 게시글 렌더링
    }

    // 페이지 번호에 따른 게시글 렌더링
    function showPage(tabId, pageNumber) {
        const container = document.getElementById(tabId);
        const postsPerPage = 5; // 페이지당 게시글 수
        const postsToShow = posts[tabId].slice((pageNumber - 1) * postsPerPage, pageNumber * postsPerPage);

        container.innerHTML = ""; // 기존 콘텐츠 삭제

        postsToShow.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
            container.appendChild(postElement);
        });
    }

    // 글쓰기 창 - 라디오 버튼 선택 이벤트
    postTypeRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            modal.style.display = 'block'; // 글쓰기 창 보이게 설정
        });
    });
});
