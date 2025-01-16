const categoryNameInput = document.getElementById('categoryName');
const categoryDescriptionInput = document.getElementById('categoryDescription');
const categoryAttributesInput = document.getElementById('categoryAttributes');
const charts = document.querySelector('.charts');
const button = document.getElementById('inputButton');

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

button.addEventListener('click', ()=> {
    post('function/addAndManageCategories.php', {
        category__name: categoryNameInput.value,
        category__description: categoryDescriptionInput.value,
        category__attributes: categoryAttributesInput.value
    });
});

async function getCategories() {
    const response = await post('function/readCategories.php');
    const categories = await response;
    return categories;
}

async function renderCategories(){
    const categories = await getCategories();
    
    categories.map((category)=>{
        let html = `
        <div class="charts-card">
        <div class="card-inner">
                <h3>${category.category__name} <h5>${category.category__description}</h5></h3>
                <span class="material-icons-outlined">inventory_2</span>
            </div>
            <h1>${category.category__attributes}</h1>
            <h4>${category.category__description}</h4>
            <h5>${category.category__name}</h5>
        </div>
        `;
        charts.innerHTML += html
    });
}

async function getCategories() {
    const response = await post('function/readCategories.php');
    const categories = await response;
    return categories;
}

async function createCategoryOptions(){
    const categories = await getCategories();
    
    categories.map((category)=>{
        let html = `
        <option value="${category.category__name}">${category.category__name}</option>
        `;
        categoryOptions.innerHTML += html
    });
}

renderCategories();