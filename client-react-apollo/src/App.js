import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import './App.css'
import * as q from './queries'
import Emojis from './Emojis'
import User from './User'

function App() {
  const { loading, error, data } = useQuery(q.GET_USERS)

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <main className="App">
      <div style={{ width: '45%' }}>
        <h1>Github | Users</h1>
        {data.users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
      <div style={{ borderLeft: '1px solid red', width: '10px' }}></div>
      <div style={{ width: '45%' }}>
        <h1>Github | Emojis</h1>
        <Emojis />
      </div>
    </main>
  )
}

export default App
