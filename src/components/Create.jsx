import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/UserReducer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id: newId, name, email }));
    navigate("/");
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
  //   navigate("/");
  // };

  return (
    <div className="max-w-xs bg-gray-300 rounded-md px-5 py-3 gap-2 h-screen">
      <div className="p-0 m-0 flex justify-between">
        <h2 className="text-xl font-semibold capitalize text-blue-800">
          New User
        </h2>
        <button onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faClose} />{" "}
        </button>
      </div>
      <form action="" onSubmit={handleSubmit} className="mt-5">
        <div className="flex justify-between">
          <label
            htmlFor="name"
            className="text-lg font-medium capitalize w-1/4 text-blue-800"
          >
            Name:
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            submit
          </button>
          <button
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

export default Create;
