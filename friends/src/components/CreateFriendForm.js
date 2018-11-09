import React from 'react'

class CreateFriendForm extends React.Component {
    // constructor(){
    //     super();
    // }

    render(){
        return (
            <div>
                <h3>Create Friend Form</h3>
                <form>
                    <input placeholder="input name" />
                    <input placeholder="input age" />
                    <input placeholder="input email" />
                </form>
                <button>Submit</button>
            </div>
        )
    }
}

export default CreateFriendForm