console.log("main");
var employeeList = [];

const eList = "eList";
// lấy dữ liệu lên :
let eListLocalStorage = localStorage.getItem(eList);

if (JSON.parse(eListLocalStorage)) {
  var saveData = JSON.parse(eListLocalStorage);

  for (var index = 0; index < saveData.length; index++) {
    var current = saveData[index];
    var add = new employee(
      current.account,
      current.name,
      current.email,
      current.password,
      current.date,
      current.salary,
      current.position,
      current.timework
    );
    employeeList.push(add);
    renderEmployeeList(employeeList);
  }
}
function check(input) {
  // validator
  //
  // validator account
  var validAccount =
    validator.checkNull(input.account, "tbTKNV") &&
    validator.checkNumber(input.account, "tbTKNV") &&
    validator.checkLength(input.account, "tbTKNV", 4, 6, 2) &&
    validator.checkAccount(input.account, employeeList, "tbTKNV");

  // check name
  var validName =
    validator.checkNull(input.name, "tbTen") &&
    validator.checkText(input.name, "tbTen");
  // check email
  var validEmail =
    validator.checkNull(input.email, "tbEmail") &&
    validator.checkEmailFormat(input.email, "tbEmail");
  // check passwork
  var validPass =
    validator.checkNull(input.password, "tbMatKhau") &&
    validator.checkPassword(input.password, "tbMatKhau");
  // check date
  var validDate =
    validator.checkNull(input.date, "tbNgay") &&
    validator.checkDate(input.date, "tbNgay");
  // check salary
  var validSalary =
    validator.checkNull(input.salary, "tbLuongCB") &&
    validator.checkValue(input.salary, "tbLuongCB", 1000000, 20000000, 6);
  // check position
  var validPosition = validator.checkSelected(input.position, "tbChucVu");
  // check time
  var validTime =
    validator.checkNull(input.timework, "tbGiolam") &&
    validator.checkValue(input.timework, "tbGiolam", 80, 200, 8);
  //
  var allValid =
    validAccount &
    validName &
    validEmail &
    validPass &
    validDate &
    validSalary &
    validTime &
    validPosition;
  // =====
  return allValid;
}
function editCss() {
  getEle("tknv").disabled = false;
  getEle("btnThemNV").style.display = "inline-block";
  getEle("btnCapNhat").style.display = "none";
}
function addNewEmployee() {
  var newEmp = importInfoForm();
  if (check(newEmp) == false) {
    return;
  }
  //
  employeeList.push(newEmp);
  //
  var eListJson = JSON.stringify(employeeList);
  localStorage.setItem(eList, eListJson);
  //
  renderEmployeeList(employeeList);
}
function deleteE(id) {
  var index = findAccount(id, employeeList);
  if (index !== -1) {
    employeeList.splice(index, 1);
    //
    var eListJson = JSON.stringify(employeeList);
    localStorage.setItem(eList, eListJson);
    //
    renderEmployeeList(employeeList);
  }
}
function editE(id) {
  var index = findAccount(id, employeeList);
  if (index !== -1) {
    var emp = employeeList[index];
    getEle("tknv").disabled = true;
    getEle("btnThemNV").style.display = "none";
    getEle("btnCapNhat").style.display = "inline-block";

    showInfo(emp);
  }
}
function updateE() {
  var eEdited = importInfoForm();
  // //////////////////////////////////////////////////////////
  if (check(eEdited) == false) {
    return;
  }
  // /////////////////////////////////////////////////////////
  var index = findAccount(eEdited.account, employeeList);
  if (index !== -1) {
    employeeList[index] = eEdited;
    //
    var eListJson = JSON.stringify(employeeList);
    localStorage.setItem(eList, eListJson);
    //
    renderEmployeeList(employeeList);
  }
}
function searchType() {
  let valueSearchInput = document.getElementById("searchName").value;
  let userSearch = employeeList.filter((value) => {
    return value.ranked().includes(valueSearchInput);
  });

  renderEmployeeList(userSearch);
}
