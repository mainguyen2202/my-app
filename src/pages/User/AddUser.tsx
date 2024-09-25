import React, { ChangeEvent, useState } from 'react';
// import './styles/scss/style.css';
import IUserlData from '../../types/User';
import UserDataService from "../../services/UserService";
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';
import UsersForm from '../../components/AddTodo/UsersForm';

const AddUser: React.FC = () => {
  const initialUserState = {
    id: null,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
    published: false
  };


  const [user, setUser] = useState<IUserlData>(initialUserState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    var data = {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      // avatar: user.avatar,
      avatar: " user.avatar",
    };

    UserDataService.create(data)
      .then((response: any) => {
        setUser({
          id: response.data.id,
          email: response.data.email,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          avatar: response.data.avatar,
          published: response.data.published
        });
        console.log("thành công");
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };



  return (
    <div>


      <div className="container">

      <Sidebar />

        <div className="content">
         <Header/>

          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn submit-btn" onClick={newUser}>
                Add
              </button>
            </div>
          ) : (

          <UsersForm/>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddUser;