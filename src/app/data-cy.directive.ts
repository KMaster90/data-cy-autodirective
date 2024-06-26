import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: 'span, div, li',
})
export class DataCyDirective {
  private readonly element = inject(ElementRef);
  private renderer2 = inject(Renderer2);

  ngOnInit() {
    if (!this.element?.nativeElement) return;
    console.log(this.element);
    const el = this.element.nativeElement;
    const {nodeName,parentElement,previousElementSibling,nextElementSibling} = el;
    const {childNodes=[],localName:parentName=''} = parentElement || {};
    const {localName:prevSiblName=''} = previousElementSibling || {};
    const {localName:nextSiblName=''} = nextElementSibling || {};
    const indexOfElInList=Array.from(childNodes).indexOf(el);
    this.renderer2.setAttribute(
      el,
      'data-cy',
      el.id?.toString()
      || `AUTOGENERATED${nodeName?`-nodeName=${nodeName}`:''}${indexOfElInList?`-ListIndex=${indexOfElInList}`:''}${prevSiblName?`-prevSiblName=${prevSiblName}`:''}${nextSiblName?`-nextSiblName=${nextSiblName}`:''}`
    );
  }
}
