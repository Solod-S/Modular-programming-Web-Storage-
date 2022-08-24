const fetchAllUsers = () => {
  console.log("fetchAllUsers");
};
const fetchUserById = (id) => {
  console.log("fetchUserById");
};
const updateUserById = (id) => {
  console.log("updateUserById");
};
const addUser = (name) => {
  const user = {
    id: shortid.generate(),
    name,
  };

  console.log(user);
};

export default { fetchAllUsers, fetchUserById, updateUserById, addUser };
