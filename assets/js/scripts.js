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
    }
    else {
      document.getElementById("detail").innerHTML = null;
      document.getElementById("name").innerHTML = "Lo sentimos, el servicio seleccionado no se encuentra disponible en este momento.";
    }
    localStorage.removeItem("s");
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
  servicesJSON = JSON.parse(servicesString);
  const tbody = document.getElementById("data");
  let i = 0;
  servicesJSON.forEach(service => {
    let row = document.createElement("tr");
    row.id = i;
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
    inputQuantity.className = "form-control form-control-sm";
    inputQuantity.style = "text-align: right;"
    inputQuantity.type = "text";
    inputQuantity.value = service.availability.quantity;
    cellQuantity.appendChild(inputQuantity);
    row.appendChild(cellQuantity);
    //
    let cellPrice = document.createElement("td");
    let inputPrice = document.createElement("input");
    inputPrice.className = "form-control form-control-sm";
    inputPrice.style = "text-align: right;"
    inputPrice.type = "text";
    inputPrice.value = service.price.value;
    cellPrice.appendChild(inputPrice);
    row.appendChild(cellPrice);
    //
    let cellUnit = document.createElement("td");
    cellUnit.textContent = service.price.unit;
    row.appendChild(cellUnit);
    //
    let cellSave = document.createElement("td");
    let buttomSave = document.createElement("button");
    buttomSave.className = "btn btn-success btn-sm";
    buttomSave.setAttribute("data-bs-target", "#staticBackdrop");
    buttomSave.setAttribute("data-bs-toggle", "modal");
    buttomSave.textContent = "Guardar";
    buttomSave.onclick = function() {
      service.availability.quantity = inputQuantity.value;
      service.price.value = inputPrice.value;
      document.getElementById("staticBackdropLabel").innerHTML = "Guardar servicio";
      document.getElementById("serviceName").innerHTML = "Servicio guardado.";
      document.getElementById("staticBackdropLabel").innerHTML = "Guardar servicio";
      document.getElementById("serviceName").innerHTML = "Servicio '" + service.name + "' guardado.";
      localStorage.setItem(KEY_SERVICES, JSON.stringify(servicesJSON));
    };
    cellSave.appendChild(buttomSave);
    row.appendChild(cellSave);
    //
    let cellDelete = document.createElement("td");
    let buttomDelete = document.createElement("button");
    buttomDelete.className = "btn btn-danger btn-sm";
    buttomDelete.setAttribute("data-bs-target", "#staticBackdrop");
    buttomDelete.setAttribute("data-bs-toggle", "modal");
    buttomDelete.textContent = "Eliminar";
    buttomDelete.onclick = function() {
      let deleteService = {
        rowId: row.id,
        serviceId: service.id
      };
      document.getElementById("staticBackdropLabel").innerHTML = "Eliminar servicio";
      document.getElementById("serviceName").innerHTML = "¿Está seguro de eliminar el servicio '" +service.name + "'?";
      localStorage.setItem("es", JSON.stringify(deleteService));
    };
    cellDelete.appendChild(buttomDelete);
    row.appendChild(cellDelete);
    //
    tbody.appendChild(row);
    //
    i++;
  });
  document.getElementById("continue").onclick = () => this.operateService();
}

function operateService() {
  if (localStorage.getItem("es")) {
    const deleteServiceJSON = JSON.parse(localStorage.getItem("es"));
    servicesJSON = JSON.parse(localStorage.getItem(KEY_SERVICES));
    servicesJSON = servicesJSON.filter(s => s.id !== deleteServiceJSON.serviceId);
    localStorage.setItem(KEY_SERVICES, JSON.stringify(servicesJSON));
    let row = document.getElementById(deleteServiceJSON.rowId);
    row.parentNode.removeChild(row);
    localStorage.removeItem("es");
  }
}