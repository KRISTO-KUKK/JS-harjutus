function getMessage() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Valmis"), 10);
    });
}

async function run() {
    const message = await getMessage();
    console.log(message);
}

run();
