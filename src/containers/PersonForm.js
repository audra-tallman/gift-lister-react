import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions/people';

class PersonForm extends Component{
  state = {
    name: '',
    loading: false
  }

  handleOnChange = event => {
    const {value} = event.target
    this.setState({
      name:value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const person = {...this.state}
    this.props.addPerson(person)
    this.setState({
      name:'',
      loading: false
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <button type="Submit">Add Person</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addPerson })(PersonForm);
