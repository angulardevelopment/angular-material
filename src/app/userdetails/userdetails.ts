import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-userdetails',
  imports: [User],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.scss'
})
export class Userdetails {

}
