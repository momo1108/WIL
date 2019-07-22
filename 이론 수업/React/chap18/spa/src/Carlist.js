import React,{Component} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Car from './Car'
import './Carlist.css';

class Carlist extends Component {
    constructor(props){
        super(props)

        this.state = {
            carlist: []
        }
    }
    componentDidMount(){
        // axios({
        //     // 외부서버의 url도 내부 서버에서 실행하는 것처럼 간단하게 하고싶다.
        //     // 이럴 때 proxy를 설정해준다. 모듈을 설정해주고 사용하는데 두가지 방법이있다.
        //     // 1. 소스에 설정해주기 
        //     // 2. 설정 파일을 만들어주기(이 경우 미들웨어를 사용하지 않으므로 모듈이 내부적으로 setupProxy.js파일을
        //     // 찾는다. 따라서 서버 경로에 setupProxy.js 파일을 만들어주자.).
        //     // url: 'http://localhost:3002/api/carlist',
        //     url: '/api/carlist',
        //     method: 'get'
        // })
        axios.get('/api/carlist')
            .then(res=>{
                console.log('Response : ',res);
                // let arr = [1,2,3,4,5];
                // let newArr = arr.map(num=>num*2);
                let newList = res.data.map((c,index)=>{
                    return (
                        <Car key={index} carinfo={c} />
                    );
                })
                this.setState({
                    carlist: newList
                })
            })
            .catch(err=>{
                console.log('Error : ',err);
            })
    }

    render(){
        return (
            <div>
                <h1>차량 정보</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>모델</th>
                            <th>브랜드</th>
                            <th>가격</th>
                            <th>연비</th>
                            <th>연료</th>
                            <th>출력</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.carlist}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Carlist;
