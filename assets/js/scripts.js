const KEY_SERVICES = "ss";
const PATH_TO_SERVICES_DATA = "data/services.json";

async function formatNumber(value) {
  return new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
  }).format(value);
}

async function loadContentAsync(fileName, targetTag) {
  try {
    const file = await fetch(fileName);
    const fileContent = await file.text();
    document.getElementById(targetTag).innerHTML = fileContent;
  } catch (error) {}
}

async function loadDetailAsync(fileName, targetTag, serviceId) {
  try {
    //const file = await fetch(fileName);
    //const fileContent = await file.text();
    //document.getElementById(targetTag).innerHTML = fileContent;
	await this.loadContentAsync(fileName, targetTag);
    const servicesString = localStorage.getItem(KEY_SERVICES);
    const servicesJSON = JSON.parse(servicesString);
    const service = servicesJSON.find((service) => service.id === serviceId);
    if (service) {
      document.getElementById("description").innerHTML = service.description;
      document.getElementById("label").innerHTML = service.availability.label + document.getElementById("label").innerHTML;
      document.getElementById("name").innerHTML = service.name;
      document.getElementById("picture").src = service.picture.path;
      document.getElementById("picture").style.height = service.picture.height;
      document.getElementById("picture").style.width = service.picture.width;
      document.getElementById("price").innerHTML = service.price.currency + (await formatNumber(service.price.value)) + document.getElementById("price").innerHTML.trim();
      document.getElementById("promotion").innerHTML = service.promotion;
      document.getElementById("quantity").innerHTML = service.availability.quantity;
      document.getElementById("unit").innerHTML = "/" + service.price.unit;
      localStorage.removeItem("s");
    }
    else {
      document.getElementById("detail").innerHTML = null;
      document.getElementById("name").innerHTML = "Lo sentimos, el servicio seleccionado no se encuentra disponible en este momento.";
    }
  } catch (error) {}
}

async function loadServicesAsync() {
  try {
    fetch(PATH_TO_SERVICES_DATA)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(KEY_SERVICES, JSON.stringify(data));
      });
  } catch (error) {}
}

async function populateServiceTableAsync(fileName, targetTag) {
  await this.loadContentAsync(fileName, targetTag);
  const servicesString = localStorage.getItem(KEY_SERVICES);
  const servicesJSON = JSON.parse(servicesString);
  const tbody = document.getElementById("data");
  servicesJSON.forEach(service => {
    let row = document.createElement("tr");
    //
    let cellId = document.createElement("td");
    cellId.textContent = service.id;
    row.appendChild(cellId);
    //
    let cellName = document.createElement("td");
    cellName.textContent = service.name;
    row.appendChild(cellName);
    //
    let cellQuantity = document.createElement("td");
    let inputQuantity = document.createElement("input");
    inputQuantity.type = "text";
    inputQuantity.value = service.availability.quantity;
    cellQuantity.appendChild(inputQuantity);
    row.appendChild(cellQuantity);
    //
    let cellPrice = document.createElement("td");
    let inputPrice = document.createElement("input");
    inputPrice.type = "text";
    inputPrice.value = service.price.value;
    cellPrice.appendChild(inputPrice);
    row.appendChild(cellPrice);
    //
    let cellSave = document.createElement("td");
    let buttomSave = document.createElement("button");
    buttomSave.textContent = "Save";
    buttomSave.onclick = function() {
      service.availability.quantity = inputQuantity.value;
      service.price.value = inputPrice.value;
      localStorage.setItem(KEY_SERVICES, JSON.stringify(servicesJSON));
    };
    cellSave.appendChild(buttomSave);
    row.appendChild(cellSave);
    //
    tbody.appendChild(row);
  });
}