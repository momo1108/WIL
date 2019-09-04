import React from 'react';
import axios from 'axios';
import './Todoapp.css';

function App() {
  let SubmitClicked = (e) => {
    document.getElementsByClassName('fa-chevron-down')[0].classList.toggle('IconClicked');
    let text = document.getElementsByClassName('ToggleText')[0].innerText;
    if(text === '접기') document.getElementsByClassName('ToggleText')[0].innerText = '펴기'
    else document.getElementsByClassName('ToggleText')[0].innerText = '접기';
  }
  axios.get('https://killsanghyuck.github.io/prography_5th_front/todoDummy.json')
    .then((res)=>{
      console.log(res.data);
    })
  return (
    <div className="TodoApp">
      <div className="TodoHead">
        <h1>- 투두 리스트 -</h1>
      </div>
      <div className="TodoBody">
        <div className="SubmitTodo">
          <span>뭘 해야할까?</span>
          <input type="text" />
          <button>등록!</button>
        </div>
        <div className="Toggler">
          <span>
            해야 할 일
          </span>
          <button className="SubmitBtn" onClick={()=>SubmitClicked()}>
            <span className="ToggleText">접기</span><i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
