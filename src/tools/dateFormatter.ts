
const gregorian = require("weeknumber");

interface Options {
    timezone?: string, // America/Bogota, UTC .
    language?: string // es-CO, 
}

/**
 * 
 * @param ts 
 * @param options 
 */
function decomposeTime(ts: number, options?: Options) {
    options = options || {};
    options.language = options.language || "es-CO";
    options.timezone = options.timezone || "America/Bogota";

    //2018-12-4 17:12:05
    const date = new Date(new Date(ts).toLocaleString(options.language, { timeZone: options.timezone }))
    const { year, week, day } = gregorian.weekNumberYear(date);
    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRY', 'SAT', 'SUN'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',];
    return {
        year,
        monthStr: months[date.getMonth()].padStart(2, '0'),
        month: (date.getMonth() + 1).toString().padStart(2, '0'),
        week,
        dayOfWeek: day,
        dayOfWeekStr: daysOfWeek[day - 1],
        dayOfYear: gregorian.dayOfYear(date),
        dayOfMonth: date.getDate().toString().padStart(2, '0'),
        hourOfDay: date.getHours().toString().padStart(2, '0'),
        minute: date.getMinutes().toString().padStart(2, '0'),
        second: date.getSeconds().toString().padStart(2, '0'),
        milliseconds: ts.toString().slice(10)
    };
}

export {
    decomposeTime
}