import React from 'react'
import { Fragment, useEffect, useState } from 'react'
import Loading from './Loading'
import axios from 'axios'

const Post = () => {
  const [user, setUser] = useState([])
  const [is_loading, setIsLoading] = useState(true)
  const [is_error, setError] = useState(false)
  const GetBooks = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      console.log(res);
      if (res?.status == 200) {
        setUser(res?.data);
      }
      })
      .catch((error)=>{
        console.log(error.massage);  
        setError(true)
      })
      .finally(()=>{
        console.log("res qaytdi");
        setIsLoading(false)
        
      })
  }
useEffect(()=>{
  GetBooks()
},[])

if (is_loading) {
  return <Loading />
}
if (is_error) {
  return <h1 className="text-center text-red-500 text-xl">Ошибка при загрузке данных.</h1>;
}

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto">
      <Fragment>
        <h1 className='text-3xl font-bold text-center text-gray-800  m-6'>Posts to do list</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {user?.map((user) => {
            return (
              <li
                key={user?.id}
                className="bg-white hover:bg-blue-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-lg block font-semibold text-gray-800">{user?.id}</span>
                <span className="text-lg font-semibold text-gray-800">{user?.title}</span>
              </li>
            );
          })}
        </ul>
      </Fragment>
    </div>
  )
}


export default Post