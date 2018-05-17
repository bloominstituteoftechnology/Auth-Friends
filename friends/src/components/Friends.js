import React from 'react';
import { connect } from 'react-redux';

const Friends = (props) => {
    return (
        <div>
            {( props.friends.map(obj => {
                return <FriendSection
                    key={obj.id}
                    {...obj}
                />
            })
        )
    }
        </div>
    );
}

class FriendDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            age: '',
            email: ''
        };
    }

    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
}

render() {
    const { id, name, age, email } = this.props;
    const inputField = props => <input
        name={props}
        type='text'
        value={this.state.props}
        onChange={e => this.onChangeHandler(e)}
    />;

    return (
        
    )
}