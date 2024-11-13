import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Odev from './pages/Odev';
import Odev2 from './pages/Odev2';
import OrnekPage from './pages/ornekPage';
import UserList from './pages/UserList';
import UserListComponents from './pages/UserListComponents';
import UserAvatarList from './pages/UserAvatarList';
import UserPage from './pages/UserPage';
import Yarisma from './pages/Yarisma';
import YarismaCozum from './pages/YarismaCozum';
import Hitopya from './pages/Hitopya';
import HitopyaCozum from './pages/HipotyaCozum';


import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/**
 * store, tüm uygulama içerisinde kullanılacak olan global sateleri içersinde barındıran ve bir değişikliği ilgili component'e bildiren provide eden bir yapı kullanır. Uygulamanın herhangi bir bileşeninden istenilen store(slice) içerisinde yer alan state değerine ulaşabilir, değiştirebilir, takibe alınabilir.
 */
root.render(
  <Provider store={store}>
  <HitopyaCozum/>
  </Provider>
);


