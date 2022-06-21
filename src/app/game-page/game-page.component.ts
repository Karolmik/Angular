import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scores } from 'src/intefaces/scores';
import { GetDataService } from '../services/get-data.service';
import { GetScoresService } from '../services/get-scores.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  // @Output() changeState = new EventEmitter<boolean>()

  // @Input() userName: string = ''
  constructor(
    private _router: Router,
    private _getData: GetDataService,
    private _getScoreService: GetScoresService,
    private _route: ActivatedRoute
  ) {
    this._getScoreService.getScores().subscribe((result) => {
      this.tableScores = result;
      // console.log(result);
    });
    this.selectedColor = this._route.snapshot.params['color'];
    // this._route.params.subscribe(params => {
    //   this.selectedColor = params['color'];
    
    console.log(this.selectedColor);
  }
  public selectedColor: string = '';
  public counter: number = 0;
  // public gamePanelState: boolean = true
  public userName: string = this._getData.sendData();
  public increasePoints() {
    this.counter = this.counter + 1;
  }
  tableScores: Array<Scores> = [];

  public gameOver() {
    alert(`You'are dead Your points: ${this.counter}`);
    this.counter = 0;
    this.sec = 0;
    this.milisec = 0;
    this.isGameOver = true;
    this.isStart = false;
    clearInterval(this.interval);
  }
  public exit() {
    this._router.navigate(['/login']);
    // this.changeState.emit(this.gamePanelState);
    // window.location.reload();
  }
  public milisec: number = 0;
  public isStart: boolean = false;
  public isGameOver: boolean = false;
  public sec: number = 0;
  public interval: any = 0;

  private setInter() {
    this.milisec = this.milisec + 1;
    if (this.milisec >= 100) {
      this.milisec = 0;
      this.sec = this.sec + 1;
    }
  }

  public startTime() {
    if (!this.isStart && !this.isGameOver) {
      this.isStart = true;
      this.interval = setInterval(() => this.setInter(), 10);
    }
  }

  public stopTime() {
    if (this.isStart) {
      clearInterval(this.interval);
      this.isStart = false;
    }
  }
  public resetTime() {
    clearInterval(this.interval);
    this.milisec = 0;
    this.sec = 0;
    this.isStart = false;
    this.isGameOver = false;
  }

  ngOnInit(): void {}
}
