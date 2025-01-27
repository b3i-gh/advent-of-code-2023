import re
from math import gcd
from functools import reduce
def main(input):
    ans1 = ans2 = 0

    dir = input.strip().split("\n")[0]
    m = {}
    for r in input.split("\n")[2:]:
        #  m[r.split(" = ")[0]] = re.findall(r'[a-zA-Z]+', r.split(" = ")[1])
        a = r.split(" = ")[0]
        l,r = r.split(" = ")[1].split(", ")
        m[a] = (l[1:],r[:-1])

    # cur_node = 'AAA'
    # while cur_node != 'ZZZ':
    #     cur_c = dir[ans1 % len(dir)]
    #     if cur_c == 'L':
    #         cur_node = m[cur_node][0]
    #     else:
    #         cur_node = m[cur_node][1]
    #     ans1 += 1 

    #part 2

    starting_nodes = {}
    ending_nodes = []

    for n in m:
        if n.endswith("A"):
            starting_nodes[n] = 0
        elif n.endswith("Z"):
            ending_nodes.append(n)


    for n in starting_nodes:
        cur_node = n
        while not cur_node.endswith("Z"):
            cur_c = dir[starting_nodes[n] % len(dir)]
            if cur_c == 'L':
                cur_node = m[cur_node][0]
            else:
                cur_node = m[cur_node][1]
            starting_nodes[n] += 1     

    ans2 = min(starting_nodes.values()) if starting_nodes else 0
    def lcm(a, b):
        return a * b // gcd(a, b)

    def lcm_multiple(numbers):
        return reduce(lcm, numbers)

    ans2 = lcm_multiple(starting_nodes.values()) if starting_nodes else 0

    return ans1, ans2