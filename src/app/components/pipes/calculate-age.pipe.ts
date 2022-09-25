import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge'
})
export class CalculateAgePipe implements PipeTransform {

  transform(dateOfBirth: string): string {

    if( dateOfBirth !== ''){
      let today = new Date();
      let date = dateOfBirth.split('-');
      let dayOfBirth = parseInt(date[0]);
      let monthOfBirth = parseInt(date[1]);
      let yearOfBirhth = parseInt(date[2]);
      
      
      
      let birthday = new Date(yearOfBirhth, monthOfBirth, dayOfBirth);
      
      let age = today.getFullYear() - birthday.getFullYear();
      let m = today.getMonth() - birthday.getMonth();
  
      if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
      }
      
      return age.toString();

    } else {
      return '';
    }
    
  }

}
