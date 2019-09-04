import random

def lotto():
    winner = [1, 15, 19, 23, 28, 42]
    bonus = [6]
    # random.sample([배열], 뽑을 개수)
    lotto = sorted(random.sample(range(1, 46), 6))

    # set(배열) → 집합(중복원소 제거, 집합 연산자)
    set(lotto)

    # python은 .length 대신 len함수가 있다.
    num = len(set(lotto) & set(winner))
    # 조건문을 사용할 때 python은  중괄호가 없기 때문에 :를 붙여주고 다음줄에 인덴팅을 해준다.
    if num==3:
        rank = "5등 당첨!"
    elif num==4:
        rank = "4등 당첨!"
    elif num==5:
        rank = "3등 당첨!"
    elif num==5 & len(set(lotto) & set(bonus))==1:
        rank = "2등 당첨!"
    elif num==6:
        rank = "1등 당첨!"
    else:
        rank = "꽝!"

    print(f'{num}개 일치! {rank}')
n=0
while n<10000:
    lotto()
    n += 1
