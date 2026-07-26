import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-advantage',
  imports: [],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.scss',
})
export class AdvantageComponent implements AfterViewInit {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly inView = signal(false);

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

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.inView.set(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView.set(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
