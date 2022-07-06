import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <Link to="/register" > Kayıt ol</Link>
    <Link to="/login" > Giriş yap</Link>
    </div>
  )
}
