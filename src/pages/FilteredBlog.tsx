import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Search, Calendar, User, Clock, ArrowRight, Tag,
  MessageSquare, Heart, Share2, ChevronLeft, ChevronRight,
  ArrowLeft
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGrid from '../components/CursorGrid';

const FilteredBlog = () => {
  const navigate = useNavigate();
  const { type, value } = useParams<{ type: string; value: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // This would typically come from your API/database
  const blogPosts = [
    {
      id: 'ai-customer-service-2025',
      title: 'The Future of AI in Customer Service: 2025 Trends',
      excerpt: 'Discover how artificial intelligence is revolutionizing customer service with advanced natural language processing, emotion detection, and personalized interactions.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
      author: 'Sameer Shaik',
      date: 'March 15, 2025',
      readTime: '5 min read',
      category: 'AI Trends',
      tags: ['AI', 'Customer Service', 'Technology'],
      comments: 12,
      likes: 45
    },
    {
      id: 'machine-learning-retail',
      title: 'How Machine Learning is Transforming Retail Analytics',
      excerpt: 'An in-depth look at how retailers are leveraging machine learning algorithms to predict consumer behavior and optimize inventory management.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
      author: 'Sarah Mitchell',
      date: 'March 12, 2025',
      readTime: '8 min read',
      category: 'Machine Learning',
      tags: ['Retail', 'Analytics', 'ML'],
      comments: 8,
      likes: 32
    },
    {
      id: 'chatbots-evolution',
      title: 'The Evolution of Chatbots: From Rule-Based to AI-Powered',
      excerpt: 'Explore the journey of chatbot technology, from simple rule-based systems to sophisticated AI-powered conversational agents.',
      image: 'https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?auto=format&fit=crop&q=80',
      author: 'James Cooper',
      date: 'March 10, 2025',
      readTime: '6 min read',
      category: 'Technology',
      tags: ['Chatbots', 'AI', 'Innovation'],
      comments: 15,
      likes: 38
    },
    {
      id: 'quantum-computing-breakthrough',
      title: 'Quantum Computing Breakthrough: A New Era of Problem-Solving',
      excerpt: 'Discover how recent advances in quantum computing stability are revolutionizing complex problem-solving capabilities across industries.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
      author: 'Dr. Elena Rodriguez',
      date: 'February 28, 2025',
      readTime: '7 min read',
      category: 'Quantum Computing',
      tags: ['Quantum', 'Technology', 'Innovation'],
      comments: 23,
      likes: 67
    },
    {
      id: 'sustainable-tech',
      title: 'Green Computing: The Rise of Sustainable Technology',
      excerpt: 'Explore how the tech industry is innovating to reduce its environmental impact while maintaining performance and reliability.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
      author: 'Maya Patel',
      date: 'February 15, 2025',
      readTime: '6 min read',
      category: 'Sustainability',
      tags: ['Green Tech', 'Environment', 'Innovation'],
      comments: 19,
      likes: 52
    },
    {
      id: 'cybersecurity-ai',
      title: 'AI-Powered Cybersecurity: Defending Against Next-Gen Threats',
      excerpt: 'Learn how artificial intelligence is revolutionizing cybersecurity, enabling real-time threat detection and automated response systems.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
      author: 'Marcus Chen',
      date: 'January 30, 2025',
      readTime: '8 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'AI', 'Technology'],
      comments: 31,
      likes: 78
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    if (type === 'category') {
      return post.category === value;
    } else if (type === 'tag') {
      return post.tags.includes(value);
    }
    return false;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorGrid />
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Posts
            </button>

            <h1 className="text-4xl font-bold mb-6 text-center">
              {type === 'category' ? 'Category:' : 'Tag:'}{' '}
              <span className="text-gradient">{value}</span>
            </h1>
            <p className="text-xl text-gray-300 text-center mb-12">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
            </p>

            <div className="space-y-12">
              {currentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <button
                        onClick={() => navigate(`/blog/filter/category/${post.category}`)}
                        className="glass px-3 py-1 rounded-full hover:bg-white/10 transition-colors"
                      >
                        {post.category}
                      </button>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2 
                      className="text-2xl font-bold mb-4 hover:text-purple-400 transition-colors cursor-pointer"
                      onClick={() => navigate(`/blog/${post.id}`)}
                    >
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                          <MessageSquare className="w-5 h-5" />
                          {post.comments}
                        </button>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                          <Heart className="w-5 h-5" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                          <Share2 className="w-5 h-5" />
                          Share
                        </button>
                      </div>
                      <button 
                        onClick={() => navigate(`/blog/${post.id}`)}
                        className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                      >
                        Read More
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button 
                  className={`glass p-2 rounded-lg transition-colors ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
                  }`}
                  onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        currentPage === number
                          ? 'bg-purple-600 text-white'
                          : 'glass hover:bg-white/10'
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
                <button 
                  className={`glass p-2 rounded-lg transition-colors ${
                    currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
                  }`}
                  onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FilteredBlog;