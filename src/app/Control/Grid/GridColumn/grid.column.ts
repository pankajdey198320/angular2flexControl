import { Component,Directive,Input,TemplateRef,ViewContainerRef,OnInit,ComponentFactoryResolver } from '@angular/core';
@Component({
    selector:'flex-grid-column',
    template:``
})
export class GridColumn implements OnInit{
    @Input() Title:string;
    @Input() ref:TemplateRef<any>;
    @Input() data?:any;
    Value:string='DefaultValue';

    constructor( private cr: ViewContainerRef){
       // this.componentResolver.resolveComponentFactory()

    }
    ngOnInit(){
      this.cr.clear();
     let x= this.cr.createEmbeddedView(this.ref, {data:this.data} );
       //x.context = this.data;
  

       //Need to create directive to apply  dynamic content.
}
}