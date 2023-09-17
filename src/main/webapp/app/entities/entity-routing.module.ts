import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'book',
        data: { pageTitle: 'bookstoreMonoApp.book.home.title' },
        loadChildren: () => import('./book/book.module').then(m => m.BookModule),
      },
      {
        path: 'customer',
        data: { pageTitle: 'bookstoreMonoApp.customer.home.title' },
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
      },
      {
        path: 'shopping-cart',
        data: { pageTitle: 'bookstoreMonoApp.shoppingCart.home.title' },
        loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
      },
      {
        path: 'order',
        data: { pageTitle: 'bookstoreMonoApp.order.home.title' },
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
