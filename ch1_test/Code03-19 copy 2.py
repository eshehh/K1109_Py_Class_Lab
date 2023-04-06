# 소수 판별 함수
def is_prime(num):
    if num < 2: # 0과 1은 소수가 아님
        return False
    for i in range(2, int(num**0.5) + 1): # 2부터 해당 숫자의 제곱근까지 반복
        if num % i == 0: # 만약 i로 나누어 떨어지면 소수가 아님
            return False
    return True

# 메인 프로그램
print("3에서 100까지의 소수:")
for i in range(3, 101):
    if is_prime(i):
        print(i, end=" ")
