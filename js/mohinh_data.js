const MOHINH_QUESTIONS = [
  {
    q: "Khi chuyển đổi một thuộc tính phức hợp (Composite Attribute) từ mô hình ER sang lược đồ quan hệ, cách tiếp cận chuẩn xác nhất là gì?",
    opts: [
      "Tạo một cột duy nhất chứa chuỗi nối của tất cả các thuộc tính thành phần.",
      "Chỉ tạo các cột cho các thuộc tính thành phần nhỏ nhất (nguyên tử) và bỏ qua thuộc tính phức hợp gốc.",
      "Tạo một bảng mới riêng biệt để lưu trữ thuộc tính phức hợp này.",
      "Tạo cả cột cho thuộc tính gốc và các cột cho các thuộc tính thành phần."
    ],
    ans: 1
  },
  {
    q: "Phép kết nối tự nhiên (Natural Join) trong đại số quan hệ có đặc điểm gì nổi bật so với phép tích Đề-các (Cartesian Product) kết hợp với phép chọn?",
    opts: [
      "Nó tự động kết nối dựa trên các thuộc tính cùng tên và tự động loại bỏ đi một trong hai cột thuộc tính trùng lặp đó ở kết quả.",
      "Nó có thể thực hiện trên hai quan hệ không có bất kỳ thuộc tính chung nào.",
      "Nó giữ lại tất cả các dòng của cả hai bảng, kể cả những dòng không khớp điều kiện kết nối.",
      "Nó yêu cầu người dùng phải chỉ định rõ điều kiện kết nối là gì."
    ],
    ans: 0
  },
  {
    q: "Trong mô hình ER mở rộng (EER), quá trình Tổng quát hóa (Generalization) tiếp cận thiết kế theo hướng nào?",
    opts: [
      "Từ trên xuống (Top-down): Phân rã một kiểu thực thể lớn thành nhiều kiểu thực thể con.",
      "Từ dưới lên (Bottom-up): Gộp các kiểu thực thể cấp thấp có chung đặc điểm thành một kiểu thực thể cấp cao hơn (Superclass).",
      "Tách một mối liên kết đa phân thành nhiều mối liên kết nhị phân.",
      "Chuyển các thuộc tính đa trị thành các kiểu thực thể yếu."
    ],
    ans: 1
  },
  {
    q: "Ràng buộc Rời rạc (Disjointness constraint - ký hiệu 'd') trong mô hình EER quy định điều gì đối với các thực thể con (Subclasses)?",
    opts: [
      "Một thực thể thuộc lớp cha có thể đồng thời thuộc NHIỀU lớp con khác nhau.",
      "Một thực thể thuộc lớp cha (Superclass) chỉ có thể thuộc tối đa MỘT lớp con cụ thể.",
      "Mọi thực thể thuộc lớp cha bắt buộc phải thuộc ít nhất một lớp con.",
      "Các lớp con không được phép thừa kế các thuộc tính từ lớp cha."
    ],
    ans: 1
  },
  {
    q: "Khi chuyển đổi một mối liên kết 1:1 từ ER sang lược đồ quan hệ, chiến lược nào sau đây là tối ưu nhất để đặt khóa ngoại (Foreign Key)?",
    opts: [
      "Đặt khóa ngoại vào quan hệ tham gia bán phần (Partial participation).",
      "Bắt buộc tạo một bảng trung gian thứ 3 chứa khóa chính của cả 2 bảng.",
      "Đặt khóa ngoại vào bất kỳ bảng nào cũng được, hiệu suất là như nhau.",
      "Đặt khóa ngoại vào quan hệ tham gia toàn phần (Total participation) vào mối liên kết."
    ],
    ans: 3
  },
  {
    q: "Tính chất 'Tính tương thích khả hợp' (Union-compatibility) là yêu cầu bắt buộc để thực hiện các phép toán nào trong đại số quan hệ?",
    opts: [
      "Phép chiếu (Projection) và Phép chọn (Selection).",
      "Phép kết nối tự nhiên (Natural Join) và Phép tích Đề-các (Cartesian Product).",
      "Phép chia (Division) và Phép kết nối ngoài (Outer Join).",
      "Phép hợp (Union), Phép giao (Intersection) và Phép trừ (Set Difference)."
    ],
    ans: 3
  },
  {
    q: "Trong quá trình thiết kế cơ sở dữ liệu, 'Dị thường cập nhật' (Update Anomaly) là hiện tượng gì?",
    opts: [
      "Là việc không thể thêm một bản ghi mới do thiếu thông tin về khóa chính.",
      "Là việc xóa một thông tin dẫn đến mất mát không chủ ý các thông tin quan trọng khác.",
      "Là việc phải thay đổi dữ liệu ở nhiều dòng khác nhau để phản ánh một thay đổi logic duy nhất, dẫn đến nguy cơ dữ liệu không nhất quán.",
      "Là tình trạng hai người dùng cùng cập nhật một bản ghi đồng thời gây lỗi hệ thống."
    ],
    ans: 2
  },
  {
    q: "Dạng chuẩn 1 (1NF) yêu cầu thuộc tính quan trọng nào của dữ liệu trong bảng?",
    opts: [
      "Mọi thuộc tính không khóa đều phải phụ thuộc hoàn toàn vào toàn bộ khóa chính.",
      "Không được tồn tại thuộc tính không khóa phụ thuộc vào một thuộc tính không khóa khác.",
      "Mọi yếu tố quyết định đều phải là một siêu khóa.",
      "Mỗi giao điểm của một hàng và một cột chỉ chứa một giá trị nguyên tử (atomic) duy nhất."
    ],
    ans: 3
  },
  {
    q: "Phụ thuộc hàm đầy đủ (Full Functional Dependency) khác với Phụ thuộc hàm một phần ở điểm nào?",
    opts: [
      "Trong phụ thuộc đầy đủ X -> Y, nếu loại bỏ bất kỳ thuộc tính nào khỏi tập X, tập đó sẽ không còn xác định được Y nữa.",
      "Phụ thuộc đầy đủ chỉ xảy ra khi X là khóa ngoại và Y là khóa chính.",
      "Phụ thuộc đầy đủ nghĩa là Y phải chứa tất cả các thuộc tính của quan hệ.",
      "Trong phụ thuộc đầy đủ, Y không được phép nhận giá trị NULL."
    ],
    ans: 0
  },
  {
    q: "Khi định nghĩa khóa ngoại (Foreign Key), hành động 'ON DELETE CASCADE' có ý nghĩa gì?",
    opts: [
      "Không cho phép xóa bản ghi ở bảng cha nếu vẫn còn tồn tại bản ghi con ở bảng tham chiếu đến.",
      "Khi bản ghi ở bảng tham chiếu (bảng cha) bị xóa, tất cả các bản ghi tương ứng có chứa khóa ngoại ở bảng con cũng sẽ bị xóa tự động.",
      "Khi bản ghi ở bảng cha bị xóa, khóa ngoại ở các bản ghi con sẽ tự động được cập nhật thành NULL.",
      "Khi bản ghi con bị xóa, hệ thống sẽ tự động xóa bản ghi cha."
    ],
    ans: 1
  },
  {
    q: "Trong mô hình quan hệ, giá trị NULL biểu thị ý nghĩa nào sau đây?",
    opts: [
      "Biểu thị giá trị số học bằng không (0).",
      "Biểu thị một chuỗi ký tự rỗng.",
      "Biểu thị rằng dữ liệu bị thiếu (chưa biết) hoặc thuộc tính đó không áp dụng (không phù hợp) cho bộ dữ liệu cụ thể này.",
      "Biểu thị lỗi cú pháp trong câu lệnh chèn dữ liệu."
    ],
    ans: 2
  },
  {
    q: "Bẫy liên kết Fan Trap (Bẫy rẻ quạt) thường xảy ra trong thiết kế mô hình ER khi nào?",
    opts: [
      "Khi một con đường kết nối logic bị đứt gãy do tham gia bán phần.",
      "Khi thiết kế dư thừa một bảng trung gian cho mối liên kết 1:1.",
      "Khi tồn tại một liên kết đệ quy M:N.",
      "Khi một kiểu thực thể trung tâm liên kết 1:N với nhiều kiểu thực thể khác, gây ra sự nhập nhằng về đường đi dữ liệu giữa các thực thể ở đầu mút."
    ],
    ans: 3
  },
  {
    q: "Phép toán Chia (Division) trong đại số quan hệ đặc biệt hữu ích cho việc giải quyết các câu truy vấn có tính chất nào?",
    opts: [
      "Các truy vấn thống kê tính tổng, đếm số lượng.",
      "Các truy vấn tìm kiếm phần tử chung giữa hai tập hợp.",
      "Các truy vấn bao gồm cụm từ 'tất cả mọi', 'toàn bộ' (ví dụ: Tìm sinh viên đăng ký TẤT CẢ các môn học).",
      "Các truy vấn so sánh giá trị lớn nhất, nhỏ nhất."
    ],
    ans: 2
  },
  {
    q: "Trong chuẩn hóa sơ đồ ER, thuộc tính dẫn xuất (Derived attribute) nên được xử lý như thế nào khi chuyển sang cơ sở dữ liệu quan hệ vật lý?",
    opts: [
      "Nó trở thành khóa chính của bảng hiện tại.",
      "Nó thường bị loại bỏ và không trở thành một cột thực sự trong bảng lưu trữ để tránh dư thừa và sự cố cập nhật.",
      "Nó bắt buộc phải tách ra thành một bảng riêng biệt.",
      "Nó luôn được lưu trữ thành một cột và gán ràng buộc toàn vẹn nghiêm ngặt."
    ],
    ans: 1
  },
  {
    q: "Tính chất vô hướng (Unordered) của các bộ (tuples) trong một quan hệ có nghĩa là gì?",
    opts: [
      "Các giá trị trong một dòng không được có thứ tự logic.",
      "Thứ tự sắp xếp của các dòng dữ liệu trong một bảng không mang ý nghĩa về mặt toán học đối với lược đồ quan hệ.",
      "Cơ sở dữ liệu không thể đánh chỉ mục (index) cho bảng đó.",
      "Người dùng phải tự viết lại các khóa chính để đánh số thứ tự dòng."
    ],
    ans: 1
  },
  {
    q: "Dạng chuẩn Boyce-Codd (BCNF) là một dạng chặt chẽ hơn của dạng chuẩn nào?",
    opts: [
      "Dạng chuẩn 1 (1NF).",
      "Dạng chuẩn 2 (2NF).",
      "Dạng chuẩn 3 (3NF).",
      "Dạng chuẩn 4 (4NF)."
    ],
    ans: 2
  },
  {
    q: "Phép kết nối ngoài bên trái (Left Outer Join) sẽ cho kết quả như thế nào?",
    opts: [
      "Bao gồm tất cả các bộ của quan hệ bên phải, và điền NULL ở phần bảng trái nếu không khớp.",
      "Chỉ bao gồm các bộ có dữ liệu khớp nhau hoàn toàn giữa hai quan hệ.",
      "Chỉ lấy những bộ ở bảng bên trái KHÔNG kết nối được với bảng bên phải.",
      "Bao gồm tất cả các bộ (dòng) của quan hệ bên trái; nếu không có bộ tương ứng ở quan hệ bên phải, các thuộc tính của bảng phải sẽ được điền NULL."
    ],
    ans: 3
  },
  {
    q: "Thuộc tính Khóa của một kiểu thực thể yếu (Weak Entity) được gọi là gì?",
    opts: [
      "Khóa ứng viên (Candidate Key).",
      "Khóa phân biệt / Khóa một phần (Partial Key / Discriminator).",
      "Khóa nhân tạo (Surrogate Key).",
      "Siêu khóa (Superkey)."
    ],
    ans: 1
  },
  {
    q: "Việc sử dụng Ràng buộc UNIQUE trên một cột khác biệt gì so với Ràng buộc PRIMARY KEY?",
    opts: [
      "Một bảng có thể có nhiều PRIMARY KEY nhưng chỉ có một ràng buộc UNIQUE.",
      "UNIQUE được sử dụng để liên kết với khóa ngoại của bảng khác, PRIMARY KEY thì không.",
      "Cột có ràng buộc UNIQUE thường cho phép chứa một giá trị NULL, trong khi PRIMARY KEY hoàn toàn không cho phép NULL.",
      "Không có sự khác biệt về mặt cấu trúc."
    ],
    ans: 2
  },
  {
    q: "Vì sao việc lưu trữ trực tiếp Thuộc tính đa trị dưới dạng danh sách cách nhau bởi dấu phẩy trong một cột bị coi là thiết kế tồi?",
    opts: [
      "Nó làm tăng kích thước lưu trữ vật lý lên gấp nhiều lần.",
      "Hệ quản trị cơ sở dữ liệu tự động từ chối chèn các chuỗi có chứa dấu phẩy.",
      "Nó yêu cầu phải tạo quá nhiều khóa chính trong cùng một bảng.",
      "Nó làm mất tính chất dữ liệu nguyên tử (atomic), khiến các câu truy vấn tìm kiếm, cập nhật và đếm trở nên cực kỳ phức tạp."
    ],
    ans: 3
  },
  {
    q: "Một quan hệ đạt Dạng chuẩn 2 (2NF) khi nó thỏa mãn Dạng chuẩn 1 (1NF) và thỏa mãn thêm điều kiện gì?",
    opts: [
      "Không có thuộc tính không khóa nào phụ thuộc hàm một phần vào khóa chính.",
      "Không có thuộc tính không khóa nào phụ thuộc bắc cầu vào khóa chính.",
      "Mọi khóa ứng viên đều chứa ít nhất hai thuộc tính.",
      "Tất cả các thuộc tính phải là thuộc tính đơn trị nguyên tử."
    ],
    ans: 0
  },
  {
    q: "Khi hai thực thể mạnh tham gia vào liên kết Nhiều-Nhiều (M:N), bảng trung gian sinh ra sẽ có Khóa chính là gì?",
    opts: [
      "Là một cột tự tăng (Auto Increment) hoàn toàn mới.",
      "Là một khóa phức hợp (Composite Key) gồm sự kết hợp của hai Khóa ngoại tham chiếu đến hai bảng thực thể đó.",
      "Hệ thống sẽ chọn ngẫu nhiên khóa chính của một trong hai bảng làm khóa chính.",
      "Bảng trung gian không cần có khóa chính."
    ],
    ans: 1
  },
  {
    q: "Trong mô hình quan hệ, thuộc tính (Attribute) biểu diễn điều gì?",
    opts: [
      "Một thể hiện cụ thể (dòng) của dữ liệu.",
      "Sự liên kết về mặt ngữ nghĩa giữa hai bảng.",
      "Các đặc điểm, tính chất của một thực thể, cấu thành các cột (columns) của bảng.",
      "Các hàm tổng hợp dữ liệu trong truy vấn."
    ],
    ans: 2
  },
  {
    q: "Phụ thuộc bắc cầu (Transitive Dependency) là khái niệm xảy ra khi nào?",
    opts: [
      "Khi hai thuộc tính cùng là khóa chính của một bảng phức hợp.",
      "Khi một thuộc tính có thể tham chiếu đến chính nó qua liên kết đệ quy.",
      "Khi một cột chứa giá trị được tính toán từ hai cột khác.",
      "Khi thuộc tính X xác định thuộc tính Y, Y không xác định X, nhưng Y lại xác định thuộc tính Z."
    ],
    ans: 3
  },
  {
    q: "Thuộc tính đa trị trong sơ đồ ER được phân biệt thông qua ký hiệu đồ họa nào?",
    opts: [
      "Vòng elip nét đứt.",
      "Vòng elip có tên thuộc tính được gạch chân.",
      "Hình chữ nhật có nét đôi.",
      "Vòng elip (oval) nét đôi."
    ],
    ans: 3
  },
  {
    q: "Trong ER, vai trò (Role Name) trong một mối liên kết được sử dụng để làm gì?",
    opts: [
      "Chỉ ra kiểu dữ liệu của khóa chính.",
      "Làm rõ ngữ nghĩa của mối liên kết, đặc biệt bắt buộc trong các mối liên kết đệ quy (Unary relationship).",
      "Xác định bản số tối đa và tối thiểu.",
      "Thay thế cho tên thực thể khi chuyển sang mô hình quan hệ."
    ],
    ans: 1
  },
  {
    q: "Bản số cấu trúc 1:N giữa Thực thể A và Thực thể B mang ý nghĩa nào sau đây?",
    opts: [
      "Một đối tượng của A có thể liên kết với nhiều đối tượng của B, và ngược lại.",
      "Đối tượng A bắt buộc phải tồn tại trước đối tượng B.",
      "Một đối tượng của A có thể liên kết với nhiều đối tượng của B, nhưng một đối tượng của B chỉ được phép liên kết với tối đa một đối tượng của A.",
      "Bảng A sẽ chứa khóa ngoại trỏ sang khóa chính của bảng B."
    ],
    ans: 2
  },
  {
    q: "Một lược đồ CSDL được đánh giá là 'Bảo toàn thông tin' (Lossless-join decomposition) khi nào?",
    opts: [
      "Khi hệ quản trị tự động sao lưu toàn bộ thông tin dự phòng.",
      "Khi mọi khóa ngoại đều không chứa giá trị NULL.",
      "Khi việc phân rã một bảng thành nhiều bảng nhỏ hơn không làm mất dữ liệu gốc và không sinh ra các bộ dữ liệu giả khi kết nối chúng lại.",
      "Khi không có thuộc tính nào bị lược bỏ khỏi danh sách yêu cầu."
    ],
    ans: 2
  },
  {
    q: "Phép Hợp (Union), Phép Giao (Intersection) và Phép Trừ (Set Difference) mượn trực tiếp từ nền tảng lý thuyết toán học nào?",
    opts: [
      "Đại số tuyến tính (Linear Algebra).",
      "Lý thuyết Tập hợp (Set Theory).",
      "Toán học rời rạc - Lý thuyết Đồ thị (Graph Theory).",
      "Giải tích (Calculus)."
    ],
    ans: 1
  },
  {
    q: "Tính Độc lập dữ liệu logic (Logical Data Independence) có nghĩa là gì?",
    opts: [
      "Khả năng thay đổi cách lưu trữ vật lý trên đĩa cứng mà không ảnh hưởng lược đồ logic.",
      "Khả năng tự động loại bỏ các dữ liệu trùng lặp.",
      "Khả năng thay đổi cấu trúc lược đồ mức logic (như thêm cột/bảng) mà không làm ảnh hưởng đến các ứng dụng hoặc giao diện bên ngoài.",
      "Đảm bảo CSDL không phụ thuộc vào mạng internet."
    ],
    ans: 2
  }
];
