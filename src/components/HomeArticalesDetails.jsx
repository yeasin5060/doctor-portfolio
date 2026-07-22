import React from 'react'
import { articles } from './HomeRead';
import { useParams } from 'react-router-dom';

const HomeArticalesDetails = () => {
    const { slug } = useParams();
    const article = articles.find((a) => a.slug === slug);

    if (!article) return <h2>Article not found</h2>;
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <img src={article.image} alt={article.title} className="w-full rounded-3xl" />
            <p className="text-blue-600 mt-6">{article.category}</p>
            <h1 className="text-4xl font-bold mt-2">{article.title}</h1>
            <p className="text-gray-500 mt-2">
                {article.date} • {article.readTime}
            </p>
            <p className="text-gray-700 leading-8 mt-8">
                {article.content}
            </p>
        </div>
    )
}

export default HomeArticalesDetails
