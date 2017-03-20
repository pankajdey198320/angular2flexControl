import { Component,Directive,Input,TemplateRef,ViewContainerRef,OnInit,ComponentFactoryResolver } from '@angular/core';
@Component({
    selector:'flex-grid-column',
    template:`<td>
     <template [ngTemplateOutlet]="ref" [ngOutletContext]="data"></template>

    </td>
    `
})
export class GridColumn implements OnInit{
    @Input() Title:string;
    @Input() ref:TemplateRef<any>;
    @Input() data?:any;
    Value:string='DefaultValue';

    constructor(private cr:ViewContainerRef, private componentResolver: ComponentFactoryResolver,){
       // this.componentResolver.resolveComponentFactory()

    }
    ngOnInit(){
     //  let x= this.cr.createEmbeddedView(this.ref,null,0);
       //x.context = this.data;


       //Need to create directive to apply  dynamic content.
}
}