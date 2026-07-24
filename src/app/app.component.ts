import { Component } from '@angular/core';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { TrustComponent } from './sections/trust/trust.component';
import { FeaturesComponent } from './sections/features/features.component';
import { ToolsComponent } from './sections/tools/tools.component';
import { AdvantageComponent } from './sections/advantage/advantage.component';
import { PricingComponent } from './sections/pricing/pricing.component';
import { FaqComponent } from './sections/faq/faq.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    TrustComponent,
    FeaturesComponent,
    ToolsComponent,
    AdvantageComponent,
    PricingComponent,
    FaqComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
