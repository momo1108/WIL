import React, { Component } from 'react';

class Carhis extends Component {
    render() {
        return (
            <div className="container carhistorybox">
                <form action="" method="POST">
                    <input className="historyinput" type="text" placeholder="띄어쓰기 없이 차량번호를 입력하세요. (ex. 12가1234)" />
                    <input className="historysearch" type="button" value="조회하기" />
                </form>
                <div className="cardes">
                    <span className="help"
                        title="자동차는 각 차량마다 고유한 번호를 부여받아 생산되는데요, 한국에서는 “차대번호”라고 부르고 영어로는 V.I.N.(Vehicle Idenfication Number) 즉 자동차 식별번호로 불립니다.">차대번호란?</span>
                    <span className="help"
                        title="자동차를 운행하던 중 자동차 내부로 물이 들어와 시동이 꺼지거나, 주차 중 엔진 등에 물이 들어가 운행이 불가능하게 되어 자동차에 손해가 발생한 경우입니다(자동차보험 자기차량손해담보에 가입한 경우에만 제공 가능)">무료침수사고조회</span>
                    <span className="help" title="회원들의 의견을 볼 수 있습니다.">무료폐차사고조회</span>
                    <span className="help" title="회원들의 의견을 볼 수 있습니다.">카히스토리</span><br /><br /><br />
                    <span className="warning">모든 서비스는 회원가입 후 사용 가능합니다.</span>
                </div>
            </div>
        )
    }
}

export default Carhis;