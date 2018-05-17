import React from 'react';

export default class UpdateFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  render() {
    return (
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Tell us something new about your friend.</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
                type="text" 
                name="name"  
                id="name"
                value={this.state.name}
                onChange={(e) => this.handleTextChange(e)} 
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="email">E-mail</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
                type="text" 
                name="email"  
                id="email"
                value={this.state.email}
                onChange={(e) => this.handleTextChange(e)} 
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="age">Age</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
                type="text" 
                name="age"  
                id="age"
                value={this.state.age}
                onChange={(e) => this.handleTextChange(e)}  
              />
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Update Your Friend List" />
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">Go back</a>
          </div>
        </form>
      </main>
    );
  }
}