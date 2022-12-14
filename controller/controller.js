console.log("controller");
function getEle(n) {
  return document.getElementById(n);
}
function importInfoForm() {
  var account = getEle("tknv").value.trim();
  var name = getEle("name").value.trim();
  var email = getEle("email").value.trim();
  var password = getEle("password").value.trim();
  var date = getEle("datepicker").value.trim();
  var salary = getEle("luongCB").value.trim();
  var position =
    getEle("chucvu").options[getEle("chucvu").selectedIndex].text.trim();
  var timework = getEle("gioLam").value.trim();

  var newEmployee = new employee(
    account,
    name,
    email,
    password,
    date,
    salary,
    position,
    timework
  );

  return newEmployee;
}
function renderEmployeeList(list) {
  var contentShow = "";
  list.forEach(function (item) {
    var content = `<tr>
    <td>${item.account}</td>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.date}</td>
    <td>${item.position}</td>
    <td>${item.totalSalary()}</td>
    <td>${item.ranked()}</td>
    <td>
    <button 
    class="btn btn-primary"
    id="editE"
    data-toggle="modal"
    data-target="#myModal" onclick="editE('${item.account}')">
      <i class="fa fa-edit"></i>
    </button>
    <button 
    class="btn btn-primary"
    onclick="deleteE('${item.account}')">
      <i class="fa fa-trash-alt"></i>
    </button>
    </td>
    </tr>`;
    contentShow += content;
  });
  document.getElementById("tableDanhSach").innerHTML = contentShow;
}
function findAccount(id, arr) {
  let index = arr.findIndex(function (e) {
    return e.account == id;
  });
  return index;
}
function showInfo(emp) {
  getEle("tknv").value = emp.account;
  getEle("name").value = emp.name;
  getEle("email").value = emp.email;
  getEle("password").value = emp.password;
  getEle("datepicker").value = emp.date;
  getEle("luongCB").value = emp.salary;
  getEle("chucvu").options[getEle("chucvu").selectedIndex].text = emp.position;
  getEle("gioLam").value = emp.timework;
}
