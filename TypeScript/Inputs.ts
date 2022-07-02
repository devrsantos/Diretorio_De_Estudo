const input = document.querySelector("#input") as HTMLInputElement;

input.addEventListener('input', (e) => {
    const i = e.currentTarget as HTMLInputElement;
    console.log(i.value);
});
