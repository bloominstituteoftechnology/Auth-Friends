import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteFriend} from '../actions/Friends';
import {Table} from 'react-bootstrap';
import AlertSuccess from './SuccessAlert';
import styled  from 'styled-components';

const FriendsContainer = styled.div`

    .create-btn {
        text-align:left;
        padding:5px 0px 5px 0px;
    }
    
`;

class Friends extends Component {

    handleDelete = (id) => {

        this.props.deleteFriend(id);
    };

    render() {
        return (
            <FriendsContainer>
                {console.log('habla',this.props)}
                {this.props.visible ? <AlertSuccess/> : ''}

                <div className="create-btn">
                    <button className={"btn btn-primary btn-sm"} onClick={() => this.handleCreateNew()}> Create New </button>
                </div>

                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.friends.map((friend, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{friend.name}</td>
                                <td>{friend.age}</td>
                                <td>{friend.email}</td>
                                <td>

                                    <button className={"btn btn-success btn-sm"} onClick={() => this.handleUpdate(index)}> Update </button>
                                    &nbsp; &nbsp;
                                    <button className={"btn btn-danger btn-sm"} onClick={() => this.handleDelete(index)}> Delete </button>

                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </FriendsContainer>
        );
    }
};

const mapStateToProps = state => {
    const {friends_reducer} = state;
    console.log('State from Friends Component', state);
    return {
        error: friends_reducer.error,
        deleteF: friends_reducer.deleteFriend,
        visible: friends_reducer.visible,
    }
};

export default connect(mapStateToProps, {deleteFriend})(Friends);
