export const de1Data = {
  id: "tsa-khoahoc-de01",
  title: "Tư duy Khoa học TSA - Đề 01",
  duration: 60, // phút
  passages: [
    {
      id: 1,
      title: "DỮ KIỆN 1: TỤ ĐIỆN",
      content: "Tụ điện là một linh kiện điện tử gồm 2 vật dẫn đặt gần nhau (gọi là 2 bản tụ) và ngăn cách nhau bởi môi trường cách điện (điện môi). Trong mạch điện, tụ điện có 2 vai trò chính: Tích điện và Phóng điện.",
      questions: [
        {
          id: 1,
          type: "single",
          question: "Với cách sắp xếp nào dưới đây, ta thu được một tụ điện?",
          options: [
            "A. Hai lớp sứ, ở giữa là nước muối loãng.",
            "B. Hai bản nhôm, ở giữa là dung dịch nước vôi trong.",
            "C. Hai lá sắt, ở giữa là nước cất.",
            "D. Hai tờ giấy, ở giữa là một khối đồng."
          ],
          answer: "C"
        },
        {
          id: 2,
          type: "true_false",
          question: "Chọn đúng hoặc sai cho mỗi nhận định dưới đây:",
          statements: [
            "Tụ xoay là tụ điện có khả năng biến đổi dòng điện một chiều thành dòng điện xoay chiều.",
            "Với mỗi tụ điện, điện dung tỉ lệ thuận với điện tích của tụ và tỉ lệ nghịch với hiệu điện thế hai bản tụ.",
            "Hai chức năng chính của tụ điện là tích điện và phóng điện.",
            "Tụ điện có chức năng quan trọng trong các thiết bị điện."
          ],
          answers: [false, false, true, true]
        },
        {
          id: 3,
          type: "multiple",
          question: "Một học sinh được cung cấp một nguồn điện, một tụ điện và một động cơ cánh quạt nhỏ. Theo yêu cầu của giáo viên, các học sinh cần làm cánh quạt quay mà không nối trực tiếp động cơ với nguồn điện. Chọn tất cả các phương án đúng dưới đây:",
          options: [
            "A. Khi mắc thêm một điện trở nối tiếp với động cơ, động cơ sẽ quay mạnh hơn khi được gắn với nguồn điện.",
            "B. Có thể xảy ra trường hợp cánh quạt không quay dù cách thực hiện yêu cầu của học sinh là đúng.",
            "C. Cách làm đúng là nối cánh quạt với tụ điện để tụ xả năng lượng điện làm cánh quạt quay, sau đó nạp lại tụ điện bằng nguồn điện.",
            "D. Với động cơ có công suất khoảng 2W, và một tụ điện có ghi 4700 µF - 16V năng lượng của tụ điện khi được nạp đầy bằng năng lượng cánh quạt tiêu thụ trong khoảng 0,3 giây khi hoạt động bình thường."
          ],
          answers: ["B", "C", "D"]
        },
        {
          id: 4,
          type: "short_answer",
          question: "Giả sử một tụ điện đơn giản được làm từ 2 bản tụ hình vuông cạnh là 20 cm nhúng chìm trong dầu (ε = 4) đặt cách xa nhau 30 cm. Điện dung của tụ điện này bằng bao nhiêu pF? (làm tròn đến 1 chữ số thập phân)",
          answer: "4,7"
        },
        {
          id: 5,
          type: "short_answer",
          question: "Bộ tụ điện trong bóng đèn của máy quay có điện dung 1000 µF được tích đầy điện ở hiệu điện thế 370 V. Khi chụp ảnh, bóng đèn nháy sáng trong thời gian 5 ms. Công suất phóng điện của tụ là bao nhiêu W?",
          answer: "13690"
        }
      ]
    },
    {
      id: 2,
      title: "DỮ KIỆN 2: ẢNH HƯỞNG CỦA CHẤT XÚC TÁC ĐẾN TỐC ĐỘ PHẢN ỨNG HÓA HỌC",
      content: "Các yếu tố làm tăng tốc độ phản ứng bao gồm nồng độ, áp suất, nhiệt độ, diện tích tiếp xúc của các chất và chất xúc tác...",
      questions: [
        {
          id: 6,
          type: "single",
          question: "Điều nào sau đây mô tả đúng nhất điều gì đã xảy ra với ống tiêm 60 mL trong thí nghiệm 1? Khi bơm propanol vào ống xúc tác, khoảng cách từ đầu pittông đến đầu ống tiêm là:",
          options: [
            "A. giảm chậm trong 30 giây.",
            "B. tăng ngay lập tức, sau đó giảm dần khi phản ứng xảy ra.",
            "C. giữ nguyên cho đến khi xảy ra phản ứng rồi giảm dần.",
            "D. giữ nguyên cho đến khi xảy ra phản ứng và sau đó tăng lên."
          ],
          answer: "D"
        },
        {
          id: 7,
          type: "drag_drop",
          question: "Kéo thả số thứ tự phù hợp của mỗi giai đoạn trong phản ứng xúc tác dị thể:",
          items: [
            "Có một số loại tương tác giữa bề mặt chất xúc tác và các phân tử chất phản ứng, khiến chúng phản ứng mạnh hơn.",
            "Phản ứng xảy ra.",
            "Một hoặc nhiều chất phản ứng được hấp phụ lên bề mặt chất xúc tác.",
            "Các phân tử sản phẩm được giải hấp, nghĩa là các phân tử sản phẩm bị tách ra khỏi chất xúc tác."
          ],
          answer: ["2", "3", "1", "4"]
        },
        {
          id: 8,
          type: "short_answer",
          question: "Điền vào ô trống 1 giá trị thích hợp (1: xúc tác đồng thể, 2: xúc tác dị thể):\n- Phản ứng tách nước ethanol (hơi) với xúc tác Al2O3: [..]\n- Phản ứng hydrate hóa ethylene bằng xúc tác H3PO4: [..]\n- Phản ứng cộng hydrogen vào ethylene với xúc tác Nickel: [..]\n- Phản ứng ester hóa giữa methyl alcohol và acetic acid, xúc tác sulfuric acid đặc: [..]",
          answer: "2-1-2-1"
        },
        {
          id: 9,
          type: "multiple",
          question: "Chọn tất cả đáp án đúng dưới đây từ các thí nghiệm:",
          options: [
            "A. Thời gian chất phản ứng đi qua chất xúc tác đồng biến với lượng sản phẩm thu được.",
            "B. Để có phản ứng, chất xúc tác cần tồn tại dưới dạng khác thể tồn tại của chất phản ứng.",
            "C. Chất xúc tác giúp phản ứng xảy ra mà không cần điều kiện nào khác.",
            "D. Chất xúc tác được bảo toàn trong phản ứng."
          ],
          answers: ["A", "D"]
        },
        {
          id: 10,
          type: "true_false",
          question: "Những nhận định dưới đây là đúng hay sai?",
          statements: [
            "Trong thí nghiệm 2, propane được tạo ra ở giai đoạn 2.",
            "Trong thí nghiệm 1, sau phản ứng có bột nhôm ở ống tiêm thu sản phẩm.",
            "Từ kết quả của thí nghiệm 2, có thể dự đoán rằng khi thời gian chất phản ứng đi qua chất xúc tác là 10 giây, thể tích của piston chứa sản phẩm sẽ nhỏ hơn 49 mL."
          ],
          answers: [false, false, true]
        }
      ]
    },
    {
      id: 3,
      title: "DỮ KIỆN 3: ĐỘT BIẾN TẠO RA BIẾN DỊ",
      content: "Đột biến là những biến đổi xảy ra trong vật chất di truyền (ADN hoặc nhiễm sắc thể) làm xuất hiện các allele mới từ đó sẽ xuất hiện kiểu gene và kiểu hình mới...",
      questions: [
        {
          id: 11,
          type: "short_answer",
          question: "Bản chất của đột biến là những biến đổi xảy ra trong vật chất di truyền làm xuất hiện các [.....] mới.",
          answer: "allele"
        },
        {
          id: 12,
          type: "true_false",
          question: "Nhận định sau đây là đúng hay sai?\n'Phần lớn các đột biến xảy ra trong vật chất di truyền đều mang lại lợi thế sinh tồn, qua đó trực tiếp thúc đẩy sự tiến hóa của loài.'",
          statements: ["Phần lớn các đột biến xảy ra trong vật chất di truyền đều mang lại lợi thế sinh tồn, qua đó trực tiếp thúc đẩy sự tiến hóa của loài."],
          answers: [false]
        },
        {
          id: 13,
          type: "single",
          question: "Ngoài nhân tố tiến hoá đột biến thì Hình 3.1 còn mô tả thêm một nhân tố nổi bật khác là:",
          options: [
            "A. Phiêu bạt di truyền.",
            "B. Chọn lọc tự nhiên.",
            "C. Giao phối không ngẫu nhiên.",
            "D. Di – nhập cư."
          ],
          answer: "B"
        },
        {
          id: 14,
          type: "single",
          question: "Dựa vào Hình 3.1, một bạn học sinh kết luận: 'những cá thể ở thế hệ (II) có khả năng thích nghi tốt hơn với môi trường hiện tại so với cá thể A'. Kết luận của bạn học sinh là đúng hay sai, tại sao?",
          options: [
            "A. Đúng, vì tất cả các cá thể ở thế hệ (II) mang đột biến nên có khả năng thích nghi tốt hơn so với các cá thể A.",
            "B. Sai, vì đột biến chỉ tạo ra các allele mới, không phải tất cả đột biến đều có lợi; hình cho thấy chỉ một số cá thể (màu đậm) mang đột biến có lợi sống sót và sinh sản nhiều hơn, trong khi nhiều cá thể khác bị chết.",
            "C. Đúng, vì ở thế hệ (II) các cá thể đều có sự sống sót còn các cá thể A không có mặt nên có thể nói cá thể ở thế hệ (II) thích nghi tốt hơn các cá thể A.",
            "D. Sai, vì đột biến phần lớn là có hại nên thế hệ (II) sẽ thích nghi kém hơn các cá thể A."
          ],
          answer: "B"
        },
        {
          id: 15,
          type: "drag_drop",
          question: "Sự gia tăng số lượng của nhóm cá thể màu sẫm ở thế hệ (II) minh chứng cho việc chúng mang đột biến [.....] giúp chúng có nhiều khả năng [.....] và tiếp tục sinh sản.",
          items: ["có lợi", "sống sót"],
          answer: ["có lợi", "sống sót"]
        }
      ]
    },
    {
      id: 4,
      title: "DỮ KIỆN 4: ẢNH HƯỞNG CỦA CHẤT TAN ĐẾN NHIỆT ĐỘ SÔI VÀ NHIỆT ĐỘ ĐÔNG ĐẶC CỦA NƯỚC",
      content: "Các thí nghiệm khảo sát ảnh hưởng của việc thêm các chất hòa tan khác nhau đến nhiệt độ sôi và nhiệt độ đông đặc của H2O...",
      questions: [
        {
          id: 16,
          type: "single",
          question: "Chất điện li là những chất khi tan trong nước phân li ra ion. Ví dụ về chất điện li mạnh là:",
          options: [
            "A. Na2SO4",
            "B. C6H12O6",
            "C. CH3COOH",
            "D. C2H5OH"
          ],
          answer: "A"
        },
        {
          id: 17,
          type: "true_false",
          question: "Chọn đúng hoặc sai cho các mệnh đề sau:",
          statements: [
            "Ở áp suất khí quyển, khi cho thêm 0,05 mol sucrose vào 100 g H2O, nhiệt độ đông đặc của nước tăng thêm 1°C.",
            "Ở bảng 2, có thể dự đoán dưới áp suất khí quyển, nhiệt độ sôi của nước sẽ tăng thêm 3°C khi cho thêm 0,3 mol muối vào 100 g nước.",
            "Từ thí nghiệm trên, ta kết luận rằng chỉ những hợp chất ion khi hòa tan vào trong nước mới có thể làm thay đổi nhiệt độ sôi của nước.",
            "Với cùng một lượng mol chất, NaCl làm nhiệt độ đông đặc của nước giảm sâu hơn so với sucrose."
          ],
          answers: [false, false, false, true]
        },
        {
          id: 18,
          type: "short_answer",
          question: "Dựa trên kết quả của thí nghiệm 1, ta thấy rằng chất [.....] như NaCl làm nhiệt độ đông đặc của nước bị thay đổi nhiều hơn các chất [.....] như sucrose.",
          answer: "điện li – điện li"
        },
        {
          id: 19,
          type: "single",
          question: "Nếu thay NaCl bằng MgCl2 (giả sử điện li hoàn toàn, thay thế cùng 1 lượng mol 2 chất), thì nhiệt độ đông đặc sẽ thay đổi như thế nào?",
          options: [
            "A. Giảm ít hơn so với NaCl.",
            "B. Giảm bằng so với NaCl.",
            "C. Giảm mạnh hơn so với NaCl.",
            "D. Không thay đổi so với nước tinh khiết."
          ],
          answer: "C"
        },
        {
          id: 20,
          type: "single",
          question: "Hãy dự đoán nếu hòa tan hoàn toàn 10 g CaCl2 vào 100 g nước, nhiệt độ đông đặc của dung dịch lúc đó sẽ nằm ở khoảng nào?",
          options: [
            "A. Dưới -1,7 °C.",
            "B. Từ -1,7 °C đến -3,4 °C.",
            "C. Từ -3,4 °C đến -6,9 °C.",
            "D. Dưới -6,9 °C."
          ],
          answer: "C"
        }
      ]
    },
    {
      id: 5,
      title: "DỮ KIỆN 5: QUÁ TRÌNH CHUYỂN ĐỘNG VỚI GIA TỐC KHÔNG ĐỔI",
      content: "Nghiên cứu về quá trình chuyển động với gia tốc không đổi của các vật thông qua hệ thống ròng rọc cố định...",
      questions: [
        {
          id: 21,
          type: "single",
          question: "Giả sử mX là 0,8 kg và mY là 0,6 kg. Lực tác dụng lên sợi dây trong thử nghiệm này rất có thể gần với giá trị nào sau đây nhất?",
          options: [
            "A. 3 N",
            "B. 5 N",
            "C. 7 N",
            "D. 9 N"
          ],
          answer: "C"
        },
        {
          id: 22,
          type: "single",
          question: "Giả sử, X được thả xuống khi Y chỉ ở độ cao 100 cm so với sàn (thay vì 1,5 m). Liệu các giá trị của t có nhiều khả năng lớn hơn hoặc nhỏ hơn giá trị trong Bảng 1 không?",
          options: [
            "A. Lớn hơn, vì Khối Y sẽ rơi một khoảng cách xa hơn.",
            "B. Lớn hơn, vì Khối Y sẽ rơi ở khoảng cách ngắn hơn.",
            "C. Ít hơn, vì Khối Y sẽ rơi một khoảng cách xa hơn.",
            "D. Ít hơn, vì Khối Y sẽ rơi ở khoảng cách ngắn hơn."
          ],
          answer: "D"
        },
        {
          id: 23,
          type: "multiple",
          question: "Khi khối lượng X được giữ cố định và khối lượng Y tăng lên thì các giá trị nào sau đây cũng tăng lên:",
          options: [
            "A. Lực tác dụng F",
            "B. Gia tốc chuyển động",
            "C. Thời gian Y rơi xuống"
          ],
          answers: ["A", "B"]
        },
        {
          id: 24,
          type: "short_answer",
          question: "Xét trong thử nghiệm khối lượng X và Y khác nhau. Lấy mốc thế năng là mặt đất, khi vật X được thả ra thì thế năng của vật Y sẽ [.....] vì chiều cao của vật Y đang giảm dần.",
          answer: "giảm"
        },
        {
          id: 25,
          type: "drag_drop",
          question: "Trong quá trình chuyển động đi xuống của vật Y, động năng của vật Y sẽ [.....] và thế năng hấp dẫn của vật sẽ [.....]",
          items: ["tăng", "giảm"],
          answer: ["tăng", "giảm"]
        }
      ]
    },
    {
      id: 6,
      title: "DỮ KIỆN 6: ENZYME",
      content: "Chất phản ứng mà enzyme tác động đến được gọi là cơ chất của enzyme. Enzyme liên kết với cơ chất tạo nên một phức hệ enzyme cơ chất...",
      questions: [
        {
          id: 26,
          type: "single",
          question: "Cơ chất liên kết với enzyme thông qua vùng cấu trúc không gian được gọi là:",
          options: [
            "A. Trung tâm điều hành.",
            "B. Trung tâm vận chuyển.",
            "C. Trung tâm xúc tác.",
            "D. Trung tâm hoạt động."
          ],
          answer: "D"
        },
        {
          id: 27,
          type: "short_answer",
          question: "Cơ chất của enzyme saccharase được mô tả trong Hình 6.1 là [.....]",
          answer: "Saccharose"
        },
        {
          id: 28,
          type: "drag_drop",
          question: "Cơ chế xúc tác các phản ứng nhờ enzyme như sau: [.....] → [.....] → [.....]",
          items: ["hình thành phức hợp enzyme - cơ chất", "enzyme xúc tác cho phản ứng", "tạo sản phẩm và giải phóng enzyme tự do"],
          answer: ["hình thành phức hợp enzyme - cơ chất", "enzyme xúc tác cho phản ứng", "tạo sản phẩm và giải phóng enzyme tự do"]
        },
        {
          id: 29,
          type: "single",
          question: "Ví dụ nào sau đây nói lên tính đặc hiệu của enzyme?",
          options: [
            "A. Trong một phút, một phân tử amylase thủy phân được 1 triệu phân tử amylopectin.",
            "B. Amylase chỉ thủy phân được tinh bột, không thủy phân được cellulose.",
            "C. Amylase bị bất hoạt ở nhiệt độ trên 60°C hoặc dưới 0°C.",
            "D. Amylase có hoạt tính xúc tác mạnh ở môi trường có pH từ 7 đến 8."
          ],
          answer: "B"
        },
        {
          id: 30,
          type: "true_false",
          question: "Các phát biểu sau đây đúng hay sai?",
          statements: [
            "Sau phản ứng, sản phẩm được giải phóng, enzyme xúc tác bị phân hủy, các phản ứng mới được tiếp tục với các enzyme mới.",
            "Enzyme có bản chất là protein nên có thể bị biến tính dưới tác động nhiệt độ cao.",
            "Enzyme là thành phần không thể thiếu trong sản phẩm của các phản ứng sinh hóa mà nó xúc tác.",
            "Cơ chất là phức hợp được tạo ra khi enzyme liên kết với chất phản ứng."
          ],
          answers: [false, true, false, false]
        }
      ]
    },
    {
      id: 7,
      title: "DỮ KIỆN 7: GIÁC HƠI",
      content: "Phương trình trạng thái của chất khí mô tả mối quan hệ giữa áp suất, thể tích và nhiệt độ tuyệt đối của một lượng khí nhất định...",
      questions: [
        {
          id: 31,
          type: "short_answer",
          question: "Cơ chế của giác hơi là dùng các cốc chuyên dụng và đặt lên bề mặt da của người bệnh. Mục đích chính của việc trên là tạo ra áp suất âm trong những chiếc cốc này, giúp [.....] trong cơ thể người bệnh.",
          answer: "áp suất âm"
        },
        {
          id: 32,
          type: "multiple",
          question: "Khi giác hơi, các vùng da trong cốc lồi lên, các độc tố được giải phóng và giảm đau. Các giải thích nào sau đây đúng cho quá trình trên?",
          options: [
            "A. Trong cốc có áp suất làm da bị kéo căng làm lỗ chân lông mở rộng kích thích lưu thông máu.",
            "B. Khi lỗ chân lông được mở rộng, đồng thời tạo ra các lỗ thông để thoát độc tố ra ngoài.",
            "C. Các mô không giãn nở trong cốc giác hơi.",
            "D. Trong quá trình giác hơi, các tế bào được chuyển hóa mạnh mẽ và giảm đau hiệu quả."
          ],
          answers: ["A", "B", "D"]
        },
        {
          id: 33,
          type: "true_false",
          question: "Phát biểu nào sau đây là đúng hay sai trong một lần điều trị (t = 340°C, t0 = 27°C, p0 = 10^5 Pa, bỏ qua thay đổi thể tích):",
          statements: [
            "Quá trình trên là đẳng nhiệt.",
            "Quá trình trên là đẳng tích.",
            "Quá trình trên là đẳng áp."
          ],
          answers: [false, true, false]
        },
        {
          id: 34,
          type: "single",
          question: "Xác định áp suất khí trong cốc khi nhiệt độ trong cốc bằng với nhiệt độ môi trường là:",
          options: [
            "A. 4,8 · 10^4 Pa",
            "B. 1,04 · 10^4 Pa",
            "C. 2,04 · 10^4 Pa",
            "D. 1,14 · 10^4 Pa"
          ],
          answer: "A"
        },
        {
          id: 35,
          type: "single",
          question: "Thực tế, bề mặt da bị phồng lên nên thể tích trong cốc giảm đi 10%. Khi đó, áp suất bên trong và ngoài chênh lệch là:",
          options: [
            "A. 5,3 · 10^3 Pa",
            "B. 4,8 · 10^4 Pa",
            "C. 4,6 · 10^4 Pa",
            "D. 5,3 · 10^4 Pa"
          ],
          answer: "A"
        }
      ]
    },
    {
      id: 8,
      title: "DỮ KIỆN 8: PHƯƠNG PHÁP KJELDAHL",
      content: "Phương pháp Kjeldahl được ứng dụng rộng rãi để định lượng nguyên tố Nitrogen trong công nghệ thực phẩm, dược phẩm...",
      questions: [
        {
          id: 36,
          type: "single",
          question: "Chất X là chất nào trong số các chất dưới đây?",
          options: [
            "A. N2",
            "B. NH3",
            "C. NH4Cl",
            "D. NH4NO3"
          ],
          answer: "B"
        },
        {
          id: 37,
          type: "single",
          question: "Công thức nào sau đây đúng khi liên hệ m1, V1, V2 với phần trăm khối lượng nitrogen (%N) trong mẫu?",
          options: [
            "A. %N = [14 · 10^-1 · (V1 - V2)] / m1",
            "B. %N = [14 · 10^-3 · (V1 - V2)] / m1",
            "C. %N = [14 · 10^-4 · (V1 - V2)] / m1",
            "D. %N = [14 · 10^-7 · (V1 - V2)] / m1"
          ],
          answer: "C"
        },
        {
          id: 38,
          type: "true_false",
          question: "Chọn Đúng hoặc Sai cho những nhận định sau:",
          statements: [
            "Ở giai đoạn II, có thể thay thế dung dịch HCl bằng dung dịch HNO3.",
            "Đây là phương pháp lỗi thời, đem lại độ chính xác thấp và còn nhiều hạn chế.",
            "Biết AgCl là một muối bạc kết tủa trong nước. Ở giai đoạn III, thay vì chuẩn độ phức tạp, có thể dùng dung dịch AgNO3 để HCl phản ứng tạo kết tủa, dựa vào lượng kết tủa để tính được lượng HCl còn dư.",
            "Phương pháp chưng cất hơi nước được sử dụng ở giai đoạn II dựa trên tính tan trong nước của chất X."
          ],
          answers: [true, false, false, false]
        },
        {
          id: 39,
          type: "short_answer",
          question: "Điền I, II, III vào các ô trống thích hợp:\n- Chuẩn độ acid-base: [..]\n- Hấp thụ chất X: [..]\n- Phân hủy mẫu: [..]\n- Thêm chất chỉ thị để nhận biết điểm tương đương: [..]\n- Cân khối lượng mẫu: [..]\n- Thu được đủ số liệu để thực hiện tính toán: [..]",
          answer: "III-II-I-III-I-III"
        },
        {
          id: 40,
          type: "short_answer",
          question: "Lượng protein bị gian lận khi định lượng mẫu sữa bị lẫn 2 g melamine bằng phương pháp Kjeldahl là bao nhiêu g? (làm tròn đến 2 chữ số thập phân)",
          answer: "6,73"
        }
      ]
    }
  ]
};