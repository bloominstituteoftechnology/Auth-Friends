import React from 'react'

export const FriendsForm = () => {
    return (
        <div className="form">
            <form>
                <div>
                    <label htmlFor="userName">Username</label>
                    <input
                        name="userName"    
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                    />
                </div>
                <button>Sign On</button>
            </form>
        </div>
    )
        
}

export default FriendsForm