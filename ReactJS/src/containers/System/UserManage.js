import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getUserApi } from '../../services/userService'
import { Fragment } from 'react';
import ModalUser from './ModalUser';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [''],
            isOpenModalUser: false,
        }
    }
    async componentDidMount() {
        let response = await getUserApi('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }
    toggleUserModel = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    createNewUser = () => {
        alert('call me!!');
    }
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModel}
                    createNewUser={this.createNewUser}
                />
                <div className='title'>
                    List Users
                </div>
                <div className='mx-3'>
                    <button
                        className='btn btn-primary px-2'
                        onClick={() => this.handleAddNewUser()}
                    >
                        + Add new user
                    </button>
                </div>
                <div className='user-table mt-4 mx-3'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Address</th>
                                <th>Phonenumber</th>
                                <th>Sex</th>
                                <th>Actions</th>
                            </tr>
                            {
                                arrUsers && arrUsers.map((user, index) => {
                                    return (
                                        <tr key={user.id + 1}>
                                            <td key={user.id}>{user.id}</td>
                                            <td key={user.email}>{user.email}</td>
                                            <td key={user.firstName}>{user.firstName}</td>
                                            <td key={user.lastName}>{user.lastName}</td>
                                            <td key={user.address}>{user.address}</td>
                                            <td key={user.phoneNumber}>{user.phoneNumber}</td>
                                            <td key={user.gender ? 'Male' : 'Female'}>{user.gender ? 'Male' : 'Female'}</td>
                                            <td>
                                                <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                                <button className='btn-delete'><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
