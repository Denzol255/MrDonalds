"use strict";

const employers = [
    "АртеМ",
    "максим",
    "Владимир",
    "сергей",
    "НикиТа",
    "евГений",
    " Дарья",
    " ",
    "виктория ",
    "ЕкаТерина",
    "",
    " Андрей ",
    "КИРИЛЛ",
  ],
  nameCourse = "Базовый React",
  command = [];

employers.forEach((employer) => {
  if (employer.length > 0 && employer.trim() !== "") {
    command.push(employer);
  }
});

for (let i = 0; i < command.length; i++) {
  command[i] = command[i].toLowerCase().trim();
  command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

const data = {
  cash: [3, 8, 3],
  react: ["JSX", "components", "props", "state", "hooks"],
  add: ["styled-components", "firebase"],
};

const calcCash = (everyCash) => everyCash.reduce((prev, curr) => prev + curr);

const lesson = calcCash(data.cash);
const makeBusiness = (
  director,
  allModule,
  gang,
  course,
  teacher = "Максим"
) => {
  const sumTech = data.react.concat(data.add, "и другие");
  console.log(
    `Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. \nКоманда Академии: ${gang}`
  );
  console.log(
    `Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`
  );
  console.log("Технологии которые мы изучим: ");
  console.log(...sumTech);
};

makeBusiness("Артем", lesson, command, nameCourse);
