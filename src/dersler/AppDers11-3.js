import {SiteProvider,AuthProvider} from "./context";
import Home from "./home";
function App() {
 
    return (
      <SiteProvider>
        <AuthProvider>
            <Home />
        </AuthProvider> 
      </SiteProvider>
    ); 
}

export default App;
