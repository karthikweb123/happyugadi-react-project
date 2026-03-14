import { useState } from 'react'

export default function UgadiForm(){

  const [name, setName] = useState("")

  function handleChange(e){
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    alert("Happy Ugadi " + name + " 🎉")
  }

  return(
    <form onSubmit={handleSubmit}>

      <label>
        Enter your name:
      </label>

      <br/><br/>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Your name"
      />

      <br/><br/>

      <button type="submit">Submit</button>

    </form>
  )
}