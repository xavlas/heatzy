import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {AboutServiceService} from "./api/about-service.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'dashboard';
    about$: boolean;

    constructor(
        private http: HttpClient,
        private aboutService: AboutServiceService,
    ) {
    }

    ngOnInit(): void {
        this.start();
    }

    private start() {
        this.aboutService.about().pipe(
            tap(response => {
                this.about$ = response;
            }),
            catchError((error) => {
                return of(error);
            })
        ).subscribe();
    }
}


