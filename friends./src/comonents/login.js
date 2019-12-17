import React from 'react'

function Login (){
    return(
        <form>
            <input type='text' name='login' placeholder='Login' />
            <input type='password' name='password' placeholder='Password' />
            <button type='submit'/>
        </form>
    )
}