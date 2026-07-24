import { Component } from '@angular/core';

@Component({
  selector: 'app-trust',
  imports: [],
  templateUrl: './trust.component.html',
  styleUrl: './trust.component.scss',
})
export class TrustComponent {
  readonly logos = [
    'NEXUS',
    'ORBITAL',
    'STACKLY',
    'VERTEX',
    'LUNAR',
    'APEX',
  ];
}
