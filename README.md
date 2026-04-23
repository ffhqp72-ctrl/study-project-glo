**"This is a portfolio project for educational purposes."**
* 이것은 교육 목적의 포트폴리오 프로젝트입니다.

# 작업일지
## 4/13 
베스트 셀러 슬라이드 작업 필요
css 수정해야함 

**헤더**
gnb > 카테고리 댑스 세분화 작업 필요
검색바 제작 필요

띠배너 :내용 변경 작업 필요 (03/30)


**메인**
### 브랜드인포
- html 완료

### wear glossier
- html 완료

### 베스트 셀러
- ALL 카테고리 html완료
- 다른 카테고리 상품 추가 필요

### 셀럽픽
- 쉽지 않음, 보완 필요

### 브랜드 슬로건
- html 완료

### 매장 찾기
- html 완료

**다음 작업**
> header css까지 완성

<!-- 상품 공통 html -->

<li class="bs_product normal">
    <div class="img">
        <a href="#">
            <img src="#" alt="`상품명`">
            <div class="color">
                <span class="`색상명`_color chip"></span>
                <span class="espresso_color chip"></span>
                <span class="birthday_color chip"></span>
                <span class="strawberry_color chip"></span>
                <span class="wildfig_color chip"></span>
                <span class="rose_color chip"></span>
                <span class="coconut_color chip"></span>
                <p>+6</p>
            </div>
        </a>
    </div>
    <div class="product_info">
        <a href="#">
            <h1 class="product_name">`상품명`</h1>
            <p class="product_description">`상품설명`</p>
            <div class="price">
                <p>`가격`</p>
                <del>`원가`</del>
            </div>
        </a>
        <div class="products_icon">
            <button type="button" aria-label="관심상품"></button>
            <button type="button" aria-label="장바구니담기"></button>
        </div>
    </div>
</li>

<li class="bs_product perfume">
    <a href="#"><img src="#" alt="`상품명`"></a>
    <div class="product_info">
        <a href="#">
            <h1 class="product_name">`상품명`</h1>
            <p class="product_description">`상품설명`</p>
        </a>
        <div>
            <div class="price">
                <a href="#" class="size_50ml">₩ 137,000</a>
                <a href="#" class="size_100ml">₩ 194,000</a>
                <a href="#" class="size_8ml">₩ 53,700</a>
            </div>
            <div class="option">
                <a href="#" class="size_50ml">50ml</a>
                <a href="#" class="size_100ml">100ml</a>
                <a href="#" class="size_8ml">8ml</a>
            </div>
        </div>
        <div class="products_icon">
            <button type="button" aria-label="관심상품"></button>
            <button type="button" aria-label="장바구니담기"></button>
        </div>
    </div>
</li>