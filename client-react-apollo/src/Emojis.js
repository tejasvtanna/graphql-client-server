import React from 'react'
import * as q from './queries'
import { useQuery } from '@apollo/react-hooks'

const Emojis = () => {
  const { data, loading, error } = useQuery(q.GET_EMOJIS)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Something went wrong</div>

  console.log(`data-emoji`, data)

  return (
    <div>
      {data.emojis.map((emoji) => (
        // <img style={{ height: '30px', width: '30px' }} src={emoji.url} alt={emoji.url} />
        <img
          style={imgStyle}
          src={emoji.url}
          alt={emoji.url}
          onClick={() => {
            window.open(emoji.url)
          }}
        />
      ))}
    </div>
  )
}

const imgStyle = {
  cursor: 'pointer',
  height: '30px',
  width: '30px',
}

export default Emojis
