import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-to-rails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redirect-to-rails.component.html',
  styleUrl: './redirect-to-rails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedirectToRailsComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const url = this._router.url;
    this._document.location.href = 'http://localhost:80' + url;
  }
}
