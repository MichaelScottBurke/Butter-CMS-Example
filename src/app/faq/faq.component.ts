import {Component, OnInit} from '@angular/core';
import {butterService} from '../_services';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

    constructor() {
    }

    public faq: any = {
        items: [],
        title: 'FAQ'
    };

    ngOnInit() {
        butterService.content.retrieve(['faq_headline', 'faq_items'])
            .then((res) => {
                console.log(res.data.data);
                this.faq.title = res.data.data.faq_headline;
                this.faq.items = res.data.data.faq_items;
            });
    }
}
