async function loadData() {
    try {
        const response = await fetch("data:application/json,%7B%22name%22%3A%22Mari%22%7D");
        if (!response.ok) {
            throw new Error(`HTTP viga: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.log("Laadimine ebaõnnestus:", error.message);
    }
}

loadData();
