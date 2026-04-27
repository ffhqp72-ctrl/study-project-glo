    /* ── 요소 참조 ── */
    const inputId    = document.getElementById('input-id');
    const inputPw    = document.getElementById('input-pw');
    const inputPhone = document.getElementById('input-phone');
    const clearId    = document.getElementById('clear-id');
    const clearPw    = document.getElementById('clear-pw');
    const togglePw   = document.getElementById('toggle-pw');
    const visIcon    = document.getElementById('vis-icon');
    const btnVerify  = document.getElementById('btn-verify');
    const btnSignup  = document.getElementById('btn-signup');
    const errorMsg   = document.getElementById('error-msg');
    const backBtn    = document.getElementById('back-btn');
    
    /* ── 아이콘 URL ── */
    const ICON_VISIBILITY_OFF = 'https://www.figma.com/api/mcp/asset/d255c51a-1919-4f6c-b15c-5b37cd379458';
    const ICON_VISIBILITY_ON  = 'https://www.figma.com/api/mcp/asset/4372613d-a233-41ff-85bb-6ce8d6d5955e';
    
    /* ── 올바른 전화번호 ── */
    const VALID_PHONE = '010-1234-5678';
    
    /* ─────────────────────────────
        오류 메시지
    ───────────────────────────── */
    function showError(msg) {
        errorMsg.textContent = '*' + msg;
        errorMsg.classList.add('visible');
    }
    function hideError() {
        errorMsg.classList.remove('visible');
    }
    
    /* ─────────────────────────────
        유효성 검사 함수
    ───────────────────────────── */
    function isValidEmail(val) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }
    
    function isValidPassword(val) {
        /* 8자 이상 + 영문 + 숫자 + 특수문자 각 1개 이상 */
        return val.length >= 8
        && /[a-zA-Z]/.test(val)
        && /[0-9]/.test(val)
        && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(val);
    }
    
    /* ─────────────────────────────
        X(clear) 아이콘 표시 제어
    ───────────────────────────── */
    function syncClearIcon(input, clearBtn) {
        if (input.value.length > 0) {
        clearBtn.classList.add('show');
        } else {
        clearBtn.classList.remove('show');
        }
    }
    
    inputId.addEventListener('input', () => {
        syncClearIcon(inputId, clearId);
        hideError();
    });
    
    inputPw.addEventListener('input', () => {
        syncClearIcon(inputPw, clearPw);
        hideError();
    });
    
    clearId.addEventListener('click', () => {
        inputId.value = '';
        syncClearIcon(inputId, clearId);
        inputId.focus();
    });
    
    clearPw.addEventListener('click', () => {
        inputPw.value = '';
        syncClearIcon(inputPw, clearPw);
        inputPw.focus();
    });
    
    /* ─────────────────────────────
        비밀번호 보이기/숨기기 토글
    ───────────────────────────── */
    let pwVisible = false;
    togglePw.addEventListener('click', () => {
        pwVisible = !pwVisible;
        inputPw.type   = pwVisible ? 'text' : 'password';
        visIcon.src    = pwVisible ? ICON_VISIBILITY_ON : ICON_VISIBILITY_OFF;
    });
    
    /* ─────────────────────────────
        전화번호 자동 포맷: ***-****-****
    ───────────────────────────── */
    inputPhone.addEventListener('input', (e) => {
        let raw = e.target.value.replace(/\D/g, ''); // 숫자만 추출
        if (raw.length > 11) raw = raw.slice(0, 11);
    
        let formatted = '';
        if (raw.length <= 3) {
        formatted = raw;
        } else if (raw.length <= 7) {
        formatted = raw.slice(0, 3) + '-' + raw.slice(3);
        } else {
        formatted = raw.slice(0, 3) + '-' + raw.slice(3, 7) + '-' + raw.slice(7);
        }
        e.target.value = formatted;
        hideError();
    });
    
    /* ─────────────────────────────
        [인증하기] 버튼
    ───────────────────────────── */
    btnVerify.addEventListener('click', () => {
        const phone = inputPhone.value.trim();
    
        if (!phone) {
        showError('전화번호를 입력해주세요.');
        return;
        }
    
        if (phone === VALID_PHONE) {
        hideError();
        window.location.href = 'login_agree.html';
        } else {
        showError('등록되지 않은 전화번호입니다.');
        }
    });
    
    /* ─────────────────────────────
        [Sign up] 버튼
    ───────────────────────────── */
    btnSignup.addEventListener('click', () => {
        const id    = inputId.value.trim();
        const pw    = inputPw.value.trim();
    
        /* 조건 1: 미입력 */
        if (!id) {
        showError('이메일을 입력해주세요.');
        return;
        }
        if (!pw) {
        showError('비밀번호를 입력해주세요.');
        return;
        }
    
        /* 조건 2: 이메일 형식 */
        if (!isValidEmail(id)) {
        showError('올바른 이메일 형식을 입력해주세요.');
        return;
        }
    
        /* 조건 3: 비밀번호 조건 */
        if (!isValidPassword(pw)) {
        showError('비밀번호는 8자 이상, 영문/숫자/특수문자를 포함해야 합니다.');
        return;
        }
    
        hideError();
        /* 실제 회원가입 로직 연결 지점 */
        console.log('Sign up attempt:', { id });
    });
    
    /* ─────────────────────────────
        [뒤로가기] 버튼
    ───────────────────────────── */
    backBtn.addEventListener('click', () => {
        history.back();
    });