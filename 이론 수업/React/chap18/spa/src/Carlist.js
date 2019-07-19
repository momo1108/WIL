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
        axios({
            url: 'http://localhost:3002/api/carlist',
            method: 'get'
        })
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
