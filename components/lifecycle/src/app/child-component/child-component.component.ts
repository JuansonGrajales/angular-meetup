import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserProfile } from '../models/user-profile.model';
import { UserDataService } from '../services/user-data.service';

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
  searchControl = new FormControl('');
  selectedProfile: UserProfile | null = null;

  constructor(private userDataService: UserDataService) {
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
      favColor: new FormControl(''),
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
    this.userDataService.userProfiles.push(
      { name: this.userDataFormGroup.get('name')?.value,
        favNumber: this.userDataFormGroup.get('favNum')?.value,
        favColor: this.userDataFormGroup.get('favColor')?.value
      }
    );
    this.userDataFormGroup.reset();
  }

  searchUser() {
    const searchTerm = this.searchControl.value;
    this.selectedProfile = this.getUserByName(searchTerm);
  }

  getUserByName(name: string): UserProfile | null {
    return this.userDataService.userProfiles.find(
      profile => profile.name.toLowerCase() === name.toLowerCase()
      ) || null;
  }
}
