import re
def main(input):
    ans1 = ans2 = 1
    
    times = [int(n) for n in re.findall("\d+", input.strip().split("\n")[0])]
    distances = [int(n) for n in re.findall("\d+", input.strip().split("\n")[1])]

    for i in range(len(times)):
        wins = 0
        pt = 0
        while pt <= times[i]:
            remaining_time = times[i] - pt
            cur_dist = remaining_time * pt
            if cur_dist > distances[i]:
                wins += 1
            pt += 1
        ans1 *= wins

    # part 2
    time = int("".join([n for n in re.findall("\d+", input.strip().split("\n")[0])]))
    distance = int("".join([n for n in re.findall("\d+", input.strip().split("\n")[1])]))
    combinations = []
    for a in range(time):
        b = time - a
        if a * b > distance:
            combinations.append((a, b))
    ans2 = len(combinations)
    print(time, distance)

    return ans1, ans2