window.KHO_DE = window.KHO_DE || { tsa: { "Toán học": {}, "Đọc hiểu": {}, "Khoa học": {}, "Tổng hợp": {} }, hsa: {}, thpt: {} };

window.KHO_DE.tsa["Toán học"]["Đề số 1"] = {
    title: "Đề số 1 - Tư duy Toán học (Đề Shiba 001)",
    duration: 60, // 60 phút chuẩn TSA
    questions: [
        // CÂU 1
        {
            id: "C1",
            type: "trac_nghiem",
            prompt: "Xét tính liên tục của hàm số: \\[ f(x) = \\begin{cases} \\dfrac{x-3}{\\sqrt{4-x}-1} & \\text{khi } x < 3 \\\\[6pt] -x+1 & \\text{khi } x \\ge 3 \\end{cases} \\] Khẳng định nào dưới đây đúng?",
            options: [
                "A. \\( f(x) \\) không liên tục tại điểm \\( x = 4 \\).",
                "B. \\( f(x) \\) không liên tục trên khoảng \\( (0; 4) \\).",
                "C. \\( f(x) \\) gián đoạn tại điểm \\( x = 3 \\).",
                "D. \\( f(x) \\) liên tục trên tập xác định của hàm số."
            ],
            correctAnswer: "D. \\( f(x) \\) liên tục trên tập xác định của hàm số."
        },

        // CÂU 2
        {
            id: "C2",
            type: "trac_nghiem",
            prompt: "Với cùng một khối lượng công việc, ba bạn Tú, Duy, Huy có thể làm một mình và hoàn thành nó lần lượt trong \\( 60 \\) phút, \\( 45 \\) phút và \\( 36 \\) phút. Nếu \\( 3 \\) người cùng làm chung thì sau bao lâu sẽ hoàn thành xong khối lượng công việc đó?",
            options: [
                "A. \\( 10 \\) phút.",
                "B. \\( 15 \\) phút.",
                "C. \\( 20 \\) phút.",
                "D. \\( 24 \\) phút."
            ],
            correctAnswer: "B. \\( 15 \\) phút."
        },

        // CÂU 3
        {
            id: "C3",
            type: "trac_nghiem",
            prompt: "Trong không gian \\( Oxyz \\), cho \\( \\vec{u} = (1; -2; -1) \\) và \\( \\vec{v} = (2; 1; 3) \\). Biết vectơ \\( \\vec{w} \\) cùng chiều với \\( [\\vec{v}, \\vec{u}] \\) và \\( |\\vec{w}| = 4\\sqrt{3} \\). Cao độ của \\( \\vec{w} \\) bằng:",
            options: [
                "A. \\( -4 \\).",
                "B. \\( 4 \\).",
                "C. \\( -5 \\).",
                "D. \\( 5 \\)."
            ],
            correctAnswer: "A. \\( -4 \\)."
        },

        // CÂU 4
        {
            id: "C4",
            type: "keo_tha",
            prompt: "Cho hàm số \\( y = f(x) \\) có đồ thị là đường cong như hình vẽ bên dưới. Kéo chữ ở các ô vuông thả vào vị trí thích hợp trong các câu sau:",
            image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='260' viewBox='0 0 320 260'><rect width='320' height='260' fill='white' stroke='%23ddd'/><line x1='20' y1='170' x2='300' y2='170' stroke='%23900' stroke-width='2'/><line x1='180' y1='20' x2='180' y2='245' stroke='%23900' stroke-width='2'/><line x1='140' y1='20' x2='140' y2='245' stroke='%23900' stroke-width='1.8'/><line x1='20' y1='100' x2='300' y2='100' stroke='%23900' stroke-width='1.8'/><path d='M 20 88 Q 125 82 135 20' fill='none' stroke='%23900' stroke-width='2.2'/><path d='M 145 245 Q 155 112 300 108' fill='none' stroke='%23900' stroke-width='2.2'/><text x='288' y='185' fill='%23900' font-size='14'>x</text><text x='186' y='32' fill='%23900' font-size='14'>y</text><text x='184' y='185' font-size='13'>O</text><text x='120' y='185' font-size='13'>-1</text><text x='185' y='95' font-size='13'>2</text></svg>",
            wordBank: ["đứng", "ngang", "trục đối xứng", "xiên", "đồng biến", "không đồng biến", "nghịch biến", "liên tục"],
            slots: [
                { id: "slot1", label: "Đường thẳng \\( x = -1 \\) là tiệm cận [...] của đồ thị hàm số \\( f(x) \\):" },
                { id: "slot2", label: "Đường thẳng \\( y = 2 \\) là tiệm cận [...] của đồ thị hàm số \\( f(x) \\):" },
                { id: "slot3", label: "Hàm số \\( f(x) \\) [...] trên \\( \\mathbb{R} \\):" }
            ],
            correctAnswer: { slot1: "đứng", slot2: "ngang", slot3: "không đồng biến" }
        },

        // CÂU 5
        {
            id: "C5",
            type: "trac_nghiem",
            prompt: "Cho tam giác \\( ABC \\) có \\( AB = c, BC = a, CA = b \\). Biết rằng \\( a; 2b; c \\) theo thứ tự tạo thành một cấp số cộng. Đẳng thức nào sau đây đúng?",
            options: [
                "A. \\( \\tan\\dfrac{A}{2}\\tan\\dfrac{C}{2} = \\dfrac{3}{5} \\)",
                "B. \\( \\tan\\dfrac{A}{2}\\tan\\dfrac{C}{2} = \\dfrac{1}{2} \\)",
                "C. \\( \\tan\\dfrac{A}{2}\\tan\\dfrac{C}{2} = 3 \\)",
                "D. \\( \\tan\\dfrac{A}{2}\\tan\\dfrac{C}{2} = 1 \\)"
            ],
            correctAnswer: "A. \\( \\tan\\dfrac{A}{2}\\tan\\dfrac{C}{2} = \\dfrac{3}{5} \\)"
        },

        // CÂU 6
        {
            id: "C6",
            type: "tra_loi_ngan",
            prompt: "Sau khi phát hiện một bệnh dịch, các chuyên gia y tế ước tính tổng số bệnh nhân nhiễm bệnh trong vòng \\( 1 \\) tháng, kể từ ngày xuất hiện ca bệnh đầu tiên, được xác định bởi công thức: \\[ g(t) = 60t^2 - t^3 + 1, \\quad 0 \\le t \\le 30 \\] trong đó \\( t \\) là khoảng thời gian tính theo ngày kể từ ngày xuất hiện ca bệnh đầu. Biết rằng tốc độ gia tăng bệnh nhân tức thời tại thời điểm \\( t_0 \\) được xác định bởi công thức \\( \\lim\\limits_{t \\to t_0} \\dfrac{g(t) - g(t_0)}{t - t_0} \\) (người/ngày). Tính tốc độ gia tăng bệnh nhân tức thời (người/ngày) tại thời điểm ngày thứ \\( 20 \\), tức \\( t_0 = 20 \\)?",
            correctAnswer: "1200"
        },

        // CÂU 7
        {
            id: "C7",
            type: "trac_nghiem",
            prompt: "Điểm cực tiểu của đồ thị hàm số \\( y = -x^4 + 8x^2 - 1 \\) là:",
            options: [
                "A. \\( y = -1 \\)",
                "B. \\( x = 0 \\)",
                "C. \\( x = 2 \\)",
                "D. \\( M(0; -1) \\)"
            ],
            correctAnswer: "D. \\( M(0; -1) \\)"
        },

        // CÂU 8
        {
            id: "C8",
            type: "dung_sai",
            prompt: "Trong không gian \\( Oxyz \\) cho bốn điểm \\( A(2; 1; -2), B(-1; 3; 6), C(8; -4; -4), D(11; -6; -12) \\). Trong các khẳng định sau, khẳng định nào đúng, khẳng định nào sai?",
            statements: [
                { id: "a", text: "a) \\( A, B, C \\) thẳng hàng." },
                { id: "b", text: "b) Trọng tâm của tam giác \\( ABC \\) là \\( G(3; 0; 0) \\)." },
                { id: "c", text: "c) Tứ giác \\( ABDC \\) là hình bình hành." }
            ],
            correctAnswer: { a: "Sai", b: "Đúng", c: "Sai" }
        },

        // CÂU 9
        {
            id: "C9",
            type: "trac_nghiem",
            prompt: "Trên khoảng \\( (-\\infty; -5) \\), họ nguyên hàm của hàm số \\( f(x) = \\dfrac{1}{x + 5} \\) là:",
            options: [
                "A. \\( \\ln(-x - 5) + C \\)",
                "B. \\( \\dfrac{1}{\\ln(x + 5)} + C \\)",
                "C. \\( \\ln(x + 5) + C \\)",
                "D. \\( -\\dfrac{1}{(x + 5)^2} + C \\)"
            ],
            correctAnswer: "A. \\( \\ln(-x - 5) + C \\)"
        },

        // CÂU 10
        {
            id: "C10",
            type: "keo_tha",
            prompt: "Bạn Thành đi chợ và muốn mua một món đồ có giá \\( 39000 \\) đồng, biết rằng Thành chỉ có một sấp các tờ tiền cùng mệnh giá \\( 5000 \\) đồng và người bán chỉ có một sấp các tờ tiền cùng mệnh giá \\( 2000 \\) đồng. Biết hai người chỉ dùng các tờ tiền hiện có để thực hiện giao dịch, không vay nợ hay thay đổi giá sản phẩm. Kéo số thích hợp thả vào chỗ trống:",
            wordBank: ["40000", "45000", "50000", "2", "3", "4"],
            slots: [
                { id: "slot1", label: "Thành phải trả trước cho người bán số tiền tối thiểu là (đồng):" },
                { id: "slot2", label: "Số tờ tiền tối thiểu mà người bán trả lại Thành là (tờ):" }
            ],
            correctAnswer: { slot1: "45000", slot2: "3" }
        },

        // CÂU 11
        {
            id: "C11",
            type: "trac_nghiem",
            prompt: "Trong \\( 37 \\) số tự nhiên đầu tiên, chọn ngẫu nhiên \\( 3 \\) số. Tính xác suất để \\( 3 \\) số chọn ra có ít nhất \\( 1 \\) số chẵn:",
            options: [
                "A. \\( \\dfrac{1157}{1295} \\)",
                "B. \\( \\dfrac{138}{1295} \\)",
                "C. \\( \\dfrac{1159}{1295} \\)",
                "D. \\( \\dfrac{136}{1295} \\)"
            ],
            correctAnswer: "C. \\( \\dfrac{1159}{1295} \\)"
        },

        // CÂU 12
        {
            id: "C12",
            type: "keo_tha",
            prompt: "Thống kê điểm trung bình môn Toán của các học sinh lớp \\( 12A1 \\) và \\( 12A2 \\) như sau: \\[ \\begin{array}{|c|c|c|c|c|c|} \\hline \\text{Khoảng điểm} & [5;6) & [6;7) & [7;8) & [8;9) & [9;10) \\\\ \\hline \\text{Số HS } 12A1 & 4 & 16 & 12 & 6 & 2 \\\\ \\hline \\text{Số HS } 12A2 & 12 & 2 & 8 & 14 & 4 \\\\ \\hline \\end{array} \\] Kéo ô thích hợp và thả vào vị trí tương ứng:",
            wordBank: ["12A1", "12A2", "8,2", "8,3", "8,4"],
            slots: [
                { id: "slot1", label: "Lớp có điểm trung bình cao hơn là:" },
                { id: "slot2", label: "Nhà trường gộp sĩ số của hai lớp trên và chọn những bạn thuộc top \\( 25\\% \\) điểm cao nhất để học bồi dưỡng. Ngưỡng điểm tối thiểu (giá trị tứ phân vị thứ 3) là:" }
            ],
            correctAnswer: { slot1: "12A2", slot2: "8,3" }
        },

        // CÂU 13
        {
            id: "C13",
            type: "trac_nghiem",
            prompt: "Cho hàm số \\( y = \\sin x \\). Khẳng định nào sau đây đúng?",
            options: [
                "A. Hàm số đạt cực đại tại \\( x = 3\\pi \\).",
                "B. Hàm số đạt cực tiểu tại \\( x = 4\\pi \\).",
                "C. Hàm số đạt cực tiểu tại \\( x = \\dfrac{7\\pi}{2} \\).",
                "D. Hàm số đồng biến trên \\( [3\\pi; 4\\pi] \\)."
            ],
            correctAnswer: "C. Hàm số đạt cực tiểu tại \\( x = \\dfrac{7\\pi}{2} \\)."
        },

        // CÂU 14
        {
            id: "C14",
            type: "trac_nghiem",
            prompt: "Trong không gian với hệ trục toạ độ \\( Oxyz \\), cho bốn điểm \\( M = (1; 2; 3), N = (4; 5; 6), P = (4; 3; 3), Q = (7; 2; 0) \\). Biết một trong bốn điểm đó thuộc miền tam giác tạo bởi ba điểm còn lại. Điểm đó là:",
            options: [
                "A. \\( Q \\)",
                "B. \\( N \\)",
                "C. \\( M \\)",
                "D. \\( P \\)"
            ],
            correctAnswer: "D. \\( P \\)"
        },

        // CÂU 15
        {
            id: "C15",
            type: "trac_nghiem",
            prompt: "Trong các số La Mã dưới đây, số nào có giá trị là bội của \\( \\text{IX } (9) \\)?",
            options: [
                "A. \\( \\overline{\\text{IX}}\\text{DCCCXXVIII} \\)",
                "B. \\( \\text{MMMDCCXXI} \\)",
                "C. \\( \\overline{\\text{VII}}\\text{MMCLIV} \\)",
                "D. \\( \\overline{\\text{XII}}\\text{MCCCXLII} \\)"
            ],
            correctAnswer: "A. \\( \\overline{\\text{IX}}\\text{DCCCXXVIII} \\)"
        },

        // CÂU 16
        {
            id: "C16",
            type: "keo_tha",
            prompt: "Cho hai biến cố \\( A, B \\) có \\( P(A) = 0,6; \\, P(B) = 0,5; \\, P(A \\cap B) = 0,2 \\). Kéo ô thích hợp thả vào vị trí tương ứng để hoàn thành các câu sau:",
            wordBank: ["độc lập", "không độc lập", "xung khắc", "\\( 1/3 \\)", "\\( 2/5 \\)", "\\( 0,4 \\)", "\\( 0,7 \\)", "\\( 0,8 \\)"],
            slots: [
                { id: "slot1", label: "Khi đó, \\( A, B \\) là hai biến cố:" },
                { id: "slot2", label: "Giá trị \\( P(B \\mid A) = \\)" },
                { id: "slot3", label: "Và \\( P(A \\cup \\overline{B}) = \\)" }
            ],
            correctAnswer: { slot1: "không độc lập", slot2: "\\( 1/3 \\)", slot3: "\\( 0,7 \\)" }
        },

        // CÂU 17
        {
            id: "C17",
            type: "dung_sai",
            prompt: "Cho phương trình \\( 2\\sin x + \\sin(2x) = 2\\cos x + 2\\sin^2 x \\). Xét tính đúng/sai của các mệnh đề sau:",
            statements: [
                { id: "a", text: "a) Phương trình có nghiệm dương bé nhất là \\( \\dfrac{\\pi}{4} \\)." },
                { id: "b", text: "b) Có \\( 4 \\) điểm biểu diễn các họ nghiệm của phương trình trên đường tròn lượng giác." }
            ],
            correctAnswer: { a: "Đúng", b: "Sai" }
        },

        // CÂU 18
        {
            id: "C18",
            type: "tra_loi_ngan",
            prompt: "Bạn Kỳ muốn làm một chiếc thùng phi bằng tôn hình trụ có dung tích \\( 3\\text{ m}^3 \\) (bỏ qua bề dày, các vết ghép nối, xem như cả mặt bên, đáy và nắp thùng làm cùng một loại tôn) sao cho tốn ít vật liệu nhất. Bạn Kỳ nên làm thùng phi với chiều cao bằng bao nhiêu \\( \\text{cm} \\)? (Kết quả làm tròn đến hàng đơn vị)",
            correctAnswer: "156"
        },

        // CÂU 19
        {
            id: "C19",
            type: "tra_loi_ngan",
            prompt: "Cho dãy số \\( (u_n) \\) thỏa mãn: \\( u_1 = 36, \\, u_9 = 211, \\, u_n = \\dfrac{1}{n - 1}\\sum\\limits_{k=1}^{n-1} u_k \\quad (\\forall n \\ge 3, n \\in \\mathbb{N}^*) \\). Khi đó, giá trị của \\( u_2 \\) bằng?",
            correctAnswer: "386"
        },

        // CÂU 20
        {
            id: "C20",
            type: "keo_tha",
            prompt: "Điểm số trung bình của vận động viên \\( X \\) sau một số lần bắn là \\( 8,58 \\) điểm. Kết quả cụ thể được ghi trong bảng sau, trong đó có hai ô bị mờ không đọc được: \\[ \\begin{array}{|c|c|c|c|c|c|} \\hline \\text{Điểm số mỗi lần bắn} & 10 & 9 & 8 & 7 & 6 \\\\ \\hline \\text{Số lần bắn tương ứng} & 22 & 40 & \\text{Ô mờ 1} & 20 & \\text{Ô mờ 2} \\\\ \\hline \\end{array} \\] Kéo và thả các phương án thích hợp vào chỗ trống:",
            wordBank: ["8", "15", "100"],
            slots: [
                { id: "slot1", label: "Ô mờ 1 chứa giá trị là:" },
                { id: "slot2", label: "Tổng số lần bắn được ghi lại của vận động viên \\( X \\) đó là:" }
            ],
            correctAnswer: { slot1: "15", slot2: "100" }
        },

        // CÂU 21
        {
            id: "C21",
            type: "keo_tha",
            prompt: "Một công ty chuyên sản xuất nồi cơm điện thấy rằng chi phí để sản xuất ra một chiếc nồi cơm điện KA-20 là \\( 20\\text{ USD} \\). Với những đơn hàng không quá \\( 100 \\) chiếc, công ty bán với giá bán lẻ \\( 60\\text{ USD} \\) cho mỗi chiếc. Để khuyến khích người mua với số lượng lớn, công ty giảm giá cho những đơn hàng đặt mua từ trên \\( 100 \\) chiếc đến dưới \\( 200 \\) chiếc như sau: cứ có \\( m \\) chiếc vượt ngưỡng \\( 100 \\) thì giá của mỗi chiếc trong cả lô hàng giảm đi \\( 0,2m \\) so với giá bán lẻ. Kéo và thả các phương án thích hợp vào chỗ trống:",
            wordBank: ["\\( 150 \\)", "\\( 50 \\)", "\\( 80 - 0,2x \\)", "\\( 60x - 0,2x^2 \\)"],
            slots: [
                { id: "slot1", label: "Nếu khách hàng đặt mua \\( x \\) chiếc KA-20 \\( (100 < x < 200) \\) thì giá bán mỗi chiếc trong đơn hàng này là (USD):" },
                { id: "slot2", label: "Khi đó, lợi nhuận thu được của công ty trong đơn hàng từ ý trên là (USD):" },
                { id: "slot3", label: "Với chính sách như trên, công ty đạt lợi nhuận lớn nhất khi đơn hàng có giá bán mỗi chiếc là (USD):" }
            ],
            correctAnswer: { slot1: "\\( 80 - 0,2x \\)", slot2: "\\( 60x - 0,2x^2 \\)", slot3: "\\( 50 \\)" }
        },

        // CÂU 22
        {
            id: "C22",
            type: "dung_sai",
            prompt: "Cho hình chóp \\( S.ABC \\) có đáy là tam giác \\( ABC \\) đều cạnh bằng \\( a \\), \\( SA \\perp (ABC) \\) và \\( SA = 2a \\). Xét tính đúng sai của những khẳng định dưới đây:",
            image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='340' height='240' viewBox='0 0 340 240'><rect width='340' height='240' fill='white' stroke='%23ddd'/><line x1='40' y1='25' x2='40' y2='205' stroke='%23900' stroke-width='2'/><line x1='40' y1='205' x2='220' y2='205' stroke='%23900' stroke-width='2'/><line x1='220' y1='205' x2='300' y2='140' stroke='%23900' stroke-width='2'/><line x1='40' y1='25' x2='220' y2='205' stroke='%23900' stroke-width='2'/><line x1='40' y1='25' x2='300' y2='140' stroke='%23900' stroke-width='2'/><line x1='40' y1='25' x2='260' y2='172' stroke='%23900' stroke-width='1.8'/><line x1='40' y1='205' x2='100' y2='140' stroke='%23900' stroke-dasharray='4,4'/><line x1='100' y1='140' x2='300' y2='140' stroke='%23900' stroke-dasharray='4,4'/><line x1='40' y1='25' x2='100' y2='140' stroke='%23900' stroke-dasharray='4,4'/><line x1='40' y1='205' x2='300' y2='140' stroke='%23900' stroke-dasharray='4,4'/><line x1='40' y1='205' x2='260' y2='172' stroke='%23900' stroke-dasharray='4,4'/><line x1='40' y1='205' x2='160' y2='105' stroke='%23900' stroke-dasharray='4,4'/><text x='24' y='28' font-size='14'>S</text><text x='24' y='220' font-size='14'>A</text><text x='218' y='222' font-size='14'>B</text><text x='306' y='145' font-size='14'>C</text><text x='85' y='135' font-size='14'>D</text><text x='268' y='182' font-size='14'>M</text><text x='162' y='100' font-size='14'>K</text></svg>",
            statements: [
                { id: "a", text: "a) Khoảng cách từ điểm \\( B \\) đến mặt phẳng \\( (SAC) \\) là \\( \\dfrac{a\\sqrt{3}}{2} \\)." },
                { id: "b", text: "b) Khoảng cách từ điểm \\( A \\) đến mặt phẳng \\( (SBC) \\) là \\( \\dfrac{a\\sqrt{15}}{\\sqrt{19}} \\)." },
                { id: "c", text: "c) Khoảng cách giữa hai đường thẳng \\( AB \\) và \\( SC \\) là \\( \\dfrac{2a\\sqrt{57}}{19} \\)." }
            ],
            correctAnswer: { a: "Đúng", b: "Sai", c: "Đúng" }
        },

        // CÂU 23
        {
            id: "C23",
            type: "dung_sai",
            prompt: "Cho hàm số \\( f(x) = \\dfrac{(x - 2)^{\\lg(x + 2)}}{(x + 2)^{\\lg(x - 2)}} \\). Xét tính đúng/sai của các mệnh đề sau:",
            statements: [
                { id: "a", text: "a) Đồ thị hàm số \\( y = \\lg(f(x)) \\) cắt trục tung tại duy nhất một điểm." },
                { id: "b", text: "b) \\( f(x) = 1 \\) với \\( x > 2 \\)." },
                { id: "c", text: "c) Đồ thị của họ nguyên hàm của hàm số \\( y = \\int f(x)\\,\\mathrm{d}x \\) luôn song song với đường thẳng \\( y = x \\)." }
            ],
            correctAnswer: { a: "Sai", b: "Đúng", c: "Sai" }
        },

        // CÂU 24
        {
            id: "C24",
            type: "tra_loi_ngan",
            prompt: "Trong một cuộc thi nấu ăn của trường, ba bạn Minh, Phong và Hiếu tham gia vòng thi làm bánh. Mỗi thí sinh có \\( 30 \\) phút để hoàn thành một chiếc bánh kem. Xác suất làm xong bánh đúng thời gian quy định của Minh, Phong, Hiếu lần lượt là \\( x, y \\) và \\( 0,2 \\) \\( (x < y) \\). Biết rằng xác suất để ít nhất một người làm xong bánh đúng giờ là \\( 0,76 \\) và xác suất để cả ba đều làm xong bánh đúng giờ là \\( 0,04 \\). Xác suất để có đúng hai người làm xong bánh đúng thời gian là bao nhiêu? Biết các biến cố là độc lập (Điền số thập phân và dùng dấu phẩy phân cách).",
            correctAnswer: "0,26"
        },

        // CÂU 25
        {
            id: "C25",
            type: "trac_nghiem",
            prompt: "Tổng tất cả các nghiệm của phương trình \\( \\dfrac{1}{2}\\log_{\\sqrt{3}}(x + 8) + \\dfrac{1}{4}\\log_9(x - 1)^8 = \\log_3(9x) \\) là:",
            options: [
                "A. \\( 4 \\).",
                "B. \\( -4 + 6\\sqrt{2} \\).",
                "C. \\( 6\\sqrt{2} \\).",
                "D. \\( 2 \\)."
            ],
            correctAnswer: "B. \\( -4 + 6\\sqrt{2} \\)."
        },

        // CÂU 26
        {
            id: "C26",
            type: "trac_nghiem",
            prompt: "Cho hình lăng trụ tam giác đều có cạnh đáy bằng \\( a \\) và chiều cao bằng \\( 8a \\). Thể tích khối lăng trụ đã cho bằng:",
            options: [
                "A. \\( 8a^3\\sqrt{3} \\).",
                "B. \\( a^3\\sqrt{2} \\).",
                "C. \\( 4a^3\\sqrt{3} \\).",
                "D. \\( 2a^3\\sqrt{3} \\)."
            ],
            correctAnswer: "D. \\( 2a^3\\sqrt{3} \\)."
        },

        // CÂU 27
        {
            id: "C27",
            type: "trac_nghiem",
            prompt: "Giá trị lớn nhất của tham số \\( m \\) để phương trình \\( \\ln(m + \\ln(m + \\cos(3x))) = \\cos(3x) \\) có nghiệm thực là?",
            options: [
                "A. \\( 1 \\).",
                "B. \\( e \\).",
                "C. \\( e - 1 \\).",
                "D. \\( e + 1 \\)."
            ],
            correctAnswer: "C. \\( e - 1 \\)."
        },

        // CÂU 28
        {
            id: "C28",
            type: "tra_loi_ngan",
            prompt: "Một chiếc cốc hình trụ có đường kính đáy bằng \\( 7\\text{ (cm)} \\), chiều cao \\( 10\\text{ (cm)} \\) đang chứa đầy nước. Ta nghiêng cốc cho nước chảy từ từ ra ngoài đến khi mép nước ngang với đường kính của đáy cốc và nước sẽ vừa chạm tới miệng cốc. Khi đó, bề mặt nước trong cốc tạo thành một nửa hình ellipse. Diện tích bề mặt nước lúc đó bằng \\( a\\pi \\), giá trị của \\( a \\) bằng bao nhiêu (làm tròn đến hàng phần trăm, dùng dấu phẩy)?",
            image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='210' viewBox='0 0 260 210'><rect width='260' height='210' fill='white' stroke='%23ddd'/><g transform='rotate(-28 130 115)'><ellipse cx='70' cy='115' rx='18' ry='42' fill='none' stroke='%23900' stroke-width='2'/><ellipse cx='190' cy='115' rx='18' ry='42' fill='none' stroke='%23900' stroke-width='2'/><line x1='70' y1='73' x2='190' y2='73' stroke='%23900' stroke-width='2'/><line x1='70' y1='157' x2='190' y2='157' stroke='%23900' stroke-width='2'/><path d='M 70 157 L 190 73 A 18 42 0 0 1 70 157 Z' fill='%23ffd6d6' opacity='0.75' stroke='%23900' stroke-width='1.8'/><line x1='70' y1='73' x2='70' y2='157' stroke='%23900' stroke-width='1.5'/><text x='110' y='58' fill='%23900' font-size='13'>10 (cm)</text><text x='52' y='138' fill='%23900' font-size='13'>r</text></g></svg>",
            correctAnswer: "18,55"
        },

        // CÂU 29
        {
            id: "C29",
            type: "dung_sai",
            prompt: "Cho hàm số \\( y = f(x) \\) là một đa thức bậc năm và có đồ thị đạo hàm \\( y = f'(x) \\) như hình minh họa. Xét tính đúng/sai của các mệnh đề sau:",
            image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='230' viewBox='0 0 320 230'><rect width='320' height='230' fill='white' stroke='%23ddd'/><line x1='20' y1='150' x2='300' y2='150' stroke='%23900' stroke-width='2'/><line x1='60' y1='15' x2='60' y2='215' stroke='%23900' stroke-width='2'/><line x1='60' y1='70' x2='180' y2='70' stroke='%23900' stroke-dasharray='4,4'/><line x1='180' y1='70' x2='180' y2='150' stroke='%23900' stroke-dasharray='4,4'/><line x1='60' y1='190' x2='240' y2='190' stroke='%23900' stroke-dasharray='4,4'/><line x1='240' y1='150' x2='240' y2='190' stroke='%23900' stroke-dasharray='4,4'/><path d='M 52 25 C 65 90, 95 150, 120 150 C 145 150, 165 70, 180 70 C 195 70, 225 190, 240 190 C 255 190, 275 100, 288 20' fill='none' stroke='%23900' stroke-width='2.3'/><circle cx='60' cy='70' r='3.5' fill='white' stroke='%23900' stroke-width='2'/><circle cx='120' cy='150' r='3.5' fill='white' stroke='%23900' stroke-width='2'/><circle cx='180' cy='70' r='3.5' fill='white' stroke='%23900' stroke-width='2'/><circle cx='240' cy='190' r='3.5' fill='white' stroke='%23900' stroke-width='2'/><text x='42' y='75' font-size='13'>2</text><text x='36' y='195' font-size='13'>-1</text><text x='44' y='168' font-size='13'>O</text><text x='116' y='168' font-size='13'>1</text><text x='176' y='168' font-size='13'>2</text><text x='236' y='143' font-size='13'>3</text><text x='162' y='58' font-size='13'>(2;2)</text><text x='220' y='210' font-size='13'>(3;-1)</text></svg>",
            statements: [
                { id: "a", text: "a) Hiệu \\( f(1) - f(0) < 0 \\)." },
                { id: "b", text: "b) Giá trị của \\( f''(2) = 0 \\)." },
                { id: "c", text: "c) Giới hạn \\( \\lim\\limits_{x \\to 3} \\dfrac{f(x) - f(3)}{x - 3} > 0 \\)." }
            ],
            correctAnswer: { a: "Sai", b: "Đúng", c: "Sai" }
        },

        // CÂU 30
        {
            id: "C30",
            type: "dung_sai",
            prompt: "Với mỗi số nguyên dương \\( n \\), đặt \\[ u_n = \\dfrac{n}{\\sqrt{9n^4 + 1}} + \\dfrac{n}{\\sqrt{9n^4 + 2}} + \\dots + \\dfrac{n}{\\sqrt{9n^4 + n}} \\] Mỗi phát biểu sau đây là đúng hay sai?",
            statements: [
                { id: "a", text: "a) \\( \\lim\\limits_{n \\to +\\infty} \\dfrac{n}{\\sqrt{9n^4 + 1}} = 0 \\)." },
                { id: "b", text: "b) \\( \\lim\\limits_{n \\to +\\infty} u_n = 0 \\)." },
                { id: "c", text: "c) Tồn tại vô số số nguyên dương \\( n \\) để \\( u_n > \\dfrac{10^{50}}{3 \\cdot 10^{50} + 1} \\)." }
            ],
            correctAnswer: { a: "Đúng", b: "Sai", c: "Đúng" }
        },

        // CÂU 31
        {
            id: "C31",
            type: "trac_nghiem",
            prompt: "Cho đoạn thẳng \\( AB \\) cố định. Tập hợp các điểm \\( G \\) trong không gian thỏa mãn diện tích \\( \\triangle GAB \\) không đổi là:",
            options: [
                "A. Mặt nón.",
                "B. Mặt cầu.",
                "C. Đường thẳng.",
                "D. Mặt trụ."
            ],
            correctAnswer: "D. Mặt trụ."
        },

        // CÂU 32
        {
            id: "C32",
            type: "keo_tha",
            prompt: "Kéo và thả các phương án thích hợp vào chỗ trống. Xếp \\( 8 \\) chữ số thuộc dãy \\( 3; 3; 5; 5; 7; 7; 9; 9 \\) vào tám ô trống \\( (2\\text{ hàng} \\times 4\\text{ cột}) \\):",
            image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='140' viewBox='0 0 280 140'><rect x='10' y='10' width='260' height='120' fill='%23ffd6d6' stroke='%23900' stroke-width='2'/><line x1='10' y1='70' x2='270' y2='70' stroke='%23900' stroke-width='2'/><line x1='75' y1='10' x2='75' y2='130' stroke='%23900' stroke-width='2'/><line x1='140' y1='10' x2='140' y2='130' stroke='%23900' stroke-width='2'/><line x1='205' y1='10' x2='205' y2='130' stroke='%23900' stroke-width='2'/></svg>",
            wordBank: ["\\( 2520 \\)", "\\( 2515 \\)", "\\( \\dfrac{8}{21} \\)", "\\( \\dfrac{12}{21} \\)", "\\( \\dfrac{43}{105} \\)"],
            slots: [
                { id: "slot1", label: "Số cách sắp xếp là:" },
                { id: "slot2", label: "Xác suất để hai số giống nhau không đứng cạnh nhau (trong cùng 1 hàng) là:" }
            ],
            correctAnswer: { slot1: "\\( 2520 \\)", slot2: "\\( \\dfrac{43}{105} \\)" }
        },

        // CÂU 33
        {
            id: "C33",
            type: "trac_nghiem",
            prompt: "Gọi \\( S \\) là tập hợp các giá trị của tham số \\( m \\) để đồ thị \\( (C) \\) của hàm số \\( y = \\dfrac{2x^2 - 4x + m}{(x - 1)^3(x - 2)} \\) có đúng hai đường tiệm cận. Tổng các phần tử của \\( S \\) bằng:",
            options: [
                "A. \\( 2 \\).",
                "B. \\( 0 \\).",
                "C. \\( 4 \\).",
                "D. \\( -2 \\)."
            ],
            correctAnswer: "B. \\( 0 \\)."
        },

        // CÂU 34
        {
            id: "C34",
            type: "dung_sai",
            prompt: "Cho hình chóp \\( S.ABCD \\) có đáy \\( ABCD \\) là hình chữ nhật cạnh \\( AB = 2a, \\, AD = a \\). Điểm \\( H \\) nằm trên cạnh \\( AB \\) thỏa mãn \\( AH = \\dfrac{1}{3}HB \\). Hai mặt phẳng \\( (SHC) \\) và \\( (SHD) \\) cùng vuông góc với mặt phẳng đáy. Cho biết \\( SA = \\dfrac{a\\sqrt{5}}{2} \\). Mỗi phát biểu sau đây là đúng hay sai?",
            image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='360' height='210' viewBox='0 0 360 210'><rect width='360' height='210' fill='white' stroke='%23ddd'/><line x1='220' y1='25' x2='200' y2='180' stroke='%23900' stroke-width='2'/><line x1='220' y1='25' x2='300' y2='180' stroke='%23900' stroke-width='2'/><line x1='220' y1='25' x2='335' y2='140' stroke='%23900' stroke-width='2'/><line x1='200' y1='180' x2='300' y2='180' stroke='%23900' stroke-width='2'/><line x1='300' y1='180' x2='335' y2='140' stroke='%23900' stroke-width='2'/><line x1='220' y1='25' x2='235' y2='140' stroke='%23900' stroke-dasharray='4,4'/><line x1='200' y1='180' x2='235' y2='140' stroke='%23900' stroke-dasharray='4,4'/><line x1='235' y1='140' x2='335' y2='140' stroke='%23900' stroke-dasharray='4,4'/><line x1='220' y1='25' x2='210' y2='165' stroke='%23900' stroke-dasharray='3,3'/><text x='215' y='18' font-size='14'>S</text><text x='188' y='194' font-size='14'>A</text><text x='298' y='194' font-size='14'>D</text><text x='340' y='145' font-size='14'>C</text><text x='225' y='134' font-size='14'>B</text><text x='194' y='168' font-size='13'>H</text></svg>",
            statements: [
                { id: "a", text: "a) Khoảng cách từ điểm \\( H \\) đến mặt phẳng \\( (SBC) \\) là \\( \\dfrac{3a}{\\sqrt{13}} \\)." },
                { id: "b", text: "b) Cosin góc giữa đường thẳng \\( SD \\) và \\( (SBC) \\) là \\( \\dfrac{\\sqrt{689}}{39} \\)." }
            ],
            correctAnswer: { a: "Đúng", b: "Đúng" }
        },

        // CÂU 35
        {
            id: "C35",
            type: "trac_nghiem",
            prompt: "Có bao nhiêu giá trị thực của \\( m \\) để phương trình: \\[ (\\sin x - 1)(2\\cos^2 x - (2m + 1)\\cos x + m) = 0 \\] có đúng \\( 4 \\) nghiệm thực phân biệt thuộc đoạn \\( [0; 2\\pi] \\)?",
            options: [
                "A. \\( 2 \\).",
                "B. \\( 1 \\).",
                "C. \\( 4 \\).",
                "D. \\( 3 \\)."
            ],
            correctAnswer: "A. \\( 2 \\)."
        },

        // CÂU 36
        {
            id: "C36",
            type: "trac_nghiem",
            prompt: "Trong không gian \\( Oxyz \\), cho mặt cầu \\( (S): (x - 2)^2 + (y - 1)^2 + (z - 2)^2 = 16 \\) và điểm \\( A(a; 0; 0) \\) thuộc trục hoành. Đường thẳng đi qua \\( A \\) tiếp xúc với mặt cầu nếu đường thẳng này có đúng một điểm chung với mặt cầu (điểm này gọi là tiếp điểm). Có bao nhiêu giá trị nguyên âm của \\( a \\) để có hai đường thẳng đi qua \\( A \\) tiếp xúc với mặt cầu và hai đường thẳng này vuông góc nhau?",
            options: [
                "A. \\( 1 \\).",
                "B. \\( 3 \\).",
                "C. \\( 4 \\).",
                "D. \\( 2 \\)."
            ],
            correctAnswer: "D. \\( 2 \\)."
        },

        // CÂU 37
        {
            id: "C37",
            type: "tra_loi_ngan",
            prompt: "Một kiến trúc sư muốn xây dựng \\( 1 \\) tòa nhà biểu tượng độc lạ cho thành phố. Trên bản thiết kế tòa nhà có hình dạng là một khối lăng trụ tam giác đều \\( ABC.A'B'C' \\), có cạnh bên bằng cạnh đáy và dài \\( 300 \\) mét (tham khảo hình vẽ). Kiến trúc sư muốn xây dựng một cây cầu \\( MN \\) bắc xuyên tòa nhà (điểm đầu \\( M \\) thuộc cạnh \\( A'C \\), điểm cuối \\( N \\) thuộc cạnh \\( BC' \\)) và cây cầu này sẽ được dát vàng với đơn giá \\( 5 \\) tỷ đồng trên \\( 1 \\) mét dài. Vì vậy để đáp ứng bài toán kinh tế, kiến trúc sư phải chọn vị trí cây cầu sao cho \\( MN \\) ngắn nhất. Khi đó giá xây cây cầu này hết bao nhiêu tiền (đơn vị: tỷ đồng, làm tròn đến hàng phần trăm, dùng dấu phẩy)?",
            image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='290' height='240' viewBox='0 0 290 240'><rect width='290' height='240' fill='white' stroke='%23ddd'/><polygon points='45,175 165,210 225,165' fill='%23ffd6d6' opacity='0.6'/><line x1='45' y1='45' x2='165' y2='80' stroke='%23900' stroke-width='2'/><line x1='165' y1='80' x2='225' y2='35' stroke='%23900' stroke-width='2'/><line x1='45' y1='45' x2='225' y2='35' stroke='%23900' stroke-width='2'/><line x1='45' y1='175' x2='165' y2='210' stroke='%23900' stroke-width='2'/><line x1='165' y1='210' x2='225' y2='165' stroke='%23900' stroke-width='2'/><line x1='45' y1='175' x2='225' y2='165' stroke='%23900' stroke-dasharray='4,4'/><line x1='45' y1='45' x2='45' y2='175' stroke='%23900' stroke-width='2'/><line x1='165' y1='80' x2='165' y2='210' stroke='%23900' stroke-width='2'/><line x1='225' y1='35' x2='225' y2='165' stroke='%23900' stroke-width='2'/><line x1='45' y1='45' x2='225' y2='165' stroke='%23900' stroke-dasharray='4,4'/><line x1='165' y1='210' x2='225' y2='35' stroke='%23900' stroke-width='2'/><line x1='125' y1='98' x2='198' y2='114' stroke='%23900' stroke-dasharray='3,3' stroke-width='2'/><text x='25' y='45' font-size='14'>A'</text><text x='145' y='78' font-size='14'>B'</text><text x='230' y='38' font-size='14'>C'</text><text x='25' y='182' font-size='14'>A</text><text x='160' y='228' font-size='14'>B</text><text x='232' y='170' font-size='14'>C</text><text x='105' y='112' font-size='13'>M</text><text x='204' y='122' font-size='13'>N</text></svg>",
            correctAnswer: "670,82"
        },

        // CÂU 38
        {
            id: "C38",
            type: "trac_nghiem",
            prompt: "Trong mặt phẳng với hệ trục tọa độ \\( Oxy \\), cho điểm \\( A(1; -2) \\) và đường thẳng \\( d: y = 2x - 2 \\). Biết rằng đường thẳng \\( \\Delta \\) cắt và vuông góc với đường thẳng \\( d \\) tại điểm thuộc trục hoành (tham khảo hình vẽ). Từ điểm \\( A \\) ta lần lượt lấy đối xứng liên tiếp qua các đường thẳng \\( d, \\Delta \\) và sau cùng là trục \\( Oy \\) thì thu được điểm \\( A''' \\). Khi ấy tọa độ của điểm \\( A''' \\) chính là:",
            image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='220' viewBox='0 0 260 220'><rect width='260' height='220' fill='white' stroke='%23ddd'/><line x1='20' y1='110' x2='240' y2='110' stroke='%23900' stroke-width='2'/><line x1='105' y1='15' x2='105' y2='205' stroke='%23900' stroke-width='2'/><line x1='95' y1='200' x2='195' y2='20' stroke='%23900' stroke-width='2'/><line x1='40' y1='62' x2='225' y2='150' stroke='%23900' stroke-width='2'/><line x1='145' y1='110' x2='145' y2='175' stroke='%23900' stroke-dasharray='4,4'/><line x1='105' y1='175' x2='145' y2='175' stroke='%23900' stroke-dasharray='4,4'/><text x='88' y='126' font-size='14'>O</text><text x='230' y='125' font-size='14'>x</text><text x='112' y='28' font-size='14'>y</text><text x='152' y='182' font-size='14'>A</text><text x='180' y='25' fill='%23900' font-size='14'>(d)</text><text x='205' y='168' fill='%23900' font-size='14'>(Δ)</text></svg>",
            options: [
                "A. \\( A'''\\left(-\\dfrac{3}{5}; -\\dfrac{6}{5}\\right) \\).",
                "B. \\( A'''(1; 2) \\).",
                "C. \\( A'''(-1; 1) \\).",
                "D. \\( A'''(-1; 2) \\)."
            ],
            correctAnswer: "D. \\( A'''(-1; 2) \\)."
        },

        // CÂU 39
        {
            id: "C39",
            type: "trac_nghiem",
            prompt: "Trong không gian \\( Oxyz \\) cho tam giác \\( ABC \\), biết rằng ba điểm \\( M(2; 1; -1), \\, N(-2; 3; 1), \\, P(1; 0; 3) \\) lần lượt là trung điểm của \\( AB, BC, AC \\). Tọa độ của điểm \\( A \\) là:",
            options: [
                "A. \\( A(5; -2; 1) \\).",
                "B. \\( A(5; 2; -1) \\).",
                "C. \\( A(-5; -2; 1) \\).",
                "D. \\( A(5; -2; -1) \\)."
            ],
            correctAnswer: "A. \\( A(5; -2; 1) \\)."
        },

        // CÂU 40
        {
            id: "C40",
            type: "tra_loi_ngan",
            prompt: "Đặt \\( \\alpha = \\sqrt[60]{4} - 1 \\) và \\[ \\beta_n = C_n^1 + C_n^2\\alpha + C_n^3\\alpha^2 + \\dots + C_n^n\\alpha^{n-1} \\] Hiệu \\( \\beta_{301} - \\beta_{300} \\) bằng?",
            correctAnswer: "1024"
        }
    ]
};