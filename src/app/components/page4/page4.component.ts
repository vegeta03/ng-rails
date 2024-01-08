import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page4',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page4Component { }
