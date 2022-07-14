import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items: any[]
  searchKey: string = ''

}
