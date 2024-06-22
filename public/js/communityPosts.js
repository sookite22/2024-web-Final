document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');

    // community.html 페이지에서 게시글 데이터 가져오기
    function fetchCommunityPosts() {
        // 게시글 데이터를 로컬 스토리지에서 가져옴
        const posts = JSON.parse(localStorage.getItem('communityPosts')) || { all: [], questions: [], free: [] };

        // 최신 게시글 순으로 정렬(id 기준)
        posts.all.sort((a, b) => b.id - a.id);

        return posts.all; // 모든 게시글 반환
    }

    // 게시글 렌더링
    function renderPosts(posts, maxPosts) {
        postsContainer.innerHTML = ''; // 기존 콘텐츠 지우기
        const latestPosts = posts.slice(0, maxPosts); // 최신 게시글만 가져오기

        latestPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
            postsContainer.appendChild(postElement);
        });
    }

    // 최신 3개의 게시글 데이터를 가져와서 렌더링
    const posts = fetchCommunityPosts();
    renderPosts(posts, 3); // 최대 3개의 게시글만 표시
});
