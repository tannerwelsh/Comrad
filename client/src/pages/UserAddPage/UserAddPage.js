import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userAdd } from '../../actions';
import validate from '../../utils/validation';

import Checkbox from '../../components/Checkbox';
import Form from '../../components/Form';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Select from '../../components/Select';

class UserAddPage extends Component {
  state = {
    email: '',
    password: 'TempPassword',
    first_name: '',
    last_name: '',
    on_air_name: '',
    role: '',
    status: '',
    can_delete: false,
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleInputBlur = e => {
    validate.input(e.target);
  };

  handleCheckBox = e => {
    const { name } = e.target;

    this.setState(prevState => ({
      [name]: !prevState[name],
    }));
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const valid = validate.submit();

    if (valid) {
      this.props.userAdd(this.state, () => {
        this.props.history.push('/user');
      });
    }
  };

  render() {
    const roleOptions = ['DJ', 'Admin'];
    const statusOpions = ['Active', 'Inactive'];

    return (
      <Form handleFormSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Label text="Email" />
          <Input
            name="email"
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}
            placeholder="Email"
            type="text"
            value={this.state.email}
          />
        </FormGroup>

        <FormGroup>
          <Label text="First Name" />
          <Input
            name="first_name"
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}
            placeholder="First Name"
            type="text"
            value={this.state.first_name}
          />
        </FormGroup>

        <FormGroup>
          <Label text="Last Name" />
          <Input
            name="last_name"
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}
            placeholder="Last Name"
            type="text"
            value={this.state.last_name}
          />
        </FormGroup>

        <FormGroup>
          <Label text="On Air Name" />
          <Input
            name="on_air_name"
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}
            placeholder="On Air Name"
            type="text"
            value={this.state.on_air_name}
          />
        </FormGroup>

        <FormGroup>
          <Label text="Role" />
          <Select
            name="role"
            onChange={this.handleInputChange}
            selectOptions={roleOptions}
            placeholder="Role"
            type="text"
            value={this.state.role}
          />
        </FormGroup>

        <FormGroup>
          <Label text="Status" />
          <Select
            name="status"
            onChange={this.handleInputChange}
            selectOptions={statusOpions}
            placeholder="Status"
            type="text"
            value={this.state.status}
          />
        </FormGroup>

        <FormGroup>
          <Label text="Can Delete" />
          <Checkbox
            name="can_delete"
            onClick={this.handleCheckBox}
            type="checkbox"
            value={this.state.can_delete}
          />
        </FormGroup>

        <FormGroup>
          <button type="submit">Submit</button>
          <Link to="/user">Go Back</Link>
        </FormGroup>
      </Form>
    );
  }
}

export default connect(
  null,
  { userAdd },
)(UserAddPage);
