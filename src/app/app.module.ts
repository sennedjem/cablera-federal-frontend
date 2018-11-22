import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DataTableModule } from "angular-6-datatable";
import { TableModule } from 'ngx-easy-table';
import { TagInputModule } from 'ngx-chips';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/cablera-federal-frontend/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TagInputModule,
        NgxPaginationModule,
        NgxSmartModalModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DataTableModule,
        TableModule,
        NgbModule.forRoot()
    ],
    exports:[
        FormsModule,
        NgxPaginationModule,
        NgbModule
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
