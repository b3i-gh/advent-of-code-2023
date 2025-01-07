def main(input):
    ans1 = ans2 = 0
    grid = input.splitlines()
    cs = set()

    # part 1
    for r, row in enumerate(grid):
        for c, ch in enumerate(row):
            if ch.isdigit() or ch == ".":
                continue
            for cr in [r-1, r, r+1]:
                for cc in [c-1, c, c+1]:
                    if cr < 0 or cr >= len(grid) or cc < 0 or cc >= len(grid[cr]) or not grid[cr][cc].isdigit():
                        continue
                    while cc > 0 and grid[cr][cc-1].isdigit():
                        cc -= 1
                    cs.add((cr,cc))

    ns = []
    for r,c in cs:
        s = ""
        while c < len(grid[r]) and grid[r][c].isdigit():
            s += grid[r][c]
            c += 1
        ns.append(int(s))

    ans1 = sum(ns)

    # part 2
    for r, row in enumerate(grid):
        for c, ch in enumerate(row):
            if ch != "*":
                continue

            gears = set()

            for cr in [r-1, r, r+1]:
                for cc in [c-1, c, c+1]:
                    if cr < 0 or cr >= len(grid) or cc < 0 or cc >= len(grid[cr]) or not grid[cr][cc].isdigit():
                        continue
                    while cc > 0 and grid[cr][cc-1].isdigit():
                        cc -= 1
                    gears.add((cr,cc))

            if len(gears) != 2:
                continue

            nns = []
            for cr,cc in gears:
                s = ""
                while cc < len(grid[cr]) and grid[cr][cc].isdigit():
                    s += grid[cr][cc]
                    cc += 1
                nns.append(int(s))
           
            ans2 += nns[0] * nns[1]
    return ans1, ans2
