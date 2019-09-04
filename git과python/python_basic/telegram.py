import requests
from decouple import config
# chat_id = config('CHAT_ID')
text = ''

# params = {'chat_id': chat_id, 'text': text}
base_url = 'https://api.telegram.org/bot'
token = config('TOKEN')
# print(token)
url = f'{base_url}{token}/getUpdates'
res = requests.get(url)
data = res.json()['result']
# for i in range(len(data)):
#     print(i)
#     print(f'https://api.telegram.org/bot{token}/sendMessage')
#     idnum = data[i]['message']['from']['id']
#     # params = {'chat_id': idnum, 'text': f'{i+1}번째 손님이시군요!'}
#     requests.get(f'{base_url}{token}/sendMessage?chat_id={idnum}&text={i+1}번째 손님이세요')
# for i in range(1,101):
#     requests.get(url, params=params)
innumarr = []
for i in range(len(data)):
    innumarr.append(data[i]['message']['from']['id'])
arr = set(innumarr)
print(f'집합 : {arr}')
for i in arr:
    requests.get(f'{base_url}{token}/sendMessage?chat_id={i}&text=안녕하세요손님')