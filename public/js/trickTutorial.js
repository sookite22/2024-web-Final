document.addEventListener('DOMContentLoaded', function () {
    const trickImages = document.querySelectorAll('.trick-image');

    // 각 트릭 이미지 클릭 이벤트 리스너 추가
    trickImages.forEach(image => {
        image.addEventListener('click', function () {
            const trickName = image.dataset.trick; // 클릭된 트릭의 데이터 속성 추출
            updateTrickDetails(trickName);

            // 정보 설명창으로 스크롤 이동
            const trickDetails = document.querySelector('.trick-details');
            trickDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    function updateTrickDetails(trickName) {
        let trickDescription = '';
        let trickVideo = '';

        switch (trickName) { // 트릭 기술 설명
            case 'Ollie':
                trickDescription = '스케이트 보드의 기본 동작 중 하나로, 스케이트보드를 지렛대의 원리를 이용하여 공중에 띄우는 기술이다.';
                trickVideo = 'https://www.youtube.com/watch?v=2jbM5HKCYU0&t=1s';
                break;
            case 'Kickflip':
                trickDescription = '알리 도중에 앞발의 발가락을 사용하여 데크를 걷어차 수직으로 360도 회전시키고 공중에서 다시 잡는 트릭이다.';
                trickVideo = 'https://www.youtube.com/watch?v=4XgjDhSnTtE';
                break;
            case 'Push Off':
                trickDescription = '땅을 한 발로 밀어 보드를 앞으로 나아가게 하는 것을 뜻한다. 보드를 타는데 있어 가장 중요한 기본기이다.';
                trickVideo = 'https://www.youtube.com/watch?v=elvJPyWYBuY';
                break;
            case 'Frontside 180':
                trickDescription = '알리를 함과 동시에 몸 앞쪽으로 180도 돌려서 착지하는 기술이다.';
                trickVideo = 'https://www.youtube.com/watch?v=Fy45tPsDpCk&t=4s';
                break;
            case 'Backside 180':
                trickDescription = '알리를 함과 동시에 몸 뒤쪽으로 180도 돌려서 착지하는 기술이다.';
                trickVideo = 'https://www.youtube.com/watch?v=yH9AhlUo0Ig';
                break;
            case 'Tic-Tac':
                trickDescription = '푸시오프를 하지 않고 노즈를 좌우로 흔들며 전진하는 기술이다.';
                trickVideo = 'https://www.youtube.com/watch?v=VUzDQKBwmRg';
                break;
            case 'Endwalk':
                trickDescription = '스케이트보드를 타면서 노즈 또는 테일을 지면에서 들어올리고 그 상태로 균형을 유지하며 움직이는 기술이다.';
                trickVideo = 'https://www.youtube.com/watch?v=kDob9qNPTW4';
                break;
            case 'Endover':
                trickDescription = '보드를 앞쪽(Frontside) 또는 뒤쪽(Backside)으로 180도 돌아서 360도를 도는 기술이다.';
                trickVideo = 'https://www.youtube.com/watch?v=CH9nouKSSJA&t=60s';
                break;
            case 'Shove-It':
                trickDescription = '스케이드보드를 옆으로 반 회전시키는 가장 간단한 회전트릭이다.';
                trickVideo = 'https://www.youtube.com/watch?v=4ml_SPhwc4c';
                break;
            case 'Pop Shove-It':
                trickDescription = '이름 그대로 팵을 주며 하는 샤빗이다. 테일을 차며 보드에 회전을 주며 띄우는 팝샤빗은 베리얼킥플립과 360플립, 인워드 힐플립등을 배우기 위한 기본 트릭이기도 하다.';
                trickVideo = 'https://www.youtube.com/watch?v=-prlrS6LqWE';
                break;
            default:
                trickDescription = '이 트릭에 대한 설명은 아직 없습니다.';
                trickVideo = '#';
                break;
        }

        // DOM 요소에 업데이트된 정보 표시
        document.getElementById('trick-name').textContent = trickName;
        document.getElementById('trick-description').textContent = trickDescription;
        document.getElementById('trick-video').setAttribute('href', trickVideo);
    }
});
