import re
def main(input):
    ans1 = ans2 = 0
    points = []
    for r in input.strip().split("\n"):
        p1,p2 = r.strip().split("|")
        wn = set()
        mine = set()
        wn = re.findall(r'\d+', p1.split(":")[1])
        mine = re.findall(r'\d+', p2)
        i = j = 0
        for n in wn:
            if n in mine:
                if i == 0:
                    i = 1
                else:
                    i *= 2
                j += 1
        ans1 += i
        points.append(j)
    print(points)

    v = []
    def calc(i):
        for j in range(points[i]):
            calc(i+1+j)
        v.append(i)

    for i in range(len(points)):
        calc(i)

    ans2 = len(v)
    return ans1, ans2