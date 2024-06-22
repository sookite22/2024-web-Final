document.addEventListener('DOMContentLoaded', () => {
    const noticeList = document.getElementById('noticeList');
    const communityTabList = document.getElementById('communityTabList');

    // 게시글 렌더링
    function renderPosts(posts, listElement) {
        listElement.innerHTML = ""; // 기존 콘텐츠 삭제

        posts.forEach(post => {
            const postElement = document.createElement('li');
            postElement.innerHTML = `<strong>${post.title}</strong>: ${post.content}`;
            listElement.appendChild(postElement);
        });
    }

    // 예시로 데이터를 설정하여 렌더링
    // const exampleNoticePosts = [
    //     { title: '업데이트 공지', content: '새로운 기능이 추가되었습니다!' },
    //     { title: '게시판 가이드', content: '게시판 사용 방법을 안내합니다.' },
    // ];

    // const exampleCommunityPosts = [
    //     { title: '스팟 공유합니다~', content: '어디에서 좋은 스팟을 찾았는지 공유해요!' },
    //     { title: '부싱 어떻게 조절하나요?', content: '부싱을 조절하는 방법을 알려주세요!' },
    // ];

    renderPosts(exampleNoticePosts, noticeList);
    renderPosts(exampleCommunityPosts, communityTabList);
});
