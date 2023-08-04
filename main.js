fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=036f74839e4044fc80f31dd695212272"
)
  .then((result) => {
    let data = result.json();
    return data;
  })
  .then((curruncey) => {

    let amount = document.querySelector("[name=Currencey]");
    let egpPrice = document.querySelector(".egp span");
    let sarPrice = document.querySelector(".sar span");
    let btn = document.querySelector(".Procces")
    btn.onclick = function () {
        egpPrice.innerHTML = Math.round(amount.value * curruncey.rates["EGP"])
        sarPrice.innerHTML = Math.round(amount.value * curruncey.rates["SAR"])
        btn.style.backgroundColor = "rgb(34,193,195)";
    }
    amount.onfocus = function () {
        btn.style.backgroundColor = "transparent"
    }
  });
