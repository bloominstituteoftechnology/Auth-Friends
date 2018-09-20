import React from 'react';

class UpdateFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleInput = event => {
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="age"/>
                    <input type="text" placeholder="email"/>
                    <input type="submit" OnClick={console.log('submit')}/>
                </form>
            </div>
        )
    }

}

export default UpdateFriendForm; 