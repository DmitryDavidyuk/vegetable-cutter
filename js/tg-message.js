const TOKEN = "5977675073:AAGRZsFwWksh60DfRFB9lV5iLRPzee8r1fM";
const CHAT_ID = "-1001790959821";
const URL = `https://api.telegram.org/bot${TOKEN}/SendMessage`;
const modal = document.querySelector("[data-modal]");
const success = document.getElementById("success");

document.getElementById("tg-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let id = 1;

  let message = `<b>Заявка з сайта ${id}</b>\n`;
  message += `<b>Ім'я: </b> ${this.name.value}\n`;
  message += `<b>Телефон: </b> ${this.phone.value}\n`;
  message += `<b>Кількість товарів: </b>${this.field.value}\n`;

  axios
    .post(URL, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.phone.value = "";
      success.style.display = "block";
      id += 1;
    })
    .catch((err) => console.warn(err));
});
