import { Routes } from '@angular/router';
import { AppModule } from './modules/module';
import { HomeScreen } from './modules/home/ui/home-screen/home-screen';
import { AppAuth } from './modules/auth/auth';
import { SignInScreen } from './modules/auth/sign-in.screen/sign-in.screen';
import { SignUpScreen } from './modules/auth/sign-up.screen/sign-up.screen';
import { StepsService } from './modules/steps-services/ui/steps-service';
import { DetalhesSolicitacao } from './modules/steps-services/ui/detalhes-solicitacao/detalhes-solicitacao';

export const routes: Routes = [
    {
        path: '',
        component: AppModule,
        children: [
            { path: '', component: HomeScreen }
        ]
    },
    {
        path: 'auth',
        component: AppAuth,
        children: [
            {path: 'signIn', component: SignInScreen},
            {path: 'signUp', component: SignUpScreen}
        ]
    },
    {
        path: 'steps-service',
        component: StepsService,
       
    },
    {
        path: 'detalhes-solicitacao',
        component: DetalhesSolicitacao
    }

];
