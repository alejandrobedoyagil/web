async function loadContentAsync(file, target) {
	try {
	    const response = await fetch(file);
	    const data = await response.text();
	    document.getElementById(target).innerHTML = data;
	}
	catch (err) {
	}
}