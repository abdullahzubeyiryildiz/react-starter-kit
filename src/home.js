import { memo } from "react";
import Header from "./header";
import Footer from "./Footer";

import { useAuth } from "./context";
   
 function Home() { 
    const { user } = useAuth()
    return (
        <>  
             <Header />
            App

            {user && (
                <div style={{padding:10, border: "1px solid red"}}>
                        bu alan üye giriş yapanlara gözükür
                </div>
            )}

            <Footer />
        </> 
    )
    
}

export default memo(Home)
    