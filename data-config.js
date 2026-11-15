const FIREBASE_DB_URL = "https://phongluyenthi-default-rtdb.asia-southeast1.firebasedatabase.app";

// 1. DANH SÁCH EMAIL QUẢN TRỊ VIÊN

const ADMIN_EMAILS = [
    "luat24052007@gmail.com",
    "doc687146@gmail.com"
];

// 2. DỮ LIỆU HỌC SINH BAN ĐẦU (Sẽ tự động đẩy lên đám mây ở lần chạy đầu tiên)
const DEFAULT_STUDENTS_DB = {
    "luat24052007@gmail.com": {
        name: "Nghiêm Xuân Luật (Admin)",
        attempts: { "Toán học": 99, "Đọc hiểu": 99, "Khoa học": 99, "Tổng hợp": 99 },
        history: []
    },
    "doc687146@gmail.com": {
        name: "Đỗ Chiến",
        attempts: { "Toán học": 4, "Đọc hiểu": 5, "Khoa học": 5, "Tổng hợp": 2 },
        history: []
    },
    "hocsinh2@gmail.com": {
        name: "",
        attempts: { "Toán học": 5, "Đọc hiểu": 5, "Khoa học": 3, "Tổng hợp": 2 },
        history: []
    }
};