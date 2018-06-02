import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { MainComponent } from './main/main.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { ItensComponent } from './itens/itens.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    MainComponent,
    FerramentasComponent,
    ItensComponent,
    RodapeComponent,
    ProjetoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
