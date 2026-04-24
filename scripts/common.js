// 메인,서브 공통 동적전용
/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */



/* ==========================================
   #gnb - 스크롤 시 GNB 스타일 변경
   ========================================== */

(function () {
    const gnb = document.querySelector('#gnb');
    if (!gnb) return;
    const logoImg     = gnb.querySelector('#logo img');
    const serviceImgs = gnb.querySelectorAll('#user_service a img');
const blackIcons = {
    logo:   './images/common/Glossier-Logotype-black.png',
    search: './images/common/search_bk_icon.png',
    lang:   './images/common/language_bk_icon.png',
    map:    './images/common/map_bk_icon.png',
    person: './images/common/person_bk_icon.png',
    cart:   './images/common/cart_off_bk_icon.png',
};
const originalLogoSrc = logoImg ? logoImg.getAttribute('src') : null;
const originalServiceSrcs = Array.from(serviceImgs).map(img => img.getAttribute('src'));

    const SCROLL_THRESHOLD = 200;
const iconKeys = ['search', 'lang', 'map', 'person', 'cart']; // ← 바깥으로

function applyScrolled(scrolled) {
    gnb.classList.toggle('scrolled', scrolled);
    if (scrolled) {
        if (logoImg) logoImg.src = blackIcons.logo;
        serviceImgs.forEach((img, i) => {
            const key = iconKeys[i];
            if (key && blackIcons[key]) img.src = blackIcons[key];
        });
    } else {
        if (logoImg && originalLogoSrc) logoImg.src = originalLogoSrc;
        serviceImgs.forEach((img, i) => {
            if (originalServiceSrcs[i]) img.src = originalServiceSrcs[i];
        });
    };
};
;    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                applyScrolled(window.scrollY > SCROLL_THRESHOLD);
                ticking = false;
            });
            ticking = true;
        }
    });

    applyScrolled(window.scrollY > SCROLL_THRESHOLD);
})();

/* ==========================================
#celeb_pick - CELEB's PICK Section JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

/* -----------------------------------------------
    1. 썸네일 클릭 → 콘텐츠 패널 전환
  ----------------------------------------------- */
const thumbnailBtns = document.querySelectorAll('#celeb_pick .thumbnail button');
const contentPanels = document.querySelectorAll('#celeb_pick .contents');

  // 초기 상태: 첫 번째 썸네일과 콘텐츠 활성화
if (thumbnailBtns.length > 0) {
    thumbnailBtns[0].classList.add('active');
}
if (contentPanels.length > 0) {
    contentPanels[0].classList.add('active');
}

thumbnailBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = this.dataset.target; // data-target="0", "1", ...

      // 모든 썸네일 비활성화
    thumbnailBtns.forEach(b => b.classList.remove('active'));
      // 클릭한 썸네일 활성화
    this.classList.add('active');

      // 모든 콘텐츠 패널 숨기기
    contentPanels.forEach(panel => panel.classList.remove('active'));
      // 해당 콘텐츠 패널 보이기
    const targetPanel = document.querySelector(`#celeb_pick .contents[data-content="${target}"]`);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
    });
});

/* -----------------------------------------------
    2. 메인 이미지 핀 버튼 클릭 → 상품 정보 전환
  ----------------------------------------------- */
const pinBtns = document.querySelectorAll('#celeb_pick .main_img button[data-product]');

pinBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const productKey = this.dataset.product; // data-product="glossier_you" 등
    const parentContents = this.closest('.contents');

      // 해당 contents 안의 모든 cp_product 비활성화
    const allProducts = parentContents.querySelectorAll('.cp_product');
    allProducts.forEach(p => p.classList.remove('active'));

      // 클릭한 상품 활성화
    const targetProduct = parentContents.querySelector(`.cp_product.${productKey}`);
    if (targetProduct) {
        targetProduct.classList.add('active');
    }

      // 핀 버튼 활성 표시 (선택적)
    pinBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    });
});

  // 초기 상태: 첫 번째 cp_product 활성화
contentPanels.forEach(function (panel) {
    const firstProduct = panel.querySelector('.cp_product');
    if (firstProduct) {
    firstProduct.classList.add('active');
    }
});

/* -----------------------------------------------
    3. 설명 더보기 / 접기 토글
  ----------------------------------------------- */
const toggleBtns = document.querySelectorAll('#celeb_pick .toggle_btn');

toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
    const descBox = this.closest('.description_box');
    const p = descBox.querySelector('p');

    if (descBox.classList.contains('expanded')) {
        // 접기
        descBox.classList.remove('expanded');
        p.style.webkitLineClamp = '3';
        p.style.overflow = 'hidden';
        this.textContent = '더보기';
    } else {
        // 펼치기
        descBox.classList.add('expanded');
        p.style.webkitLineClamp = 'unset';
        p.style.overflow = 'visible';
        this.textContent = '접기';
    }
    });
});

});

document.querySelectorAll('.color_chip').forEach(function (chipWrap) {
    const chips = chipWrap.querySelectorAll('.chip');

    chips.forEach(function (chip) {
        chip.addEventListener('click', function (e) {
            e.preventDefault();

            // active 이동
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            // selected_option 텍스트 변경
            // .color_chip 바로 위 형제인 .color_name > .selected_option 을 탐색
            const selectedOptionEl = chipWrap
                .closest('.price')
                .querySelector('.selected_option');

            if (selectedOptionEl) {
                selectedOptionEl.textContent = chip.dataset.color;
            }
        });
    });
});