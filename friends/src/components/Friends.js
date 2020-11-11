import React from 'react';


class Friends extends React.Component {

    state = {
        infos: {
            id: '',
            name: '',
            age: '',
            email: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
      this.setState({
          infos: {
              ...this.state.infos,
              [e.target.name]: e.target.value
              
          }
          
      })
        console.log(this.state.infos)
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            infos: {
                ...this.state.infos,
                 [e.target.name]: e.target.value
                 
            }
        })
    }

    
    render() {
        return (
            <div>
                <h1>This is the Friend component! Add friends here!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="number"
                    name="id"
                    placeholder="employee badge"
                    value={this.id}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.name}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="number"
                    name="age"
                    placeholder="age"
                    value={this.age}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.email}
                    onChange={this.handleChange}
                    />
                    <button onChange={this.handleChange} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Friends;