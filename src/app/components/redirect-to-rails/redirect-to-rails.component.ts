import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-redirect-to-rails',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './redirect-to-rails.component.html',
  styleUrl: './redirect-to-rails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedirectToRailsComponent { }
