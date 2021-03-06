import 'hammerjs';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MangolDemoComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { AppService } from './app.service';
import { DemoFeatureInfoComponent } from './demo/demo-featureinfo';
import { DemoFullComponent } from './demo/demo-full';
import { DemoHomeComponent } from './demo/demo-home.component';
import { DemoLayertreeComponent } from './demo/demo-layertree';
import { DemoMapComponent } from './demo/demo-map';
import { DemoMapControllersComponent } from './demo/demo-map-controllers';
import { DemoMeasureComponent } from './demo/demo-measure';
import { DemoPrintComponent } from './demo/demo-print';
import { PrettyPrintComponent } from './demo/pretty-print/pretty-print.component';
import { MangolMaterialModule } from './modules/_shared/material.module';
import { MangolModule } from './modules/mangol/mangol.module';

@NgModule({
  declarations: [
    MangolDemoComponent,
    DemoMapComponent,
    DemoMapControllersComponent,
    DemoLayertreeComponent,
    DemoPrintComponent,
    DemoFullComponent,
    DemoMeasureComponent,
    DemoMapControllersComponent,
    DemoFeatureInfoComponent,
    PrettyPrintComponent,
    DemoHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MangolMaterialModule,
    MangolModule,
    routing
  ],
  providers: [
    AppService,
    appRoutingProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [MangolDemoComponent]
})
export class MangolDemoModule {}
