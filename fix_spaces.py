import os

files = [
    r"C:\Users\cuong\Documents\project\quiz_csdl\js\ontapmau_data.js",
    r"C:\Users\cuong\Documents\project\quiz_csdl\js\baitapphutoithieu_data.js"
]

replacements = {
    'cơ s ở': 'cơ sở',
    's ở': 'sở',
    'd ữ': 'dữ',
    'h ệ': 'hệ',
    'm ột': 'một',
    'nh ất': 'nhất',
    'đư ợc': 'được',
    'trư ờng': 'trường',
    'b ảng': 'bảng',
    'th ực': 'thực',
    'c ấu': 'cấu',
    'm ạng': 'mạng',
    'k ết': 'kết',
    'nhi ều': 'nhiều',
    'chu ẩn': 'chuẩn',
    'đ ối': 'đối',
    't rọng': 'trọng',
    'kh ả': 'khả',
    'xu ất': 'xuất',
    'd ị': 'dị',
    'b ảo': 'bảo',
    'đ ảm': 'đảm',
    'đ ộc': 'độc',
    'h ợp': 'hợp',
    'b ắc': 'bắc',
    't ập': 'tập',
    'm ức': 'mức',
    'l ớp': 'lớp',
    'đ ại': 'đại',
    'ph ụ': 'phụ',
    'thu ộc': 'thuộc',
    'd ẫn': 'dẫn',
    'lươ ng': 'lương',
    'khoá k hoá': 'khoá',
    'k hoá': 'khoá',
    'p hụ': 'phụ',
    'v ẹn': 'vẹn',
    'm ất': 'mất',
    'ngư ời': 'người',
    'c ủa': 'của',
    'gi ữa': 'giữa',
    'bư ớc': 'bước',
    'ch ọn': 'chọn',
    'đ ặt': 'đặt',
    'nh ập': 'nhập',
    't ạo': 'tạo',
    'c ập': 'cập',
    'qu ản': 'quản',
    'đ ịnh': 'định',
    'b ằng': 'bằng',
    'c ấm': 'cấm',
    'v ề': 'về',
    't ừ': 'từ',
    'đ ầy': 'đầy',
    'đ ủ': 'đủ',
    'm ọi': 'mọi',
    'l ại': 'lại',
    'l ập': 'lập',
    'b ất': 'bất',
    'tho ả': 'thoả',
    'k ể': 'kể',
    'k ết': 'kết',
    'v ế': 'vế',
    'c ần': 'cần',
    'đ ược': 'được',
    't ổn': 'tổn',
    'th ất': 'thất',
    'ph ản': 'phản',
    'mionh': 'minh',
    'hang': 'hàng'
}

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for bad, good in replacements.items():
            content = content.replace(bad, good)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed spaces in {os.path.basename(filepath)}")
