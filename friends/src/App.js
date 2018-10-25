import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
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
  componentDidMount() {
    this.props.fetchFriends()
  }

  render() {
    const { friends, saveFriend, updateFriend, deleteFriend } = this.props

    return (
      <Fragment>
        <FormWrapper>
          <Form saveFriend={saveFriend} />
        </FormWrapper>
        <CardsWrapper>
          {friends.length &&
            friends.map((friend, i) => (
              <Card
                key={i}
                {...friend}
                updateFriend={updateFriend}
                deleteFriend={deleteFriend}
              />
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
