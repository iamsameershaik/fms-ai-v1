import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Calendar, User, Clock, ArrowRight, Tag,
  MessageSquare, Heart, Share2, ChevronLeft, ChevronRight,
  Linkedin, Twitter
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGrid from '../components/CursorGrid';

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

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

  // Calculate category counts
  const categoryCount = blogPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryCount).map(([name, count]) => ({
    name,
    count
  }));

  // Calculate tag counts
  const tagCount = blogPosts.reduce((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const tags = Object.entries(tagCount).map(([name, count]) => ({
    name,
    count
  }));

  const popularPosts = [
    {
      title: 'Top 10 AI Implementations in 2025',
      date: 'March 5, 2025',
      views: '2.5k'
    },
    {
      title: 'The Rise of Conversational AI',
      date: 'March 1, 2025',
      views: '2.1k'
    },
    {
      title: 'AI Security Best Practices',
      date: 'February 28, 2025',
      views: '1.8k'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              Latest <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore the latest trends and innovations in AI technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
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
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button 
                        onClick={() => navigate(`/blog/filter/category/${category.name}`)}
                        className="w-full flex items-center justify-between py-2 text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {category.name}
                        <span className="glass px-2 py-1 rounded-full text-sm">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 cursor-pointer group"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium group-hover:text-purple-400 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                          <span>{post.date}</span>
                          <span>{post.views} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag.name}
                      onClick={() => navigate(`/blog/filter/tag/${tag.name}`)}
                      className="glass px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                      <Tag className="w-4 h-4" />
                      {tag.name}
                      <span className="text-purple-400">{tag.count}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-gray-300 mb-4">
                  Stay updated with our latest insights and news.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors"
                  />
                  <button className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors font-medium tracking-wide">
                    Subscribe
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/iamsameershaik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass hover:bg-white/10 transition-colors p-3 rounded-lg flex items-center justify-center"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://x.com/iamsameershaik_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass hover:bg-white/10 transition-colors p-3 rounded-lg flex items-center justify-center"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;