import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items: any[]
  searchKey: string = ''

}
