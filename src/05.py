import re
def main(input):
    ans1 = ans2 = -1

    initial_seeds = [int(n) for n in re.findall("\d+", input.strip().split("\n")[0])]
    maps = []
    cmap = []
    for r in input.strip().split("\n")[3:]:
        if r != "" and len(re.findall("\d+", r)) > 0:
            cmap.append([int(n) for n in re.findall("\d+", r)])
        else:
            if cmap == []:
                continue
            maps.append(cmap)
            cmap = []

    if cmap != []:
            maps.append(cmap)
    
    
    for i in range(len(initial_seeds)):
        for m in maps:
            for r in m:
                src_start = r[1]
                range_length = r[2]
                src_end = src_start + range_length
                dest = r[0]
                if src_start <= initial_seeds[i] < src_end:
                    initial_seeds[i] = dest + (initial_seeds[i] - src_start)
                    break

    ans1 = min(initial_seeds)

    # part 2
    segments = input.split('\n\n')
    intervals = []

    for seed in re.findall(r'(\d+) (\d+)', segments[0]):
        x1, dx = map(int, seed)
        x2 = x1 + dx
        intervals.append((x1, x2, 1))

    min_location = float('inf')
    while intervals:
        x1, x2, level = intervals.pop()
        if level == 8:
            min_location = min(x1, min_location)
            continue

        for conversion in re.findall(r'(\d+) (\d+) (\d+)', segments[level]):
            z, y1, dy = map(int, conversion)
            y2 = y1 + dy
            diff = z - y1
            if x2 <= y1 or y2 <= x1:    # no overlap
                continue
            if x1 < y1:                 # split original interval at y1
                intervals.append((x1, y1, level))
                x1 = y1
            if y2 < x2:                 # split original interval at y2
                intervals.append((y2, x2, level))
                x2 = y2
            intervals.append((x1 + diff, x2 + diff, level + 1)) # perfect overlap -> make conversion and let pass to next nevel 
            break

        else:
            intervals.append((x1, x2, level + 1))
  
    ans2 =  min_location

    return ans1, ans2