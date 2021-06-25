import Routers from "./Routers";
import { GlobalStorage } from "./GlobalStorage";
const App = () => (
  <GlobalStorage>
    <Routers />
  </GlobalStorage>
);

export default App;
