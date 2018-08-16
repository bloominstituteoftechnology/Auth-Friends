import React, {Fragment} from 'react';

export default class Friend extends React.Component {

  render() {
  return (
    <Fragment>
    <span>{this.props.friend.name}</span>
    <button> edit? </button>
    <div>
    </div>
    </Fragment>
  )
}
}