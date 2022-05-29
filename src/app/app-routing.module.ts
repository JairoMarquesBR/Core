import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./ferramentas/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./ferramentas/calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
  {
    path: 'crypt',
    loadChildren: () => import('./ferramentas/crypt/crypt.module').then( m => m.CryptPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
