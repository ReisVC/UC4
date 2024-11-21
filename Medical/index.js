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
var Age;
(function (Age) {
    Age[Age["none"] = 0] = "none";
    Age[Age["Child"] = 1] = "Child";
    Age[Age["Adult"] = 2] = "Adult";
    Age[Age["Oldman"] = 3] = "Oldman";
})(Age || (Age = {}));
var Patient = /** @class */ (function () {
    function Patient() {
        this.name = '';
        this.age = Age.none;
    }
    return Patient;
}());
var Doctor = /** @class */ (function () {
    function Doctor() {
        this.name = '';
        this.crm = '';
    }
    return Doctor;
}());
var Pediatrician = /** @class */ (function (_super) {
    __extends(Pediatrician, _super);
    function Pediatrician() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classname = 'pediatrician';
        return _this;
    }
    return Pediatrician;
}(Doctor));
var GeralClinical = /** @class */ (function (_super) {
    __extends(GeralClinical, _super);
    function GeralClinical() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classname = 'geral clinical';
        return _this;
    }
    return GeralClinical;
}(Doctor));
var Geriatric = /** @class */ (function (_super) {
    __extends(Geriatric, _super);
    function Geriatric() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classname = 'geriatric';
        return _this;
    }
    return Geriatric;
}(Doctor));
var Consultation = /** @class */ (function () {
    function Consultation(patient, speciality) {
        this.registration = new Date();
    }
    return Consultation;
}());
var Clinic = /** @class */ (function () {
    function Clinic() {
        this.clinicName = 'Doctor Clin';
    }
    Clinic.prototype.scheduleConsult = function (patient) {
        if (patient.age === Age.Child) {
            var consultation = new Consultation(patient, new Pediatrician());
            return "The ".concat(patient.name, " scheduled the consult with pediatrician on the date ").concat(consultation.registration);
        }
        else if (patient.age = Age.Adult) {
            var consultation = new Consultation(patient, new GeralClinical());
            return "The ".concat(patient.name, " scheduled the consult with geral clinical on the date ").concat(consultation.registration);
        }
        else {
            var consultation = new Consultation(patient, new Geriatric());
            return "The ".concat(patient.name, " scheduled the consult with geriatriac on the date ").concat(consultation.registration);
        }
    };
    return Clinic;
}());
var patient1 = new Patient();
patient1.name = 'Josué';
patient1.age = Age.Oldman;
var patient2 = new Patient();
patient2.name = 'Fabiano';
patient2.age = Age.Adult;
var patient3 = new Patient();
patient3.name = 'Lorenzo';
patient3.age = Age.Child;
var clinic = new Clinic;
console.log(clinic.scheduleConsult(patient2));
console.log(clinic.scheduleConsult(patient3));
