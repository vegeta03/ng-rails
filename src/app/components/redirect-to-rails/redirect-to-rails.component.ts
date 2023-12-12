import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-redirect-to-rails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redirect-to-rails.component.html',
  styleUrl: './redirect-to-rails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedirectToRailsComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.document.location.href = 'http://localhost:80/page3';
  }
}
