import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCustomElements, applyPolyfills } from '@tdp/st-components-mat/dist/loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  LogLevel,
  TDPAnalyticsModule,
  TDPAuthenticationModule, TDPCacheModule,
  TDPDirectivesModule,
  TDPLoggerModule,
  TDPStorageModule
} from '@tdp/ng-commons';
import { environment } from '../environments/environment';
import { LayoutComponent } from './layout/layout.component';
import { LoaderModule } from './commons/components/loader/loader.module';
import { MenuModule } from './commons/components/menu/menu.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TDPLoggerModule.forRoot({level: [LogLevel.DEBUG]}),
    TDPStorageModule.forRoot(),
    TDPAuthenticationModule.forRoot(),
    TDPAnalyticsModule.forRoot(environment.googleAnalyticsCode),
    TDPCacheModule.forRoot(environment.cachePublicKey),
    LayoutModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

applyPolyfills().then(() => {
  defineCustomElements(window);
});
