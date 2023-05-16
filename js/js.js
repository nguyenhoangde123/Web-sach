let images = [
    "img/img.png",
    "img/img_1.png"
];
let current = 0;
let auto;
let slider_img = document.querySelector("#slider_img");
function prev() {
    if (current <= 0) {
        current = images.length - 1;
    } else {
        current--;
    }
    slider_img.setAttribute("src", images[current]);
}


let next = function () {
    current++;
    if (current >= images.length) {
        current = 0;
    }
    slider_img.setAttribute("src", images[current]);
};
function start() {
    slider_img.setAttribute("src", images[0]);
}
function end() {
    slider_img.setAttribute("src", images[images.length - 1]);
}

function Play() {
    auto = setInterval(next, 1000);
}
function cleart() {
    clearInterval(auto)
}

let form_register = document.getElementById('form-register');
let form_group = document.querySelectorAll(".form-group");
form_register.addEventListener('submit', function (e) {
    e.preventDefault();
    let user = document.getElementById('username');
    let gioitinh = document.querySelector('.gioitinh');
    let email = document.getElementById('email');
    let sdt = document.getElementById('soDienThoai');
    let diaChi = document.getElementById('diaChi');
    let date = document.getElementById('date');
    form_group.forEach(function (input) {
        if (input) {
            kiemtraRong(user, "Vui lòng nhập tên đăng nhập");
        }
        if (input) {
            kiemtraRong(diaChi, "Vui lòng nhập nơi bạn muốn đến");
        }
        if (input) {
            checkGioiTinh(gioitinh, 'Giới tính chưa được chọn')
        }
        if (input) {
            if (email.value == '') {
                kiemTraEmail(email, 'Vui lòng nhập email');
            } else {
                kiemTraEmail(email, 'Email phải  có đuôi là "@fpt.edu.vn"');
            }
        }
        if (input) {
            if (sdt.value == '') {
                kiemTraSDT(sdt, 'Vui lòng nhập Số điện thoại');
            } else {
                kiemTraSDT(sdt, 'Số điện thoại  phải là số có 10 kí tự và là số');
            }
        }
        if (input) {
            if (date.value == '') {
                validateDate(date, 'Vui lòng chọn ngày tháng năm');
            } else {
                validateDate(date, 'Ngày bạn nhập lớn hơn ngày hiện tại');
            }
        }
    });
});

function kiemtraRong(input, massages) {
    if (!input.value.trim()) {
        input.style.borderColor = 'red';
        input.parentElement.querySelector("span").textContent = massages;
    }
    else {
        input.style.borderColor = 'black';
        input.parentElement.querySelector("span").textContent = "";
    }
}
function checkGioiTinh(input, massages) {
    if (form_register.gioitinh.value.length == "") {
        input.style.borderColor = 'red';
        input.parentElement.querySelector("span").textContent = massages
    }
    else {
        input.style.borderColor = 'black';
        input.parentElement.querySelector("span").textContent = "";
    }
}
function kiemTraEmail(input, massages) {
    console.log(input.value);
    if (!input.value.match(/^$/)) {
        input.style.borderColor = 'red';
        input.parentElement.querySelector("span").textContent = massages
    }
    else {
        input.style.borderColor = 'black';
        input.parentElement.querySelector("span").textContent = "";
    }
}
function kiemTraSDT(input, massages){
    if(!input.value.match(/^[0-9]{10}$/)){
        input.style.borderColor = 'red';
        input.parentElement.querySelector("span").textContent = massages
    }
    else {
        input.style.borderColor = 'black';
        input.parentElement.querySelector("span").textContent = "";
    }
}
function validateDate(input, massages) {
    var input = new Date(input);
    var currentDate = new Date();

    if (input.value > currentDate) {
        input.style.borderColor = 'red';
        input.parentElement.querySelector("span").textContent = massages

    } else {
        input.style.borderColor = 'black';
        input.parentElement.querySelector("span").textContent = "";

    }
}

