class Professional 
{
    name: string = ''
    contact: string = ''
}

class Doctor extends Professional
{
    crm: string = ''
    specialty: string = ''
}

class Nurse extends Professional
{
    section: string = ''
    registration: string = ''
}

class Destist extends Professional
{
    area: string = ''
    cro: number = 0
}

class Patient 
{
    name: string = ''
    cpf: string = ''
    birth: Date = new Date()
    description: string = ''
    appointment: Array<Consultation> = []

}

class Consultation {
    consultId: Number = 0

    scheduleConsultation(professional: Professional, patient: Patient, date: Date, consult: Consultation) {
        console.log(`The professional ${professional.name} will receive the patience ${patient.name} on the date ${date}`)
        patient.appointment.push(consult)
    }

}

let dentist: Destist = new Destist()
dentist.name = 'Rattattouille'
dentist.cro = 244442
dentist.contact = '51 99090-8080'
dentist.area = 'Odontology'

let patient: Patient = new Patient()
patient.name = 'Christopher "The Notorious BIG" Wallace'
patient.cpf = '123.123.123-12'
patient.description = 'Has a intense pain in his mouth, probably he got a shot'
patient.birth = new Date('1972-05-21')

let consult: Consultation = new Consultation()
consult.consultId = 12255
consult.scheduleConsultation(dentist, patient, new Date('2024-11-10'), consult)
console.log(patient)
console.log(dentist)