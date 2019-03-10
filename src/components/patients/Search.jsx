import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { startUpdateList } from '../../actions/patients';

export class Search extends React.Component {
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
        <div className='form-row align-items-end'>
          <div className="col-auto">
            <label htmlFor='firstName'>First name</label>
            <input
              type='text'
              id='firstName'
              className='form-control form-control-sm'
              placeholder='Jane'
              onChange={this.changeInputField('firstName')}
            />
          </div>
          <div className="col-auto">
            <label htmlFor='lastName'>Last name</label>
            <input
              type='text'
              id='lastName'
              className='form-control form-control-sm'
              placeholder='Doe'
              onChange={this.changeInputField('lastName')}
            />
          </div>
          <div className="col-auto">
            <label htmlFor='identifier'>Identifier</label>
            <input
              type='text'
              id='identifier'
              className='form-control form-control-sm'
              placeholder='kasdf8903342'
              onChange={this.changeInputField('identifier')}
            />
          </div>
          <div className="col-auto">
            <label htmlFor='sex'>Sex</label>
            <select
              id='sex'
              className='form-control form-control-sm'
              onChange={this.changeInputField('sex')}
            >
              <option value='female'>Female</option>
              <option value='male'>male</option>
            </select>
          </div>
          <div className='col-auto'>
            <button type='submit' className='form-control form-control-sm btn btn-sm btn-primary'>
              <FaSearch/> Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}

Search.propTypes = {
  startUpdatePatients: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  startUpdatePatients: query => dispatch(startUpdateList(query))
});

export default connect(undefined, mapDispatchToProps)(Search);
