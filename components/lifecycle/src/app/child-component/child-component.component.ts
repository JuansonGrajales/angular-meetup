import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserProfile } from '../models/user-profile.model';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() value: string = 'message';
  count: number = 0;
  userDataFormGroup!: FormGroup;

  constructor() {
    console.log("Constructor called!");
    // Will the input property value be updated? 
    // console.log(this.value);
   }

   ngOnChanges(changes: SimpleChanges): void {
    // this.count +1;
    // console.log(this.count + ' ngOnChanges called!');
    console.log(changes);
   }

  ngOnInit(): void {
    // console.log('ngOnInit called!');
    // console.log(this.value);
    this.userDataFormGroup = new FormGroup ({
      name: new FormControl(''),
      favNum: new FormControl(''),
      email: new FormControl(''),
    });
  }
  
  ngDoCheck(): void {
    // console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
      // console.log('ngOnDestroyed called!');
  }

  onSubmit() {
    console.log("on submit");
    console.log(this.userDataFormGroup.get('age')?.value);
  }
  
}
