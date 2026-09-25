import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
