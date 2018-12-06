import React from 'react';

class FriendsForm extends React.Component {
    constructor(){
        super();
        this.state = {
            nameText: '',
            ageText: '',
            emailText: '',
        }
    }

    handlesChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
        return (
            <div>
                <form>
                    <input 
                        type='text'
                         name='nameText' 
                         value={this.state.nameText}
                         placeholder={`Friend's name`}
                         onChange={this.handlesChange}
                    />
                    <input 
                        type='number'
                         name='ageText' 
                         value={this.state.ageText}
                         placeholder={`Age`}
                         onChange={this.handlesChange}
                    />
                    <input 
                        type='email'
                         name='emailText' 
                         value={this.state.emailText}
                         placeholder={`E-mail`}
                         onChange={this.handlesChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        );
    }
}

export default FriendsForm;