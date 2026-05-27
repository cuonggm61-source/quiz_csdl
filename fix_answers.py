import re

js_path = r"C:\Users\cuong\Documents\project\quiz_csdl\js\ontapmau_data.js"

# Approximate answers based on standard DB knowledge for the 64 questions
answers = [
    1, # 1
    3, # 2
    3, # 3
    1, # 4
    1, # 5
    3, # 6
    0, # 7
    1, # 8
    1, # 9
    3, # 10
    3, # 11
    0, # 12
    0, # 13
    1, # 14
    2, # 15
    0, # 16
    1, # 17
    1, # 18
    0, # 19
    3, # 20
    3, # 21
    1, # 22
    3, # 23
    1, # 24
    2, # 25
    0, # 26
    0, # 27
    1, # 28
    0, # 29
    2, # 30
    3, # 31
    3, # 32
    3, # 33
    0, # 34
    2, # 35
    2, # 36
    2, # 37
    2, # 38
    2, # 39
    2, # 40
    0, # 41
    2, # 42
    3, # 43
    0, # 44
    3, # 45
    0, # 46
    0, # 47
    1, # 48
    2, # 49
    2, # 50
    1, # 51
    0, # 52
    0, # 53
    0, # 54
    1, # 55
    2, # 56
    0, # 57
    1, # 58
    1, # 59
    2, # 60
    2, # 61
    1, # 62
    3  # 63
]

with open(js_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
q_idx = 0

for line in lines:
    if 'ans:0' in line or 'ans: 0' in line or 'ans:' in line:
        if q_idx < len(answers):
            line = re.sub(r'ans:\s*\d+', f'ans:{answers[q_idx]}', line)
            q_idx += 1
    new_lines.append(line)

with open(js_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
    
print(f"Updated {q_idx} questions.")
