import React, {useState} from 'react'

interface JPHUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
}

const JphComponent = () => {

  const [userList, setUserList] = useState<JPHUser[]>([])

  const onClickFunc = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUserList(data)
  }

  return (
    <div>
      <button onClick={() => onClickFunc()}>Button</button>
      {userList.map((user: JPHUser) => {
        return (
          <div key={user.id}>
            {user.name}
          </div>
        )
      })}
    </div>
  )
}

export default JphComponent;

