import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name:'기본이름'
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    /*
    constructor(props){
        super(props);
    }
    */
    state = {
        number : 119
    }

    render() {
        return (
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>제 나이는 {this.props.age} 입니다.</p>
                <p>숫자는 {this.state.number}!!</p>

                <button onClick={()=>{
                    this.setState({
                        number: this.state.number+1
                    })
                }}>더하기</button>
            </div>
        );
    }
}

export default MyComponent;