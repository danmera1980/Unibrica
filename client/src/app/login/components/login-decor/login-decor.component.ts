import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-decor',
  templateUrl: './login-decor.component.html',
  styleUrls: ['./login-decor.component.scss'],
  
})
export class LoginDecorComponent implements OnInit {
  letterArray: string[] = []
  word = "Unibrica"
  
  ngOnInit(): void {
    this.createLetterArray()
  }
  
  createLetterArray () {
    this.letterArray = this.word.split('')
  }
}
