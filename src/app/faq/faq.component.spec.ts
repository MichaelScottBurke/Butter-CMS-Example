import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FaqComponent} from './faq.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppMaterialModule} from '../_shared';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FaqComponent', () => {
    let component: FaqComponent;
    let fixture: ComponentFixture<FaqComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FaqComponent],
            imports: [
                AppMaterialModule,
                RouterTestingModule,
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FaqComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
