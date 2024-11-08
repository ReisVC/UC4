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
var Professional = /** @class */ (function () {
    function Professional() {
        this.name = '';
        this.contact = '';
    }
    return Professional;
}());
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.crm = '';
        _this.specialty = '';
        return _this;
    }
    return Doctor;
}(Professional));
var Nurse = /** @class */ (function (_super) {
    __extends(Nurse, _super);
    function Nurse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.section = '';
        _this.registration = '';
        return _this;
    }
    return Nurse;
}(Professional));
var Destist = /** @class */ (function (_super) {
    __extends(Destist, _super);
    function Destist() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.area = '';
        _this.cro = 0;
        return _this;
    }
    return Destist;
}(Professional));
var Patient = /** @class */ (function () {
    function Patient() {
        this.name = '';
        this.cpf = '';
        this.birth = new Date();
        this.description = '';
        this.appointment = [];
    }
    return Patient;
}());
var Consultation = /** @class */ (function () {
    function Consultation() {
        this.consultId = 0;
    }
    Consultation.prototype.scheduleConsultation = function (professional, patient, date, consult) {
        console.log("The professional ".concat(professional.name, " will receive the patience ").concat(patient.name, " on the date ").concat(date));
        patient.appointment.push(consult);
    };
    return Consultation;
}());
var dentist = new Destist();
dentist.name = 'Rattattouille';
dentist.cro = 244442;
dentist.contact = '51 99090-8080';
dentist.area = 'Odontology';
var patient = new Patient();
patient.name = 'Christopher "The Notorious BIG" Wallace';
patient.cpf = '123.123.123-12';
patient.description = 'Has a intense pain in his mouth, probably he got a shot';
patient.birth = new Date('1972-05-21');
var consult = new Consultation();
consult.consultId = 12255;
consult.scheduleConsultation(dentist, patient, new Date('2024-11-10'), consult);
console.log(patient);
console.log(dentist);
