const checkoutButton = document.getElementById("checkout-button");
const merchantId = document.getElementById("merchant_id").value;
const merchantKey = document.getElementById("merchant_key").value;
const amount = document.getElementById("amount").value;
const itemName = document.getElementById("item_name").value;

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

  checkoutButton.addEventListener("click", async () => {
    post("https://sandbox.payfast.co.za​/eng/process", {
      merchant_id: merchantId,
      merchant_key: merchantKey,
      amount: amount,
      item_name: itemName,
    }).then((Data)=>{
        console.log(Data);
    });
  });