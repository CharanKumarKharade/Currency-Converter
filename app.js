const URL =
  "https://v6.exchangerate-api.com/v6/475e6302b9539efbf913c730/latest/USD";
const dropdown = document.querySelectorAll(".dropdown select");

for (let select of dropdown) {
  for (code in countryList) {
    let option = document.createElement("option");
    option.innerText = code;
    option.value = code;
    if (select.name === "from" && code === "USD") {
      option.selected = true;
    }
    select.append(option);
  }
}
