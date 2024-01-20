export interface Employee {
  first_name:string,
  last_name:string,
  email:string,
  phone1:number,
  phone2:number,
  address: string
}

export const EMPLOYEE_TABLE_DATA_MOCK: Employee[] = [
  {first_name:'XXXXXXX', last_name:'Lastname1', email:'XXXXXXXXXXXXXXXXXX', phone1:1234567, phone2:2345678, address:'Address1'},
  {first_name:'XXXXXXX', last_name:'Lastname2', email:'XXXXXXXXXXXXXXXXXX', phone1:1234567, phone2:2345678, address:'Address2'},
  {first_name:'XXXXXXX', last_name:'Lastname3', email:'XXXXXXXXXXXXXXXXXX', phone1:1234567, phone2:2345678, address:'Address3'},
  {first_name:'XXXXXXX', last_name:'Lastname4', email:'XXXXXXXXXXXXXXXXXX', phone1:1234567, phone2:2345678, address:'Address4'},
  {first_name:'XXXXXXX', last_name:'Lastname5', email:'XXXXXXXXXXXXXXXXXX', phone1:1234567, phone2:2345678, address:'Address5'},
  {first_name:'XXXXXXX', last_name:'Lastname6', email:'XXXXXXXXXXXXXXXXXX', phone1:1234567, phone2:2345678, address:'Address6'}
]