import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

@Component({
  selector: 'app-characters-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './characters-table.component.html',
  styleUrl: './characters-table.component.scss'
})
export class CharactersTableComponent {
  characters: Character[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get<any>(`https://rickandmortyapi.com/api/character/?page=1`)
      .subscribe(response => {
        this.characters = response.results;
        console.log('Characters:', this.characters);
      });
  }
}
