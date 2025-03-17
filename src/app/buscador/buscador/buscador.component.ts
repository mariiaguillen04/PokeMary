import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs'

@Component({
  selector: 'app-buscador',
  standalone: false,
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements AfterViewInit, OnInit{
  ngOnInit(): void {

  }

  @ViewChild('searchInput') inputSearch?: ElementRef;

  
  @Output() searchTermChanged = new EventEmitter<string>();


  ngAfterViewInit() {
    if (this.inputSearch) {
      fromEvent<any>(this.inputSearch.nativeElement, 'keyup')
        .pipe(
          map(event => event.target.value),
          debounceTime(300),
          distinctUntilChanged()
        )
        .subscribe((term: string) => {
          this.searchTermChanged.emit(term);
          console.log('Término de búsqueda emitido:', term);
        });
    }
  }
}
