window.KHO_DE = window.KHO_DE || {};
window.KHO_DE.tsa = window.KHO_DE.tsa || {};
window.KHO_DE.tsa["Toán học"] = window.KHO_DE.tsa["Toán học"] || {};

window.KHO_DE.tsa["Toán học"]["Đề số 1"] = {
    title: "Đề thi Đánh giá Tư duy TSA - Toán học - Đề số 1",
    duration: 60,
    questions: [
        {
            id: "C1",
            type: "trac_nghiem",
            prompt: "Xét tính liên tục của hàm số \\( f(x) = \\begin{cases} \\frac{x-3}{\\sqrt{4-x}-1} & \\text{khi } x < 3 \\\\ -x+1 & \\text{khi } x \\ge 3 \\end{cases} \\). Khẳng định nào dưới đây đúng?",
            options: [
                "A. \\( f(x) \\) không liên tục tại điểm \\( x=4 \\).",
                "B. \\( f(x) \\) không liên tục trên khoảng \\( (0; 4) \\).",
                "C. \\( f(x) \\) gián đoạn tại điểm \\( x=3 \\).",
                "D. \\( f(x) \\) liên tục trên tập xác định của hàm số."
            ],
            correctAnswer: "D. \\( f(x) \\) liên tục trên tập xác định của hàm số."
        },
        {
            id: "C2",
            type: "trac_nghiem",
            prompt: "Với cùng một khối lượng công việc, ba bạn Tú, Duy, Huy có thể làm một mình và hoàn thành nó lần lượt trong 60 phút, 45 phút và 36 phút. Nếu 3 người cùng làm chung thì sau bao lâu sẽ hoàn thành xong khối lượng công việc đó?",
            options: [
                "A. 10 phút.",
                "B. 15 phút.",
                "C. 20 phút.",
                "D. 24 phút."
            ],
            correctAnswer: "B. 15 phút."
        },
        {
            id: "C3",
            type: "trac_nghiem",
            prompt: "Trong không gian \\( Oxyz \\), cho \\( \\vec{u} = (1; -2; -1) \\) và \\( \\vec{v} = (2; 1; 3) \\). Biết vectơ \\( \\vec{w} \\) cùng chiều với \\([\\vec{u}, \\vec{v}]\\) và \\(|\\vec{w}| = 4\\sqrt{3}\\). Cao độ của \\(\\vec{w}\\) bằng:",
            options: [
                "A. -4.",
                "B. 4.",
                "C. -5.",
                "D. 5."
            ],
            correctAnswer: "A. -4."
        },
        {
            id: "C4",
            type: "keo_tha",
            prompt: "Cho hàm số \\( y = f(x) \\) có đồ thị như hình vẽ. Kéo chữ ở các ô vuông thả vào vị trí thích hợp trong các câu sau:",
            wordBank: ["đứng", "ngang", "xiên", "đồng biến", "nghịch biến", "không đồng biến", "liên tục"],
            slots: [
                { id: "slot1", label: "Đường thẳng \\( x = -1 \\) là tiệm cận ... của đồ thị hàm số \\( f(x) \\)." },
                { id: "slot2", label: "Đường thẳng \\( y = 2 \\) là tiệm cận ... của đồ thị hàm số \\( f(x) \\)." },
                { id: "slot3", label: "Hàm số \\( f(x) \\) ... trên \\( \\mathbb{R} \\)." }
            ],
            correctAnswer: {
                "slot1": "đứng",
                "slot2": "ngang",
                "slot3": "không đồng biến"
            },
            acceptedSlotAnswers: [
                { "slot1": "đứng", "slot2": "ngang", "slot3": "không đồng biến" }
            ]
        },
        {
            id: "C5",
            type: "trac_nghiem",
            prompt: "Cho tam giác \\( ABC \\) có \\( AB = c \\), \\( BC = a \\), \\( CA = b \\). Biết rằng \\( a; 2b; c \\) theo thứ tự tạo thành một cấp số cộng. Đẳng thức nào sau đây đúng?",
            options: [
                "A. \\( \\tan \\frac{A}{2} \\tan \\frac{C}{2} = \\frac{3}{5} \\)",
                "B. \\( \\tan \\frac{A}{2} \\tan \\frac{C}{2} = \\frac{1}{2} \\)",
                "C. \\( \\tan \\frac{A}{2} \\tan \\frac{C}{2} = 3 \\)",
                "D. \\( \\tan \\frac{A}{2} \\tan \\frac{C}{2} = 1 \\)"
            ],
            correctAnswer: "A. \\( \\tan \\frac{A}{2} \\tan \\frac{C}{2} = \\frac{3}{5} \\)"
        },
        {
            id: "C6",
            type: "tra_loi_ngan",
            prompt: "Sau khi phát hiện một bệnh dịch, các chuyên gia y tế ước tính tổng số bệnh nhân nhiễm bệnh trong vòng 1 tháng, kể từ ngày xuất hiện ca bệnh đầu tiên, được xác định bởi công thức \\( g(t) = 60t^2 - t^3 + 1 \\) \\((0 \\le t \\le 30)\\), trong đó \\( t \\) là khoảng thời gian tính theo ngày kể từ ngày xuất hiện ca bệnh đầu. Biết rằng tốc độ gia tăng bệnh nhân tức thời tại thời điểm \\( t_0 \\) được xác định bởi công thức \\( \\lim_{t \\to t_0} \\frac{g(t) - g(t_0)}{t - t_0} \\) (người/ngày). Tính tốc độ gia tăng bệnh nhân tức thời (người/ngày) tại thời điểm ngày thứ 20, tức \\( t_0 = 20 \\)?",
            correctAnswer: "1200",
            acceptedAnswers: ["1200"]
        },
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
        {
            id: "C8",
            type: "dung_sai",
            prompt: "Trong không gian \\( Oxyz \\) cho bốn điểm \\( A(2; 1; -2) \\), \\( B(-1; 3; 6) \\), \\( C(8; -4; -4) \\), \\( D(11; -6; -12) \\). Xét tính đúng/sai của các mệnh đề sau:",
            statements: [
                { id: "st1", text: "A, B, C thẳng hàng." },
                { id: "st2", text: "Trọng tâm của tam giác ABC là \\( G(3; 0; 0) \\)." },
                { id: "st3", text: "Tứ giác ABDC là hình bình hành." }
            ],
            correctAnswer: {
                "st1": "Sai",
                "st2": "Đúng",
                "st3": "Sai"
            }
        },
        {
            id: "C9",
            type: "trac_nghiem",
            prompt: "Trên khoảng \\( (-\\infty; -5) \\), họ nguyên hàm của hàm số \\( f(x) = \\frac{1}{x+5} \\) là:",
            options: [
                "A. \\( \\ln(-x-5) + C \\)",
                "B. \\( \\frac{1}{\\ln(x+5)} + C \\)",
                "C. \\( \\ln(x+5) + C \\)",
                "D. \\( -\\frac{1}{(x+5)^2} + C \\)"
            ],
            correctAnswer: "A. \\( \\ln(-x-5) + C \\)"
        },
        {
            id: "C10",
            type: "keo_tha",
            prompt: "Bạn Thành đi chợ và muốn mua một món đồ có giá 39.000 đồng, biết rằng Thành chỉ có một sấp các tờ tiền cùng mệnh giá 5.000 đồng và người bán chỉ có một sấp các tờ tiền cùng mệnh giá 2.000 đồng. Biết hai người chỉ dùng các tờ tiền hiện có để thực hiện giao dịch, không vay nợ hay thay đổi giá sản phẩm. Điền kết quả thích hợp:",
            wordBank: ["45.000", "3", "50.000", "2"],
            slots: [
                { id: "slot1", label: "Thành phải trả trước cho người bán số tiền tối thiểu là ... đồng." },
                { id: "slot2", label: "Số tờ tiền tối thiểu mà người bán trả lại Thành là ..." }
            ],
            correctAnswer: {
                "slot1": "45.000",
                "slot2": "3"
            },
            acceptedSlotAnswers: [
                { "slot1": "45.000", "slot2": "3" }
            ]
        },
        {
            id: "C11",
            type: "trac_nghiem",
            prompt: "Trong 37 số tự nhiên đầu tiên, chọn ngẫu nhiên 3 số. Tính xác suất để 3 số chọn ra có ít nhất 1 số chẵn:",
            options: [
                "A. \\( \\frac{1157}{1295} \\)",
                "B. \\( \\frac{138}{1295} \\)",
                "C. \\( \\frac{1159}{1295} \\)",
                "D. \\( \\frac{136}{1295} \\)"
            ],
            correctAnswer: "C. \\( \\frac{1159}{1295} \\)"
        },
        {
            id: "C12",
            type: "keo_tha",
            prompt: "Thống kê điểm trung bình môn Toán của các học sinh lớp 12A1 và 12A2, sau đó nhà trường gộp sĩ số để tìm tứ phân vị thứ 3. Kéo thả giá trị thích hợp vào chỗ trống:",
            wordBank: ["12A1", "12A2", "8,2", "8,3", "8,4"],
            slots: [
                { id: "slot1", label: "Lớp có điểm trung bình cao hơn là ..." },
                { id: "slot2", label: "Ngưỡng điểm tối thiểu thuộc top 25% (tứ phân vị thứ 3) là ..." }
            ],
            correctAnswer: {
                "slot1": "12A2",
                "slot2": "8,3"
            },
            acceptedSlotAnswers: [
                { "slot1": "12A2", "slot2": "8,3" }
            ]
        },
        {
            id: "C13",
            type: "trac_nghiem",
            prompt: "Cho hàm số \\( y = \\sin x \\). Khẳng định nào sau đây đúng?",
            options: [
                "A. Hàm số đạt cực đại tại \\( x = 3\\pi \\).",
                "B. Hàm số đạt cực tiểu tại \\( x = 4\\pi \\).",
                "C. Hàm số đạt cực tiểu tại \\( x = \\frac{7\\pi}{2} \\).",
                "D. Hàm số đồng biến trên \\( [3\\pi, 4\\pi] \\)."
            ],
            correctAnswer: "C. Hàm số đạt cực tiểu tại \\( x = \\frac{7\\pi}{2} \\)."
        },
        {
            id: "C14",
            type: "trac_nghiem",
            prompt: "Trong không gian với hệ trục toạ độ \\( Oxyz \\), cho bốn điểm \\( M=(1;2;3) \\), \\( N=(4;5;6) \\), \\( P=(4;3;3) \\), \\( Q=(7;2;0) \\). Biết một trong bốn điểm đó thuộc miền tam giác tạo bởi ba điểm còn lại. Điểm đó là:",
            options: [
                "A. Q.",
                "B. N.",
                "C. M.",
                "D. P."
            ],
            correctAnswer: "D. P."
        },
        {
            id: "C15",
            type: "trac_nghiem",
            prompt: "Hệ ghi số La Mã quy định ký tự lớn bên trái, nhỏ bên phải cộng dồn, chữ số V, L, D không lặp lại quá 1 lần, đặt bên trái nghĩa là bớt đi... Trong các số La Mã dưới đây, số nào có giá trị là bội của \\( IX \\) (tức là chia hết cho 9)?",
            options: [
                "A. \\text{IXDCCCXXVIII}",
                "B. \\text{MMMDCCXXI}",
                "C. \\text{VIIMMCLIV}",
                "D. \\text{XIIMCCCXLII}"
            ],
            correctAnswer: "A. \\text{IXDCCCXXVIII}"
        },
        {
            id: "C16",
            type: "keo_tha",
            prompt: "Cho hai biến cố \\( A, B \\) có \\( P(A) = 0,6 \\); \\( P(B) = 0,5 \\); \\( P(A \\cap B) = 0,2 \\). Kéo các phương án thích hợp điền vào chỗ trống:",
            wordBank: ["độc lập", "không độc lập", "xung khắc", "1/3", "2/5", "0,4", "0,7", "0,8"],
            slots: [
                { id: "slot1", label: "A, B là hai biến cố ..." },
                { id: "slot2", label: "\\( P(B|A) = \\dots \\)" },
                { id: "slot3", label: "\\( P(A \\cup \\overline{B}) = \\dots \\)" }
            ],
            correctAnswer: {
                "slot1": "không độc lập",
                "slot2": "1/3",
                "slot3": "0,7"
            },
            acceptedSlotAnswers: [
                { "slot1": "không độc lập", "slot2": "1/3", "slot3": "0,7" }
            ]
        },
        {
            id: "C17",
            type: "dung_sai",
            prompt: "Cho phương trình \\( 2\\sin x + \\sin(2x) = 2\\cos x + 2\\sin^2 x \\). Xét tính đúng/sai của các mệnh đề sau:",
            statements: [
                { id: "st1", text: "Phương trình có nghiệm dương bé nhất là \\( \\frac{\\pi}{4} \\)." },
                { id: "st2", text: "Có 4 điểm biểu diễn các họ nghiệm của phương trình trên đường tròn lượng giác." }
            ],
            correctAnswer: {
                "st1": "Đúng",
                "st2": "Sai"
            }
        },
        {
            id: "C18",
            type: "tra_loi_ngan",
            prompt: "Bạn Kỳ muốn làm một chiếc thùng phi bằng tôn hình trụ có dung tích \\( 3\\text{ m}^3 \\) sao cho tốn ít vật liệu nhất. Bạn Kỳ nên làm thùng phi với chiều cao bằng bao nhiêu cm? (Kết quả làm tròn đến hàng đơn vị)",
            correctAnswer: "156",
            acceptedAnswers: ["156"]
        },
        {
            id: "C19",
            type: "tra_loi_ngan",
            prompt: "Cho dãy số \\( (u_n) \\) thỏa mãn: \\( u_1 = 36 \\), \\( u_9 = 211 \\), và \\( u_n = \\frac{1}{n-1} \\sum_{k=1}^{n-1} u_k \\) \\((\\forall n \\ge 3, n \\in \\mathbb{N}^*)\\). Khi đó, giá trị của \\( u_2 \\) bằng?",
            correctAnswer: "386",
            acceptedAnswers: ["386"]
        },
        {
            id: "C20",
            type: "keo_tha",
            prompt: "Điểm số trung bình của vận động viên X sau một số lần bắn là 8,58 điểm. Bảng điểm có 10 điểm (22 lần), 9 điểm (40 lần), 8 điểm (Ô mờ 1), 7 điểm (20 lần), 6 điểm (Ô mờ 2). Kéo giá trị thích hợp thả vào chỗ trống:",
            wordBank: ["8", "15", "100", "6"],
            slots: [
                { id: "slot1", label: "Ô mờ 1 chứa giá trị là ..." },
                { id: "slot2", label: "Tổng số lần bắn được ghi lại là ..." }
            ],
            correctAnswer: {
                "slot1": "15",
                "slot2": "100"
            },
            acceptedSlotAnswers: [
                { "slot1": "15", "slot2": "100" }
            ]
        },
        {
            id: "C21",
            type: "keo_tha",
            prompt: "Một công ty sản xuất nồi cơm điện KA-20 giá vốn 20 USD, bán lẻ 60 USD (cho lượng \\(\\le 100\\)). Khách đặt \\( 100 < x < 200 \\) chiếc thì cứ \\( m \\) chiếc vượt 100 thì giảm \\( 0,2m \\) USD mỗi chiếc so với giá bán lẻ. Điền phương án thích hợp:",
            wordBank: ["150", "50", "80 - 0,2x", "60x - 0,2x^2"],
            slots: [
                { id: "slot1", label: "Giá bán mỗi chiếc trong đơn hàng này là ..." },
                { id: "slot2", label: "Lợi nhuận thu được của công ty là ..." },
                { id: "slot3", label: "Công ty đạt lợi nhuận lớn nhất khi đơn hàng có giá bán là ... USD." }
            ],
            correctAnswer: {
                "slot1": "80 - 0,2x",
                "slot2": "60x - 0,2x^2",
                "slot3": "50"
            },
            acceptedSlotAnswers: [
                { "slot1": "80 - 0,2x", "slot2": "60x - 0,2x^2", "slot3": "50" }
            ]
        },
        {
            id: "C22",
            type: "dung_sai",
            prompt: "Cho hình chóp \\( S.ABC \\) có đáy \\( ABC \\) là tam giác đều cạnh \\( a \\), \\( SA \\perp (ABC) \\) và \\( SA = 2a \\). Xét tính đúng/sai của các khẳng định sau:",
            statements: [
                { id: "st1", text: "Khoảng cách từ điểm B đến mặt phẳng (SAC) là \\( \\frac{a\\sqrt{3}}{2} \\)." },
                { id: "st2", text: "Khoảng cách từ điểm A đến mặt phẳng (SBC) là \\( \\frac{a\\sqrt{15}}{\\sqrt{19}} \\)." },
                { id: "st3", text: "Khoảng cách giữa hai đường thẳng AB và SC là \\( \\frac{2a\\sqrt{57}}{19} \\)." }
            ],
            correctAnswer: {
                "st1": "Đúng",
                "st2": "Đúng",
                "st3": "Đúng"
            }
        },
        {
            id: "C23",
            type: "dung_sai",
            prompt: "Cho hàm số \\( f(x) = \\frac{(x-2)^{\\lg(x+2)}}{(x+2)^{\\lg(x-2)}} \\). Xét tính đúng/sai của các mệnh đề sau:",
            statements: [
                { id: "st1", text: "Đồ thị hàm số \\( y = \\lg(f(x)) \\) cắt trục tung tại duy nhất một điểm." },
                { id: "st2", text: "f(x) = 1 với \\( x > 2 \\)." },
                { id: "st3", text: "Đồ thị của họ nguyên hàm \\( y = \\int f(x)dx \\) luôn song song với đường thẳng \\( y = x \\)." }
            ],
            correctAnswer: {
                "st1": "Sai",
                "st2": "Đúng",
                "st3": "Sai"
            }
        },
        {
            id: "C24",
            type: "tra_loi_ngan",
            prompt: "Trong cuộc thi nấu ăn, Minh, Phong, Hiếu làm bánh trong 30 phút. Xác suất hoàn thành của Minh, Phong, Hiếu lần lượt là \\( x, y, 0,2 \\) \\((x < y)\\). Xác suất ít nhất một người xong là 0,76 và cả ba đều xong là 0,04. Tính xác suất để có đúng hai người làm xong (làm tròn đến chữ số thập phân thứ hai, dùng dấu phẩy):",
            correctAnswer: "0,26",
            acceptedAnswers: ["0,26", "0.26"]
        },
        {
            id: "C25",
            type: "trac_nghiem",
            prompt: "Tổng tất cả các nghiệm của phương trình \\( \\frac{1}{2} \\log_{\\sqrt{3}}(x+8) + \\frac{1}{4} \\log_9(x-1)^8 = \\log_3(9x) \\) là:",
            options: [
                "A. 4.",
                "B. \\( -4 + 6\\sqrt{2} \\).",
                "C. \\( 6\\sqrt{2} \\).",
                "D. 2."
            ],
            correctAnswer: "B. \\( -4 + 6\\sqrt{2} \\)."
        },
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
        {
            id: "C27",
            type: "trac_nghiem",
            prompt: "Giá trị lớn nhất của tham số \\( m \\) để phương trình \\( \\ln(m + \\ln(m + \\cos(3x))) = \\cos(3x) \\) có nghiệm thực là?",
            options: [
                "A. 1.",
                "B. \\( e \\).",
                "C. \\( e - 1 \\).",
                "D. \\( e + 1 \\)."
            ],
            correctAnswer: "C. \\( e - 1 \\)."
        },
        {
            id: "C28",
            type: "tra_loi_ngan",
            prompt: "Một chiếc cốc hình trụ đường kính đáy 7 cm, cao 10 cm chứa đầy nước. Nghiêng cốc cho nước chảy ra đến khi mép nước ngang đường kính đáy và vừa chạm miệng cốc, bề mặt nước tạo thành nửa ellipse có diện tích \\( a\\pi \\). Giá trị của \\( a \\) bằng bao nhiêu? (làm tròn đến hàng phần trăm)",
            correctAnswer: "18,54",
            acceptedAnswers: ["18,54", "18.54"]
        },
        {
            id: "C29",
            type: "dung_sai",
            prompt: "Cho hàm số \\( y = f(x) \\) là đa thức bậc năm có đồ thị đạo hàm \\( f'(x) \\) như hình vẽ. Xét tính đúng/sai các mệnh đề:",
            statements: [
                { id: "st1", text: "Hiệu \\( f(1) - f(0) < 0 \\)." },
                { id: "st2", text: "Giá trị của \\( f''(2) = 0 \\)." },
                { id: "st3", text: "Giới hạn \\( \\lim_{x \\to 3} \\frac{f(x) - f(3)}{x - 3} > 0 \\)." }
            ],
            correctAnswer: {
                "st1": "Sai",
                "st2": "Đúng",
                "st3": "Sai"
            }
        },
        {
            id: "C30",
            type: "dung_sai",
            prompt: "Với mỗi số nguyên dương \\( n \\), đặt \\( u_n = \\frac{n}{\\sqrt{9n^4+1}} + \\frac{n}{\\sqrt{9n^4+2}} + \\dots + \\frac{n}{\\sqrt{9n^4+n}} \\). Xét tính đúng/sai các phát biểu sau:",
            statements: [
                { id: "st1", text: "\\( \\lim_{n \\to +\\infty} \\frac{n}{\\sqrt{9n^4+1}} = 0 \\)." },
                { id: "st2", text: "\\( \\lim_{n \\to +\\infty} u_n = 0 \\)." },
                { id: "st3", text: "Tồn tại vô số số nguyên dương \\( n \\) để \\( u_n > \\frac{10^{50}}{3 \\cdot 10^{50} + 1 \\)." }
            ],
            correctAnswer: {
                "st1": "Đúng",
                "st2": "Sai",
                "st3": "Đúng"
            }
        },
        {
            id: "C31",
            type: "trac_nghiem",
            prompt: "Cho đoạn thẳng \\( AB \\) cố định. Tập hợp các điểm \\( G \\) thỏa mãn diện tích \\( \\triangle GAB \\) không đổi là:",
            options: [
                "A. Mặt nón.",
                "B. Mặt cầu.",
                "C. Đường thẳng.",
                "D. Mặt trụ."
            ],
            correctAnswer: "D. Mặt trụ."
        },
        {
            id: "C32",
            type: "keo_tha",
            prompt: "Xếp 8 chữ số thuộc dãy \"3; 3; 5; 5; 7; 7; 9; 9\" vào tám ô trống (2 hàng \\(\\times\\) 4 cột). Điền các giá trị thích hợp:",
            wordBank: ["2520", "2515", "8", "12", "43/105", "8/21", "12/21"],
            slots: [
                { id: "slot1", label: "Số cách sắp xếp là ..." },
                { id: "slot2", label: "Xác suất để hai số giống nhau không đứng cạnh nhau trong cùng 1 hàng là ..." }
            ],
            correctAnswer: {
                "slot1": "2520",
                "slot2": "43/105"
            },
            acceptedSlotAnswers: [
                { "slot1": "2520", "slot2": "43/105" }
            ]
        },
        {
            id: "C33",
            type: "trac_nghiem",
            prompt: "Gọi \\( S \\) là tập hợp các giá trị của tham số \\( m \\) để đồ thị \\( (C) \\) của hàm số \\( y = \\frac{2x^2 - 4x + m}{(x-1)^3 (x-2)} \\) có đúng hai đường tiệm cận. Tổng các phần tử của \\( S \\) bằng:",
            options: [
                "A. 2.",
                "B. 0.",
                "C. 4.",
                "D. -2."
            ],
            correctAnswer: "B. 0."
        },
        {
            id: "C34",
            type: "dung_sai",
            prompt: "Cho hình chóp \\( S.ABCD \\) đáy là hình chữ nhật \\( AB=2a, AD=a \\). \\( H \\) trên \\( AB \\) thỏa \\( AH = \\frac{1}{3}HB \\). Hai mặt phẳng \\( (SHC) \\) và \\( (SHD) \\) cùng vuông góc đáy. \\( SA = \\frac{a\\sqrt{5}}{2} \\). Xét đúng/sai:",
            statements: [
                { id: "st1", text: "Khoảng cách từ điểm H đến mặt phẳng (SBC) là \\( \\frac{3a}{\\sqrt{13}} \\)." },
                { id: "st2", text: "Cosin góc giữa đường thẳng SD và (SBC) là \\( \\frac{\\sqrt{689}}{39} \\)." }
            ],
            correctAnswer: {
                "st1": "Đúng",
                "st2": "Đúng"
            }
        },
        {
            id: "C35",
            type: "trac_nghiem",
            prompt: "Có bao nhiêu giá trị thực của \\( m \\) để phương trình \\( (\\sin x - 1)(2\\cos^2 x - (2m+1)\\cos x + m) = 0 \\) có đúng 4 nghiệm thực phân biệt thuộc đoạn \\( [0; 2\\pi] \\)?",
            options: [
                "A. 2.",
                "B. 1.",
                "C. 4.",
                "D. 3."
            ],
            correctAnswer: "A. 2."
        },
        {
            id: "C36",
            type: "trac_nghiem",
            prompt: "Trong không gian \\( Oxyz \\), cho mặt cầu \\( (S): (x-2)^2 + (y-1)^2 + (z-2)^2 = 16 \\) và điểm \\( A(a;0;0) \\) thuộc trục hoành. Có bao nhiêu giá trị nguyên âm của \\( a \\) để có hai đường thẳng đi qua \\( A \\) tiếp xúc với mặt cầu và vuông góc nhau?",
            options: [
                "A. 1.",
                "B. 3.",
                "C. 4.",
                "D. 2."
            ],
            correctAnswer: "D. 2."
        },
        {
            id: "C37",
            type: "tra_loi_ngan",
            prompt: "Tòa nhà hình lăng trụ tam giác đều cạnh đáy và cạnh bên bằng 300 mét. Cây cầu \\( MN \\) bắc xuyên tòa nhà (\\( M \\in A'C, N \\in BC \\)) có độ dài ngắn nhất. Giá xây dựng 5 tỷ đồng/mét. Tổng chi phí xây cầu là bao nhiêu tỷ đồng? (làm tròn đến hàng phần trăm)",
            correctAnswer: "670,82",
            acceptedAnswers: ["670,82", "670.82"]
        },
        {
            id: "C38",
            type: "trac_nghiem",
            prompt: "Trong mặt phẳng \\( Oxy \\), cho \\( A(1; -2) \\) và \\( d: y = 2x - 2 \\). Đường thẳng \\( \\Delta \\) cắt và vuông góc \\( d \\) tại điểm thuộc trục hoành. Lấy đối xứng \\( A \\) lần lượt qua \\( d \\), \\( \\Delta \\) và trục \\( Oy \\) thu được \\( A''' \\). Tọa độ \\( A''' \\) là:",
            options: [
                "A. \\( A'''\\left(-\\frac{3}{5}; -\\frac{6}{5}\\right) \\)",
                "B. \\( A'''(1; 2) \\)",
                "C. \\( A'''(-1; 1) \\)",
                "D. \\( A'''(-1; 2) \\)"
            ],
            correctAnswer: "D. \\( A'''(-1; 2) \\)"
        },
        {
            id: "C39",
            type: "trac_nghiem",
            prompt: "Trong không gian \\( Oxyz \\) cho tam giác \\( ABC \\), biết \\( M(2; 1; -1) \\), \\( N(-2; 3; 1) \\), \\( P(1; 0; 3) \\) lần lượt là trung điểm của \\( AB, BC, AC \\). Tọa độ điểm \\( A \\) là:",
            options: [
                "A. \\( A(5; -2; 1) \\)",
                "B. \\( A(5; 2; -1) \\)",
                "C. \\( A(-5; -2; 1) \\)",
                "D. \\( A(5; -2; -1) \\)"
            ],
            correctAnswer: "A. \\( A(5; -2; 1) \\)"
        },
        {
            id: "C40",
            type: "tra_loi_ngan",
            prompt: "Đặt \\( \\alpha = \\sqrt[60]{4} - 1 \\) và \\( \\beta_n = C_n^1 + C_n^2 \\alpha + C_n^3 \\alpha^2 + \\dots + C_n^n \\alpha^{n-1} \\). Hiệu \\( \\beta_{301} - \\beta_{300} \\) bằng?",
            correctAnswer: "1024",
            acceptedAnswers: ["1024"]
        }
    ]
};