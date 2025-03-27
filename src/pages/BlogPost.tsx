
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Clock, Calendar, User, Tag, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample blog post data - would typically come from an API
const blogPostsData = [
  {
    id: "1",
    title: "Top 5 Luxury Wellness Retreats in Phuket",
    content: `
      <p>Thailand has long been regarded as a premier destination for wellness seekers around the world. The combination of traditional healing practices, world-class facilities, and the natural beauty of its landscapes creates the perfect environment for rejuvenation and transformation.</p>
      
      <p>Phuket, in particular, has emerged as a haven for luxury wellness retreats that cater to discerning travelers seeking both opulence and authenticity in their healing journey. Here, we explore five exceptional wellness sanctuaries that represent the pinnacle of Thai hospitality and holistic care.</p>
      
      <h2>1. Amanpuri Wellness Centre</h2>
      
      <p>Nestled on Phuket's peaceful west coast, Amanpuri's Wellness Centre is the epitome of exclusive wellness. Their holistic programs combine ancient Thai healing techniques with cutting-edge medical diagnostics to create truly personalized wellness journeys.</p>
      
      <p>What sets Amanpuri apart is their integration of Traditional Chinese Medicine, Ayurvedic treatments, and contemporary Western modalities delivered by world-renowned practitioners in a setting of unparalleled luxury.</p>
      
      <h2>2. Keemala Bird's Nest Pool Villas</h2>
      
      <p>For those seeking wellness with a touch of whimsy, Keemala's Bird's Nest Pool Villas offer a unique retreat. Suspended among the rainforest canopy, these architectural marvels provide both privacy and connection to nature.</p>
      
      <p>Keemala's wellness programs focus on traditional Mayan, Native American, Chinese, and Thai healing practices. Their signature "Harmonious Healing" package includes raindrop healing therapy, chakra balancing, and bespoke spa treatments using organic, locally-sourced ingredients.</p>
      
      <h2>3. Banyan Tree Spa Sanctuary</h2>
      
      <p>The Banyan Tree Spa Sanctuary elevates the wellness experience through its dedicated Sanctuary Villas designed specifically for wellness-focused stays. Each morning begins with a personal wellness assessment followed by tailored activities ranging from yoga sessions to nutritional consultations.</p>
      
      <p>Their "Sense of Rejuvenation" program incorporates traditional Thai massage, herbal remedies, and mindfulness practices delivered by therapists trained at the renowned Banyan Tree Spa Academy.</p>
      
      <h2>4. Rosewood Phuket Asaya</h2>
      
      <p>Rosewood's Asaya wellness concept takes an integrated approach to well-being. The beachfront retreat offers personalized programs that address physical, emotional, and nutritional health through a combination of alternative therapies, fitness regimens, and specialized treatments.</p>
      
      <p>Their "Wellness Ateliers" feature expert practitioners who create bespoke wellness experiences ranging from sound healing to cognitive rebalancing sessions.</p>
      
      <h2>5. Trisara's Jara Spa</h2>
      
      <p>Set within the grounds of the exclusive Trisara resort, Jara Spa draws inspiration from Phuket's royal healing heritage. Their signature "Royal Trisara" treatment incorporates traditional Thai royal court therapies passed down through generations.</p>
      
      <p>What makes Jara Spa exceptional is their six-hand massage ritual performed by three therapists working in perfect synchrony—a truly indulgent experience reserved for those seeking the ultimate in luxury wellness.</p>
      
      <h2>Conclusion</h2>
      
      <p>These five exceptional wellness sanctuaries represent the pinnacle of luxury healing experiences in Phuket. Each offers a unique approach to wellness while maintaining an unwavering commitment to excellence, privacy, and transformative results.</p>
      
      <p>For travelers seeking a wellness journey that transcends the ordinary, these retreats provide not just world-class treatments but comprehensive programs designed to inspire lasting changes in well-being.</p>
      
      <p>Through our concierge services, Bespoke Thai Journeys can arrange exclusive access to these premium wellness experiences, ensuring your journey to well-being is as seamless as it is transformative.</p>
    `,
    date: "May 10, 2023",
    readTime: "8 min read",
    author: "Emma Thompson",
    authorRole: "Wellness Expert",
    category: "Wellness",
    tags: ["Wellness", "Luxury Travel", "Spas", "Retreats", "Phuket"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    relatedPosts: [2, 3, 5]
  },
  {
    id: "2",
    title: "A Guide to Bangkok's Premier Medical Facilities",
    content: `<p>Bangkok has established itself as a global leader in medical tourism, offering world-class healthcare facilities that combine cutting-edge technology with Thailand's renowned hospitality.</p>
    <p>This comprehensive guide explores the capital's most prestigious medical institutions and how our concierge services can provide you with seamless access to these facilities.</p>`,
    date: "June 22, 2023",
    readTime: "12 min read",
    author: "Dr. Robert Chen",
    authorRole: "Medical Tourism Consultant",
    category: "Medical",
    tags: ["Medical Tourism", "Healthcare", "Bangkok", "Hospitals"],
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    relatedPosts: [1, 4, 6]
  },
  {
    id: "3",
    title: "The Ultimate Luxury Island-Hopping Itinerary",
    content: `<p>Thailand's Andaman Sea is dotted with some of the world's most breathtaking islands, each offering unique landscapes and experiences.</p>
    <p>This carefully crafted itinerary takes you on an exclusive journey through Thailand's island paradises aboard a private yacht, combining adventure with uncompromising luxury.</p>`,
    date: "July 15, 2023",
    readTime: "10 min read",
    author: "Michael Thompson",
    authorRole: "Travel Specialist",
    category: "Travel",
    tags: ["Island Hopping", "Luxury Travel", "Yachting", "Andaman"],
    image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    relatedPosts: [1, 4, 5]
  },
  {
    id: "4",
    title: "Thailand's Hidden Luxury Villa Retreats",
    content: `<p>Beyond Thailand's well-known luxury resorts lie secluded private villas that offer unparalleled exclusivity and personalized service.</p>
    <p>From mountaintop hideaways in Chiang Mai to oceanfront estates in Koh Samui, discover Thailand's most exceptional private accommodations and how to access them.</p>`,
    date: "August 3, 2023",
    readTime: "9 min read",
    author: "Sarah Johnson",
    authorRole: "Luxury Accommodation Expert",
    category: "Accommodation",
    tags: ["Luxury Villas", "Private Estates", "Exclusive Accommodations"],
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    relatedPosts: [2, 3, 6]
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundPost = blogPostsData.find(post => post.id === id);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Get related posts
      if (foundPost.relatedPosts) {
        const related = blogPostsData
          .filter(p => foundPost.relatedPosts.includes(Number(p.id)))
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar />
        <div className="container mx-auto px-6 pt-40 pb-20 text-center">
          <h1 className="heading-lg mb-6 text-navy">Post not found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="button-primary inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Journal
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <Link 
            to="/blog" 
            className={cn(
              "inline-flex items-center gap-2 text-navy/70 hover:text-navy transition-colors mb-6 opacity-0 transform translate-y-4 transition-all duration-700",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            <ArrowLeft size={16} />
            Back to Journal
          </Link>
          
          <span 
            className={cn(
              "inline-block py-1 px-3 bg-navy/10 text-navy rounded-full text-sm font-medium mb-4 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            {post.category}
          </span>
          
          <h1 
            className={cn(
              "heading-xl hero-text-gradient mb-6 opacity-0 transform translate-y-4 transition-all duration-700 delay-200",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            {post.title}
          </h1>
          
          <div 
            className={cn(
              "flex flex-wrap justify-center gap-4 mb-8 opacity-0 transform translate-y-4 transition-all duration-700 delay-300",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            <span className="flex items-center text-sm text-muted-foreground">
              <User size={14} className="mr-1" />
              {post.author}, {post.authorRole}
            </span>
            <span className="flex items-center text-sm text-muted-foreground">
              <Calendar size={14} className="mr-1" />
              {post.date}
            </span>
            <span className="flex items-center text-sm text-muted-foreground">
              <Clock size={14} className="mr-1" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      <section 
        className={cn(
          "container mx-auto px-6 mb-12 opacity-0 transform translate-y-8 transition-all duration-1000 delay-400",
          { "opacity-100 translate-y-0": isLoaded }
        )}
      >
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Social Share Sidebar */}
            <div className="hidden md:block col-span-1">
              <div className="sticky top-32 space-y-4">
                <p className="text-xs text-muted-foreground mb-2">Share</p>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy/70 hover:text-navy hover:bg-white/80 transition-colors shadow-sm"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy/70 hover:text-navy hover:bg-white/80 transition-colors shadow-sm"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy/70 hover:text-navy hover:bg-white/80 transition-colors shadow-sm"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy/70 hover:text-navy hover:bg-white/80 transition-colors shadow-sm"
                    aria-label="Share via Email"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div 
              className={cn(
                "col-span-12 md:col-span-11 prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-gray-700 prose-a:text-gold prose-a:no-underline hover:prose-a:underline opacity-0 transform translate-y-4 transition-all duration-700 delay-500",
                { "opacity-100 translate-y-0": isLoaded }
              )}
              dangerouslySetInnerHTML={{ __html: post.content }}
            >
            </div>
          </div>
          
          {/* Tags */}
          <div 
            className={cn(
              "mt-12 flex flex-wrap gap-2 opacity-0 transform translate-y-4 transition-all duration-700 delay-600",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            <Tag size={16} className="text-navy/70 mr-1" />
            {post.tags.map((tag: string) => (
              <span key={tag} className="py-1 px-3 bg-white rounded-full text-xs font-medium text-navy/70">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Mobile Share */}
          <div 
            className={cn(
              "md:hidden mt-8 border-t border-gray-200 pt-6 opacity-0 transform translate-y-4 transition-all duration-700 delay-700",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            <p className="text-sm text-muted-foreground mb-3">Share this article</p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy/70 hover:text-navy transition-colors shadow-sm"
                aria-label="Share on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy/70 hover:text-navy transition-colors shadow-sm"
                aria-label="Share on Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy/70 hover:text-navy transition-colors shadow-sm"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy/70 hover:text-navy transition-colors shadow-sm"
                aria-label="Share via Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section 
          className={cn(
            "container mx-auto px-6 mb-16 opacity-0 transform translate-y-8 transition-all duration-700 delay-800",
            { "opacity-100 translate-y-0": isLoaded }
          )}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8 hero-text-gradient">You May Also Enjoy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.id}`}
                  className="glass-card overflow-hidden animated-card"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium bg-navy/10 text-navy py-1 px-2 rounded-full">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-serif text-lg font-medium mt-2 mb-1 text-navy line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock size={12} className="mr-1" />
                      {relatedPost.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA */}
      <section 
        className={cn(
          "container mx-auto px-6 mb-16 opacity-0 transform translate-y-8 transition-all duration-700 delay-900",
          { "opacity-100 translate-y-0": isLoaded }
        )}
      >
        <div className="max-w-4xl mx-auto bg-navy text-white rounded-2xl p-10 text-center">
          <h2 className="heading-lg mb-4 text-white">Ready to Experience Thailand?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Let us create a bespoke journey tailored to your preferences and desires.
          </p>
          <a href="/#contact" className="button-primary border-2 border-transparent bg-gold hover:bg-gold/90 text-navy inline-flex items-center gap-2">
            Contact Our Concierge
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
