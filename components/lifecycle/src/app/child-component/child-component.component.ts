import { Component, EventEmitter, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserProfile } from '../models/user-profile.model';
import { UserDataService } from '../services/user-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() currentName: string = '';
  @Output() profileSubmitted = new EventEmitter<UserProfile>();

  userDataFormGroup!: FormGroup;
  searchControl = new FormControl('');
  selectedProfile: UserProfile | null = null;
  private searchSubscription: Subscription | null = null;

  constructor(private userDataService: UserDataService) {
    console.log("Constructor called!");
    // Will the input property value be updated? 
    // console.log(this.currentName);
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    // console.log(changes);
   }

  ngOnInit(): void {
    this.currentName = "Angular Meetup";
    console.log('ngOnInit called!');
    this.userDataFormGroup = new FormGroup ({
      name: new FormControl(''),
      favNum: new FormControl(''),
      favColor: new FormControl(''),
    });
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
      // console.log('ngOnDestroyed called!');
      if (this.searchSubscription) {
        this.searchSubscription.unsubscribe;
      }
  }

  /**
   * Submits the user data form and adds the new user profile to the userProfiles array.
   */
  onSubmit() {
    const userProfile = this.userDataFormGroup.value;
    this.profileSubmitted.emit(userProfile);
    // reset form after submission
    this.userDataFormGroup.reset();
  }

  /**
   * Searches for a user by name and sets the selectedProfile property to the found user profile.
   */
  searchUser() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    this.searchSubscription = this.userDataService.getUserByName(this.searchControl.value)
    .subscribe(profile => this.selectedProfile = profile);
    this.searchControl.reset();
  }
}
