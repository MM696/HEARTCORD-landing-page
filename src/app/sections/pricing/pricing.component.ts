import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  readonly annual = signal(false);

  readonly plans = computed(() => {
    const annual = this.annual();
    return [
      {
        name: 'Bronze',
        price: annual ? '$0' : '$0',
        period: 'Per Month',
        featured: false,
        features: [
          'Up to 3 projects',
          'Basic AI suggestions',
          'Community support',
          '1GB workspace storage',
        ],
      },
      {
        name: 'Pro',
        price: annual ? '$19' : '$24',
        period: 'Per Month',
        featured: true,
        features: [
          'Unlimited projects',
          'Advanced agent workflows',
          'Priority support',
          '50GB workspace storage',
          'Team collaboration',
        ],
      },
      {
        name: 'Gold',
        price: annual ? '$49' : '$59',
        period: 'Per Month',
        featured: false,
        features: [
          'Everything in Pro',
          'SSO & audit logs',
          'Dedicated success manager',
          'Custom model routing',
          'Unlimited storage',
        ],
      },
    ];
  });

  setBilling(annual: boolean): void {
    this.annual.set(annual);
  }
}
