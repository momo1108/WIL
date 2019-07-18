import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Car.css';

class Car extends Component {
    constructor(props){
        super(props)

        this.state = {
            carlist: []
        }
    }

    // // Callback Hell을 막기위해 나온 promise
    // // 성공하면 resolve 실행, 실패하면 reject 실행
    // let promise1 = new Promise((resolve,reject)=>{
    //     if(condition){
    //         resolve('success');
    //     } else{
    //         reject('fail');
    //     }
    // });
    // // resolve가 호출이되면 .then 이하가 실행됨, reject가 호출이되면 .catch 이하가 실행됨
    // promise1
    //     .then((message)=>{
    //         console.log(message);
    //         asyncFunc(2);
    //     })
    //     .then((message)=>{
    //         asyncFunc(2);
    //     })
    //     .catch((error)=>{
    //         console.error(error);
    //     })

    // componentDidMount() {
    //     fetch('http://70.12.50.160:5001/api/carlist')
    //         .then(res => {
    //             console.log("success");
    //             console.log(res);
    //             // json으로 변환시켜주는 json함수 실행
    //             return res.json();
    //         })
    //             .then(thisisjsondata=>{
    //                 console.log(thisisjsondata);
    //                 this.setState({
    //                     carNumber: thisisjsondata[0].carNumber,
    //                     owner: thisisjsondata[0].owner
    //                 })
    //             })
    //         .catch(error=>{
    //             console.log("fail");
    //             console.error(error);
    //         })
    // }

    // fetch 함수보다 더 자주쓰는 확장 모듈이 있다.
    // JQuery와 비슷하다.
    componentDidMount(){
        axios({
            url: 'http://70.12.50.160:5001/api/carlist',
            method: 'get'
        })
            .then(res=>{
                console.log('Response : ',res);
                // let arr = [1,2,3,4,5];
                // let newArr = arr.map(num=>num*2);
                let newList = res.data.map(c=>{
                    return (
                        <tr key={c.carNumber}>
                            <td>{c.carNumber}</td>
                            <td>{c.owner}</td>
                            <td>{c.model}</td>
                            <td>{c.company}</td>
                            <td>{c.numOfAccident}</td>
                            <td>{c.numOfOwnerChange}</td>
                        </tr>
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
                this.state.carlist
        )
    }
}

export default Car;
