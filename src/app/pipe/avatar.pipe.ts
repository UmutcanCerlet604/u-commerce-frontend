import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/model';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(user: User): string {
    let v1: string
    v1 = user.firstName.substring(0,1)+user.lastName.substring(0,1)
    return v1;
  }

}
