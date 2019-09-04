import requests
from pprint import pprint as pp
# json 이쁘게 보여줌
url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=874'
res = requests.get(url)
# json 자체는 문자열일 뿐이기 때문에 python의 객체인 dictionary로 바꿔줘야 한다(파싱)

# print(pp(res.json()))
data = res.json()
winner = []

# js의 push와 거의 동일
for i in range(1,7):
    # print(data[f'drwtNo{i}'])
    # JavaScript의 push 대신 append
    winner.append(data[f'drwtNo{i}'])
print(winner)