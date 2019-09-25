import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPerson, getPeople, addGift } from '../actions/people';
import { getGifts } from '../actions/gifts';

class GiftForm extends Component {

  state = {
    description: '',
    loading: false
  }

  componentDidMount() {
    this.props.getPeople();
    this.props.getGifts();
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const gift = {...this.state}
    this.props.addGift({
      description: gift.description,
      person_id: this.props.person.id,
      given: false
    }, this.props.person.id)
    this.setState({
      description: '',
      loading: false
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}><h3>Add a Gift Idea</h3><br/>
          Description: <input
          name="description"
          type="text"
          value={this.state.description}
          onChange={this.handleOnChange}/><br/>
          <button type='submit'> Add </button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log("I am PersonGifts state", state)
  return{
    person: state.selectedPersonReducer ? state.selectedPersonReducer.person : {},
    gifts: state.selectedPersonReducer ? state.selectedPersonReducer.person.gifts : []
  }
}
export default connect (mapStateToProps, { getPeople, getGifts, selectPerson, addGift })(GiftForm);
