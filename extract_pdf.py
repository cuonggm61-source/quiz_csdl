import re
import os
import json
try:
    from PyPDF2 import PdfReader
except ImportError:
    pass # Will be installed soon

pdf_path = r"C:\Users\cuong\Downloads\Ontap_CSDL (1).pdf"
js_path = r"C:\Users\cuong\Documents\project\quiz_csdl\js\csdl_data.js"

def extract_text_from_pdf(path):
    reader = PdfReader(path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

def parse_questions(text):
    # Match patterns like:
    # 1. Question text
    # A. Option A
    # B. Option B
    # C. Option C
    # D. Option D
    
    # Or:
    # 11. - Question text
    # [a]-- Option A
    # [b]-- Option B
    # [c]-- Option C
    # [d]-- Option D
    
    questions = []
    
    # Split by numbers followed by dot or hyphen
    chunks = re.split(r'\n(?=\d+\s*[\.\-]\s*)', text)
    
    for chunk in chunks:
        chunk = chunk.strip()
        if not chunk: continue
        
        # Extract question number and text
        lines = chunk.split('\n')
        q_text = lines[0].strip()
        # Remove the leading number
        q_text = re.sub(r'^\d+\s*[\.\-]\s*', '', q_text)
        
        # Options
        opts_text = '\n'.join(lines[1:])
        
        # Find options: A. or [a]--
        # We need to find 4 options usually.
        opts = []
        opt_matches = re.split(r'\n(?=[A-Da-d]\s*[\.\-]|\[[A-Da-d]\]\s*[\.\-]*)', opts_text)
        
        for o in opt_matches:
            o = o.strip()
            if not o: continue
            # remove A., [a]--, etc
            o = re.sub(r'^([A-Da-d]\s*[\.\-]|\[[A-Da-d]\]\s*[\.\-]*)\s*', '', o)
            opts.append(o)
            
        if len(opts) >= 2:
            questions.append({
                "q": q_text,
                "opts": opts[:4], # take up to 4
                "ans": 0 # Default to 0 since we don't know the answer
            })
            
    return questions

def main():
    text = extract_text_from_pdf(pdf_path)
    new_qs = parse_questions(text)
    print(f"Extracted {len(new_qs)} questions from PDF.")
    
    # Read existing
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the JS array
    # It starts with: const RAW_QUESTIONS = [
    # And ends before the next const or end of file
    
    match = re.search(r'const RAW_QUESTIONS\s*=\s*\[(.*?)\];', content, re.DOTALL)
    if not match:
        print("Could not find RAW_QUESTIONS array.")
        return
        
    # We will use simple string matching to find duplicates
    existing_qs = []
    for line in match.group(1).split('\n'):
        if 'q:' in line or 'q : ' in line:
            m = re.search(r'q\s*:\s*"(.*?)"', line)
            if m:
                existing_qs.append(m.group(1).strip())
                
    # Add non-duplicates
    added = 0
    added_questions = []
    for q in new_qs:
        q_text_clean = q['q'].strip().replace('"', '\\"')
        
        # check duplicate
        is_dup = False
        for ex in existing_qs:
            if q_text_clean[:20] in ex: # loose match
                is_dup = True
                break
                
        if not is_dup:
            added += 1
            opts_str = '","'.join([o.replace('"', '\\"').replace('\n', ' ') for o in q['opts']])
            q_str = f'  {{q:"{q_text_clean}", opts:["{opts_str}"], ans:0}},'
            added_questions.append(q_str)
            
    if added > 0:
        print(f"Adding {added} new questions.")
        
        # Insert before the closing '];'
        insertion_point = content.rfind('];')
        if insertion_point != -1:
            new_content = content[:insertion_point] + '\n' + '\n'.join(added_questions) + '\n' + content[insertion_point:]
            with open(js_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("Successfully updated js_data.js")
    else:
        print("No new questions to add.")

if __name__ == "__main__":
    main()
