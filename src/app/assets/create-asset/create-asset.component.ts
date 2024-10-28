import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-create-asset',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule],
  templateUrl: './create-asset.component.html',
  styleUrl: './create-asset.component.scss'
})
export class CreateAssetComponent {

}
