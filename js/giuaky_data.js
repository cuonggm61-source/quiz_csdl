const GIUAKY_QUESTIONS = [
  {
    q: "Khóa chính đúng nhất của bảng CHI_TIET_DON_HANG là:",
    opts: ["MaDon", "MaSP", "(MaDon, MaSP)", "(MaDon, SoLuong)"],
    ans: 2
  },
  {
    q: "Trong bảng DON_HANG, thuộc tính nào là khóa ngoại?",
    opts: ["MaDon", "NgayLap", "MaKH, MaNV", "TrangThai"],
    ans: 2
  },
  {
    q: "Một khách hàng có thể có nhiều đơn hàng, nhưng một đơn hàng chỉ thuộc về một khách hàng. Đây là quan hệ:",
    opts: ["1–1", "1–N", "N–N", "Không xác định"],
    ans: 1
  },
  {
    q: "Bảng nào đóng vai trò trung gian giữa DON_HANG và SAN_PHAM?",
    opts: ["NHA_CUNG_CAP", "DANH_MUC", "CHI_TIET_DON_HANG", "NHAN_VIEN"],
    ans: 2
  },
  {
    q: "Nếu muốn lấy danh sách sản phẩm cùng tên danh mục của chúng, cần nối:",
    opts: ["SAN_PHAM với KHACH_HANG", "SAN_PHAM với DANH_MUC", "DON_HANG với DANH_MUC", "CHI_TIET_DON_HANG với NHAN_VIEN"],
    ans: 1
  },
  {
    q: "Mệnh đề HAVING thường được dùng khi nào?",
    opts: ["Lọc trước khi nhóm", "Lọc sau khi GROUP BY", "Sắp xếp dữ liệu", "Cập nhật dữ liệu"],
    ans: 1
  },
  {
    q: "Để tìm nhóm khách hàng có tổng chi tiêu lớn hơn 50 triệu, điều kiện nên đặt ở:",
    opts: ["WHERE", "ORDER BY", "HAVING", "FROM"],
    ans: 2
  },
  {
    q: "Truy vấn nào phù hợp nhất để tìm sản phẩm chưa từng bán?",
    opts: ["INNER JOIN + COUNT(*) > 0", "LEFT JOIN + kiểm tra NULL", "GROUP BY + AVG()", "ORDER BY giảm dần"],
    ans: 1
  },
  {
    q: "Nếu DonGiaBan được lưu ở CHI_TIET_DON_HANG, lý do hợp lý nhất là:",
    opts: ["Vì SAN_PHAM không có giá", "Vì cần lưu đúng giá bán tại thời điểm giao dịch", "Vì bảng SAN_PHAM không có khóa chính", "Vì để giảm số lượng dòng dữ liệu"],
    ans: 1
  },
  {
    q: "Mệnh đề nào dùng để sắp xếp doanh thu giảm dần?",
    opts: ["GROUP BY DoanhThu DESC", "HAVING DoanhThu DESC", "ORDER BY DoanhThu DESC", "SORT DoanhThu DESC"],
    ans: 2
  },
  {
    q: "Xét quan hệ chưa chuẩn hóa: R(MaDon, NgayLap, MaKH, TenKH, SDT, DiaChi, MaNV, TenNV, MaSP, TenSP, DonGia, SoLuong, MaDM, TenDM, MaNCC, TenNCC). Khóa phù hợp nhất là:",
    opts: ["MaDon", "MaSP", "(MaDon, MaSP)", "(MaKH, MaSP)"],
    ans: 2
  },
  {
    q: "Quan hệ R vi phạm 2NF vì:",
    opts: ["Có dữ liệu rỗng", "Có phụ thuộc bộ phận vào khóa ghép", "Không có khóa ngoại", "Có ít bảng quá"],
    ans: 1
  },
  {
    q: "Với phụ thuộc hàm MaSP -> TenSP, DonGia, MaDM, MaNCC, thuộc tính nào là thuộc tính không khóa phụ thuộc trực tiếp vào MaSP?",
    opts: ["TenSP", "MaDon", "NgayLap", "TenNV"],
    ans: 0
  },
  {
    q: "Với khóa (MaDon, MaSP), phụ thuộc nào sau đây là phụ thuộc đầy đủ?",
    opts: ["MaDon -> NgayLap", "MaSP -> TenSP", "(MaDon, MaSP) -> SoLuong", "MaKH -> TenKH"],
    ans: 2
  },
  {
    q: "Trong quan hệ R, TenDM phụ thuộc vào MaDM, còn MaDM phụ thuộc vào MaSP. Đây là:",
    opts: ["Phụ thuộc đầy đủ", "Phụ thuộc bộ phận", "Phụ thuộc bắc cầu", "Không phải phụ thuộc hàm"],
    ans: 2
  },
  {
    q: "Bất thường nào có thể xảy ra nếu vẫn lưu toàn bộ dữ liệu bán hàng trong một bảng lớn R?",
    opts: ["Không thể sắp xếp dữ liệu", "Dễ lặp lại thông tin khách hàng, sản phẩm, nhà cung cấp", "Không thể dùng SELECT", "Không thể tạo khóa chính"],
    ans: 1
  },
  {
    q: "Chuẩn 3NF yêu cầu:",
    opts: ["Mọi thuộc tính không khóa phụ thuộc trực tiếp vào khóa, không phụ thuộc bắc cầu", "Bảng phải có ít nhất 3 khóa ngoại", "Bảng phải có ít hơn 3 thuộc tính", "Tất cả thuộc tính đều phải là số"],
    ans: 0
  },
  {
    q: "Nếu xóa sản phẩm cuối cùng của một nhà cung cấp trong bảng gộp R, có thể mất luôn thông tin nhà cung cấp. Đây là:",
    opts: ["Bất thường chèn", "Bất thường xóa", "Bất thường sắp xếp", "Bất thường tìm kiếm"],
    ans: 1
  },
  {
    q: "Khóa ngoại giúp:",
    opts: ["Tăng tốc độ cộng số", "Tạo ràng buộc liên kết giữa các bảng", "Tự động chuẩn hóa dữ liệu", "Tạo chỉ mục duy nhất bắt buộc"],
    ans: 1
  },
  {
    q: "Nếu muốn lấy các khách hàng mua hàng ở ít nhất 2 ngày khác nhau, thì phép đếm phù hợp nhất là:",
    opts: ["COUNT(*)", "COUNT(MaKH)", "COUNT(DISTINCT NgayLap)", "SUM(NgayLap)"],
    ans: 2
  }
];
