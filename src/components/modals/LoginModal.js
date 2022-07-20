
import React from 'react'
import LoginForm from './LoginForm'

export default function LoginModal() {

  const handleSubmit = (e,email,password) =>{
    e.preventDefault()
  }
  return (
    <LoginForm handleSubmit={handleSubmit}/>
  )
}
