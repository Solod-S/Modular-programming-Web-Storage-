console.log("Привет из Node.js");
// const Joi = require("joi");
const shortid = require("shortid");
// браузер такое не понимает
/////// Joi
// const passScheme = Joi.string().min(3).max(10).alphanum();
// строка с минимальным количеством 3 и максимальным количеством 10, алфавит или цифры
// console.log(passScheme.validate("12345678"));
/////// shortid
console.log(shortid.generate());
