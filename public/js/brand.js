document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const mainContent = document.querySelector('main');

    // 헤더, 푸터 중앙에 위치시키기
    header.style.transform = 'translateY(0)';
    footer.style.transform = 'translateY(0)';
    header.style.opacity = 1;
    footer.style.opacity = 1;

    setTimeout(() => {
        header.style.transform = 'translateY(-100%)';
        footer.style.transform = 'translateY(100%)';
        setTimeout(() => {
            header.style.position = 'static';
            header.style.transform = 'translateY(0)';
            footer.style.position = 'static';
            footer.style.transform = 'translateY(0)';
            mainContent.style.display = 'block';
            mainContent.style.opacity = 0;
            mainContent.style.transition = 'opacity 1s ease-in-out';
            setTimeout(() => {
                mainContent.style.opacity = 1;
            }, 100); // 주요 내용 페이드 인 효과 추가
            document.body.style.overflow = 'auto';
        }, 1000); // 애니메이션 완료 후 위치 재설정
    }, 1000);

    // URL 파라미터에서 브랜드 이름 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const brandName = urlParams.get('brand');

    // 브랜드 소개 내용 정보
    const pagesContent = {
        "187 KILLER PADS": {
            brandName: '187 KILLER PADS',
            intro: {
                imgSrc: 'img/brandLogo/187.png',
                description: '스케이트 보딩에 필수적인 보호성능을 가장 잘 갖추면서도 스타일리시한 디자인을 선보이는 브랜드 입니다. '
            },
            history: {
                description: '갓 보드를 시작하는 어린 아이들 부터, 프로 생활을 하는 전문가들까지, 폭넓은 분야의 스케이터들에게 두루 적합한 제품들을 생산합니다. 실제 국제 스케이트보드 대회에서도 수많은 선수들이 187의 제품을 착용하고 출전하고 있습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "ANTIHERO": {
            brandName: 'ANTIHERO',
            intro: {
                imgSrc: 'img/brandLogo/antihero.png',
                description: '이 브랜드는 John Cardiel, Tony Trujillo, 그리고 Chris Pfanner와 같은 스케이터들을 팀으로 하며, 거칠고 강력한 스타일의 브랜드 이미지와 정체성이 그들의 상징입니다. 반스와 슈프림 등 여러 주요한 브랜드와 진행한 협업상품으로도 많이 알려져 있습니다.'
            },
            history: {
                description: '1995년에 Julian Stranger에 의해 창립되었습니다. '
            },
            products: [
                {
                    imgSrc: 'images/product2-1.jpg',
                    name: '제품 2-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product2-2.jpg',
                    name: '제품 2-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand2@example.com, 전화번호: 123-456-7890'
            }
        },
        "BAKER": {
            brandName: 'BAKER',
            intro: {
                imgSrc: 'img/brandLogo/baker.png',
                description: '프로 스케이트보더 앤드류 레이놀즈와 최초 설립자인 제이 스트릭랜드가 2000년에 만든 스케이트보드 회사입니다.'
            },
            history: {
                description: '역사에 대한 설명입니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "BONES": {
            brandName: 'BONES',
            intro: {
                imgSrc: 'img/brandLogo/bones.png',
                description: '오일 베이링으로 속도감이 빠르고 구름감이 좋아 스케이터보더들 사이에서 좋은 평가를 받고 있는 베어링 업체입니다.'
            },
            history: {
                description: '1980년 초 조지 A 파월이 설립한 스위스의 베어링 회사입니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "BRONSON": {
            brandName: 'BRONSON',
            intro: {
                imgSrc: 'img/brandLogo/bronson.png',
                description: '스케이트보드 베어링의 기술적 완성도를 한 단계 성장시킨 브랜드입니다. '
            },
            history: {
                description: '베어링의 설계 개선을 통해 스케이트보딩에 더 적합한, 빠르고 오래 지속되는 독보적인 베어링들을 선보입니다. '
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "CONVERSE": {
            brandName: 'CONVERSE',
            intro: {
                imgSrc: 'img/brandLogo/converse.jpg',
                description: '컨버스는 단순히 클래식한 농구화 브랜드를 넘어, 스케이트보드 문화의 중요한 부분을 차지하고 있습니다. '
            },
            history: {
                description: '그들의 스케이트라인과 스케이트 팀, 그리고 스케이트보드 비디오 프로젝트는 모두 컨버스가 스케이트보딩 커뮤니티와 얼마나 긴밀하게 연결되어 있는지를 보여줍니다. 이 브랜드는 전통과 현대적 요구를 조화롭게 결합하며, 스케이트보더들에게 사랑받는 신발을 계속해서 제공하고 있습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "CREATURE": {
            brandName: 'CREATURE',
            intro: {
                imgSrc: 'img/brandLogo/creature.jpg',
                description: '특징적인 빈티지 호러 그래픽과 신뢰도 높은 빌드로 오랜기간 사랑받고 있습니다.'
            },
            history: {
                description: '미국에서 1994년에 설립되었습니다. '
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "FTC": {
            brandName: 'FTC',
            intro: {
                imgSrc: 'img/brandLogo/ftc.webp',
                description: '브랜드로도 세계적으로 인정받으며 의류, 디자인, 비디오, 예술 및 음악 분야 까지 뻗어나가고 있습니다.'
            },
            history: {
                description: '1986년부터 샌프란시스코에서 가장 오랫동안 운영되고 있는 스케이트 매장 중 하나입니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "GIRL": {
            brandName: 'GIRL',
            intro: {
                imgSrc: 'img/brandLogo/girl.png',
                description: '이 브랜드는 그 독창적인 비주얼 스타일과 고품질의 스케이트보드 데크, 그리고 스케이트보딩 문화에 대한 깊은 애정으로 잘 알려져 있습니다.'
            },
            history: {
                description: '1993년에 설립되었습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "HUF": {
            brandName: 'HUF',
            intro: {
                imgSrc: 'img/brandLogo/huf.png',
                description: '스케이트보드 문화와 스트리트 패션의 결합을 통해 독창적이고 세련된 스타일을 제공하며, 전 세계 스케이트보드 커뮤니티에서 큰 인기를 끌고 있습니다.'
            },
            history: {
                description: '2002년 스케이트보드 선수 출신인 키스 허프나겔(Keith Hufnagel)에 의해 설립된 미국의 스케이트보드와 스트리트웨어 브랜드입니다. '
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "INDEPENDENT": {
            brandName: 'INDEPENDENT',
            intro: {
                imgSrc: 'img/brandLogo/independent.png',
                description: '스케이터들에게 가장 인정받는 스케이트보드 트럭. 그들의 색채를 가득 품은 스케이트 의류 라인업 또한 성공적으로 전개되어 매 시즌 출시되고 있습니다.'
            },
            history: {
                description: '1978년 처음 시작되어 현재까지 11번의 구조변경을 통해 진화해온, 가장 완벽에 가까운 스케이트보드 트럭 브랜드입니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "MAGENTA": {
            brandName: 'MAGENTA',
            intro: {
                imgSrc: 'img/brandLogo/magenta.webp',
                description: '2010년 파리에서 설립 이후 가장 영향력 있고 인기 있는 유럽 스케이트보드 브랜드 중 하나입니다.'
            },
            history: {
                description: '예술적인 데크와 인지도 높은 로고, 비교할 수 없는 독특한 스타일의 비디오를 전개함과 동시에 Adidas, Etnies, FTC 등 스케이트보드 협업을 통해 영향력을 보여줬습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "MEOW": {
            brandName: 'MEOW',
            intro: {
                imgSrc: 'img/brandLogo/meow.png',
                description: 'LA에 본사를 둔 이 브랜드는 상징적인 고양이 로고를 기반으로 하는 스케이트보드와 의류를 제공합니다.'
            },
            history: {
                description: '2012년 Lisa Whitaker가 설립한 Meow Skateboards는 여성 스케이트 커뮤니티를 지원하는 재미있고 창의적인 제품을 개발하는 데 주력하고 있습니다. '
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "NIKE": {
            brandName: 'NIKE',
            intro: {
                imgSrc: 'img/brandLogo/nike.png',
                description: '나이키 스케이트보딩(Nike Skateboarding), 흔히 Nike SB로 알려진 이 브랜드는 스포츠웨어 대기업 나이키(Nike)의 스케이트보드 전용 라인입니다.'
            },
            history: {
                description: '2002년, 스케이트보드 커뮤니티와 시장에 본격적으로 진입하면서 Nike SB를 런칭했으며, 이후 스케이트보드와 스트리트웨어 분야에서 큰 성공을 거두었습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "OJ WHEELS": {
            brandName: 'OJ WHEELS',
            intro: {
                imgSrc: 'img/brandLogo/',
                description: '미국의 스케이트보드 휠 브랜드로, 다양한 지형에서 뛰어난 성능을 제공하는 것으로 유명합니다.'
            },
            history: {
                description: '고품질의 우레탄 소재를 사용하여 내구성과 속도를 극대화하며, 스케이트보더들의 요구에 부응합니다. OJ Wheels는 다양한 크기와 디자인으로 선택의 폭을 넓혀 스케이트보더들에게 맞춤형 경험을 제공합니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "PALACE": {
            brandName: 'PALACE',
            intro: {
                imgSrc: 'img/brandLogo/palace.jpg',
                description: '스케이트보드 문화와 스트리트 패션을 융합하여 독특한 브랜드 아이덴티티를 구축하고 있습니다.'
            },
            history: {
                description: '2009년 영국에서 설립된 PALACE Skateboards는 영국을 기반으로 한 전 세계적으로 인정받는 스케이트보드 브랜드 입니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "PENNY": {
            brandName: 'PENNY',
            intro: {
                imgSrc: 'img/brandLogo/penny.jpg',
                description: '경량 플라스틱으로 만들어진 작고 컬러풀한 스케이트보드로, 오스트레일리아에서 시작되어 전 세계적으로 인기를 얻고 있습니다.'
            },
            history: {
                description: '그들의 특징적인 작은 사이즈와 밝은 컬러는 도시 이동이나 레저 용도로 이상적이며, 초보자부터 전문가까지 다양한 스케이터들에게 사랑받고 있습니다. Penny Skateboards는 스케이트보드 문화를 새롭고 즐겁게 만들어가는데 기여하고 있습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "POETIC COLLECTIVE": {
            brandName: 'POETIC COLLECTIVE',
            intro: {
                imgSrc: 'img/brandLogo/poetic.webp',
                description: '예술적 표현과 스케이트보드 문화를 융합한 제품을 선보입니다. 아날로그적 감성과 고품질의 아이템, 또한 포에틱 특유의 오버사이즈 실루엣은 그들의 정체성이기도 합니다.'
            },
            history: {
                description: '2016년 스웨덴에서 시작된 스케이트보드 브랜드입니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "POLAR STATE CO": {
            brandName: 'POLAR STATE CO',
            intro: {
                imgSrc: 'img/brandLogo/polar.png',
                description: '스웨덴의 프로 스케이터 Pontus Alv 가 2011년도에 설립, 특징적인 데크 그래픽과 쉐이프, 높은 퀄리티의 의류들을 계속해서 선보이고 있습니다.'
            },
            history: {
                description: '빅보이를 필두로 한 오버사이즈 바지 라인업은 최근 수년간의 트렌드에 영향을 끼칠만큼 사랑받기도 했습니다. 나이키, 컨버스, 칼하트WIP의 협업 등 폴라는 새로운 차원의 스타일을 선보이기 위해 끝없이 진화하고 있습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "PRIMITIVE": {
            brandName: 'PRIMITIVE',
            intro: {
                imgSrc: 'img/brandLogo/primitive.png',
                description: '프로 스케이터인 폴 로드리게스(Paul Rodriguez)에 의해 2014년에 설립된 미국의 스케이트보드 브랜드입니다.'
            },
            history: {
                description: '빠르게 성장하며 고품질의 스케이트보드 데크, 의류, 액세서리로 전 세계 스케이트보드 커뮤니티에서 널리 인정받고 있습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "QUASI": {
            brandName: 'QUASI',
            intro: {
                imgSrc: 'img/brandLogo/quasi.png',
                description: '예술작품 처럼 느껴지는 Quasi 특유의 아트 디렉팅 뿐 아니라 Tyler Bledsoe, Gilbert Crockett 등 스타일리시한 스케이트보딩 팀이 함께하여 그들의 정체성을 더욱 확고히 합니다.'
            },
            history: {
                description: '2015년에 미국에서 창립된 스케이트보드 브랜드입니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "REAL": {
            brandName: 'REAL',
            intro: {
                imgSrc: 'img/brandLogo/real.webp',
                description: '스케이트보딩의 본질을 강조하며, 열정적인 스케이터들에 의해 스케이터들을 위해 만들어진 브랜드로 유명합니다.'
            },
            history: {
                description: '1991년에 설립된 미국의 스케이트보드 브랜드로, 고품질의 스케이트보드 데크와 액세서리로 전 세계 스케이터들 사이에서 사랑받고 있습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "SANTA CRUZ": {
            brandName: 'SANTA CRUZ',
            intro: {
                imgSrc: 'img/brandLogo/santa cruz.jpg',
                description: '가장 유명하고 가장 오래된 스케이트 브랜드 중 하나입니다.'
            },
            history: {
                description: '1973년도에 북부 캘리포니아 서퍼인 Rich Novak, Doug Haut 및 Jay Shuirman이 설립했습니다. 그들의 상징적인 "Screaming Hands" 로고는 오늘날까지도 스케이트보드와 스트리트 컬쳐를 대표하는 아이콘입니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "SUPREME": {
            brandName: 'SUPREME',
            intro: {
                imgSrc: 'img/brandLogo/supreme.png',
                description: '단순한 스케이트보드 브랜드를 넘어, 글로벌 스트리트 패션의 아이콘으로 자리 잡았습니다.'
            },
            history: {
                description: '1994년에 뉴욕에서 설립된 스케이트보드와 스트리트웨어 브랜드로, 현대 스케이트보드 문화와 패션의 교차점에서 중요한 역할을 하고 있습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "TENSOR": {
            brandName: 'TENSOR',
            intro: {
                imgSrc: 'img/brandLogo/tensor.png',
                description: '2000년에 설립된 미국의 스케이트보드 트럭 브랜드입니다.'
            },
            history: {
                description: '기술적으로 더 진보한 트럭을 개발하기 위해 많은 노력을 한 결과, 고품질의 알루미늄 트럭 뿐 아니라, 마그네슘 합금을 이용하여 초경량 스케이트보드 트럭을 제작하는 등 타 브랜드와 명확히 구분되는 아이덴티티를 보입니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "TIMBER": {
            brandName: 'TIMBER',
            intro: {
                imgSrc: 'img/brandLogo/timber.png',
                description: '매년 국내 및 해외 스케이트보드 투어를 통해 국제 무대에도 경쟁력 있는 모습을 보여주고 있습니다. 또한 BAKER, FTC, Independent Trucks 등 유명한 스케이트 브랜드들, 아티스트들과 협업을 통해 영향력을 증명해냈습니다.'
            },
            history: {
                description: '2012년 서울에서 시작 된 Timber Skateboards는 현재 한국에서 가장 많이 팔리는 Deck브랜드로 성장했습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "Vans": {
            brandName: 'Vans',
            intro: {
                imgSrc: 'img/brandLogo/vans.jpg',
                description: '더는 부연설명이 필요가 없을 정도로 스케이트보드와 스트릿 컬쳐 전반에서 많은 사랑을 받아오고 있습니다. Vans Skateboarding은 그 중 스케이트보딩에 보다 적합한 라인의 제품들로, 더 견고하고 충격을 잘 흡수할 수 있도록 재설계된 프리미엄 제품군 입니다.'
            },
            history: {
                description: 'Supreme, Disney, Marvel, Metallica 등 많은 브랜드 및 아티스트와 협업을 이어가고 있고, 스케이트보드 컬쳐 안과 밖에서 큰 인기를 얻으며 문화를 대표하는 브랜드로 자리잡았습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        },
        "WAYWARD": {
            brandName: 'WAYWARD',
            intro: {
                imgSrc: 'img/brandLogo/wayward.png',
                description: '주로 고품질의 스케이트보드 휠을 생산하는 것으로 잘 알려진 스케이트보드 브랜드입니다.'
            },
            history: {
                description: '2014년에 프로 스케이터인 앤드류 브로피(Andrew Brophy)와 베니 페어팩스(Benny Fairfax)에 의해 설립되었습니다. 두 설립자는 각각 Palace와 Girl Skateboards와 연관되어 있으며, 자신들이 사용할 휠 브랜드를 갖기 위해 WAYWARD를 시작하게 되었습니다.'
            },
            products: [
                {
                    imgSrc: 'images/product1-1.jpg',
                    name: '제품 1-1',
                    description: ''
                },
                {
                    imgSrc: 'images/product1-2.jpg',
                    name: '제품 1-2',
                    description: ''
                }
            ],
            contact: {
                description: '이메일: brand1@example.com, 전화번호: 123-456-7890'
            }
        }
    };

    const pageContent = pagesContent[brandName] || pagesContent["187 KILLER PADS"]; // 현재 브랜드에 맞는 내용 가져오기
    
    // 페이지 내용 삽입
    document.getElementById('brand-name').textContent = pageContent.brandName;
    document.getElementById('brand-logo').src = pageContent.intro.imgSrc;
    document.getElementById('brand-intro-description').textContent = pageContent.intro.description;
    document.getElementById('brand-history-description').textContent = pageContent.history.description;

    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    pageContent.products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        productContainer.appendChild(productItem);
    });

    document.getElementById('brand-contact-description').textContent = pageContent.contact.description;
});
