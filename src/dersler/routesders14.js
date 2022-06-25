import Home from "./pages/Home"; 
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Blog404 from "./pages/blog/404";
import Page404 from "./pages/404";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AuthLayout from "./pages/auth/AuthLayout";
import HomeLayout from "./pages/HomeLayout"; 
import Login from "./pages/auth/Login";
 
const routes = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index:true,
                element: <Home />
            },
            {
                path:'contact',
                element: <Contact />
            },
            {
                path:'blog',
                element: <BlogLayout />,
                children: [
                    {
                        index:true,
                        element: <Blog />
                    },
                    {
                        path:'categories',
                        element: <Categories />
                    }, 
                    {
                        path:'post/:id/:url',
                        element: <Post />
                    }, 
                    {
                        path:'*',
                        element: <Blog404 />
                    }, 
                ]
            },
            {
                path:'profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
        ]
    },
    {
        path:'/auth',
        element: <AuthLayout />,
        children: [ 
            {
                path:'login',
                element: <Login />
            },  
        ]
    },
    {
        path:'*',
        element: <Page404 /> 
    }
]

export default routes