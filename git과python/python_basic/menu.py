# const _ = require('lodash');
import random

# const foods = ['밥', '장어', '타코', '치킨'];
foods = ['밥', '장어', '타코', '치킨']

# console.log(_.sample(foods));
print(random.choice(foods))

matzip = {
    '백운봉 막국수': '이베리코 돼지고기',
    '고갯마루': '닭도리탕',
    '대우식당': '부대찌개',
    '타코벨': '타코'
}

# matzip.고갯마루 (X)
print(matzip['고갯마루'])