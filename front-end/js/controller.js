const account1 = {
  name: "Ho Van Lam",
  phone: "0905347806",
};
const account2 = {
  name: "Dinh Thi Kim Hoa",
  phone: "0905730319",
};
const account3 = {
  name: "Ho Nhat Hy",
  phone: "0905577176",
};

const accounts = [account1, account2, account3];

const convertTextToImgName = function (text) {
  return text.replace(/ /g, "-").toLowerCase();
};

const convertTextToCodeName = function (text) {
  return text.replace(/ /g, "").toLowerCase();
};

const createMarkup = function (acc) {
  const imgName = convertTextToImgName(acc.name);

  const markup = `
  <li class="customer">
    <img
      class="customer-img"
      src="img/accounts/${imgName}.jpg"
      alt="photo of ${acc.name}"
    />
    <div class="customer-summary">
      <p class="customer-name">
        <ion-icon class="list-icon" name="person-outline"></ion-icon>
        <span>${acc.name}</span>
      </p>
      <p class="customer-phone-number">
        <ion-icon class="list-icon" name="call-outline"></ion-icon>
        <span>${acc.phone}</span>
      </p>
    </div>
  </li>
  `;

  return markup;
};

document.querySelector(".search-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".customers-infor").textContent = "";

  const inputValue = document.querySelector(".search-text").value;

  accounts.forEach((acc) => {
    if (
      convertTextToCodeName(acc.name).includes(
        convertTextToCodeName(inputValue)
      )
    ) {
      document
        .querySelector(".customers-infor")
        .insertAdjacentHTML("afterbegin", createMarkup(acc));

      document.querySelector(".customers-infor").classList.remove("opacity");
    }
  });

  document.querySelector(".search-text").value = "";
});
