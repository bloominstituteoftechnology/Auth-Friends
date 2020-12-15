import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

class FriendsList extends React.Component {

        state = {
            friends: []
        }

        ComponentDidMount() {
            this.getData()
        }

        getData = () => {
            axiosWithAuth()
            .get(/api/friends)
            .then(res => {
                console.log('Auth data ', res)
            })
            .catch(err => {
                console.log('ERRROR: ', err)
            })
        }

        formatData = () => {
            const formattedData = []

    }

 render() {

        return(

            <div>
            
            </div>
        )
    }
}

export default FriendsList