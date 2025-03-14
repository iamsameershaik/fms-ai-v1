import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Calendar, User, Clock, ArrowLeft, Tag,
  MessageSquare, Heart, Share2, Linkedin,
  Twitter, Facebook, Link2, ChevronRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGrid from '../components/CursorGrid';

// This would typically come from your API/database
const blogPosts = {
  'ai-customer-service-2025': {
    title: 'The Future of AI in Customer Service: 2025 Trends',
    content: `
      <h2>The Evolution of Customer Service</h2>
      <p>As we move further into 2025, artificial intelligence continues to revolutionize how businesses interact with their customers. The integration of advanced natural language processing, emotion detection, and personalized interactions has transformed the customer service landscape.</p>

      <h2>Key Innovations</h2>
      <p>Modern AI systems can now understand context, emotion, and intent with unprecedented accuracy. This enables them to provide more human-like interactions while maintaining consistency and efficiency.</p>

      <h3>1. Emotional Intelligence in AI</h3>
      <p>Today's AI systems can detect subtle emotional cues in customer communications, allowing them to adjust their responses accordingly. This emotional awareness helps create more empathetic and effective customer interactions.</p>

      <h3>2. Predictive Support</h3>
      <p>AI systems can now anticipate customer needs before they arise, enabling proactive support that prevents issues rather than just resolving them.</p>

      <h3>3. Seamless Integration</h3>
      <p>Modern AI solutions integrate perfectly with existing customer service infrastructure, creating a unified experience across all channels.</p>

      <h2>Impact on Business Operations</h2>
      <p>The implementation of AI in customer service has led to significant improvements in efficiency, cost reduction, and customer satisfaction. Businesses report average cost savings of 30% while maintaining or improving service quality.</p>

      <h2>Looking Ahead</h2>
      <p>As we look to the future, we can expect even more sophisticated AI implementations that blur the line between human and artificial intelligence in customer service.</p>
    `,
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
    author: {
      name: 'Sameer Shaik',
      image: '/assets/pfp.jpeg',
      role: 'AI Researcher and Technology Enthusiast'
    },
    date: 'March 15, 2025',
    readTime: '5 min read',
    category: 'AI Trends',
    tags: ['AI', 'Customer Service', 'Technology'],
    comments: 12,
    likes: 45
  },
  'machine-learning-retail': {
    title: 'How Machine Learning is Transforming Retail Analytics',
    content: `
      <h2>The Retail Revolution</h2>
      <p>Machine learning is fundamentally changing how retailers understand and serve their customers. From inventory management to personalized shopping experiences, AI is driving innovation across the retail sector.</p>

      <h2>Key Applications</h2>
      <p>Modern retailers are leveraging machine learning in various ways to optimize their operations and enhance customer experience.</p>

      <h3>1. Inventory Optimization</h3>
      <p>AI systems can predict demand patterns with unprecedented accuracy, helping retailers maintain optimal stock levels and reduce waste.</p>

      <h3>2. Customer Behavior Analysis</h3>
      <p>Machine learning algorithms analyze vast amounts of customer data to identify patterns and preferences, enabling personalized marketing and product recommendations.</p>

      <h3>3. Price Optimization</h3>
      <p>Dynamic pricing strategies powered by AI help retailers maximize revenue while maintaining competitiveness.</p>

      <h2>Implementation Challenges</h2>
      <p>While the benefits are clear, retailers face various challenges in implementing machine learning solutions, from data quality issues to integration with legacy systems.</p>

      <h2>Future Outlook</h2>
      <p>The retail industry is just beginning to scratch the surface of what's possible with machine learning. The coming years will bring even more innovative applications.</p>
    `,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
    author: {
      name: 'Sarah Mitchell',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      role: 'Data Science Lead'
    },
    date: 'March 12, 2025',
    readTime: '8 min read',
    category: 'Machine Learning',
    tags: ['Retail', 'Analytics', 'ML'],
    comments: 8,
    likes: 32
  },
  'chatbots-evolution': {
    title: 'The Evolution of Chatbots: From Rule-Based to AI-Powered',
    content: `
      <h2>The Journey of Conversational AI</h2>
      <p>The evolution of chatbots represents one of the most significant advances in customer service technology. From simple rule-based systems to sophisticated AI-powered conversational agents, the transformation has been remarkable.</p>

      <h2>Historical Perspective</h2>
      <p>Early chatbots were limited to simple pattern matching and predefined responses. Today's AI-powered systems can understand context, learn from interactions, and provide human-like responses.</p>

      <h3>1. First Generation: Rule-Based Systems</h3>
      <p>The earliest chatbots relied on simple if-then rules and keyword matching, offering limited functionality but laying the groundwork for future development.</p>

      <h3>2. Second Generation: Machine Learning</h3>
      <p>The introduction of machine learning enabled chatbots to learn from conversations and improve their responses over time.</p>

      <h3>3. Current Generation: AI-Powered Agents</h3>
      <p>Modern chatbots use advanced AI techniques like natural language processing and deep learning to provide sophisticated, context-aware interactions.</p>

      <h2>Current Capabilities</h2>
      <p>Today's chatbots can handle complex queries, understand multiple languages, and even detect emotional states to provide more empathetic responses.</p>

      <h2>Future Developments</h2>
      <p>The next generation of chatbots will likely feature even more advanced capabilities, including better understanding of context and more natural conversation flows.</p>
    `,
    image: 'https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?auto=format&fit=crop&q=80',
    author: {
      name: 'James Cooper',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      role: 'AI Development Lead'
    },
    date: 'March 10, 2025',
    readTime: '6 min read',
    category: 'Technology',
    tags: ['Chatbots', 'AI', 'Innovation'],
    comments: 15,
    likes: 38
  },
  'quantum-computing-breakthrough': {
    title: 'Quantum Computing Breakthrough: A New Era of Problem-Solving',
    content: `
      <h2>The Quantum Revolution</h2>
      <p>Recent breakthroughs in quantum computing stability have opened up new possibilities for solving complex problems that were previously impossible with classical computers.</p>

      <h2>Key Developments</h2>
      <p>Scientists have achieved a major milestone in quantum error correction, making quantum computers more reliable and practical for real-world applications.</p>

      <h3>1. Error Correction</h3>
      <p>New techniques in quantum error correction have significantly improved the stability and reliability of quantum computations.</p>

      <h3>2. Scalability</h3>
      <p>Researchers have developed methods to scale quantum systems while maintaining coherence, a crucial step toward practical quantum computers.</p>

      <h2>Impact on Industries</h2>
      <p>These advances are set to revolutionize fields from cryptography to drug discovery, enabling solutions to previously intractable problems.</p>

      <h2>Future Implications</h2>
      <p>As quantum computers become more practical, we can expect transformative changes across various industries and scientific disciplines.</p>
    `,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
    author: {
      name: 'Dr. Elena Rodriguez',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      role: 'Quantum Computing Researcher'
    },
    date: 'February 28, 2025',
    readTime: '7 min read',
    category: 'Quantum Computing',
    tags: ['Quantum', 'Technology', 'Innovation'],
    comments: 23,
    likes: 67
  },
  'sustainable-tech': {
    title: 'Green Computing: The Rise of Sustainable Technology',
    content: `
      <h2>Technology's Environmental Impact</h2>
      <p>As the tech industry grows, so does its environmental footprint. Companies are now pioneering innovative solutions to reduce their carbon impact while maintaining performance.</p>

      <h2>Sustainable Solutions</h2>
      <p>From energy-efficient data centers to biodegradable electronics, the industry is embracing sustainability at every level.</p>

      <h3>1. Energy Efficiency</h3>
      <p>New cooling technologies and power management systems are dramatically reducing data center energy consumption.</p>

      <h3>2. Sustainable Materials</h3>
      <p>Manufacturers are developing eco-friendly components and recycling programs to minimize electronic waste.</p>

      <h2>Industry Impact</h2>
      <p>These initiatives are not just good for the planet - they're proving to be good for business, with significant cost savings and improved public perception.</p>

      <h2>Looking Forward</h2>
      <p>The future of technology must be sustainable, and these innovations are leading the way.</p>
    `,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
    author: {
      name: 'Maya Patel',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      role: 'Sustainability Tech Lead'
    },
    date: 'February 15, 2025',
    readTime: '6 min read',
    category: 'Sustainability',
    tags: ['Green Tech', 'Environment', 'Innovation'],
    comments: 19,
    likes: 52
  },
  'cybersecurity-ai': {
    title: 'AI-Powered Cybersecurity: Defending Against Next-Gen Threats',
    content: `
      <h2>The Evolution of Cyber Threats</h2>
      <p>As cyber attacks become more sophisticated, AI-powered security systems are emerging as the primary defense against evolving threats.</p>

      <h2>AI in Cybersecurity</h2>
      <p>Machine learning algorithms are now capable of detecting and responding to threats in real-time, often before traditional security measures would notice them.</p>

      <h3>1. Threat Detection</h3>
      <p>AI systems can analyze patterns and identify potential threats with unprecedented accuracy and speed.</p>

      <h3>2. Automated Response</h3>
      <p>Machine learning enables automated responses to threats, reducing response time and minimizing damage.</p>

      <h2>Future of Security</h2>
      <p>The integration of AI in cybersecurity is not just an advantage - it's becoming a necessity for modern digital defense.</p>
    `,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    author: {
      name: 'Marcus Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      role: 'Cybersecurity Expert'
    },
    date: 'January 30, 2025',
    readTime: '8 min read',
    category: 'Cybersecurity',
    tags: ['Security', 'AI', 'Technology'],
    comments: 31,
    likes: 78
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (id && id in blogPosts) {
      setPost(blogPosts[id as keyof typeof blogPosts]);
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!post) return null;

  const relatedPosts = Object.entries(blogPosts)
    .filter(([postId]) => postId !== id)
    .map(([postId, post]) => ({ id: postId, ...post }))
    .slice(0, 2);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorGrid />
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </motion.button>

            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="glass px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author.name}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-xl mb-8"
              />
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="glass px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Engagement Section */}
            <div className="glass p-6 rounded-xl mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center gap-2 transition-colors ${
                      isLiked ? 'text-purple-400' : 'text-gray-400 hover:text-purple-400'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                    {post.likes + (isLiked ? 1 : 0)}
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                    <MessageSquare className="w-6 h-6" />
                    {post.comments}
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button
                    onClick={copyLink}
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Link2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Author Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass p-8 rounded-xl mb-12"
            >
              <div className="flex items-center gap-6">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                  <p className="text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="glass rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{relatedPost.date}</span>
                        <span className="flex items-center gap-1">
                          Read More
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;