import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page2Component { }
