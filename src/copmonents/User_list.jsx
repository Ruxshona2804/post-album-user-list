import React from 'react'
import { Fragment, useEffect, useState } from 'react'
import Loading from './Loading'
import axios from 'axios'

const User_list = () => {

  const [users, setUsers] = useState([])
  const [is_loading, setIsLoading] = useState(true)
  const [is_error, setError] = useState(false)


  const GetUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res?.data);
        if (res?.status == 200) {
          setUsers(res?.data)

        }
      })
      .catch((error) => {
        console.log(error.massage);
        setError(true)
      })
      .finally(() => {
        console.log("res qaytdi");
        setIsLoading(false)
      })
  }
  useEffect(() => {
    GetUsers()
  }, [])

  if (is_loading) {
    return <Loading />
  }

  if (is_error) {
    return <h1 className="text-center text-red-500 text-xl">Ошибка при загрузке данных.</h1>;
  }

  
  return (
    <div className="UserList p-6 bg-gray-100 rounded-lg shadow-md">
      <Fragment>
      <h1 className='text-3xl font-bold text-center text-gray-800  m-6'>Users to do list</h1>
        <ul className="space-y-3">
          {users?.map((user) => {

            return (
              <li key={user?.id} className="bg-white p-4 rounded-lg shadow flex items-center">
                <span className="text-lg font-semibold text-gray-800">{user?.name}</span>
              </li>
            );
          })}
        </ul>
      </Fragment>
    </div>
  );
}

export default User_list