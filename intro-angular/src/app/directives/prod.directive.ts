import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appProd]'
})
export class ProdDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @Input('onSale') onSale;
  @Input('name') name;

  @HostListener('click') onClick() {
    alert(`add ${{ name }}`);
  };

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.border = '0.5px solid gray';
    this.elementRef.nativeElement.style.borderRadius = '10px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.onSale === true) {
      this.elementRef.nativeElement.style.border = '0.5px solid red';
    } else {
      this.elementRef.nativeElement.style.border = '0.5px solid #f3f3f5';
    }
  }

  ngOnInit() {
    if (this.onSale === true) {
      this.elementRef.nativeElement.style.border = '0.5px solid red';
      this.elementRef.nativeElement.style.borderRadius = '10px';
    }
    // console.log(this.onSale);
    // console.log(this.elementRef);
  }

}
