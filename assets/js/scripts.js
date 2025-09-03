const KEY_REMOVE_SERVICE = "removeService";
const KEY_SERVICE = "service";
const KEY_SERVICES = "services";
const KEY_SESSION = "sesion";
const PATH_TO_SERVICES_DATA = "data/services.json";
const PATH_TO_USERS_DATA = "data/users.json";
const NAVIGATION_CONFIGURATION = [
  {
    "fileId": "contact",
    "filePath": "contact.html",
    "targetTag": "content"
  },
  {
    "fileId": "details",
    "filePath": "details.html",
    "targetTag": "content"
  },
  {
    "fileId": "footer",
    "filePath": "footer.html",
    "targetTag": "footer"
  },
  {
    "fileId": "menu",
    "filePath": "menu.html",
    "targetTag": "menu"
  },
  {
    "fileId": "slider",
    "filePath": "slider.html",
    "targetTag": "content"
  },
  {
    "fileId": "svg",
    "filePath": "assets/image/svg.txt",
    "targetTag": "svg"
  },
  {
    "fileId": "who-are-we",
    "filePath": "who-are-we.html",
    "targetTag": "content"
  },
  {
    "fileId": "services",
    "filePath": "services.html",
    "targetTag": "content"
  },
  {
    "fileId": "catalog",
    "filePath": "catalog.html",
    "targetTag": "content"
  },
  {
    "fileId": "administration",
    "filePath": "administration.html",
    "targetTag": "content"
  },
];

function formatNumber(value) {
  return new Intl.NumberFormat("es-CO", 
    {
      currency: "COP",
      style: "currency",
    }
  ).format(value);
}

function load() {
  if (!localStorage.getItem(KEY_SERVICES)) {
    this.loadServicesAsync();
  }
  document.addEventListener("DOMContentLoaded", function () {
    loadContentAsync("svg");
    loadContentAsync("menu");
    loadContentAsync("footer");
    const serviceId = localStorage.getItem(KEY_SERVICE);
    if (serviceId) {
      loadDetailsAsync(serviceId);
      return;
    }
    loadContentAsync("slider");
  });
}

async function loadDataAsync(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("error");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function loadContentAsync(fileId) {
  try {
    const navigationConfiguration = NAVIGATION_CONFIGURATION.find((nc) => nc.fileId === fileId);
    const response = await fetch(navigationConfiguration.filePath);
    if (!response.ok) {
      throw new Error("error");
    }
    const fileContent = await response.text();
    document.getElementById(navigationConfiguration.targetTag).innerHTML = fileContent;
  } catch (error) {
    console.error(error);
  }
}

async function loadDetailsAsync(serviceId) {
  try {
    await this.loadContentAsync("details");
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
      document.getElementById("price").innerHTML = service.price.currency + (formatNumber(service.price.value)) + document.getElementById("price").innerHTML.trim();
      document.getElementById("promotion").innerHTML = service.promotion;
      document.getElementById("quantity").innerHTML = service.availability.quantity;
      document.getElementById("unit").innerHTML = "/" + service.price.unit;
    }
    else {
      document.getElementById("detail").innerHTML = null;
      document.getElementById("name").innerHTML = "Lo sentimos, el servicio seleccionado no se encuentra disponible en este momento.";
    }
    localStorage.removeItem(KEY_SERVICE);
  } catch (error) {}
}

async function loadServicesAsync() {
  const servicesJSON = await this.loadDataAsync(PATH_TO_SERVICES_DATA);
  localStorage.setItem(KEY_SERVICES, JSON.stringify(servicesJSON));
}

function operateService() {
  if (localStorage.getItem(KEY_REMOVE_SERVICE)) {
    const deleteServiceJSON = JSON.parse(localStorage.getItem(KEY_REMOVE_SERVICE));
    servicesJSON = JSON.parse(localStorage.getItem(KEY_SERVICES));
    servicesJSON = servicesJSON.filter(s => s.id !== deleteServiceJSON.serviceId);
    localStorage.setItem(KEY_SERVICES, JSON.stringify(servicesJSON));
    let row = document.getElementById(deleteServiceJSON.rowId);
    row.parentNode.removeChild(row);
    localStorage.removeItem(KEY_REMOVE_SERVICE);
  }
}

async function populateServiceTableAsync(fileName, targetTag) {
  const session = localStorage.getItem(KEY_SESSION);
  if (session != "true") {
    document.getElementById("message").innerHTML = "Inicie sesión como administrador para modificar los servicios.";
    document.getElementById("title").innerHTML = "Administrar";
    var modal = new bootstrap.Modal(document.getElementById('messages'));
    modal.show();
    return;
  }
  await this.loadContentAsync(fileName, targetTag);
  let servicesString = localStorage.getItem(KEY_SERVICES);
  if (servicesString == null) {
    await this.loadServicesAsync();
    servicesString = localStorage.getItem(KEY_SERVICES);
  }
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
      localStorage.setItem(KEY_REMOVE_SERVICE, JSON.stringify(deleteService));
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

function sendEmail() {
  document.getElementById("message").innerHTML = "Su mensaje ha sido enviado, en breve nos pondremos en contacto.";
  document.getElementById("title").innerHTML = "Envío de correo";
  var modal = new bootstrap.Modal(document.getElementById('messages'));
  modal.show();
}

function signOut() {
  localStorage.removeItem(KEY_SESSION);
  window.location.href = "index.html";
}

async function verifyUser() {
  password = document.getElementById("password").value;
  user = document.getElementById("user").value;
  const usersJSON = await this.loadDataAsync(PATH_TO_USERS_DATA);
  user = usersJSON.filter(u => u.password === password && u.user === user);
  if (user.length > 0) {
    localStorage.setItem(KEY_SESSION, true);
    document.getElementById("form").submit();
  }
  else {
    document.getElementById("message").innerHTML = "Usuario y/o clave no válido(s).";
    var modal = new bootstrap.Modal(document.getElementById('messages'));
    modal.show();
  }
}
