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

async function getCategories() {
  const response = await post("function/readCategories.php");
  const categories = await response;
  return categories;
}

export const categories = await getCategories();

async function getProducts() {
  const response = await post("function/readProducts.php");
  const products = await response;
  return products;
}

export const products = await getProducts();

async function getCustomers() {
  const response = await post("function/readCustomers.php");
  const customers = await response;
  return customers;
}

export const customers = await getCustomers();

