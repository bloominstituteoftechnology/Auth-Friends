import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Form from './components/Form'
import Card from './components/Card'
import { FormWrapper, CardsWrapper } from './styles/Global'
import { fetchFriends, saveFriend, updateFriend, deleteFriend } from './actions'

const mapStateToProps = ({
  fetchingFriends,
  savingFriends,
  updatingFriend,
  deletingFriend,
  friends
}) => ({
  fetchingFriends,
  savingFriends,
  updatingFriend,
  deletingFriend,
  friends
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

    this.props.fetchFriends()
  }

  updateFriends = friends => {
    this.setState({ friends })
  }

  render() {
    const { friends } = this.state
    const { updateFriends } = this
    const { saveFriend } = this.props

    return (
      <Fragment>
        <FormWrapper>
          <Form saveFriend={saveFriend} updateFriends={updateFriends} /* */ />
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
