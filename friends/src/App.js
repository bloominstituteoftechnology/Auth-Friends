import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Form from './components/Form'
import Card from './components/Card'
import { FormWrapper, CardsWrapper } from './styles/Global'
import {
  fetchFriends,
  saveFriend,
  updateFriend,
  deleteFriend
} from './actions'

const mapStateToProps = ({
  fetchingFriends,
  friendsFetched,
  friendsSaved,
  savingFriends,
  updatingFriend,
  friendUpdated,
  deletingFriend,
  friendDeleted,
  friends,
  error
}) => ({
  fetchingFriends,
  friendsFetched,
  friendsSaved,
  savingFriends,
  updatingFriend,
  friendUpdated,
  deletingFriend,
  friendDeleted,
  friends,
  error
})

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
      .get('/api/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  updateFriends = friends => {
    this.setState({ friends })
  }

  render() {
    const { friends } = this.state
    const { updateFriends } = this

    return (
      <Fragment>
        <FormWrapper>
          <Form updateFriends={updateFriends} />
        </FormWrapper>
        <CardsWrapper>
          {friends.length &&
            friends.map((friend, i) => (
              <Card key={i} {...friend} updateFriends={updateFriends} />
            ))}
        </CardsWrapper>
      </Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    saveFriend,
    updateFriend,
    deleteFriend
  }
)(App)
