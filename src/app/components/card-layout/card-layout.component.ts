import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate(2000, style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CardLayoutComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.search.subscribe((value) => {
      this.searchKey = value
    })
  }

  @Input() items: any[]
  searchKey: string = ''

}
