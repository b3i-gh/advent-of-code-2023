import re

def main(input):
    ans1 = ans2 = 0

    # part 1
    REGEX = re.compile("\d")

    for r in input.strip().split("\n"):
        numbers = REGEX.findall(r)
        if(len(numbers) > 0):
            ans1 += int(numbers[0] + numbers[-1])

    # part 2

    nums = "one|two|three|four|five|six|seven|eight|nine"
    nums_re = re.compile(r'(?=(\d|%s))' % nums)
    nums = nums.split("|")
    for r in input.strip().split("\n"):
        digits = []
        for num in nums_re.findall(r):
            if num in nums:
                num = str(nums.index(num) + 1)
            digits.append(num)
        ans2 += int(digits[0] + digits[-1])

    return ans1, ans2