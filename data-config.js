// 1. DANH SÁCH EMAIL QUẢN TRỊ VIÊN (Bạn có thể thêm nhiều mail vào đây)
const ADMIN_EMAILS = [
    "luatnx@vnu.edu.vn",
    "quanly2@gmail.com"
];

// 2. DỮ LIỆU HỌC SINH BAN ĐẦU
// name: "" nghĩa là chưa có tên, lần đầu đăng nhập hệ thống sẽ hỏi tên 1 lần duy nhất
const DEFAULT_STUDENTS_DB = {
    "luatnx@vnu.edu.vn": {
        name: "Nghiêm Xuân Luật (Admin)",
        attempts: { "Toán học": 99, "Đọc hiểu": 99, "Khoa học": 99, "Tổng hợp": 99 },
        history: []
    },
    "hocsinh1@gmail.com": {
        name: "Nguyễn Minh Hoàng", // Học sinh này đã nhập tên từ trước -> Vào thi không hỏi lại nữa
        attempts: { "Toán học": 4, "Đọc hiểu": 5, "Khoa học": 5, "Tổng hợp": 2 },
        history: [
            // Dữ liệu bài làm mẫu để bạn test ngay tính năng Admin 3 cấp
            {
                attemptId: "HS1_L1",
                date: "15/11/2026 - 14:30",
                exam: "TSA",
                subject: "Toán học",
                testName: "Đề số 1",
                score: "2/3 (6.67đ)",
                totalTime: "1 phút 45 giây",
                details: [
                    { qId: "C1", isCorrect: true, userAns: "B. 4", timeSpent: "25 giây" },
                    { qId: "C2", isCorrect: false, userAns: "a) Đúng, b) Đúng", timeSpent: "50 giây" },
                    { qId: "C3", isCorrect: true, userAns: "24", timeSpent: "30 giây" }
                ]
            }
        ]
    },
    "hocsinh2@gmail.com": {
        name: "", // Chưa có tên -> Khi đăng nhập lần đầu sẽ bắt nhập tên
        attempts: { "Toán học": 5, "Đọc hiểu": 5, "Khoa học": 3, "Tổng hợp": 2 },
        history: []
    }
};