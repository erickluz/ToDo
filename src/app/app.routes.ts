import { Routes } from '@angular/router'
import { MainComponent } from './main/main.component'
import { ProjetoComponent } from './projeto/projeto.component'

export const ROUTES: Routes = [
    {path: '', component: MainComponent},
    {path: 'projeto', component: ProjetoComponent},    
    {path: 'projeto/:id', component: ProjetoComponent}
]