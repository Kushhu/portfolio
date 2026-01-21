import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
    selector: 'app-ideas',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ideas.component.html',
    styleUrls: ['./ideas.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdeasComponent implements OnInit {
    selectedCategory: string = 'all';
    categories: string[] = ['all', 'AI/ML', 'EdTech', 'Developer Tools', 'Backend'];
    
    portfolioService = inject(PortfolioService);
    ideas$ = this.portfolioService.getIdeas();

    ngOnInit(): void {
        // Ideas loaded through service
    }

    filterIdeas(category: string): void {
        this.selectedCategory = category;
    }

    getFilteredIdeas(ideas: any[]): any[] {
        if (this.selectedCategory === 'all') return ideas;
        return ideas.filter((i) => i.category === this.selectedCategory);
    }
}
