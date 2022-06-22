import Home from "./home";
import SiteProvider from "./context/SiteContext";
import AuthProvider from "./context/AuthContext";
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
