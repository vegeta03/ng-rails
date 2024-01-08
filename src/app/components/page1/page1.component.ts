import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component { }
