import { Directive, HostListener, ElementRef, Renderer2, Input, Output,EventEmitter } from '@angular/core';
import { Player } from '../model/player';
import { PlayerService } from '../services/player.service';

@Directive({
  selector: '[SetPoint]'
})
export class SetPointDirective {

  @Input() SetPoint: Player;
  image: string;
  constructor(private el?: ElementRef, private render?: Renderer2,private _player?: PlayerService) { }

  @Output() point = new EventEmitter;

  @HostListener('click')
  onclick(){
    if(this.el.nativeElement.getAttribute('value')) event.stopPropagation();
    else{
      this.image =(this.SetPoint.value == 1) ? '../assets/img/x.png' : '../assets/img/o.png';
      this.render.setStyle(this.el.nativeElement, 'background-image',`url(${this.image})`)
      this.render.setStyle(this.el.nativeElement, 'background-size',`contain`);
      this.render.setStyle(this.el.nativeElement, 'background-position',`center`);
      this.render.setStyle(this.el.nativeElement, 'background-repeat',`no-repeat`);
      this.render.setAttribute(this.el.nativeElement, 'value',`${this.SetPoint.value}`)
      this._player.changePlayer();
      this.point.emit({campo: this.el.nativeElement.getAttribute('name')});
    }
  }
}
