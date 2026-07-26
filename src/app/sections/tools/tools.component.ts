import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-tools',
  imports: [],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
})
export class ToolsComponent implements AfterViewInit {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly inView = signal(false);

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
      { threshold: 0.2, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(el);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
