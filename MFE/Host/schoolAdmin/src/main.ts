import { initFederation } from '@angular-architects/native-federation';

console.log('http://localhost:4201/remoteEntry.json');

initFederation({
   teacher: 'http://localhost:4201/remoteEntry.json',
   student: 'http://localhost:4202/remoteEntry.json',
   library: 'http://localhost:4203/remoteEntry.json',
})
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
