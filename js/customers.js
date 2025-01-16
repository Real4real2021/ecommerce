import { customers } from "./backend.js";

const customerNameInput = document.getElementById("customerName");
const customerEmailInput = document.getElementById("customerEmail");
const customerPhoneInput = document.getElementById("customerPhone");
const customerAddressInput = document.getElementById("customerAddress");
const customerCityInput = document.getElementById("customerCity");
const customerCountryInput = document.getElementById("customerCountry");
const customerPostalCodeInput = document.getElementById("customerPostalCode");
const charts = document.querySelector(".charts");
const button = document.getElementById("inputButton");

function loading() {
  console.log("loading");
}

let skipLoading = false;

async function post(url, data, options = {}) {
  const { timeout = 8000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  if (!url.includes("notifications")) {
    if (!skipLoading) loading();
    const responseText = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      ...options,
      body: JSON.stringify(data),
    });
    clearTimeout(id);
    if (!skipLoading) loading();
    if (skipLoading) skipLoading = false;
    return responseText.json();
  }
  const responseText = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.log(error);
  });
  if (skipLoading) skipLoading = false;
  return responseText.json();
}

button.addEventListener("click", () => {
  post("function/addAndManageCustomers.php", {
    customer__name: customerNameInput.value,
    customer__email: customerEmailInput.value,
    customer__phone: customerPhoneInput.value,
    customer__address: customerAddressInput.value,
    customer__city: customerCityInput.value,
    customer__country: customerCountryInput.value,
    customer__postal_code: customerPostalCodeInput.value,
    company__name: "AkwaMens",
  });
});

async function renderCustomer() {
  customers.map((customer) => {
    let html = `
        <div class="charts-card">
          <div class="card-inner">
            <h3>${customer.customer__name} <h5>${customer.customer__email}</h5></h3>
            <span class="material-icons-outlined">inventory_2</span>
          </div>
          <h1>${customer.customer__phone}</h1>
          <h4>${customer.customer__address}</h4>
          <h5>${customer.customer__city}</h5>
        </div>
      `;
    charts.innerHTML += html;
  });
}

renderCustomer();
