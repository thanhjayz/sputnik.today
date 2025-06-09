import React from 'react'

export default function youtubeForm() {
  return (
    <div>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name"/>

            <label htmlFor="email">email</label>
            <input type="text" id="email" name="email"/>

            <label htmlFor="channel">channel</label>
            <input type="text" id="channel" name="channel"/>

            <button>submit</button>
        </form>
      
    </div>
  )
}