import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhoneNumber'})
export class FormatPhoneNumberPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if(!value){
      return;
    }
    let finalValue: string = "";
    value = value.split(" ").join("");

    for(let i = 0; i<value.length; i+=2){
      finalValue+=value.charAt(i);
      finalValue += value.charAt(i + 1);
      finalValue += " ";
    }
    finalValue = finalValue.trim();
    return finalValue;
  }
}
