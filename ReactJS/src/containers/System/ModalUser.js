import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserManage.scss';

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            passWord: "",
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
            gender: "",
            roleId: ""
        }
    }
    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
    checkValidateDataInput = () => {
        let isValid = true;
        let arrInput = ['email', 'passWord', 'firstName', 'lastName', 'address', 'phoneNumber', 'gender', 'roleId']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleOnchangeInput = (e, id) => {
        let copyState = { ...this.state };
        copyState[id] = e.target.value;
        this.setState({
            ...copyState
        })
    }
    handleAddNewUser = () => {
        let isValid = this.checkValidateDataInput();
        if (isValid === true) {

            this.props.createNewUser();
        }
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className={"modal-user-container"}
                size='lg'
            >
                <ModalHeader toggle={() => this.toggle()}>Create a new user</ModalHeader>
                <ModalBody>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"></link>
                    <div className="form-row">
                        <div className="col-12 mt-5">
                            <h3>Create a user</h3>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input
                                type="email" className="form-control"
                                id="inputEmail4" name="email"
                                placeholder="Email........"
                                onChange={(e) => { this.handleOnchangeInput(e, "email") }}
                                value={this.state.email}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control"
                                id="inputPassword4" name="passWord"
                                placeholder="Password........"
                                onChange={(e) => { this.handleOnchangeInput(e, "passWord") }}
                                value={this.state.passWord}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputfName">First name</label>
                            <input type="text" className="form-control"
                                id="inputfName" name="firstName"
                                placeholder="First name........"
                                onChange={(e) => { this.handleOnchangeInput(e, "firstName") }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputlName">Last name</label>
                            <input type="text" className="form-control"
                                id="inputlName" name="lastName"
                                placeholder="Last name........"
                                onChange={(e) => { this.handleOnchangeInput(e, "lastName") }}
                                value={this.state.lastName}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control"
                            id="inputAddress" name="address"
                            placeholder="Address........"
                            onChange={(e) => { this.handleOnchangeInput(e, "address") }}
                            value={this.state.address}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPhoneNumber">Phone number</label>
                            <input type="text" className="form-control"
                                id="inputPhoneNumber" name="phoneNumber"
                                onChange={(e) => { this.handleOnchangeInput(e, "phoneNumber") }}
                                value={this.state.phoneNumber}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">Sex</label>
                            <select id="inputState" name="gender"
                                className="form-control"
                                onClick={(e) => { this.handleOnchangeInput(e, "gender") }}
                            >
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputRole">Role</label>
                            <select id="inputRole" name="roleId"
                                className="form-control"
                                onClick={(e) => { this.handleOnchangeInput(e, "roleId") }}
                            >
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Patient</option>

                            </select>
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                        onClick={() => this.handleAddNewUser()}>
                        Add new
                    </Button>{' '}
                    <Button color="secondary" onClick={() => this.toggle()}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);