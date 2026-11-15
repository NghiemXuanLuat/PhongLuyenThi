let studentsDB = JSON.parse(JSON.stringify(DEFAULT_STUDENTS_DB));
let currentEmail = null; let currentSubject = "";
let activeExam = null; let activeTestName = ""; let currentQIndex = 0;
let userAnswers = {}; let questionTimeSpent = {}; let remainingSeconds = 0;
let examInterval = null; let draggedWord = null;
let lastRenderedPassageId = null;

// Firebase không cho phép dấu chấm (.) trong tên khóa nên đổi tạm thành dấu phẩy (,)
function encodeEmailKey(email) { return email.replace(/\./g, ','); }
function decodeEmailKey(key) { return key.replace(/,/g, '.'); }

// Tải toàn bộ dữ liệu mới nhất từ Firebase về máy
async function syncFromCloud() {
    if (!FIREBASE_DB_URL || FIREBASE_DB_URL.includes("xxxx")) return;
    try {
        const res = await fetch(`${FIREBASE_DB_URL}/students.json`);
        const data = await res.json();

        // Nếu trên đám mây chưa có dữ liệu (lần đầu chạy) -> đẩy dữ liệu mẫu lên
        if (!data) {
            await uploadAllToCloud();
            return;
        }

        const loadedDB = {};
        Object.keys(data).forEach(key => {
            const realEmail = decodeEmailKey(key);
            const st = data[key];
            loadedDB[realEmail] = {
                name: st.name || "",
                attempts: st.attempts || { "Toán học": 5, "Đọc hiểu": 5, "Khoa học": 5, "Tổng hợp": 2 },
                history: Array.isArray(st.history) ? st.history : (st.history ? Object.values(st.history) : [])
            };
        });
        studentsDB = loadedDB;
    } catch (err) {
        console.error("Lỗi đồng bộ Firebase:", err);
    }
}

// Lưu riêng thông tin của 1 học sinh lên Firebase (tránh ghi đè chéo khi nhiều HS thi cùng lúc)
async function saveStudentToCloud(email) {
    if (!FIREBASE_DB_URL || FIREBASE_DB_URL.includes("xxxx")) return;
    try {
        const key = encodeEmailKey(email);
        await fetch(`${FIREBASE_DB_URL}/students/${key}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentsDB[email])
        });
    } catch (err) {
        alert("⚠️ Lỗi lưu dữ liệu lên máy chủ! Vui lòng kiểm tra kết nối mạng.");
    }
}

// Đẩy toàn bộ danh sách lên Firebase (dùng khi khởi tạo hoặc khôi phục gốc)
async function uploadAllToCloud() {
    if (!FIREBASE_DB_URL || FIREBASE_DB_URL.includes("xxxx")) return;
    const payload = {};
    Object.keys(studentsDB).forEach(email => {
        payload[encodeEmailKey(email)] = studentsDB[email];
    });
    await fetch(`${FIREBASE_DB_URL}/students.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
}

// Tự động đồng bộ ngay khi vừa mở trang web
window.addEventListener('DOMContentLoaded', () => {
    syncFromCloud();
});

function triggerMathJax() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise().catch(err => console.log(err));
    }
}

async function resetDefaultData() {
    if (confirm("Khôi phục lại dữ liệu mẫu ban đầu trên toàn hệ thống?")) {
        studentsDB = JSON.parse(JSON.stringify(DEFAULT_STUDENTS_DB));
        await uploadAllToCloud();
        renderAdminLevel1();
        alert("✅ Đã khôi phục dữ liệu gốc lên đám mây!");
    }
}

function backToHomeSafe() {
    if (examInterval && !confirm("Bạn đang thi! Thoát ra sẽ hủy bài. Chắc chắn thoát?")) return;
    if (examInterval) { clearInterval(examInterval); examInterval = null; }
    showScreen('screen-exams');
}

function showScreen(screenId) {
    const screens = ['screen-exams', 'screen-tsa-subjects', 'screen-test-list', 'screen-exam-room', 'screen-exam-result', 'screen-admin-lv1', 'screen-admin-lv2', 'screen-admin-lv3'];
    screens.forEach(id => document.getElementById(id).style.display = 'none');
    document.getElementById(screenId).style.display = (screenId === 'screen-exam-room') ? 'flex' : 'block';

    const mainEl = document.getElementById('main-container');
    if (screenId !== 'screen-exam-room') {
        mainEl.classList.remove('wide-exam-mode');
    }
}
function openModal(modalId) { document.getElementById(modalId).style.display = 'block'; }
function closeModal(modalId) { document.getElementById(modalId).style.display = 'none'; }

// --- ĐĂNG NHẬP ---
async function handleAuthClick() {
    if (examInterval) { alert("Vui lòng nộp bài trước khi đăng xuất!"); return; }
    if (currentEmail) {
        currentEmail = null;
        document.getElementById('user-display').innerText = "Chưa đăng nhập";
        document.getElementById('btnLogin').innerText = "Đăng nhập";
        document.getElementById('btnLogin').className = "btn-primary";
        document.getElementById('btnAdmin').style.display = "none";
        updateTSAAttemptsUI(); showScreen('screen-exams'); return;
    }

    const email = (prompt("Nhập Email đã đăng ký:") || "").trim().toLowerCase();
    if (!email) return;

    document.getElementById('user-display').innerText = "⏳ Đang kiểm tra dữ liệu...";
    await syncFromCloud();

    if (!studentsDB[email]) {
        document.getElementById('user-display').innerText = "Chưa đăng nhập";
        alert("Email chưa được cấp quyền!");
        return;
    }

    if (!studentsDB[email].name || studentsDB[email].name.trim() === "") {
        let newName = prompt("Vui lòng nhập Họ và Tên của bạn (lưu 1 lần duy nhất):");
        if (!newName || newName.trim() === "") {
            document.getElementById('user-display').innerText = "Chưa đăng nhập";
            return;
        }
        studentsDB[email].name = newName.trim();
        await saveStudentToCloud(email);
    }

    currentEmail = email;
    document.getElementById('user-display').innerHTML = `👤 <b>${studentsDB[email].name}</b> (${currentEmail})`;
    document.getElementById('btnLogin').innerText = "Đăng xuất";
    document.getElementById('btnLogin').className = "btn-danger";
    document.getElementById('btnAdmin').style.display = ADMIN_EMAILS.includes(currentEmail) ? "inline-block" : "none";
    updateTSAAttemptsUI();
}

// --- VÀO THI ---
async function openTSA() {
    showScreen('screen-tsa-subjects');
    if (currentEmail) await syncFromCloud();
    updateTSAAttemptsUI();
}

function updateTSAAttemptsUI() {
    const subjects = ["Toán học", "Đọc hiểu", "Khoa học", "Tổng hợp"];
    if (!currentEmail) {
        document.getElementById('tsa-login-notice').style.display = "block";
        subjects.forEach(s => document.getElementById(`attempt-${s}`).innerText = "Cần đăng nhập");
    } else {
        document.getElementById('tsa-login-notice').style.display = "none";
        subjects.forEach(s => document.getElementById(`attempt-${s}`).innerText = `Còn ${studentsDB[currentEmail].attempts[s]} lượt`);
    }
}

function openSubjectTests(subjectName) {
    if (!currentEmail) { alert("Vui lòng đăng nhập!"); return; }
    if (studentsDB[currentEmail].attempts[subjectName] <= 0) { alert("Hết lượt thi!"); return; }
    currentSubject = subjectName;
    document.getElementById('test-list-title').innerText = `TSA - ${subjectName} (Thí sinh: ${studentsDB[currentEmail].name})`;
    const container = document.getElementById('test-list-container'); container.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
        const testName = `Đề số ${i}`;
        const hasData = window.KHO_DE.tsa[subjectName] && window.KHO_DE.tsa[subjectName][testName];
        container.innerHTML += `<div class="test-card" onclick="startRealExam('${testName}')">
            <h3>${testName}</h3><p style="margin-top:8px; color:${hasData?'#28a745':'#888'};"><b>${hasData?'✔ Đã có đề':'Chờ nạp'}</b></p></div>`;
    }
    showScreen('screen-test-list');
}

function startRealExam(testName) {
    const testData = window.KHO_DE.tsa[currentSubject] ? window.KHO_DE.tsa[currentSubject][testName] : null;
    if (!testData) { alert("Đề này đang chờ nạp câu hỏi!"); return; }
    if (!confirm(`Bắt đầu làm bài: ${testData.title}\nThời gian: ${testData.duration} phút.`)) return;

    activeExam = testData; activeTestName = testName; currentQIndex = 0; userAnswers = {}; questionTimeSpent = {};
    lastRenderedPassageId = null;
    activeExam.questions.forEach(q => { questionTimeSpent[q.id] = 0; });
    document.getElementById('exam-room-title').innerText = activeExam.title;
    document.getElementById('exam-student-name').innerText = `Thí sinh: ${studentsDB[currentEmail].name}`;

    remainingSeconds = activeExam.duration * 60; updateCountdownDisplay();
    if (examInterval) clearInterval(examInterval);
    examInterval = setInterval(() => {
        remainingSeconds--; updateCountdownDisplay();
        const currentQ = activeExam.questions[currentQIndex];
        questionTimeSpent[currentQ.id] = (questionTimeSpent[currentQ.id] || 0) + 1;
        document.getElementById('current-q-timer').innerText = `⏱ Đã dùng: ${questionTimeSpent[currentQ.id]}s`;
        if (remainingSeconds <= 0) submitExam(true);
    }, 1000);
    showScreen('screen-exam-room'); renderCurrentQuestion();
}

function updateCountdownDisplay() {
    const m = Math.floor(remainingSeconds / 60); const s = remainingSeconds % 60;
    document.getElementById('exam-countdown').innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderCurrentQuestion() {
    const q = activeExam.questions[currentQIndex];
    const mainEl = document.getElementById('main-container');
    const bodyGrid = document.getElementById('exam-body-grid');
    const passagePanel = document.getElementById('exam-passage-panel');

    let passageObj = null;
    if (q.passageId && activeExam.passages && activeExam.passages[q.passageId]) {
        passageObj = activeExam.passages[q.passageId];
    } else if (q.passage) {
        passageObj = { header: "BÀI ĐỌC", title: "", content: q.passage };
    }

    if (passageObj) {
        mainEl.classList.add('wide-exam-mode');
        bodyGrid.classList.add('split-mode');
        passagePanel.style.display = "block";

        const currentKey = q.passageId || q.id;
        if (lastRenderedPassageId !== currentKey) {
            document.getElementById('passage-header-tag').innerText = passageObj.header || "VĂN BẢN ĐỌC HIỂU";
            document.getElementById('passage-title').innerText = passageObj.title || "";
            document.getElementById('passage-content').innerText = passageObj.content || "";
            passagePanel.scrollTop = 0;
            lastRenderedPassageId = currentKey;
        }
    } else {
        mainEl.classList.remove('wide-exam-mode');
        bodyGrid.classList.remove('split-mode');
        passagePanel.style.display = "none";
        lastRenderedPassageId = null;
    }

    document.getElementById('current-q-number').innerText = `Câu ${currentQIndex + 1} (${q.id})`;
    document.getElementById('current-q-timer').innerText = `⏱ Đã dùng: ${questionTimeSpent[q.id]}s`;
    document.getElementById('exam-q-prompt').innerHTML = q.prompt;
    document.getElementById('current-q-type').innerText = {
        "trac_nghiem": "Trắc nghiệm 1 đáp án",
        "nhieu_dap_an": "Chọn nhiều đáp án",
        "dung_sai": "Đúng / Sai",
        "tra_loi_ngan": "Trả lời ngắn",
        "keo_tha": "Kéo thả"
    }[q.type] || q.type;

    const imgBox = document.getElementById('exam-q-image-box');
    if (q.image) {
        document.getElementById('exam-q-image').src = q.image;
        imgBox.style.display = "block";
    } else {
        imgBox.style.display = "none";
    }

    const container = document.getElementById('exam-q-interaction');
    container.innerHTML = "";

    if (q.type === "trac_nghiem") {
        q.options.forEach((opt, optIdx) => {
            const isSel = (userAnswers[q.id] === opt);
            const div = document.createElement('div');
            div.className = `option-item ${isSel ? 'selected' : ''}`;
            div.onclick = () => selectSingleOption(optIdx);
            div.innerHTML = `<input type="radio" ${isSel ? 'checked' : ''}> <span>${opt}</span>`;
            container.appendChild(div);
        });
    } else if (q.type === "nhieu_dap_an") {
        const savedArr = userAnswers[q.id] || [];
        q.options.forEach((opt, optIdx) => {
            const isCh = savedArr.includes(opt);
            const div = document.createElement('div');
            div.className = `option-item ${isCh ? 'selected' : ''}`;
            div.onclick = () => toggleMultiOption(optIdx);
            div.innerHTML = `<input type="checkbox" ${isCh ? 'checked' : ''}> <span>${opt}</span>`;
            container.appendChild(div);
        });
    } else if (q.type === "dung_sai") {
        let html = `<table class="tf-table"><thead><tr><th>Mệnh đề</th><th>Đúng</th><th>Sai</th></tr></thead><tbody>`;
        q.statements.forEach(st => {
            const val = (userAnswers[q.id] || {})[st.id] || "";
            html += `<tr><td>${st.text}</td>
                <td class="tf-radio-cell"><input type="radio" name="tf_${q.id}_${st.id}" ${val==='Đúng'?'checked':''} onchange="selectTrueFalse('${q.id}','${st.id}','Đúng')"></td>
                <td class="tf-radio-cell"><input type="radio" name="tf_${q.id}_${st.id}" ${val==='Sai'?'checked':''} onchange="selectTrueFalse('${q.id}','${st.id}','Sai')"></td></tr>`;
        });
        container.innerHTML = html + `</tbody></table>`;
    } else if (q.type === "tra_loi_ngan") {
        const input = document.createElement('input');
        input.type = "text";
        input.className = "short-ans-input";
        input.value = userAnswers[q.id] || "";
        input.placeholder = "Nhập câu trả lời của bạn...";
        input.oninput = function() {
            userAnswers[q.id] = this.value;
            renderPalette();
        };
        container.appendChild(input);
    } else if (q.type === "keo_tha") {
        const bankDiv = document.createElement('div');
        bankDiv.className = "word-bank";
        q.wordBank.forEach((w, wIdx) => {
            const chip = document.createElement('div');
            chip.className = "drag-chip";
            chip.draggable = true;
            chip.ondragstart = () => { draggedWord = q.wordBank[wIdx]; };
            chip.onclick = () => { draggedWord = q.wordBank[wIdx]; };
            chip.innerHTML = w;
            bankDiv.appendChild(chip);
        });
        container.appendChild(bankDiv);

        const hint = document.createElement('p');
        hint.style.cssText = "font-size:13px; color:#666; margin-bottom:10px;";
        hint.innerText = "💡 Kéo thẻ ở trên thả vào ô trống bên dưới (hoặc bấm vào thẻ rồi bấm vào ô trống):";
        container.appendChild(hint);

        q.slots.forEach(sl => {
            const row = document.createElement('div');
            row.className = "slot-row";
            const filled = (userAnswers[q.id] || {})[sl.id] || "Thả vào đây";
            row.innerHTML = `<span>${sl.label}</span>`;

            const dropZone = document.createElement('div');
            dropZone.className = "drop-zone";
            dropZone.ondragover = (e) => e.preventDefault();
            dropZone.ondrop = () => handleDropSlot(q.id, sl.id);
            dropZone.onclick = () => {
                if (draggedWord) handleDropSlot(q.id, sl.id);
                else clearDropSlot(q.id, sl.id);
            };
            dropZone.innerHTML = filled;

            row.appendChild(dropZone);
            container.appendChild(row);
        });
    }

    document.getElementById('btnPrevQ').disabled = (currentQIndex === 0);
    document.getElementById('btnNextQ').disabled = (currentQIndex === activeExam.questions.length - 1);
    renderPalette();
    triggerMathJax();
}

function selectSingleOption(optIdx) {
    const q = activeExam.questions[currentQIndex];
    userAnswers[q.id] = q.options[optIdx];
    renderCurrentQuestion();
}

function toggleMultiOption(optIdx) {
    const q = activeExam.questions[currentQIndex];
    const opt = q.options[optIdx];
    let arr = userAnswers[q.id] || [];
    if (arr.includes(opt)) arr = arr.filter(x => x !== opt);
    else arr.push(opt);
    userAnswers[q.id] = arr;
    renderCurrentQuestion();
}

function selectTrueFalse(qId, stId, val) {
    if (!userAnswers[qId]) userAnswers[qId] = {};
    userAnswers[qId][stId] = val;
    renderPalette();
}

function handleDropSlot(qId, slId) {
    if (draggedWord !== null) {
        if (!userAnswers[qId]) userAnswers[qId] = {};
        userAnswers[qId][slId] = draggedWord;
        draggedWord = null;
        renderCurrentQuestion();
    }
}

function clearDropSlot(qId, slId) {
    if (userAnswers[qId] && userAnswers[qId][slId]) {
        delete userAnswers[qId][slId];
        renderCurrentQuestion();
    }
}

function navigateQuestion(step) {
    if (currentQIndex + step >= 0 && currentQIndex + step < activeExam.questions.length) {
        currentQIndex += step;
        renderCurrentQuestion();
    }
}

function isQuestionAnswered(q) {
    const ans = userAnswers[q.id]; if (!ans) return false;
    if (q.type === "trac_nghiem" || q.type === "tra_loi_ngan") return String(ans).trim() !== "";
    if (q.type === "nhieu_dap_an") return Array.isArray(ans) && ans.length > 0;
    if (q.type === "dung_sai") return Object.keys(ans).length === q.statements.length;
    if (q.type === "keo_tha") return Object.keys(ans).length === q.slots.length;
    return false;
}

function renderPalette() {
    document.getElementById('question-palette').innerHTML = activeExam.questions.map((q, idx) =>
        `<button class="palette-btn ${isQuestionAnswered(q)?'answered':''} ${idx===currentQIndex?'current':''}" onclick="currentQIndex=${idx}; renderCurrentQuestion();">${idx+1}</button>`
    ).join("");
}

function checkQuestionCorrect(q, uAns) {
    if (!uAns) return false;
    if (q.type === "trac_nghiem") return uAns === q.correctAnswer;
    if (q.type === "tra_loi_ngan") {
        const cleaned = String(uAns).trim().toLowerCase().replace(/\s+/g, " ");
        if (Array.isArray(q.acceptedAnswers)) {
            return q.acceptedAnswers.some(a => a.trim().toLowerCase() === cleaned);
        }
        return cleaned === String(q.correctAnswer).trim().toLowerCase();
    }
    if (q.type === "nhieu_dap_an") {
        return Array.isArray(uAns) && uAns.length === q.correctAnswer.length && [...uAns].sort().join("|") === [...q.correctAnswer].sort().join("|");
    }
    if (q.type === "dung_sai") {
        return q.statements.every(s => uAns[s.id] === q.correctAnswer[s.id]);
    }
    if (q.type === "keo_tha") {
        if (Array.isArray(q.acceptedSlotAnswers)) {
            return q.acceptedSlotAnswers.some(validMap => q.slots.every(s => uAns[s.id] === validMap[s.id]));
        }
        return q.slots.every(s => uAns[s.id] === q.correctAnswer[s.id]);
    }
    return false;
}

function formatAnswerForDisplay(q, ansObj) {
    if (!ansObj) return "(Bỏ trống)";
    if (q.type === "trac_nghiem" || q.type === "tra_loi_ngan") return String(ansObj).trim() || "(Bỏ trống)";
    if (q.type === "nhieu_dap_an") return ansObj.length ? ansObj.join(" ; ") : "(Bỏ trống)";
    if (q.type === "dung_sai") return q.statements.map(s => `${s.id}) ${ansObj[s.id]||'?'}`).join(", ");
    if (q.type === "keo_tha") return q.slots.map((s, i) => `(${i+1}) ${ansObj[s.id]||'?'}`).join(" | ");
    return JSON.stringify(ansObj);
}

// ================= NỘP BÀI VÀ ĐỒNG BỘ KẾT QUẢ LÊN ĐÁM MÂY =================
async function submitExam(isAuto) {
    if (!isAuto && !confirm("Chắc chắn nộp bài?")) return;
    clearInterval(examInterval); examInterval = null;

    let correctCount = 0; let totalSpent = 0; const details = [];

    activeExam.questions.forEach(q => {
        const uAns = userAnswers[q.id];
        const isCor = checkQuestionCorrect(q, uAns);
        if (isCor) correctCount++;
        const sp = questionTimeSpent[q.id] || 0;
        totalSpent += sp;

        details.push({
            qId: q.id,
            isCorrect: isCor,
            userAns: formatAnswerForDisplay(q, uAns),
            correctAns: formatAnswerForDisplay(q, q.correctAnswer),
            timeSpent: `${sp} giây`
        });
    });

    const tQ = activeExam.questions.length;

    studentsDB[currentEmail].attempts[currentSubject] -= 1;
    studentsDB[currentEmail].history.push({
        attemptId: "ATT_" + Date.now(),
        date: new Date().toLocaleString('vi-VN'),
        exam: "TSA",
        subject: currentSubject,
        testName: activeTestName,
        score: `${correctCount}/${tQ}`,
        totalTime: `${Math.floor(totalSpent/60)}p ${totalSpent%60}s`,
        details: details
    });

    document.getElementById('exam-result-summary').innerHTML = `<p>⏳ Đang lưu bài thi lên hệ thống...</p>`;
    showScreen('screen-exam-result');

    await saveStudentToCloud(currentEmail);

    document.getElementById('exam-result-summary').innerHTML = `
        <p>Họ tên Thí sinh: <b>${studentsDB[currentEmail].name}</b></p>
        <p>Bài thi: <b>${currentSubject} - ${activeTestName}</b></p>
        <p style="font-size: 24px; color: #d9534f; font-weight: bold; margin-top: 15px;">
            Số câu đúng: ${correctCount} / ${tQ} câu
        </p>
        <p style="font-size: 15px; color: #555; margin-top: 10px;">Lượt thi môn ${currentSubject} còn lại của bạn: <b>${studentsDB[currentEmail].attempts[currentSubject]} lượt</b></p>
    `;

    const tbody = document.getElementById('exam-result-tbody');
    tbody.innerHTML = "";
    details.forEach(item => {
        const badge = item.isCorrect ? `<span class="badge-correct">✔ Đúng</span>` : `<span class="badge-wrong">✘ Sai</span>`;
        tbody.innerHTML += `
            <tr>
                <td><b>${item.qId}</b></td>
                <td>${badge}</td>
                <td style="color: ${item.isCorrect ? '#155724' : '#721c24'};">${item.userAns}</td>
                <td><b style="color: #28a745;">${item.correctAns}</b></td>
            </tr>
        `;
    });

    triggerMathJax();
}

// ================= QUẢN TRỊ VIÊN 3 CẤP (ĐỒNG BỘ TRỰC TUYẾN) =================
async function submitNewStudent() {
    const newEmail = document.getElementById('new-student-email').value.trim().toLowerCase();
    if (!newEmail) { alert("Vui lòng nhập Email!"); return; }
    await syncFromCloud();
    if (studentsDB[newEmail]) { alert("Thất bại: Email này đã tồn tại trong hệ thống rồi!"); return; }
    studentsDB[newEmail] = { name: "", attempts: { "Toán học": 5, "Đọc hiểu": 5, "Khoa học": 5, "Tổng hợp": 2 }, history: [] };
    await saveStudentToCloud(newEmail);
    closeModal('modal-add-student');
    document.getElementById('new-student-email').value = "";
    renderAdminLevel1();
    alert("✅ Đã cấp quyền truy cập và đồng bộ cho: " + newEmail);
}

function openEditAttempts(studentEmail) {
    document.getElementById('edit-attempts-title').innerText = `Chỉnh sửa lượt: ${studentEmail}`;
    document.getElementById('edit-att-email').value = studentEmail;
    const att = studentsDB[studentEmail].attempts;
    document.getElementById('edit-att-toan').value = att["Toán học"]; document.getElementById('edit-att-doc').value = att["Đọc hiểu"];
    document.getElementById('edit-att-khoa').value = att["Khoa học"]; document.getElementById('edit-att-tonghop').value = att["Tổng hợp"];
    openModal('modal-edit-attempts');
}

async function saveAttempts() {
    const targetEmail = document.getElementById('edit-att-email').value; if (!studentsDB[targetEmail]) return;
    studentsDB[targetEmail].attempts["Toán học"] = parseInt(document.getElementById('edit-att-toan').value) || 0;
    studentsDB[targetEmail].attempts["Đọc hiểu"] = parseInt(document.getElementById('edit-att-doc').value) || 0;
    studentsDB[targetEmail].attempts["Khoa học"] = parseInt(document.getElementById('edit-att-khoa').value) || 0;
    studentsDB[targetEmail].attempts["Tổng hợp"] = parseInt(document.getElementById('edit-att-tonghop').value) || 0;
    await saveStudentToCloud(targetEmail);
    closeModal('modal-edit-attempts');
    renderAdminLevel1();
    alert("✅ Đã lưu và đồng bộ số lượt thi lên đám mây!");
}

async function openAdminLevel1() {
    if (!ADMIN_EMAILS.includes(currentEmail)) return;
    showScreen('screen-admin-lv1');
    document.getElementById('admin-lv1-tbody').innerHTML = `<tr><td colspan="4" style="text-align:center;">⏳ Đang tải dữ liệu mới nhất từ đám mây...</td></tr>`;
    await syncFromCloud();
    renderAdminLevel1();
}

function renderAdminLevel1() {
    const kw = document.getElementById('searchStudentInput').value.trim().toLowerCase();
    const tbody = document.getElementById('admin-lv1-tbody'); tbody.innerHTML = "";
    Object.keys(studentsDB).forEach(email => {
        const st = studentsDB[email]; const name = st.name || "(Chưa kích hoạt tên)";
        if (name.toLowerCase().includes(kw) || email.includes(kw)) {
            const att = st.attempts;
            tbody.innerHTML += `<tr><td class="clickable-row" onclick="openAdminLevel2('${email}')">👤 ${name}</td><td>${email}</td>
                <td>Toán: <b>${att["Toán học"]}</b> | Đọc: <b>${att["Đọc hiểu"]}</b> | Khoa: <b>${att["Khoa học"]}</b> | TH: <b>${att["Tổng hợp"]}</b>
                <button class="btn-edit" onclick="openEditAttempts('${email}')">✏️ Sửa lượt</button></td><td><b>${st.history.length}</b> bài</td></tr>`;
        }
    });
}

function openAdminLevel2(email) {
    const st = studentsDB[email];
    document.getElementById('admin-lv2-title').innerText = `Lịch sử thi: ${st.name||"Chưa có tên"} (${email})`;
    const tbody = document.getElementById('admin-lv2-tbody'); tbody.innerHTML = "";
    if (st.history.length === 0) tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Chưa làm bài nào.</td></tr>`;
    else {
        st.history.forEach((rec, idx) => {
            tbody.innerHTML += `<tr><td>${rec.date}</td><td><b>${rec.exam} - ${rec.subject} - ${rec.testName}</b></td>
                <td style="color:#d9534f; font-weight:bold;">${rec.score}</td><td>${rec.totalTime}</td>
                <td><button class="btn-primary" onclick="openAdminLevel3('${email}', ${idx})">Xem câu Đúng/Sai</button></td></tr>`;
        });
    }
    showScreen('screen-admin-lv2');
}

function openAdminLevel3(email, idx) {
    const rec = studentsDB[email].history[idx];
    document.getElementById('btn-back-to-lv2').onclick = () => openAdminLevel2(email);
    document.getElementById('admin-lv3-title').innerText = `Chi tiết: ${rec.subject} (${rec.testName})`;
    document.getElementById('question-preview-modal').style.display = 'none';
    const tbody = document.getElementById('admin-lv3-tbody'); tbody.innerHTML = "";

    rec.details.forEach((item, detailIdx) => {
        const badge = item.isCorrect ? `<span class="badge-correct">✔ Đúng</span>` : `<span class="badge-wrong">✘ Sai</span>`;
        const tr = document.createElement('tr');
        tr.style.cursor = "pointer";
        tr.onclick = () => previewQuestionDetail(email, idx, detailIdx);
        tr.innerHTML = `<td><b>${item.qId}</b></td><td>${badge}</td><td>⏱ ${item.timeSpent}</td><td>${item.userAns}</td><td><b>${item.correctAns || "Xem trong đề"}</b></td>
            <td><span class="clickable-row">👁 Xem đề</span></td>`;
        tbody.appendChild(tr);
    });
    showScreen('screen-admin-lv3');
    triggerMathJax();
}

function previewQuestionDetail(email, historyIdx, detailIdx) {
    const rec = studentsDB[email].history[historyIdx];
    const item = rec.details[detailIdx];
    const testData = window.KHO_DE.tsa[rec.subject] ? window.KHO_DE.tsa[rec.subject][rec.testName] : null;
    if (!testData) return;
    const q = testData.questions.find(i => i.id === item.qId);
    if (!q) return;

    document.getElementById('preview-q-title').innerText = `📌 Nội dung ${q.id} (${rec.testName} - ${rec.subject})`;
    document.getElementById('preview-q-prompt').innerHTML = q.prompt;
    if (q.image) {
        document.getElementById('preview-q-image').src = q.image;
        document.getElementById('preview-q-image-box').style.display = "block";
    } else {
        document.getElementById('preview-q-image-box').style.display = "none";
    }
    let optHtml = "";
    if (q.options) optHtml = q.options.map(o => `<div>• ${o}</div>`).join("");
    else if (q.statements) optHtml = q.statements.map(s => `<div>• ${s.text}</div>`).join("");
    else if (q.slots) optHtml = q.slots.map(s => `<div>• ${s.label} [ ... ]</div>`).join("");
    document.getElementById('preview-q-options').innerHTML = optHtml;
    document.getElementById('preview-q-compare').innerHTML = `<span>HS chọn: <b style="color:#d9534f;">${item.userAns}</b></span> &nbsp;|&nbsp; <span>Đúng: <b style="color:#28a745;">${formatAnswerForDisplay(q, q.correctAnswer)}</b></span>`;
    document.getElementById('question-preview-modal').style.display = 'block';
    triggerMathJax();
}