import React, { Component } from 'react';

class Carinfo extends Component {
    render() {
        return (
            <div className="container carinfobox">
                <form action="/cinfo" method="POST">
                    <input className="infoinput" type="text" name="modelsearch" placeholder="보고싶은 차종을 입력하세요. (ex. 2019 벤츠 S 클래스)" />
                    <input className="infosearch" type="submit" value="조회하기" />
                </form>
                <div className="cardes">
                    <span className="help" title="출시가와 주요제원, 엔진, 성능, 치수, 섀시 등을 알 수 있습니다.">제원/가격</span>
                    <span className="help" title="차의 사진은 미리 볼 수 있습니다.">이미지</span>
                    <span className="help" title="회원들의 의견을 볼 수 있습니다.">자동차 토크</span><br /><br /><br />
                    <span className="warning">모든 서비스는 회원가입 후 사용 가능합니다.</span>
                </div>
            </div>
        )
    }
}

export default Carinfo;