var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = '';
        this.salary = 0;
        this.payments = [];
        this.maintenanceHist = [];
    }
    Employee.prototype.calculateSalary = function () {
        return this.salary;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setName = function (newName) {
        this.name = newName;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (newValue) {
        this.salary = newValue;
    };
    Employee.prototype.toListPayment = function (payment) {
        this.payments.push(payment);
    };
    Employee.prototype.toMaintenanceHist = function (equipment) {
        this.maintenanceHist.push(equipment);
    };
    Employee.prototype.editMaintenance = function (equipment) {
        var _this = this;
        this.maintenanceHist.forEach(function (element, i) {
            if (element.getId() === equipment.getId()) {
                _this.maintenanceHist.splice(i, 1);
                element.setStatus(Status.available);
            }
        });
    };
    return Employee;
}());
var SalariedEmployee = /** @class */ (function (_super) {
    __extends(SalariedEmployee, _super);
    function SalariedEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueHour = 0;
        _this.extraHours = 0;
        return _this;
    }
    SalariedEmployee.prototype.calculateSalary = function () {
        if (this.extraHours > 0) {
            var extraSalary = this.valueHour * this.extraHours;
            return this.salary + extraSalary;
        }
        else {
            return this.salary;
        }
    };
    SalariedEmployee.prototype.setExtraHours = function (workedHours, priceHours) {
        this.valueHour = priceHours;
        this.extraHours = workedHours;
    };
    return SalariedEmployee;
}(Employee));
var CommissionedEmployee = /** @class */ (function (_super) {
    __extends(CommissionedEmployee, _super);
    function CommissionedEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueComission = 0;
        return _this;
    }
    CommissionedEmployee.prototype.calculateSalary = function () {
        return this.salary + this.valueComission;
    };
    CommissionedEmployee.prototype.setComission = function (value) {
        this.valueComission = value;
    };
    return CommissionedEmployee;
}(Employee));
var HourlyEmployee = /** @class */ (function (_super) {
    __extends(HourlyEmployee, _super);
    function HourlyEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.salaryPerHour = 0;
        _this.workedHours = 0;
        return _this;
    }
    HourlyEmployee.prototype.calculateSalary = function () {
        return this.salaryPerHour * this.workedHours;
    };
    HourlyEmployee.prototype.setSalaryByHour = function (workedHours, priceHours) {
        this.salaryPerHour = priceHours;
        this.workedHours = workedHours;
    };
    return HourlyEmployee;
}(Employee));
var Status;
(function (Status) {
    Status[Status["occupied"] = 0] = "occupied";
    Status[Status["maintenance"] = 1] = "maintenance";
    Status[Status["available"] = 2] = "available";
})(Status || (Status = {}));
var Equipment = /** @class */ (function () {
    function Equipment(id, type, description, status) {
        this.id = 0;
        this.type = '';
        this.description = '';
        this.status = null;
        this.type = type;
        this.id = id;
        this.description = description;
        this.status = status;
    }
    Equipment.prototype.getId = function () {
        return this.id;
    };
    Equipment.prototype.getType = function () {
        return this.type;
    };
    Equipment.prototype.getDescription = function () {
        return this.description;
    };
    Equipment.prototype.setStatus = function (status) {
        this.status = status;
    };
    return Equipment;
}());
var Payment = /** @class */ (function () {
    function Payment() {
        this.enterprise = '';
    }
    Payment.prototype.setNameEnterprise = function (newName) {
        this.enterprise = newName;
    };
    Payment.prototype.getName = function () {
        return this.enterprise;
    };
    Payment.prototype.paymentEmployees = function (employee) {
        var salary = employee.calculateSalary();
        var payment = "The value of ".concat(salary, " was paid to ").concat(employee.getName(), " by enterprise ").concat(this.enterprise);
        console.log(payment);
        employee.toListPayment(payment);
    };
    return Payment;
}());
var Maintenance = /** @class */ (function () {
    function Maintenance(equipment, employee) {
        this.equipment = equipment;
        this.employee = employee;
        equipment.setStatus(Status.maintenance);
    }
    Maintenance.prototype.maintenanceEquip = function () {
        this.employee.toMaintenanceHist(this.equipment);
        var maintenance = "The equipment of type ".concat(this.equipment.getType(), " has been added to employee ").concat(this.employee.getName());
        return maintenance;
    };
    return Maintenance;
}());
var Enterprise = /** @class */ (function () {
    function Enterprise() {
        this.employeesList = [];
        this.equipmentList = [];
    }
    Enterprise.prototype.toEmployeesList = function (employee) {
        this.employeesList.push(employee);
    };
    Enterprise.prototype.toEquipmentList = function (equipment) {
        this.equipmentList.push(equipment);
    };
    Enterprise.prototype.getEmployees = function () {
        for (var _i = 0, _a = this.employeesList; _i < _a.length; _i++) {
            var employee = _a[_i];
            console.log(employee);
        }
    };
    Enterprise.prototype.getEquipment = function () {
        for (var _i = 0, _a = this.equipmentList; _i < _a.length; _i++) {
            var equipment_1 = _a[_i];
            console.log(equipment_1);
        }
    };
    return Enterprise;
}());
var employee1 = new SalariedEmployee();
employee1.setName('Vitor');
employee1.setSalary(1600);
employee1.setExtraHours(10, 110);
console.log(employee1.calculateSalary());
var employee2 = new CommissionedEmployee();
employee2.setName('Vitória');
employee2.setSalary(1700);
employee2.setComission(800);
console.log(employee2.calculateSalary());
var employee3 = new HourlyEmployee();
employee3.setName('Luut');
employee3.setSalaryByHour(170, 35);
console.log(employee3.calculateSalary());
var payment = new Payment();
payment.setNameEnterprise('Lumon');
payment.paymentEmployees(employee2);
var equipment = new Equipment(4724, 'Drill', 'Extremely useful for precise holes', Status.available);
var maintenance = new Maintenance(equipment, employee2);
maintenance.maintenanceEquip();
employee2.editMaintenance(equipment);
console.log(employee2);
