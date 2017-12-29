import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //the function name needs to be exactly the same as the selector so that this will be executed depending on conditions
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef); //we add the template to the view
    }else{
      this.vcRef.clear();//remove from the view
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

}
