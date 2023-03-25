import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    userName: "",
    email: "",
    password: "",
  });
  const [data,setData]=useState([])
  const { fname, lname, userName, email, password } = user;

  const submit = (e) => {
    e.preventDefault(); 
  data.push(user)
  console.log(data);
document.getElementById("fname1").innerHTML=user.fname
document.getElementById("lname1").innerHTML=user.lname
document.getElementById("username1").innerHTML=user.userName
document.getElementById("email1").innerHTML=user.email
document.getElementById("password1").innerHTML=user.password
  // console.log(user);
  };
  const data1 = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  };
  return (
    <div>
      <div className="container">
        <p className="h2 text-center">Form</p>
        <form onSubmit={submit}>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-3">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Frist name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={data1}
                  value={fname}
                  name="fname"
                  placeholder="fname"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={data1}
                  value={lname}
                  name="lname"
                  placeholder="lname"
                />
              </div>
            </div>
          </div>
          <div className="row d-flex flex-column justify-content-center">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  User name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={data1}
                  value={userName}
                  name="userName"
                  placeholder="userName"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={data1}
                  value={email}
                  name="email"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={data1}
                  value={password}
                  name="password"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="col text-center">
              <button className="btn btn-primary ps-3 pe-3">Submit</button>
            </div>
          </div>
        </form>
<table className="m-3">
  <tbody>
  <tr  className="">
    <th className="border p-2" >fname</th>
    <th className="border p-2">lname</th>
    <th className=" border p-2">username</th>
    <th className=" border p-2">email</th>
    <th className=" border p-2">password</th>
  </tr>
  <tr className="border">
    <td id="fname1" className="border p-2"></td>
    <td id="lname1" className="border p-2"></td>
    <td id="username1" className="border p-2"></td>
    <td id="email1" className="border p-2"></td>
    <td id="password1" className="border p-2"></td>
  </tr>
  </tbody>
</table>
      </div>
    </div>
  );
};

export default Form;
