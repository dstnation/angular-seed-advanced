// nativescript
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptHttpModule, NativeScriptRouterModule, RouterExtensions as TNSRouterExtensions } from 'nativescript-angular';

// angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Http } from '@angular/http';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// app
import { WindowService, ConsoleService, RouterExtensions, AppService } from './app/frameworks/core/index';
import { AppComponent } from './app/components/app.component';
import { routes } from './app/components/app.routes';

// feature modules
import { CoreModule } from './app/frameworks/core/core.module';
import { AppReducer } from './app/frameworks/ngrx/index';
import { AnalyticsModule } from './app/frameworks/analytics/analytics.module';
import { MultilingualEffects } from './app/frameworks/i18n/index';
import { SampleModule } from './app/frameworks/sample/sample.module';
import { NameListEffects } from './app/frameworks/sample/index';
import { ComponentsModule, cons } from './components.module';

// {N} custom app specific
import { WindowNative, NSAppService } from './shared/core/index';
import { NS_ANALYTICS_PROVIDERS } from './shared/nativescript/index';

/**
 * Config
 * Seed provided configuration options
 */
import { Config } from './app/frameworks/core/index';
import { Page } from 'ui/page';
Config.PageClass = Page;

// (required) platform target (allows component decorators to use the right view template)
Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

// (optional) log level - defaults to no logging if not set
Config.DEBUG.LEVEL_4 = true;

// (optional) custom i18n language support
// example of how you can configure your own language sets
// you can use the AppConfig class or build something similar into your own framework
import { AppConfig } from './app/frameworks/sample/services/app-config';
import { MultilingualService } from './app/frameworks/i18n/services/multilingual.service';
MultilingualService.SUPPORTED_LANGUAGES = AppConfig.SUPPORTED_LANGUAGES;

@NgModule({
  imports: [
    CoreModule.forRoot([
      { provide: WindowService, useClass: WindowNative },
      { provide: ConsoleService, useFactory: (cons) }
    ]),
    AnalyticsModule,
    ComponentsModule,
    NativeScriptRouterModule.forRoot(<any>routes),
    StoreModule.provideStore(AppReducer),
    EffectsModule.run(MultilingualEffects),
    EffectsModule.run(NameListEffects)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    NS_ANALYTICS_PROVIDERS,
    { provide: RouterExtensions, useClass: TNSRouterExtensions },
    { provide: AppService, useClass: NSAppService },
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class NativeModule { }