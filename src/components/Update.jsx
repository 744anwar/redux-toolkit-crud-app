import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../redux/UserReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Update = () => {
  const { id } = useParams();
  const Users = useSelector((state) => state.users);
  const existingUser = Users.filter((userUpdate) => userUpdate.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <div className="max-w-xs bg-gray-300 rounded-md px-5 py-3 gap-2 h-screen">
      <div className="p-0 m-0 flex justify-between">
        <h2 className="text-xl font-semibold capitalize text-blue-800">
          Update User
        </h2>
        <button onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <form action="" onSubmit={handleUpdate} className="mt-5">
        <div className="flex justify-between">
          <label
            htmlFor="name"
            className="text-lg font-medium capitalize w-1/4 text-blue-800"
          >
            Name:
          </label>
          <input
            value={uname}
            onChange={(update) => setName(update.target.value)}
            type="text"
            name="name"
            className="p-1 w-3/4 rounded-md active:outline-none focus:outline-none capitalize"
            placeholder="enter user name"
            required
          />
        </div>
        <div className="flex justify-between pt-2">
          <label
            htmlFor="email"
            className="text-lg font-medium capitalize w-1/4 text-blue-800"
          >
            Email:
          </label>
          <input
            value={uemail}
            onChange={(update) => setEmail(update.target.value)}
            type="email"
            name="email"
            className="p-1 w-3/4 rounded-md active:outline-none focus:outline-none "
            placeholder="enter user email"
            required
          />
        </div>
        <div className="py-5 flex justify-between">
          <button
            type="submit"
            className="text-lg font-medium capitalize text-white bg-red-500 hover:bg-red-600 p-2 rounded-md focus:outline-white"
          >
            update
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-lg font-medium capitalize text-white bg-gray-500 hover:bg-gray-600 p-2 rounded-md focus:outline-white"
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
