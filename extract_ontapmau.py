import re
from PyPDF2 import PdfReader

pdf_path = r"C:\Users\cuong\Downloads\Ontap_CSDL (1).pdf"
js_output = r"C:\Users\cuong\Documents\project\quiz_csdl\js\ontapmau_data.js"

def extract_text_from_pdf(path):
    reader = PdfReader(path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

def parse_questions(text):
    questions = []
    chunks = re.split(r'\n(?=\d+\s*[\.\-]\s*)', text)
    
    for chunk in chunks:
        chunk = chunk.strip()
        if not chunk: continue
        
        lines = chunk.split('\n')
        q_text = lines[0].strip()
        q_text = re.sub(r'^\d+\s*[\.\-]\s*', '', q_text)
        
        opts_text = '\n'.join(lines[1:])
        opts = []
        opt_matches = re.split(r'\n(?=[A-Da-d]\s*[\.\-]|\[[A-Da-d]\]\s*[\.\-]*)', opts_text)
        
        for o in opt_matches:
            o = o.strip()
            if not o: continue
            o = re.sub(r'^([A-Da-d]\s*[\.\-]|\[[A-Da-d]\]\s*[\.\-]*)\s*', '', o)
            opts.append(o)
            
        if len(opts) >= 2:
            questions.append({
                "q": q_text,
                "opts": opts[:4],
                "ans": 0
            })
    return questions

def main():
    text = extract_text_from_pdf(pdf_path)
    new_qs = parse_questions(text)
    print(f"Extracted {len(new_qs)} questions for ontapmau.")
    
    js_content = "const ONTAPMAU_QUESTIONS = [\n"
    for q in new_qs:
        q_text_clean = q['q'].strip().replace('"', '\\"')
        opts_str = '","'.join([o.replace('"', '\\"').replace('\n', ' ') for o in q['opts']])
        js_content += f'  {{q:"{q_text_clean}", opts:["{opts_str}"], ans:0}},\n'
    js_content += "];\n"
    
    with open(js_output, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Successfully created ontapmau_data.js")

if __name__ == "__main__":
    main()
