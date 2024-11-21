import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/UserReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";



const Home = () => {
  const Users = useSelector((state) => state.users);
  const [showCreate, setShowCreate] = useState(false);
  const dispatch = useDispatch();
  

  const toggleCreateForm = () => {
    setShowCreate(!showCreate);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser({id:id}));
  }

  return (
    <>
      <div className="w-full flex flex-col gap-4 bg-gray-100 p-6">
        <h2 className="text-center text-3xl font-bold text-blue-800 p-2.5">
          CRUD App using Redux Toolkit{" "}
        </h2>
        <div className="flex justify-start mb-0">
          <Link
            to="/create"
            onClick={toggleCreateForm}
            className="w-28 text-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Create +
          </Link>
        </div>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-2.5">
          <table className="min-w-full border-collapse border-2 border-gray-200">
            <thead>
              <tr className="bg-gray-500 text-white ">
                <th className="px-5 py-3 text-left text-sm font-medium uppercase border border-gray-300">
                  ID
                </th>
                <th className="px-5 py-3 text-left text-sm font-medium uppercase border border-gray-300">
                  Name
                </th>
                <th className="px-5 py-3 text-left text-sm font-medium uppercase border border-gray-300">
                  Email
                </th>
                <th className="px-5 py-3 text-left text-sm font-medium uppercase border border-gray-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {Users
                .map((user, index) => (
                  <tr
                    key={index}
                    className="even:bg-gray-100 odd:bg-white hover:bg-gray-200"
                  >
                    <td className="px-5 py-3 text-sm font-normal text-gray-800 border border-gray-300">
                      {user.id}
                    </td>
                    <td className="px-5 py-3 text-sm font-normal capitalize text-gray-800 border border-gray-300">
                      {user.name}
                    </td>
                    <td className="px-5 py-3 text-sm font-normal text-gray-800 border border-gray-300">
                      {user.email}
                    </td>
                    <td className="px-5 py-3 text-sm font-normal text-gray-800 border border-gray-300 flex gap-5">
                      <Link to={`/edit/${user.id}`} className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600">
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
