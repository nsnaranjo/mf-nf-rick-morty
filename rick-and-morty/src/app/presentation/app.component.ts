import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rick-and-morty';

  @ViewChild('remoteApp', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  async ngOnInit(): Promise<void> {
    try {
      const m = await loadRemoteModule('mf-rm-characters', './Component');

      console.log(m);

      const ref = this.viewContainer.createComponent(m.AppComponent);
      console.log(ref);
    } catch (error) {
      console.error('Error al cargar el módulo remoto:', error);
    }
  }
}
