export function addHoursToDate(hours:string):Date {
    const hoursToAdd = parseInt(hours);
    let date = new Date();
    date.setHours(date.getHours() + hoursToAdd);
    return date
}