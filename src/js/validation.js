import Joi from "joi";
// импортируем из модулей внешнюю библиотеку
const passShema = Joi.string().min(3).max(10);
// делаем локальную переменную с использованием внешней библиотеки Joi
export default function validation(password) {
  console.log(`Good`);
  return passShema.validate(password);
}
// используем joi
