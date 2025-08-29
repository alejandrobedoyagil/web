async function loadContentAsync(file, target) {
	try {
	    const response = await fetch(file);
	    const data = await response.text();
	    document.getElementById(target).innerHTML = data;
	}
	catch (err) {
	}
}
async function loadContentAsync2(file, target) {
	try {
	    const response = await fetch(file);
	    const data = await response.text();
	    document.getElementById(target).innerHTML = data;
		fetch('data/services.json').then(response => response.json())
                                   .then(data => {
                                      const elemento = data.find(item => item.id === "as");
		                              var content = "$" + elemento.price + document.getElementById("price").innerHTML.trim();
									  document.getElementById("price").innerHTML = content;
                                   });
	}
	catch (err) {
	}
}