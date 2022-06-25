import {Link, useSearchParams} from "react-router-dom";
import { url } from "../../utils";
import {useEffect, useState} from "react"
import { Helmet } from "react-helmet";
export default function Blog() {
    
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('search') || '')
   
    useEffect(() => {
        searchParams.set('search',search) 
        if(!search) {
            searchParams.delete('search')
        }
        setSearchParams(Object.fromEntries([...searchParams]))
    }, [search,searchParams,setSearchParams])
    
    const posts = [
        {
            id:1,
            title:'post 1',
            url: 'post-1'
        },
        {
            id:2,
            title:'post 2',
            url: 'post-2-samsun'
        }
    ]
    return (
        <div>
             <Helmet>
                <title>Blog Title</title> 
                <meta  name="description" content="Blog Description" />
            </Helmet>
             <input type="text" defaultValue={search} onChange={e => setSearch(e.target.value)} />
              <ul>
                {posts.map(post => (
                     <li key={post.id}>
                        <Link to={url('home.blog.post',{
                            id:post.id,
                            url:post.url
                            })}>Konu1</Link>
                    </li> 
                ))}
               
            </ul>
        </div>
    )
}