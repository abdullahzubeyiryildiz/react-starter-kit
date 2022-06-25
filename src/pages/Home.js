import { Helmet } from "react-helmet"
export default function Home() {
    return (
         <div>
            <Helmet>
                <title>Anasayfa Title</title>
                <meta  name="description" content="Anasayfa Description" />
            </Helmet>
            Home Page
         </div> 
    )
}