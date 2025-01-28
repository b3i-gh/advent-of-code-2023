def main(input):
    ans1 = ans2 = 0

    def build_down(nums):
        M = []
        M.append([int(n) for n in nums.split(" ")])
        r = 1
        keep_going = True
        while keep_going:
            M.append([])
            for c in range(len(M[r-1])-1):
                M[r].append(M[r-1][c+1] - M[r-1][c])
            if any(M[r]) != 0:
                keep_going = True
            else:
                keep_going = False
            r += 1
        return M
    
    def build_up(M, part1):
        M[-1].append(0)
        for i in range(len(M) - 2, -1, -1):
            if part1:
                n = M[i][-1] + M[i+1][-1]
            else:
                n = M[i][-1] - M[i+1][-1]
            M[i].append(n)
        return M[0][-1]


    for r in input.strip().split("\n"):
        M = build_down(r)
        ans1 += build_up(M, True)

    # part 2
    for r in input.strip().split("\n"):
        M = build_down(r)
        for i, m in enumerate(M):
            M[i] = m[::-1]
        ans2 += build_up(M, False)

    return ans1, ans2