import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./store";
import RouterPage from "./routerPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
/**
 * store, tüm uygulama içerisinde kullanılacak olan global sateleri içersinde barındıran ve bir değişikliği ilgili component'e bildiren provide eden bir yapı kullanır. Uygulamanın herhangi bir bileşeninden istenilen store(slice) içerisinde yer alan state değerine ulaşabilir, değiştirebilir, takibe alınabilir.
 */
root.render(
  <Provider store={store}>
    <RouterPage />
  </Provider>
);
