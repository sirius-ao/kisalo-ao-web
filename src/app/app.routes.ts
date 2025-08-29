import { Routes } from '@angular/router';
import { AppModule } from './modules/module';
import { HomeScreen } from './modules/home/ui/home-screen/home-screen';

export const routes: Routes = [
    {
        path: '',
        component: AppModule,
        children: [
            { path: '', component: HomeScreen }
        ]
    }
];
