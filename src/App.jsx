import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const [buttonState, setButtonState] = useState('add');

  const [userInfo, setUserInfo] = useState({
    id: uuidv4(),
    usrName: '',
    email: '',
    age: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((userInfo) => {
      return {
        ...userInfo,
        [name]: value,
      };
    });
  };

  const addData = () => {
    setUsers((currUsers) => [...currUsers, userInfo]);
    setUserInfo({
      id: uuidv4(),
      usrName: '',
      email: '',
      age: '',
      phone: '',
    });
  };

  const deleteData = (id) => {
    const shouldDetele = confirm('Are you sure');
    if (shouldDetele) {
      const filteredData = users.filter((user) => user.id !== id);
      setUsers(filteredData);
    }
  };

  const startEditing = (user) => {
    setUserInfo(user);
    setButtonState('edit');
  };

  const cancelEditing = () => {
    setUserInfo({
      id: uuidv4(),
      usrName: '',
      email: '',
      age: '',
      phone: '',
    });
    setButtonState('add');
  };

  const updateData = (updatedInfo) => {
    setUsers((currUser) => {
      return currUser.map((user) => {
        if (user.id === updatedInfo.id) {
          return updatedInfo;
        }
        return user;
      });
    });
    setUserInfo({
      id: uuidv4(),
      usrName: '',
      email: '',
      age: '',
      phone: '',
    });
    setButtonState('add');
  };

  return (
    <div className='container'>
      <div className='form'>
        <input
          type='text'
          placeholder='Enter your Name'
          name='usrName'
          value={userInfo.usrName}
          onChange={handleChange}
        />
        <br />
        <input
          type='email'
          placeholder='Enter your Email'
          name='email'
          value={userInfo.email}
          onChange={handleChange}
        />
        <br />
        <input
          type='number'
          placeholder='Enter your Age'
          name='age'
          value={userInfo.age}
          onChange={handleChange}
        />
        <br />
        <input
          type='number'
          placeholder='Enter your Number'
          name='phone'
          value={userInfo.phone}
          onChange={handleChange}
        />
        <br />
        {buttonState == 'add' ? (
          <button onClick={addData}>Add</button>
        ) : (
          <div className='edit-cancel-btn'>
            <button onClick={() => updateData(userInfo)}>Update</button>
            <button onClick={cancelEditing}>Cancel</button>
          </div>
        )}
      </div>
      <div className='dataTable'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.usrName}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={() => startEditing(user)}>Edit</button>
                    <button onClick={() => deleteData(user.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
