import { AfterViewInit, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit, AfterViewInit {

  sections!: any
  activeFragment = signal<string | null>(null);

  ngOnInit(): void {
    this.sections = document.querySelectorAll('section');
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          this.activeFragment.set(id);
        }
      });
    }, { threshold: 0.8 });

    this.sections.forEach((section: any) => observer.observe(section));
  }

  show(id: string) {
    document.getElementById(id)?.scrollIntoView();    
  }
}
