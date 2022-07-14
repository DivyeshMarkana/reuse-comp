import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {


  items: any[] = []
  constructor(private route: ActivatedRoute, private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']

    switch (this.appService.category) {
      case 'characters':
        this.getCharacterById(id)
        break;
      case 'comics':
        this.getComicById(id)
        break;
      case 'events':
        this.getEventById(id)
        break;

      default:
        break;
    }

    // this.getCharacterById(id)
    // this.getComicById(id)
    // this.getEventById(id)
  }

  getCharacterById(id: number) {
    this.appService.getCharacterID(id).subscribe((response) => {
      this.items = response.data.results
    })
  }

  getComicById(id: number) {
    this.appService.getComicID(id).subscribe((response) => {
      this.items = response.data.results
    })
  }

  getEventById(id: number) {
    this.appService.getEventID(id).subscribe((response) => {
      this.items = response.data.results
    })
  }


  // loadItem() {
  //   url = 'https://gateway.marvel.com/v1/public/characters/428?ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146'
  // }


}
