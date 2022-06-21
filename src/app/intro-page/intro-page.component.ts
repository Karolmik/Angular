import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { FormBuilder, Validators } from '@angular/forms';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
  // @Output() sendUserObject = new EventEmitter<User>()
  @Output() changeState = new EventEmitter<boolean>()

  constructor(private _router: Router, private _getData: GetDataService, public fb: FormBuilder) {}
  
  model = new User('', '', '');
  submitted: boolean = false;
  public userPanelState: boolean = false;

  // startGame() {
  //   this.changeState.emit(this.userPanelState)
  //   this._router.navigate(['/game']);
  // }
  
  onSubmit(dataFromForm: User) {
    this.submitted = true;
    this._router.navigate(['game', dataFromForm.color]);
    this._getData.getData(dataFromForm);
    console.log(dataFromForm);
    // this.sendUserObject.emit(dataFromForm);
  }
  public getUserName: string = '';
  public getUserEmail: string = '';

  getUserArray(userData: User) {
    this.getUserName = userData.userName;
    this.getUserEmail = userData.userEmail;
  }
  refresh(): void {
    window.location.reload();
  }
  
  public myForm = this.fb.group({
    userName: ['',[
      Validators.required,
      Validators.minLength(4)
    ]],
    userEmail: ['',[
      Validators.required,
      Validators.email
    ]],
    color: ['']
    
  })
  ngOnInit(): void {}

}

  
