/* tslint:disable:no-var-requires */
const gregorian = require('weeknumber');

interface Options {
  timezone?: string; // America/Bogota, UTC
}

/**
 *
 * @param ts
 * @param options
 */
function decomposeTime(ts: number, options?: Options) {
  options = options || {};
  options.timezone = options.timezone || 'America/Bogota';

  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: options.timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const dateParts = formatter.formatToParts(new Date(ts));
  const year = parseInt(dateParts.find((part) => part.type === 'year')?.value || '0', 10);
  const month = dateParts.find((part) => part.type === 'month')?.value || '00';
  const dayOfMonth = dateParts.find((part) => part.type === 'day')?.value || '00';
  const hourOfDay = dateParts.find((part) => part.type === 'hour')?.value || '00';
  const minute = dateParts.find((part) => part.type === 'minute')?.value || '00';
  const second = dateParts.find((part) => part.type === 'second')?.value || '00';

  const safeDate = new Date(`${year}-${month}-${dayOfMonth}T${hourOfDay}:${minute}:${second}`);
  const { week, day } = gregorian.weekNumberYear(safeDate);
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRY', 'SAT', 'SUN'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return {
    year,
    monthStr: months[parseInt(month, 10) - 1],
    month,
    week,
    dayOfWeek: day,
    dayOfWeekStr: daysOfWeek[day - 1],
    dayOfYear: gregorian.dayOfYear(safeDate),
    dayOfMonth,
    hourOfDay,
    minute,
    second,
    milliseconds: ts.toString().slice(10),
  };
}

export { decomposeTime };
