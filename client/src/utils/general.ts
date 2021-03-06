/**
 * Created by XD on 2016/9/10.
 */
const protoObj2String:Function=(val:any)=>Object.prototype.toString.call(val);
const DEFAULT_DATE_FORMAT = "yyyy-MM-dd hh:mm:ss";
type VariableType = "Object"|"Number"|"Null"|"String"|"Boolean"|"Undefined"|"Array";

export function getType(val):string{
    return protoObj2String(val).replace(/^\[object (\w+)\]$/ig,'$1').toLowerCase();
}

export function isTargetType(val:any,...targetArr:VariableType[]){
    return targetArr.some((target:VariableType)=>{
        return protoObj2String(val) ===`[object ${target}]`;
    })
}

export function isUndefined(val:any):boolean{
    return typeof val==='undefined';
}

export function isEmpty(val:any):boolean{
    if(val==null||val===""){
        return true;
    }
    return false;
}

export function isString(val:any):boolean{
    return typeof val==='string';
}

export function objectLength(obj: Object) {
    return Object.keys(obj).length;
}

export function formatDate(date: Date, format: string = DEFAULT_DATE_FORMAT) {
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

export function isObject(val: any): boolean {
    return Object.prototype.toString.call(val) === `[object Object]`;
}

export enum StringComparison{

    //忽略大小写
    OrdinalIgnoreCase=0
}

export function equal(a:string,b:string,stringComparison?:StringComparison){
    switch (stringComparison){
        case StringComparison.OrdinalIgnoreCase:
            if(b.toLowerCase()===a.toLowerCase()){
                return true;
            }
        default:
            if(a===b){
                return true;
            }
    }
    return false;
}