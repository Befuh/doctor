import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React  from 'react';
import { startUpdatePatients } from '../../actions/patients';

export class SearchForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    identifier: '',
    sex: ''
  };

  submit = event => {
    event.preventDefault();
    this.props.startUpdatePatients({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      identifier: this.state.identifier,
      sex: this.state.sex
    });
  };

  changeInputField = stateName => event => {
    event.preventDefault();
    this.setState({ [stateName]: event.target.value });
  };

  render () {
    return (
      <form onSubmit={this.submit}>
        <input
          onChange={this.changeInputField('firstName')}
        />
        <input
          onChange={this.changeInputField('lastName')}
        />
        <input
          onChange={this.changeInputField('identifier')}
        />
        <select
          onChange={this.changeInputField('sex')}
        >
          <option value='female'>Female</option>
          <option value='male'>male</option>
        </select>
        <button type='submit'>Search</button>
      </form>
    )
  }
}

SearchForm.propTypes = {
  startUpdatePatients: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  startUpdatePatients: query => dispatch(startUpdatePatients(query))
});

export default connect(undefined, mapDispatchToProps)(SearchForm);
