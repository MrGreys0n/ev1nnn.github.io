const btn_start_action_second = document.querySelector('.btn_second_task')

btn_start_action_second.addEventListener("click", () => {
    let login = prompt("Enter your login")
    if (login === "admin") {
        let password = prompt("Enter password")
        if (password === "1") {
            alert("Hello")
        } else {
            alert("Wrong password")
        }
    } else {
        alert("Exit")
    }
})