import { useState } from "react"

function App() {
  let [text, setText] = useState({
    username: '',
    email: '',
    number: '',
    address: '',
    password: ''
  })
  let [nameErr, setNameErr] = useState('')
  let [emailErr, setEmailErr] = useState('')
  let [numberErr, setNumberErr] = useState('')
  let [addressErr, setAddressErr] = useState('')
  let [passErr, setPassErr] = useState('')

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const numberRegex = '^(?:\\+88|88)?(01[3-9]\\d{8})$'

  let [nameData, setNameData] = useState('')
  let [emailData, setEmailData] = useState('')
  let [numberData, setNumberData] = useState('')
  let [addressData, setAddressData] = useState('')

  let handleInput = (e) => {
    let {name, value} = e.target
    setText({...text, [name]: value})
  }

  let handleSubmit = (e) => {

    // Registration form error and data set

    e.preventDefault()     //don't relaod function

    if(!text.username){
      setNameErr('*please enter your name')
    }else{
      setNameErr('')
    }

    if(!text.email){
      setEmailErr('*please enter your email')
    }else if(!text.email.match(emailRegex)){
      setEmailErr('*email format not exit')
    }
    else{
      setEmailErr('')
    }

    if(!text.number){
      setNumberErr('*pleace enter your number')
    }else if(!text.number.match(numberRegex)){
      setNumberErr('*number not exit')
    }
    else{
      setNumberErr('')
    }

    if(!text.address){
      setAddressErr('*please enter your address')
    }else{
      setAddressErr('')
    }

    if(!text.password){
      setPassErr('*password requred')
    }else{
      setPassErr('')
    }
    
    // data transfer registration form to Bio-data

    if(text.username && text.email && text.number && text.address && text.password){

      nameData = text.username
      setNameData(nameData)
  
      emailData = text.email
      setEmailData(emailData)
  
      numberData = text.number
      setNumberData(numberData)
  
      addressData = text.address
      setAddressData(addressData)
    }

  }

  return (
    <>
      <div className="container">
        <form action="" method="">
          <div className="reg_form">
            <h1 className="heading">Registrasion form</h1>
            <input type='text' name='username' onChange={handleInput} placeholder='Name'/>
            <p className="error">{nameErr}</p>
            <input type='text' onChange={handleInput} name='email' placeholder='email'/>
            <p className="error">{emailErr}</p>
            <input type='number' onChange={handleInput} name='number' placeholder='number'/>
            <p className="error">{numberErr}</p>
            <input type="text" onChange={handleInput} name='address' placeholder="address"/>
            <p className="error">{addressErr}</p>
            <input type='password' onChange={handleInput} name='password' placeholder='password'/>
            <p className="error">{passErr}</p>
            <button onClick={handleSubmit}>submit</button>
          </div>
        </form>


        {/* Registrasion bio-data here */}

        <div className="reg_fill">
          <h1 className="bio_heading">Registration Bio-Data</h1>
          <div className="info_box">
            <h2>Username: {nameData}</h2>
            <h2>Email: {emailData}</h2>
            <h2>Number: {numberData}</h2>
            <h2>Address: {addressData}</h2>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
