document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(37.5075, 126.9250),
        level: 11
    };

    const map = new kakao.maps.Map(container, options);

    // 스팟 정보
    const positions = [
        {
            title: '스팟 1',
            latlng: new kakao.maps.LatLng(37.52975, 127.07142),
            info: {
                image: "img/뚝섬한강공원 X게임장.png",
                name: "뚝섬한강공원 X게임장",
                description: "서울에서 가장 핫한 스팟이라 할 수 있다. 많은 보더와 크리에이터가 모이며 다양한 기물이 있다. "
            }
        },
        {
            title: '스팟 2',
            latlng: new kakao.maps.LatLng(37.4669, 126.8457),
            info: {
                image: "img/광명 스피돔.png",
                name: "광명 스피돔",
                description: "보드를 타기 좋은 바닥이 있는 무난한 운동장이다.  "
            }
        },
        {
            title: '스팟 3',
            latlng: new kakao.maps.LatLng(37.46194, 126.87173),
            info: {
                image: "img/광명 시민체육관.png",
                name: "광명 시민체육관",
                description: "보드를 타기 좋은 바닥이 있는 무난한 운동장이다. "
            }
        },
        {
            title: '스팟 4',
            latlng: new kakao.maps.LatLng(37.51699, 126.90909),
            info: {
                image: "img/영등포 롯데백화점 앞.png",
                name: "영등포 롯데백화점 앞",
                description: "보드를 타기 좋은 바닥이다. 사람이 많이 지나다니기 때문에 주의가 필요하다. "
            }
        },
        {
            title: '스팟 5',
            latlng: new kakao.maps.LatLng(37.53047, 126.929),
            info: {
                image: "img/여의도 물빛 광장.png",
                name: "여의도 물빛 광장",
                description: "여의도 공원에서 가볍게 타기 좋다. "
            }
        },
        {
            title: '스팟 6',
            latlng: new kakao.maps.LatLng(37.53562, 126.87723),
            info: {
                image: "img/목동 파리공원.png",
                name: "목동 파리공원",
                description: "공원의 외진 곳에서 편하게 기술 연습을 할 수 있다. "
            }
        }
    ];

    const imageSrc = "img/spot marker.png";
    const markers = [];

    for (let i = 0; i < positions.length; i++) {
        const imageSize = new kakao.maps.Size(200, 100);
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        const marker = new kakao.maps.Marker({
            position: positions[i].latlng,
            title: positions[i].title,
            image: markerImage
        });

        marker.setMap(map);
        markers.push({ marker, position: positions[i] });

        // 마커 클릭 시 정보창 열기
        kakao.maps.event.addListener(marker, 'click', function () {
            const infowindow = new kakao.maps.InfoWindow({
                content: `
                    <div style="padding:10px; width: 300px; height: 280px;">
                        <img src="${positions[i].info.image}" style="width: 100%; height: auto; cursor: pointer;" id="infoImage${i}" />
                        <h2 style="font-size: 1.2em; color: #333;">${positions[i].info.name}</h2>
                        <p style="font-size: 0.9em; color: #666;">${positions[i].info.description}</p>
                    </div>
                `,
                removable: true,
                offset: new kakao.maps.Size(0, 20)
            });

            infowindow.open(map, marker);

            // 이미지 클릭 시 전체화면
            document.getElementById(`infoImage${i}`).addEventListener('click', function () {
                showFullScreenImage(positions[i].info.image);
            });
        });
    }

    // 지도 이벤트
    kakao.maps.event.addListener(map, 'idle', function () {
        const level = map.getLevel();
        const markerSize = level <= 5 ? 1.9 : 2; // 마커 크기

        for (let i = 0; i < markers.length; i++) {
            markers[i].marker.setImage(new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(24 * markerSize, 35 * markerSize)));
            markers[i].marker.setPosition(markers[i].marker.getPosition());
        }
    });
});

// 이미지 전체화면
function showFullScreenImage(imageUrl) {
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const image = document.createElement('img');
    image.src = imageUrl;
    image.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;
    image.addEventListener('click', function () {
        fullscreenDiv.remove();
    });

    fullscreenDiv.appendChild(image);
    document.body.appendChild(fullscreenDiv);
}
