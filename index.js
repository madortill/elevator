window.addEventListener("load", () => {
    document.getElementById('submit').addEventListener('click', finish);
})

const finish = (event) => {
    event.preventDefault();
    window.location.href = "./end.html"
}