import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredSerachValue: string = '';
  selectedOptionValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSerachTextChanged(){
    this.searchTextChanged.emit(this.enteredSerachValue);
  }

  @Output()
  selectedOptionChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectedOptionChanged(){
    this.selectedOptionChanged.emit(this.selectedOptionValue);
  }
}
