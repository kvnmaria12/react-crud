import { useState } from 'react';

const App2 = () => {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const addData = () => {
    const usrData = {
      name,
      email,
    };
    console.log(usrData);
    setUsers((currUser) => [...currUser, usrData]);
    setName('');
    setEmail('');
  };

  console.log(users);

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Enter your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type='email'
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={addData}>Add Details</button>
    </div>
  );
};

export default App2;
