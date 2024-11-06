import React, { useState } from 'react'
import Test from './Test'

const App = () => {
  const [data, setData] = useState("")
  const [inputData, setInputData] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className='container'>
      {/* <h1>testing by text</h1> */}
      <p>Hello This Is Test Case </p>
     

      <hr />

      {/* <h1>testing by image</h1> */}
      <img title='nature image' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fdiscover%2Ffree-nature-images&psig=AOvVaw0KegETW51IunqdiJZzQdqb&ust=1730896000487000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjBu6ysxYkDFQAAAAAdAAAAABAE" />
      <br />
      <hr />

      {/* <h1>testing by input boxes</h1> */}
      <input type='text' placeholder='Enter Username' name='data' value={data} id='userId' onChange={(e) => setData(e.target.value)} />

      {/* <h1> describe</h1> */}
      <input type='text' placeholder=' Username' />
      <input type='text' placeholder=' Username' />
      <input type='text' placeholder=' Username' />


      {/* <h1>onchange event testing</h1> */}
      <input type='text' placeholder='userUser' name='inputData' value={data} id='userId' onChange={(e) => setInputData(e.target.value)} />


      {/* <h1>testing by button</h1> */}
      <button>Save</button>
      <button>click</button>
      <div role='dummy'>Dummy text</div>
      <hr />


      <h1>input type test by labels</h1>
      <label htmlFor='user-name1' >Name</label>
      <input type='text' id='user-name1' placeholder='name' />
      <br />
      <br />

      <label htmlFor='user-name2' >Email</label>
      <input type='text' id='user-name2' placeholder='name' />
      <br />
      <br />

      <label htmlFor='user-name3' >Address</label>
      <input type='text' id='user-name3' placeholder='name' />

      <hr />

      <h1>checkboxes</h1>
      <label htmlFor='skill1' >Skills</label>
      <input type='checkbox' id='skill1' defaultChecked={true} checked />

      <label htmlFor='skill2' >Skills</label>
      <input type='checkbox' id='skill2' defaultChecked={true} checked />
      <hr />

      <h1>controlld components (Form)</h1>

      <form>
        <input type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
        <br></br>
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <button>save</button>
      </form>
      <br />


      <Test />
    </div>
  )
}

export default App