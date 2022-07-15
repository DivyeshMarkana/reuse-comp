import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class CardLayoutComponent implements OnInit, OnDestroy {

  CharacterAreTrue: boolean = false
  ComicAreTrue: boolean = false
  EventAreTrue: boolean = false
  activePath: string
  @Output() routePath = new EventEmitter()

  currentRoute: Subscription

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.search.subscribe((value) => {
      this.searchKey = value
    })

    // this.currentRoute = this.service.activeRoute.subscribe((response) => {
    //   this.activePath = response
    //   // console.log(this.activePath);


    //   // switch (response) {
    //   //   case '/characters':
    //   //     this.CharacterAreTrue = true
    //   //     break;
    //   //   case '/comics':
    //   //     this.ComicAreTrue = true
    //   //     break;
    //   //   case '/events':
    //   //     this.EventAreTrue = true
    //   //     break;
    //   //   default:
    //   //     break;
    //   // }

    //   // switch (response) {
    //   //   case '/characters':
    //   //     this.activePath = 'characters'
    //   //     console.log(this.activePath);
    //   //     break;
    //   //   case '/comics':
    //   //     this.activePath = 'comics'
    //   //     console.log(this.activePath);
    //   //     break;
    //   //   case '/events':
    //   //     this.activePath = 'events'
    //   //     console.log(this.activePath);
    //   //     break;
    //   //   default:
    //   //     break;
    //   // }

    // })
  }

  ngOnDestroy(): void {
    // this.currentRoute.unsubscribe()
  }

  @Input() items: any[]
  searchKey: string = ''

  route(id: string) {
    this.routePath.emit(id)
  }

}
