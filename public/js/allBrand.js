// 모든 브랜드 이름

document.addEventListener('DOMContentLoaded', () => {
    const brands = [
        { name: "187 KILLER PADS" },
        { name: "ANTIHERO" },
        { name: "BAKER" },
        { name: "BONES" },
        { name: "BRONSON" },
        { name: "CONVERSE" },
        { name: "CREATURE" },
        { name: "FTC" },
        { name: "GIRL" },
        { name: "HUF" },
        { name: "INDEPENDENT" },
        { name: "MAGENTA" },
        { name: "MEOW" },
        { name: "NIKE" },
        { name: "OJ WHEELS" },
        { name: "PALACE" },
        { name: "PENNY" },
        { name: "POETIC COLLECTIVE" },
        { name: "POLAR STATE CO" },
        { name: "PRIMITIVE" },
        { name: "QUASI" },
        { name: "REAL" },
        { name: "SANTA CRUZ" },
        { name: "SUPREME" },
        { name: "TENSOR" },
        { name: "TIMBER" },
        { name: "Vans" },
        { name: "WAYWARD" },
    ];

    const brandList = document.getElementById('brand-list');
    const filterLinks = document.querySelectorAll('.In-letters a');

    filterBrands('ALL');

    filterLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            filterLinks.forEach(link => link.classList.remove('In-selected'));
            event.target.classList.add('In-selected');

            const filter = event.target.textContent.trim().toUpperCase();

            filterBrands(filter);
        });
    });

    function filterBrands(filter) {
        brandList.innerHTML = ''; // 브랜드 목록 초기화

        // 브랜드 이름 필터링
        let filteredBrands = brands;

        if (filter !== 'ALL') {
            if (filter === '#') {
                filteredBrands = brands.filter(brand => /^\d/.test(brand.name[0]));
            } else {
                filteredBrands = brands.filter(brand => brand.name.toUpperCase().startsWith(filter));
            }
        }

        // 브랜드 항목 동적으로 추가
        filteredBrands.forEach(brand => {
            const brandItem = document.createElement('div');
            brandItem.classList.add('brand-item');
            brandItem.innerHTML = `<a href="brand0.html?brand=${encodeURIComponent(brand.name)}">${brand.name}</a>`;
            brandList.appendChild(brandItem);
        });
    }
});
