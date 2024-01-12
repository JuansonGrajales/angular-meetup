import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() value: string = 'message';
  count: number = 0;

  constructor() {
    console.log("Constructor called!");
    // Will the input property value be updated? 
    // console.log(this.value);
   }

   ngOnChanges(changes: SimpleChanges): void {
    // this.count +1;
    console.log(this.count + ' ngOnChanges called!');
    console.log(changes);
   }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    // console.log(this.value);
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroyed called!');
  }
  
}
