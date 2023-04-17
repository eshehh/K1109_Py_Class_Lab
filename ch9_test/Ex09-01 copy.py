import time
import bs4
import urllib.request
import ssl

ssl_context = ssl.SSLContext()
ssl_context.verify_mode = ssl.CERT_NONE

nateUrl = "https://search.shopping.naver.com/best/category/click?categoryCategoryId=ALL&categoryChildCategoryId=&categoryDemo=A00&categoryMidCategoryId=&categoryRootCategoryId=ALL&period=P1D"
while True :
    htmlObject = urllib.request.urlopen(nateUrl,context=ssl_context)
    webPage = htmlObject.read()
    bsObject = bs4.BeautifulSoup(webPage, 'html.parser')
    tag_list = bsObject.findAll('li', {'class': 'imageProduct_item__KZB_F'})

    print('###### 실시간 뉴스 속보 #######')
    num = 1
    for tag in tag_list :

        subject = tag.find('div', {'class': 'imageProduct_title__Wdeb1'}).text
        link = tag.find('a', {'class': 'imageProduct_link_item__1NP7w linkAnchor'})['href']
        price = tag.find('div', {'class': 'imageProduct_price__W6pU1'}).text
        imgLink = tag.find('div', {'class': 'imageProduct_thumbnail__Szi5F'})['img']
        # if imgLink != None:
        #     imgLinkUrl = imgLink.find('img')['src']
        #     imgLinkUrl = 'https:' + imgLinkUrl
        # else :
        #     imgLinkUrl = '이미지가 존재 하지 않음'
        # pressAndDate = tag.find('div', {'class': 'imageProduct_thumbnail__Szi5F'}).text
        # pressAndDate.replace('\t',' ')
        # pressAndDate.replace('\n', '')
        # pressAndDate = tag.find('span', {'class': 'medium'}).text
        # pressAndDate.replace('\t',' ')
        # pressAndDate.replace('\n', '')

        # if len(pressAndDate.split()) == 3 :
        #     press, pDate, pTime = pressAndDate.split()
        # elif len(pressAndDate.split()) == 4 :
        #     press1,press2, pDate, pTime = pressAndDate.split()
        #     press = press1+press2
        # else :
        #     continue

        print('(' , num, ')', subject, price, imgLink)
        # print('\t https:'+link, press, pDate, pTime)
        
        # print('\t https:'+link)
        num += 1

    time.sleep(60)