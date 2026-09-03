
import re

file_path = "/Users/Romain/Library/Mobile Documents/com~apple~CloudDocs/Pro/Mes applis/Mario Kart/Index.html"

with open(file_path, 'r') as f:
    lines = f.readlines()

stack = []
for i, line in enumerate(lines, 1):
    # Find all <div> starts and </div> ends
    tokens = re.findall(r'<(div)|(/div)>', line)
    for token in tokens:
        if token[0] == 'div':
            stack.append(i)
            if i == 563:
                print(f"DEBUG: Found page-prof start at line {i}")
        elif token[1] == '/div':
            if not stack:
                print(f"Error: </div> without <div at line {i}")
                continue
            start_line = stack.pop()
            if start_line == 563:
                print(f"SUCCESS: page-prof (started at 563) is closed at line {i}")
            if i > 1900:
                 pass # print(f"DEBUG: closing div from line {start_line} at line {i}")

if stack:
    print(f"Unclosed divs starting at: {stack}")
