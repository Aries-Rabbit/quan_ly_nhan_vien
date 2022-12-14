var alertArray = [
  "Trường này không được để trống !!!",
  "Trường này chỉ được nhập số",
  "Độ dài tài khoản chỉ từ 4-6 ký số",
  "Trường này chỉ được nhập chữ",
  "Email chưa đúng định dạng",
  "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt",
  "Lương cơ bản từ 1.000.000 đến 20.000.000",
  "Chưa chọn chức vụ",
  " Số giờ làm trong tháng từ 80 - 200 giờ",
  "Mật khẩu 6-10 kí tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt",
  "Định dạng ngày phải là mm/dd/yyyy",
  "Tài khoản đã tồn tại",
];

var validator = {
  checkNull: function (valueInput, idError) {
    if (valueInput == "") {
      document.getElementById(idError).innerText = alertArray[0];
      return false;
    } else {
      document.getElementById(idError).innerText = "";
      return true;
    }
  },
  checkSelected: function (valueInput, idError) {
    if (valueInput == "Chọn chức vụ") {
      document.getElementById(idError).innerText = alertArray[7];
      return false;
    } else {
      document.getElementById(idError).innerText = "";
      return true;
    }
  },

  checkNumber: function (valueInput, idError) {
    var numberRegex = /^[0-9]+$/;
    if (numberRegex.test(valueInput)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).innerHTML = alertArray[1];
      return false;
    }
  },

  checkLength: function (valueInput, idError, min, max, alert) {
    var txt = valueInput.length;
    if (txt > max || txt < min) {
      document.getElementById(idError).innerText = alertArray[alert];
      return false;
    } else {
      document.getElementById(idError).innerText = "";
      return true;
    }
  },
  checkValue: function (valueInput, idError, min, max, alert) {
    if (valueInput < min || valueInput > max) {
      document.getElementById(idError).innerText = alertArray[alert];
      return false;
    } else {
      document.getElementById(idError).innerText = "";
      return true;
    }
  },
  checkAccount: function (idAccount, listAccount, idError) {
    var index = listAccount.findIndex((id) => {
      return id.account == idAccount;
    });
    if (index !== -1) {
      document.getElementById(idError).innerText = alertArray[11];
      return false;
    } else {
      document.getElementById(idError).innerText = "";
      return true;
    }
  },
  // check bằng regex ///////////////////////////////////////////////////////////
  checkText: function (valueInput, idError) {
    var textRegex = /^[A-Za-z_ ]+$/;
    if (textRegex.test(valueInput)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).innerHTML = alertArray[3];
      return false;
    }
  },
  checkEmailFormat: function (valueInput, idError) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (valueInput.match(emailRegex)) {
      return true;
    } else {
      document.getElementById(idError).innerText = alertArray[4];
      return false;
    }
  },
  checkPassword: function (valueInput, idError) {
    // password từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)
    var passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    if (passwordRegex.test(valueInput)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).innerHTML = alertArray[9];
      return false;
    }
  },
  checkDate: function (valueInput, idError) {
    // Xác thực ngày có định dạng (MM/DD/YYYY)
    var dateRegex =
      /^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/;
    if (dateRegex.test(valueInput)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).innerHTML = alertArray[11];
      return false;
    }
  },
};
