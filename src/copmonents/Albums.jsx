import React, { Fragment, useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";

const Albums = () => {
  const [user, setUsers] = useState([]);
  const [is_loading, setIsLoading] = useState(true);
  const [is_error, setError] = useState(false); 

  const getAlbums = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        console.log(res);
        if (res?.status === 200) {
          setUsers(res?.data);
        }
      })
      .catch((error) => {
        console.log(error.message); 
        setError(true);
      })
      .finally(() => {
        console.log("res qaytdi");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAlbums();
  }, []);

  if (is_loading) {
    return <Loading />;
  }

  if (is_error) {
    return <h1 className="text-center text-red-500 text-xl">Ошибка при загрузке данных.</h1>;
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto">
      <Fragment>
        <h1 className="text-3xl font-bold text-center text-gray-800 m-6">
          Albums to do list
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {user?.map((album) => {
            return (
              <li
                key={album?.id}
                className="bg-white hover:bg-blue-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-lg block font-semibold text-gray-800">
                  #{album?.id}
                </span>
                <span className="text-lg font-semibold text-gray-800">
                  {album?.title}
                </span>
              </li>
            );
          })}
        </ul>
      </Fragment>
    </div>
  );
};

export default Albums;