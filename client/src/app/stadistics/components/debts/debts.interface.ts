export interface Debt {
    date: Date,
    debts_id: number,
    debtor_id: number,
    amount: number,
    payed: boolean
}

export const DEBT_TABLE_DATA_MOCK:Debt[] = [
    {date: new Date(1999), debts_id: 1, debtor_id: 1, amount: 100, payed: false},
    {date: new Date(1955), debts_id: 2, debtor_id: 2, amount: 200, payed: false},
    {date: new Date(1750), debts_id: 3, debtor_id: 3, amount: 300, payed: false},
    {date: new Date(1888), debts_id: 4, debtor_id: 4, amount: 400, payed: false},
    {date: new Date(1900), debts_id: 5, debtor_id: 5, amount: 500, payed: false}
]