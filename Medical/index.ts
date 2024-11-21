
enum Age {
    none,
    Child,
    Adult,
    Oldman
}

class Patient
{
    name: string = ''
    age: Age = Age.none
}

class Doctor {
    name: string = ''
    crm: string = ''
}

class Pediatrician extends Doctor
{
    classname: string = 'pediatrician'
}

class GeralClinical extends Doctor
{
    classname: string = 'geral clinical'

}

class Geriatric extends Doctor
{
    classname: string = 'geriatric'
}

class Consultation 
{
    registration: Date = new Date()

    constructor(patient: Patient, speciality: Pediatrician|GeralClinical|Geriatric) {

    }
  
}

class Clinic {
    clinicName: string = 'Doctor Clin'

    scheduleConsult(patient: Patient) {
        if(patient.age === Age.Child) {
            let consultation: Consultation = new Consultation(patient,new Pediatrician())
            return `The ${patient.name} scheduled the consult with pediatrician on the date ${consultation.registration}`;
        } else if(patient.age = Age.Adult) {
            let consultation: Consultation = new Consultation(patient, new GeralClinical())
            return `The ${patient.name} scheduled the consult with geral clinical on the date ${consultation.registration}`;
        } else {
            let consultation: Consultation = new Consultation(patient, new Geriatric())
            return `The ${patient.name} scheduled the consult with geriatriac on the date ${consultation.registration}`;
        }
    }
}

let patient1: Patient = new Patient()
patient1.name = 'Josué'
patient1.age = Age.Oldman

let patient2: Patient = new Patient()
patient2.name = 'Fabiano'
patient2.age = Age.Adult

let patient3: Patient = new Patient()
patient3.name = 'Lorenzo'
patient3.age = Age.Child

let clinic: Clinic = new Clinic

console.log(clinic.scheduleConsult(patient2))
console.log(clinic.scheduleConsult(patient3))