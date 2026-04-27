    /* ── 인증 정보 (실제 서비스에서는 서버에서 검증해야 합니다) ── */
    const VALID_ID = 'greencom';
    const VALID_PW = 'rmzja123*';
    
    const loginBtn   = document.getElementById('login-btn');
    const userIdInput  = document.getElementById('userId');
    const passwordInput = document.getElementById('password');
    const errorMsg   = document.getElementById('error-msg');
    
    /* ── 오류 표시 / 숨기기 ── */
    function showError(msg) {
        errorMsg.textContent = msg;
        errorMsg.classList.add('visible');
    }
    
    function hideError() {
        errorMsg.classList.remove('visible');
    }
    
    /* ── 로그인 버튼 클릭 ── */
    loginBtn.addEventListener('click', async () => {
        const userId   = userIdInput.value.trim();
        const password = passwordInput.value.trim();
    
        /* 조건 2: 아이디 미입력 */
        if (!userId) {
        showError('*아이디를 입력해주세요.');
        return;
        }
    
        /* 조건 2: 비밀번호 미입력 */
        if (!password) {
        showError('*비밀번호를 입력해주세요.');
        return;
        }
    
        /* 서버 통신 시뮬레이션 (실제 API 호출 자리) */
        try {
        /* 네트워크 요청 흉내 — 실제 서비스에서는 fetch() 등으로 교체 */
        await simulateLogin(userId, password);
    
        /* 로그인 성공 → index.html 이동 */
        hideError();
        window.location.href = 'index.html';
    
        } catch (err) {
        if (err.type === 'auth') {
            /* 조건 1: 아이디 또는 비밀번호 불일치 */
            showError('*아이디 또는 비밀번호를 확인해주세요.');
        } else {
            /* 조건 3: 서버 장애 / 네트워크 오류 */
            showError('*서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
        }
    });
    
    /* ── 입력 중 오류 메시지 숨기기 ── */
    [userIdInput, passwordInput].forEach(el => {
        el.addEventListener('input', hideError);
    });
    
    /* ── 로그인 시뮬레이터 (실제 fetch로 교체 예정) ── */
    function simulateLogin(userId, password) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (navigator.onLine === false) {
            /* 오프라인 → 네트워크 오류 */
            reject({ type: 'network', message: 'Network error' });
            return;
            }
            if (userId === VALID_ID && password === VALID_PW) {
            resolve({ success: true });
            } else {
            reject({ type: 'auth', message: 'Invalid credentials' });
            }
        }, 300); /* 서버 응답 흉내 */
        });
    }
    
    /* ── Sign up 버튼 ── */
    document.getElementById('signup-btn').addEventListener('click', () => {
        console.log('Navigate to sign up');
    });