console.log("model");
function employee(
  account,
  name,
  email,
  password,
  date,
  salary,
  position,
  timework
) {
  this.account = account;
  this.name = name;
  this.email = email;
  this.password = password;
  this.date = date;
  this.salary = salary;
  this.position = position;
  this.timework = timework;
  this.totalSalary = function () {
    if (this.position == "Sếp") {
      return (this.salary * 1 * 3).toLocaleString();
    }
    if (this.position == "Trưởng phòng") {
      return (this.salary * 1 * 2).toLocaleString();
    }
    if (this.position == "Nhân viên") {
      return (this.salary * 1).toLocaleString();
    }
  };
  this.ranked = function () {
    if (this.timework >= 192) {
      return "N.v xuất sắc";
    } else if (this.timework >= 176) {
      return "N.v giỏi";
    } else if (this.timework >= 160) {
      return "N.v khá";
    } else {
      return "N.v trung bình";
    }
  };
}
