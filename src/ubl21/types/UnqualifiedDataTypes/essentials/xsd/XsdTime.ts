import XsdAnySimpleType from './XsdAnySimpleType';

/**
 * 
 * xsd:time
 * The type xsd:time represents a time of day in the format hh:mm:ss.sss where hh represents the hour,
 * mm the minutes, and ss.sss the seconds. An unlimited number of additional digits can be used to
 * increase the precision of fractional seconds if desired. The time is based on a 24-hour time period,
 * so hours should be represented as 00 through 24. Either of the values 00:00:00 or 24:00:00 can be used to represent midnight.
 * 
 * An optional time zone expression may be added at the end of the value. 
 * The letter Z is used to indicate Coordinated Universal Time (UTC). All other time zones are represented by their difference from
 * Coordinated Universal Time in the format +hh:mm, or -hh:mm. These values may range from -14:00 to 14:00. For example, 
 * US Eastern Standard Time, which is five hours behind UTC, is represented as -05:00. If no time zone value is present,
 * it is considered unknown; it is not assumed to be UTC
 * 
 * More info http://www.datypic.com/sc/xsd/t-xsd_time.html
 */
export default class XsdTime extends XsdAnySimpleType{
    constructor(content: string, attributtes: any){
        super(content, attributtes);
        this.validateContent();
    }

    validateContent(){
        
    }   
}