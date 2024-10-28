import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateAssetComponent } from './assets/create-asset/create-asset.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateAssetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ui';
}
