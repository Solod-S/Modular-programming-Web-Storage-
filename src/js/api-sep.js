import shortid from "shortid";
// импортируем скачанную библиотеку с npm

export const fetchAllUsersVer = () => {
  console.log("fetchAllUsers");
};
export const fetchUserByIdVer = (id) => {
  console.log("fetchUserById");
};
export const updateUserByIdVer = (id) => {
  console.log("updateUserById");
};

export const createUser = (name) => {
  const user = {
    id: shortid.generate(),
    name: name,
  };
  console.log(user);
};
// создаем функцию с использованием этой библиотеки
// будем делать именной экспорт
