
import React from 'react';

export class MyComponent extends React.Component {
    state = {
        name: "nghĩa",
        age: 12
    }
    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = (event) => {
        console.log(event)
        alert(this.state.name)
    }
    render() {

        return (
            <React.Fragment>
                <input type='text' value={this.state.name} onChange={(event) => { this.handleOnChange(event) }} />
                <div>hello my component {this.state.name}</div>
                <div>tuổi : {this.state.age}</div>
                <div>
                    <button onClick={(event) => this.handleClickButton(event)}>click me</button>
                </div>
            </React.Fragment>
        )

    }
}