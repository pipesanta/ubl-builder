import XsdAnySimpleType from './XsdAnySimpleType';

/**
 *
 * xsd:date
 * The type xsd:date represents a Gregorian calendar date in the format CCYY-MM-DD where CC represents the century, YY the year,
 * MM the month and DD the day. No left truncation is allowed for any part of the date. To represent years later than 9999,
 * additional digits can be added to the left of the year value, but extra leading zeros are not permitted. To represent years
 * before 0001, a preceding minus sign ("-") is allowed. The year 0000 is not a valid year in the Gregorian calendar.
 *
 * An optional time zone expression may be added at the end. The letter Z is used to indicate Coordinated Universal Time (UTC).
 * All other time zones are represented by their difference from Coordinated Universal Time in the format +hh:mm, or -hh:mm.
 * These values may range from -14:00 to 14:00. For example, US Eastern Standard Time, which is five hours behind UTC, is represented as -05:00.
 * If no time zone value is present, it is considered unknown; it is not assumed to be UTC.
 * More info http://www.datypic.com/sc/xsd/t-xsd_date.html
 */
export default class XsdDate extends XsdAnySimpleType {
  constructor(content: string, attributtes?: any) {
    super(content, attributtes);
    this.validateContent();
  }
}
