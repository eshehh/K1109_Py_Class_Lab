# inFp = None	# 입력 파일
# inStr = ""		# 읽어온 문자열

# inFp = open("Text/test.txt", "r", encoding="utf-8" )
# #inFp = open("C:/Temp/data1.txt", "r")

# while True : 
#     i = 0
#     inStr = inFp.readline()
#     if inStr == "" :
#         break;
#     print(str(i + 1) + inStr, end = "")

# inFp.close()

inFp = None	# 입력 파일
inStr = ""		# 읽어온 문자열
lineNum = 1

inFp = open("Text/test.txt", "r", encoding="utf-8" )
#inFp = open("C:/Temp/data1.txt", "r")

while True :
    inStr = inFp.readline()
    if inStr == "" :
        break;
    print("%d : %s" %(lineNum, inStr), end="")
    lineNum += 1

inFp.close()
