import { Component } from '@angular/core';

@Component({
  selector: 'app-advantage',
  imports: [],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.scss',
})
export class AdvantageComponent {
  readonly items = [
    {
      title: 'Pro-Level Solutions',
      body: 'Enterprise-grade workflows with the speed of a startup toolkit — agents, reviews, and deploys in one place.',
      icon: 'bolt',
    },
    {
      title: '24/7 Reliability',
      body: 'Global edge infrastructure keeps your workspace online with automatic failover and real-time health checks.',
      icon: 'clock',
    },
    {
      title: '100% Safe & Secure',
      body: 'SOC2-ready controls, encrypted secrets, and isolated sandboxes so your code never leaves a trusted boundary.',
      icon: 'shield',
    },
  ];
}
