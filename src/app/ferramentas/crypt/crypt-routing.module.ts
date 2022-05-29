import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptPage } from './crypt.page';

const routes: Routes = [
  {
    path: '',
    component: CryptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptPageRoutingModule {}
