inFp = None 
inList, inStr = [], ""
lineNum = 1

inFp = open("Text/test.txt", "r", encoding="utf-8" )
#inFp = open("C:/Temp/data1.txt", "r")

inList = inFp.readlines()
for inStr in inList :
    print("%d : %s" %(lineNum, inStr), end="")
    lineNum += 1

inFp.close()
