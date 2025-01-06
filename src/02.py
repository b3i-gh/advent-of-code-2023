import re
def main(input):
    ans1 = ans2 = 0
    RED = re.compile(r'(?=((\d+)\s+red))')
    GREEN = re.compile(r'(?=((\d+)\s+green))') 
    BLUE = re.compile(r'(?=((\d+)\s+blue))')
    for i,l in enumerate(input.strip().split("\n")):
        rr = 0
        gg = 0
        bb = 0
        for r in RED.findall(l):
            if int(r[1]) > rr:
                rr = int(r[1])
        for g in GREEN.findall(l):
            if int(g[1]) > gg:
                gg = int(g[1])
        for b in BLUE.findall(l):
            if int(b[1]) > bb:
                bb = int(b[1])
        if rr <= 12 and gg <= 13 and bb <= 14:
            ans1 += i+1
        ans2 += rr*gg*bb
    return ans1,ans2