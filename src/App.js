import React, { useState } from 'react'
import Test from './Test'

const App = () => {
  const [data, setData] = useState("")
  return (
    <div>
      <h1>testing by text</h1>
      <p>Hello This Is Test Case </p>
      <hr />
      <h1>testing bu image</h1>
      <img title='nature image' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fdiscover%2Ffree-nature-images&psig=AOvVaw0KegETW51IunqdiJZzQdqb&ust=1730896000487000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjBu6ysxYkDFQAAAAAdAAAAABAE" />
      <br />
      <hr />
      <h1>testing bu input field</h1>

      <input type='text' placeholder='Enter Username' name='data' value={data} onChange={(e) => setData(e.target.value)}/>

      <h1>testing by button</h1>
      <button>Save</button>
      <hr />

      <label htmlFor='user-name' >Username</label>
      <input type='text' id='user-name' />

      <br />
      <br />

      <Test />
    </div>
  )
}

export default App