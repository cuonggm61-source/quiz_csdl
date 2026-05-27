const BAITAPPHUTOITHIEU_QUESTIONS = [
  {
    q: "Cho tập phụ thuộc hàm: F = { A → BC, B → C }. Phủ tối thiểu của F là tập nào sau đây?",
    opts: [
      "{ A → BC, B → C }",
      "{ A → B, A → C, B → C }",
      "{ A → B, B → C }",
      "{ A → C, B → C }"
    ],
    ans: 2
  },
  {
    q: "Trong quá trình tìm phủ tối thiểu của một tập phụ thuộc hàm, bước nào sau đây không bắt buộc?",
    opts: [
      "Tách vế phải sao cho mỗi phụ thuộc hàm chỉ có một thuộc tính ở vế phải",
      "Loại bỏ các thuộc tính dư thừa ở vế trái",
      "Loại bỏ các phụ thuộc hàm dư thừa",
      "Thêm các phụ thuộc hàm mới để bảo toàn thông tin"
    ],
    ans: 3
  },
  {
    q: "Cho lược đồ R(A, B, C) với tập phụ thuộc hàm: F = { A → B, B → C }. Phân rã R thành R₁(A, B) và R₂(B, C). Phát biểu nào sau đây đúng?",
    opts: [
      "Phân rã bị mất mát thông tin",
      "Phân rã không bảo toàn phụ thuộc hàm",
      "Phân rã không mất mát thông tin và bảo toàn phụ thuộc hàm",
      "Phân rã chỉ bảo toàn phụ thuộc hàm (A → B)"
    ],
    ans: 2
  },
  {
    q: "Điều kiện cần và đủ để một phân rã R(XYZ) → R₁(XY), R₂(YZ) là không mất mát thông tin là:",
    opts: [
      "X → Y",
      "Y → Z",
      "Y → X hoặc Y → Z",
      "XY → Z"
    ],
    ans: 2
  }
];
