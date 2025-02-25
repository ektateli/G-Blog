import BlogCard from '@/components/BlogCard'
import Loading from '@/components/Loading'
import { getEvn } from '@/helpers/getEnv'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import Banner from '../components/Banner';

const Index = () => {
    const { data: blogData, loading, error } = useFetch(`${getEvn('VITE_API_BASE_URL')}/blog/blogs`, {
        method: 'get',
        credentials: 'include'
    })

    if (loading) return <Loading />
    return (
        <div>
            <div className="my-0">
                <div className="text-4xl font-extrabold text-white text-center my-3 p-4 bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg rounded-lg">
                    <h1>
                        Welcome to my blog!
                    </h1 >
                    <h2 className="mt-4">
                        Explore the latest articles and insights
                    </h2>
                </div>
            </div>
            <Banner /> {/* Add the Banner component here */}


            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-4'>
                {blogData && blogData.blog.length > 0
                    ?
                    blogData.blog.map(blog => <BlogCard key={blog._id} props={blog} />)
                    :
                    <div>Data Not Found.</div>
                }
            </div>
        </div>
    )
}

export default Index