import { Pipe, PipeTransform } from '@angular/core';
import { TechIcon } from '../tech-icon.enum';

@Pipe({
  name: 'skillIconLocalUrl'
})
export class SkillIconLocalUrlPipe implements PipeTransform {

  transform(iconName: TechIcon): string {
    if (iconName !== null && iconName in TechIcon) {
      return TechIcon[iconName];
    }
    return "#";
  }

}
