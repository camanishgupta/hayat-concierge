import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Luxury Wellness Retreats in Phuket",
    excerpt: "Discover the most exclusive wellness sanctuaries offering transformative experiences in Thailand's pearl of the Andaman Sea.",
    date: "May 10, 2023",
    readTime: "8 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "A Guide to Bangkok's Premier Medical Facilities",
    excerpt: "Navigate Thailand's world-class medical infrastructure with our insider's guide to the top hospitals and specialists in Bangkok.",
    date: "June 22, 2023",
    readTime: "12 min read",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "The Ultimate Luxury Island-Hopping Itinerary",
    excerpt: "Experience Thailand's pristine island paradises in ultimate comfort with our curated private yacht journey through the Andaman.",
    date: "July 15, 2023",
    readTime: "10 min read",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 4,
    title: "Thailand's Hidden Luxury Villa Retreats",
    excerpt: "Escape to secluded sanctuaries of luxury nestled in Thailand's most breathtaking landscapes, from mountain hideaways to beachfront estates.",
    date: "August 3, 2023",
    readTime: "9 min read",
    category: "Accommodation",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    title: "Culinary Journeys: Thailand's Michelin Starred Experiences",
    excerpt: "Embark on a gastronomic adventure through Thailand's most acclaimed restaurants and unique dining experiences.",
    date: "September 18, 2023",
    readTime: "7 min read",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 6,
    title: "The Insider's Guide to Thailand's Luxury Shopping",
    excerpt: "From bespoke tailoring to exclusive handicrafts, discover the finest shopping experiences Thailand has to offer discerning clients.",
    date: "October 5, 2023",
    readTime: "6 min read",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }
];

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(blogPosts);

  const categories = ["All", "Wellness", "Medical", "Travel", "Accommodation", "Dining", "Lifestyle"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter posts by search input and category
    let filteredPosts = blogPosts;
    
    if (filter) {
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(filter.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(filter.toLowerCase())
      );
    }
    
    if (activeCategory !== "All") {
      filteredPosts = filteredPosts.filter(post => post.category === activeCategory);
    }
    
    setVisiblePosts(filteredPosts);
  }, [filter, activeCategory]);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <span 
            className={cn(
              "inline-block py-1 px-3 bg-navy/10 text-navy rounded-full text-sm font-medium mb-6 opacity-0 transform translate-y-4 transition-all duration-700",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            Our Itineraries
          </span>
          <h1 
            className={cn(
              "heading-xl hero-text-gradient mb-6 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            Insights & Inspirations
          </h1>
          <p 
            className={cn(
              "subheading mx-auto opacity-0 transform translate-y-4 transition-all duration-700 delay-200",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            Discover curated travel guides, wellness insights, and insider knowledge for a truly exceptional Thai experience.
          </p>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="container mx-auto px-6 mb-12">
        <div 
          className={cn(
            "glass-card p-6 mb-10 opacity-0 transform translate-y-4 transition-all duration-700 delay-300",
            { "opacity-100 translate-y-0": isLoaded }
          )}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/60 transition-all"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/60 transition-all md:w-1/4"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Category Pills */}
        <div 
          className={cn(
            "flex flex-wrap gap-2 mb-10 opacity-0 transform translate-y-4 transition-all duration-700 delay-400",
            { "opacity-100 translate-y-0": isLoaded }
          )}
        >
          {categories.map(category => (
            <button
              key={category}
              className={cn(
                "py-1 px-4 rounded-full text-sm font-medium transition-all",
                activeCategory === category 
                  ? "bg-navy text-white shadow-md" 
                  : "bg-white text-navy/70 hover:bg-white/80 hover:text-navy border border-navy/10"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.length > 0 ? (
            visiblePosts.map((post, index) => (
              <Link 
                to={`/blog/${post.id}`} 
                key={post.id}
                className={cn(
                  "glass-card overflow-hidden flex flex-col animated-card opacity-0 transform translate-y-8 transition-all duration-700",
                  { "opacity-100 translate-y-0": isLoaded }
                )}
                style={{ transitionDelay: `${300 + (index * 100)}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium bg-navy/10 text-navy py-1 px-2 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="heading-md mb-3 text-navy">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-navy font-medium flex items-center gap-1 text-sm">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <h3 className="heading-md mb-2 text-navy">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="container mx-auto px-6 py-16 mb-16">
        <div 
          className={cn(
            "bg-navy text-white rounded-2xl p-10 text-center opacity-0 transform translate-y-8 transition-all duration-700 delay-600",
            { "opacity-100 translate-y-0": isLoaded }
          )}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4 text-white">Stay Updated</h2>
            <p className="text-white/70 mb-8">
              Subscribe to our newsletter for exclusive insights, travel tips, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-5 py-3 rounded-full border-2 border-white/20 bg-white/10 focus:outline-none focus:border-white/30 text-white placeholder:text-white/50"
              />
              <button className="whitespace-nowrap bg-gold hover:bg-gold/90 text-navy py-3 px-6 rounded-full transition-all font-medium">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
