import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BehaviorSubject, skip, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MaterialModules = [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule];

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, ...MaterialModules],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnDestroy {
  @Input() label = 'Busque un item';
  inputSubject$ = new BehaviorSubject<string>('');
  @Output() inputEventEmitter = new EventEmitter<string>();
  inputSubscription!: Subscription;

  constructor() {
    this.inputSubscription = this.inputSubject$
      .pipe(skip(1), debounceTime(50), distinctUntilChanged())
      .subscribe((value) => {
        this.inputEventEmitter.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.inputSubscription.unsubscribe();
  }

  inputChange(inputValue: string): void {
    this.inputSubject$.next(inputValue);
  }
}
