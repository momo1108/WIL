import React, {Component} from 'react';
import './TodoList.css'
class TodoBox extends Component {
    constructor(props){
        super(props);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTasks = (item)=>{
        return <li key={item.key} onClick={()=>this.delete(item.key)}>{item.text}</li>
    }

    render(){
        var todoEntries =this.props.items;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className='theList'>
                {listItems}
            </ul>
        );
    }
};

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            items: []
        };
    }

    additem = (evt) => {
        var itembox = this.state.items;
        if(this.iteminput.value !== ''){
            itembox.unshift({
                text: this.iteminput.value,
                key: Date.now()
            });
            this.setState({
                items: itembox
            });

            this.iteminput.value='';
        };
        console.log(this.state.items);
        evt.preventDefault();
    }
    deleteItem = (key) => {
        var filteredItems = this.state.items.filter((item)=>{
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className='todoListMain'>
                <div className='header'>
                    <form onSubmit={this.additem}>
                        <input placeholder='enter task' ref={(a)=>this.iteminput = a}>

                        </input>
                        <button type='submit'>add</button>
                    </form>
                </div>
                <TodoBox items={this.state.items} delete={this.deleteItem} />
            </div>
        );
    }
}

export default TodoList;