import validation from "./js/validation";
// импортируем одно ++++++++default
// console.log(validation());
console.log(validation("asfs"));
// из validation функция с внешней библиотекой joi
import manyFunction from "./js/api-service";
// импортирую много функций как объект ++++++++named
// console.log(manyFunction.updateUserById());
import {
  fetchAllUsersVer,
  fetchUserByIdVer,
  updateUserByIdVer,
  createUser,
} from "./js/api-sep";
//именной экспорт
// fetchAllUsersVer as newName (можно изменить имя)
// console.log(fetchUserByIdVer());
// console.log(updateUserByIdVer());

import * as Apiservice from "./js/api-as-module";
// все как объект ++++++++namespace

// console.log(Apiservice);
createUser("Sergey");
