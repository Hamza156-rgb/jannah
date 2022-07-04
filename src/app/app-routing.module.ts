import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'dunia',
    loadChildren: () => import('./dunia/dunia.module').then( m => m.DuniaPageModule)
  },
  {
    path: 'ikhlaq',
    loadChildren: () => import('./ikhlaq/ikhlaq.module').then( m => m.IkhlaqPageModule)
  },
  {
    path: 'darood',
    loadChildren: () => import('./darood/darood.module').then( m => m.DaroodPageModule)
  },
  {
    path: 'dua',
    loadChildren: () => import('./dua/dua.module').then( m => m.DuaPageModule)
  },
  {
    path: 'namaz',
    loadChildren: () => import('./namaz/namaz.module').then( m => m.NamazPageModule)
  },
  {
    path: 'manners',
    loadChildren: () => import('./manners/manners.module').then( m => m.MannersPageModule)
  },
  {
    path: 'qabar',
    loadChildren: () => import('./qabar/qabar.module').then( m => m.QabarPageModule)
  },
  {
    path: 'quran',
    loadChildren: () => import('./quran/quran.module').then( m => m.QuranPageModule)
  },
  {
    path: 'qayamat',
    loadChildren: () => import('./qayamat/qayamat.module').then( m => m.QayamatPageModule)
  },
  {
    path: 'ramzan',
    loadChildren: () => import('./ramzan/ramzan.module').then( m => m.RamzanPageModule)
  },
  {
    path: 'repentance',
    loadChildren: () => import('./repentance/repentance.module').then( m => m.RepentancePageModule)
  },
  {
    path: 'sadqah',
    loadChildren: () => import('./sadqah/sadqah.module').then( m => m.SadqahPageModule)
  },
  {
    path: 'wuzu',
    loadChildren: () => import('./wuzu/wuzu.module').then( m => m.WuzuPageModule)
  },
  {
    path: 'sickness',
    loadChildren: () => import('./sickness/sickness.module').then( m => m.SicknessPageModule)
  },
  {
    path: 'biddat',
    loadChildren: () => import('./biddat/biddat.module').then( m => m.BiddatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
