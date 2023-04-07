aa = []
for i in range(0, 10) :
    aa.append(0)
hap = 0

# for i in range(0, 10) :
i = 0
while True:
    if i < 10:
        aa[i] = int(input(str(i+1) + "번째 숫자 : " ))
        i = i+1
    else :
        break

for i in range(0,10):
    hap += aa[i]

# hap = aa[0] + aa[1] + aa[2] + aa[3]

# i = 0
# while i < 10 :
#     hap = hap + aa[i]
#     i = i + 1

print(aa)
print("합계 ==> %d" % hap)
print("평균 ==> %d" % hap/i)