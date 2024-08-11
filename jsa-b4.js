username = document.getElementById("username")
psw = document.getElementById("psw")
userSig = document.getElementById("userSignin")
pswSig = document.getElementById("pswSignin")
var changeMode = () => {
    mode = document.getElementById("btnSwitch")
    if (mode.innerHTML == "Đăng nhập"){
        document.getElementById("label").innerHTML="Chưa có tài khoản?"
        mode.innerHTML = "Đăng ký"
        document.getElementById("registerForm").style.display = "none"
        document.getElementById("signinForm").style.display="block"
    } else {
        document.getElementById("label").innerHTML="Đã có tài khoản?"
        mode.innerHTML = "Đăng nhập"
        document.getElementById("registerForm").style.display = "block"
        document.getElementById("signinForm").style.display="none"
    }
}
function register() {
    userList= []
    userList.push({
        username: username.value,
        psw:psw.value
    })
    console.log(userList)
    localStorage.setItem("userList",JSON.stringify(userList))
    alert("Đăng ký thành công!")
}
function signin(){
    check = 0
    userList = JSON.parse(localStorage.getItem("userList"))
    console.log(userList)
    for (acc of userList){
        if (userSig.value == acc.username && pswSig.value == acc.psw){
            check = 1        
            break
        } else {
            check = 0
        }
    }
    if (check == 1) {
        alert("Đăng nhập thành công!")
    } else {
        alert("Đăng nhập thất bại!")
    }
}
