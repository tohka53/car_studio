import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cscommerse","appId":"1:72258991932:web:4accb6c3974ac19776d039","storageBucket":"cscommerse.appspot.com","apiKey":"AIzaSyBE4Tfk1lTgl33GW-oWMitm2MgN9fVbv1w","authDomain":"cscommerse.firebaseapp.com","messagingSenderId":"72258991932"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cscommerse","appId":"1:72258991932:web:4accb6c3974ac19776d039","storageBucket":"cscommerse.appspot.com","apiKey":"AIzaSyBE4Tfk1lTgl33GW-oWMitm2MgN9fVbv1w","authDomain":"cscommerse.firebaseapp.com","messagingSenderId":"72258991932"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
