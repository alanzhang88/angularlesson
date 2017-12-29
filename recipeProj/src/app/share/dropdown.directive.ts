import { Directive, HostBinding, HostListener, OnInit, Input } from '@angular/core';
// import { Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open')isOpen = false;
  // isOpen = false;
  @HostListener('click') toggleOpen(){
    // if(!this.isOpen){
    //   this.render.setAttribute(this.elementRef.nativeElement,'class','btn-group open');
    // }else{
    //   this.render.setAttribute(this.elementRef.nativeElement,'class','btn-group')
    // }
    this.isOpen = !this.isOpen;
  }

  constructor(){

  }

  // constructor(private elementRef:ElementRef, private render: Renderer2){
  //
  // }

  ngOnInit(){

  }
}
