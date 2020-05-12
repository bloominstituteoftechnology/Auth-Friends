import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <div>
      <h1>Login In</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Enter username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          ref={register}
        />
        <label htmlFor="password">Enter password</label>
        <input name="password" placeholder="password" ref={register} />

        <input type="submit" />
      </form>
    </div>
  )
}

export default LoginForm
