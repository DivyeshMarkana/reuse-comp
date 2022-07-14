import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private appService: AppService) { }

  characters: any[] = []

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters() {
    this.appService.getCharacters(10, 0).subscribe((response) => {
      this.characters = response.data.results
    })
  }

}
