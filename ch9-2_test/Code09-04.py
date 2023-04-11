import bs4

# 거의 고정
webPage = open('HTML/Sample02.html', 'rt', encoding='utf-8').read()
bsObject = bs4.BeautifulSoup(webPage, 'html.parser')

tag_div = bsObject.find('div').text
print(tag_div)