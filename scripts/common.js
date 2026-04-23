// 메인,서브 공통 동적전용
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