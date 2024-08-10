state = document.getElementById("btnSwitch")
function btnSwitch() {
    if (state.innerHTML == "Đăng nhập") {
        document.getElementById("label").innerHTML = "Chưa có tài khoản?"
        document.getElementById("registerForm").style.display = "none"
        document.getElementById("signinForm").style.display = "block"
        state.innerHTML = "Đăng ký"

    } else {
        if (state.innerHTML == "Đăng ký") {
            state.innerHTML = "Đăng nhập"
            document.getElementById("label").innerHTML = "Đã có tài khoản?"
            document.getElementById("registerForm").style.display = "block"
            document.getElementById("signinForm").style.display = "none"
        }
    }
}

function register() {
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let psw = document.getElementById("psw")
    let re_psw = document.getElementById("psw-repeat")
    //Thực hiện lưu trữ
    if (JSON.parse(localStorage.getItem("userlist"))) {
        userlist = JSON.parse(localStorage.getItem("userlist"))
        userlist.push({
            username: username.value,
            email: email.value,
            psw: psw.value
        })
        localStorage.setItem("userlist", JSON.stringify(userlist))
    } else {
        let userlist = []
        userlist.push({
            username: username.value,
            email: email.value,
            psw: psw.value
        })
        localStorage.setItem("userlist", JSON.stringify(userlist))
    }
    alert("Đăng ký thành công!")
    location.reload()
}

function signin() {
    let login = 0
    let user = document.getElementById("userSignin")
    let psw = document.getElementById("pswSignin")
    if (JSON.parse(localStorage.getItem("userlist"))) {
        userlist = JSON.parse(localStorage.getItem("userlist"))
        for (let acc of userlist) {
            if (user.value == acc.username && psw.value == acc.psw) {
                login = 1
                break
            } else {
                login = 0
            }
        }
    } else {
        login = 0
    }
    if (login == 1) {
        alert("Đăng nhập thành công!")
    } else {
        alert("Sai thông tin đăng nhập!")
    }
    location.reload()
}