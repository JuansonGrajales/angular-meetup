import { Injectable } from '@angular/core';
import { UserProfile } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userProfiles: UserProfile[] = [
    { name: 'Alice', favNumber: 42, favColor: 'Blue' },
    { name: 'Bob', favNumber: 7, favColor: 'Red' },
    { name: 'Charlie', favNumber: 15, favColor: 'Green' },
    { name: 'Diana', favNumber: 21, favColor: 'Yellow' },
    { name: 'Edward', favNumber: 33, favColor: 'Purple' }
  ]
  
  constructor() { }
}
