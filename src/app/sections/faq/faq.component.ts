import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  readonly openIndex = signal(0);

  readonly items: FaqItem[] = [
    {
      question: 'What is Heartcord and who is it for?',
      answer:
        'Heartcord is an AI-native workspace for product and engineering teams. It helps you write, review, and ship software with agents that understand your codebase, tools, and deployment pipelines.',
    },
    {
      question: 'Can I try Heartcord before committing to a plan?',
      answer:
        'Yes. Every account starts with a free Bronze workspace so you can explore agents, chat, and deploys before upgrading.',
    },
    {
      question: 'How does billing work for teams?',
      answer:
        'Pro and Gold plans are billed per workspace. Invite teammates, assign roles, and consolidate invoices under one organization.',
    },
    {
      question: 'Is my source code secure?',
      answer:
        'Yes. Repositories are encrypted in transit and at rest, agent sandboxes are isolated, and enterprise plans include SSO, audit logs, and private networking options.',
    },
    {
      question: 'Which tools and platforms integrate with Heartcord?',
      answer:
        'We integrate with GitHub, GitLab, Slack, Notion, VS Code, and major cloud providers — with more connectors shipping every month.',
    },
  ];

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? -1 : index));
  }
}
