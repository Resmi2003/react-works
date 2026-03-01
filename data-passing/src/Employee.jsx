import React, { useRef, useState } from 'react'

function Employee() {

    const employee=[
        {empId:100,empName:"Luke",empDesg:"developer",empSal:50000},
        {empId:101,empName:"Viz",empDesg:"tester",empSal:40000},
        {empId:102,empName:"Elisa",empDesg:"HR",empSal:45000},
        {empId:103,empName:"Liasha",empDesg:"developer",empSal:50000},
    ]

    const[name,setName]=useState("")
    console.log(name);      // so the name we enter in input box will show in console.

    const nameRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()  // nammal kodkunna event mathram nadakkan vendit, athinu munp avde nthelum event nadakkindenkil athine preventiyan vendit. this come when form tag is used.
        console.log(nameRef.current.value);
        alert("Username:" + nameRef.current.value)
    }
    


  return (
    <div>

        {/* Uncontrolled */}

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter ur username' ref={nameRef} />
            <button type='submit'>Submit</button>
        </form>








  {/* controlled */}
  <input type="text" placeholder='enter your username' onChange={e=>setName(e.target.value)} />

  {/* Conditional rendering */}
  {name?<h1>Username:{name}</h1>:<p>Please Provide Username</p>}   
{/*  ie, in running page, if we put value in input box,then username: resmi will appear. otherwise, it appears as please provide username.  */}










        {
            employee.map(item=>(
                <div>
                    <p>Employee Id:{item.empId}</p>
                    <p>Employee Name:{item.empName}</p>
                    <p>Employee Designation:{item.empDesg}</p>
                    <p>Employee salary:{item.empSal}</p>
                    <hr />
                </div>
            ))
        }
      
    </div>
  )
}

export default Employee
