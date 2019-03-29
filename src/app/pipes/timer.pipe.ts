import { Pipe, PipeTransform } from '@angular/core';
import { MissingTranslationStrategy } from '@angular/compiler/src/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number) {
    const min: number = Math.floor(value / 60)
    return (min>0) ? min + "min" + " : " + (value-min*60) + "seg":value + "seg";
  }

}
