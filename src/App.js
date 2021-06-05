
import './App.css';
import React, { useEffect, useState } from 'react';
import data from "./data.js";
import bookData from "./bookData"

function App() {

  const { user } = data;
  const { books } = bookData;

  console.log(books)

  const [userName,setUsername] = useState("")
  const [passWord,setPassword] = useState("")
  const [loginFlag, setLoginFlag] = useState(true)
  const [searchBook,setSearchBook] = useState("")


  const loginUser = ()=>{

    if(userName == "" || passWord==""){
      alert("please fill all input data")
    }
else{

  const found = user.find((element)=>{
    return (element.username === userName && element.password === passWord)
  })
  console.log(found)

  if(found){
    setLoginFlag(false)
  }
  else{
    alert("Invalid username or password")
  }
}
}

  return (
    <>
    <div className="heading">
    <h3 >*  Library Managment System  *</h3>

    </div>
    { loginFlag ? 
    <div className="login_form">
      <h3> Log In </h3>
      <label>UsrName</label><br/>
      <input type="email" name="user" value={userName} onChange={(e)=>{setUsername(e.target.value)}} />
      <br /><br/>
      <label>password</label><br/>
      <input type="password" name="password"
      minlength="4" 
      value={passWord} onChange={(e)=>{setPassword(e.target.value)}} />
      <br/><br/>
      <button type="submit" onClick={()=>loginUser()}>Login</button>
    </div>
:
<div className="tableStyle">
  <div><h4>{userName}</h4></div>
  <div className="search">
  <input type="text" value={searchBook} onchange={(e)=>{setSearchBook(e.target.value)}}/> 
  <button type="submit">search</button>
  </div>
                <table border="1" >
                    <tbody>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>action</th>
                </tr>
                    {
                        books.map((item,i) =>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.book_name}</td>
                            <td>{item.author_name}</td>
                            <td>{item.category}</td>
                            <td>{item.borrowed_status}</td>
                        </tr>
                            )}
                            </tbody>
                </table>
                <br/> <br/>
        </div>
}
    </>
  );
}

export default App;
