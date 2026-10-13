import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, ArrowUpRight, Calendar, User, Clock, Search, Tag, 
  Share2, Check, Bookmark, BookOpen, MessageSquare, ChevronRight, 
  Mail, X, TrendingUp, Award, ExternalLink, ThumbsUp, Send, Zap
} from 'lucide-react';
import { LandingNavbar, NavPage } from './LandingNavbar';
import FooterSection5 from './ui/footer-section-5';
import { StorageService } from '../services/storageService';

import investorsAndFounders from '@/src/assets/images/investors_and_founders_1_1785147760772.jpg';
import ventureTech from '@/src/assets/images/venture_connection_tech_1784549043938.jpg';
import smartMatching from '@/src/assets/images/smart_matching_investment_1784549068657.jpg';
import goldenGate from '@/src/assets/images/golden_gate_bridge_1785141940553.jpg';
import worldModelAi from '@/src/assets/images/world_model_ai_1785704586218.jpg';
import blogArtOfSwipe from '@/src/assets/images/blog_art_of_swipe_1782696240936.jpg';
import blogMatchDeck from '@/src/assets/images/blog_match_deck_pitch_1782696256365.jpg';
import blogAlgorithmic from '@/src/assets/images/blog_algorithmic_precision_1782696272353.jpg';
import foundersSummit from '@/src/assets/images/founders_summit_2_1785147774377.jpg';

export interface BlogPost {
  id: number | string;
  company: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  badge: string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  published?: boolean;
  takeaways?: string[];
  views?: string;
  views_count?: number;
  slug?: string;
}

export const ConnectUpLogoIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 200" 
    className={`${className} select-none shrink-0 drop-shadow-xs`}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="culogo-left" cx="32%" cy="32%" r="68%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="65%" stopColor="#E4E4E7" />
        <stop offset="100%" stopColor="#A1A1AA" />
      </radialGradient>
      <radialGradient id="culogo-right" cx="32%" cy="32%" r="68%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="55%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#854D0E" />
      </radialGradient>
      <linearGradient id="culogo-conn" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E4E4E7" />
        <stop offset="25%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#EAB308" />
      </linearGradient>
    </defs>
    <path d="M 60 140 Q 100 60 140 60" fill="none" stroke="url(#culogo-conn)" strokeWidth="18" strokeLinecap="round" />
    <circle cx="60" cy="140" r="36" fill="url(#culogo-left)" />
    <circle cx="140" cy="60" r="36" fill="url(#culogo-right)" />
  </svg>
);

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    company: 'OMMAX x SINGULIER',
    title: 'OMMAX x Singulier join forces to create Europe’s leading AI management consulting platform',
    excerpt: 'A landmark transaction uniting 600+ AI practitioners to accelerate enterprise digital transformation across European markets.',
    takeaways: [
      'Unites over 600 specialized AI engineers and management consultants across London, Munich, Paris, and Zurich.',
      'Positions the joint entity as the primary digital execution partner for Tier-1 European private equity sponsors.',
      'Expands proprietary ML workflows that reduce enterprise deployment cycles from months to days.'
    ],
    content: `
      <h2>A Landmark European AI Consolidation</h2>
      <p>We are thrilled to announce that portfolio company OMMAX has joined forces with Singulier to establish Europe's premier AI-first management consulting platform. This strategic union combines deep digital execution expertise with world-class advisory capabilities.</p>
      <p>Since our early-stage backing, OMMAX has scaled revenues significantly, partnering with premier private equity sponsors and global enterprises to unlock value through artificial intelligence and automation strategies.</p>
      <blockquote>"This transaction marks a pivotal moment for European tech leadership, proving that specialized AI consulting can scale rapidly across international borders."</blockquote>
      <h3>Key Highlights of the Transaction</h3>
      <ul>
        <li><strong>Expanded Reach:</strong> Over 600 AI specialists across London, Munich, Paris, and Zurich.</li>
        <li><strong>Comprehensive AI Suite:</strong> End-to-end capabilities from generative AI roadmap design to proprietary data pipeline engineering.</li>
        <li><strong>Sustained Value Creation:</strong> Deep integration with European sponsors to optimize portfolio company operations.</li>
      </ul>
      <p>We congratulate the leadership teams at both companies as they pioneer the next era of European enterprise tech transformation.</p>
    `,
    category: 'Portfolio Exit',
    badge: 'PORTFOLIO EXIT',
    author: 'Sarah Chen',
    authorRole: 'Managing Partner, Enterprise Tech',
    date: 'Oct 22, 2026',
    readTime: '4 min read',
    image: investorsAndFounders,
    featured: true,
    views: '14.2k'
  },
  {
    id: 2,
    company: 'SARONIC x NVIDIA',
    title: 'Saronic x NVIDIA collaborate to power autonomous surface vessel artificial intelligence',
    excerpt: 'Integrating real-time edge computing on autonomous naval vessels to enable tactical autonomy and swarm synchronization at sea.',
    takeaways: [
      'Zero-latency multi-modal neural network processing directly onboard autonomous naval surface vessels.',
      'Eliminates reliance on fragile satellite downlinks in contested maritime electronic warfare zones.',
      'Modular edge hardware architecture allows full software and payload swap in under 15 minutes.'
    ],
    content: `
      <h2>Powering Next-Gen Maritime Autonomy</h2>
      <p>Saronic Technologies has officially announced a multi-year strategic partnership with NVIDIA to bring accelerated computing and real-time sensor fusion to autonomous maritime defense vessels.</p>
      <p>By embedding advanced robotics edge platforms directly into Saronic's surface vessels, defense units can process terabytes of sonar, radar, and optical imagery at zero latency directly at sea.</p>
      <blockquote>"Modern naval defense cannot rely on high-latency satellite feeds. Autonomous assets must think, adapt, and coordinate at the tactical edge."</blockquote>
      <h3>Strategic Impact & Innovation</h3>
      <ul>
        <li><strong>Edge AI at Scale:</strong> Onboard multi-modal neural network processing without relying on high-latency satellite feeds.</li>
        <li><strong>Swarm Intelligence:</strong> Coordinated fleet navigation permitting multi-vessel tactical maneuvers.</li>
        <li><strong>Rapid Deployment:</strong> Modular hardware integration allowing field upgrades in under 15 minutes.</li>
      </ul>
      <p>As early backers of Saronic, we are immensely proud to see their vision of modern maritime sovereignty become reality alongside world-class technology partners.</p>
    `,
    category: 'Defense Tech',
    badge: 'PORTFOLIO NEWS',
    author: 'Marcus Vance',
    authorRole: 'Head of DeepTech Capital',
    date: 'Oct 14, 2026',
    readTime: '6 min read',
    image: ventureTech,
    featured: true,
    views: '22.8k'
  },
  {
    id: 3,
    company: 'AMI LABS',
    title: 'AMI Labs raises $1B Series A to develop world-model AI architecture beyond LLMs',
    excerpt: 'Pioneering causal AI models beyond traditional autoregressive token prediction, backed by premier venture syndicates worldwide.',
    takeaways: [
      'Architectures learn spatial commonsense, intuitive physics, and temporal causality rather than next-token guessing.',
      'Up to 80% decrease in compute requirements for complex logical simulations and robotics control tasks.',
      'Syndicated by ConnectUp members alongside Tier-1 institutional research funds.'
    ],
    content: `
      <h2>Beyond Next-Token Prediction: The World Model Era</h2>
      <p>Large Language Models have redefined text generation, but true artificial general intelligence requires causal understanding of physical reality. AMI Labs has closed a $1B Series A financing round to scale its foundational world-model architecture.</p>
      <p>Unlike standard transformers trained solely on web text, AMI's models simulate physical environments, aerodynamic forces, and multi-agent interactions in real time.</p>
      <blockquote>"We are moving from statistical text prediction to true physical world simulation."</blockquote>
      <h3>Core Innovations</h3>
      <ul>
        <li><strong>Causal Reasoning Engines:</strong> Simulating real-world physical interactions at microsecond latency.</li>
        <li><strong>Robotics Co-Pilot:</strong> Direct translation of world-model embeddings into robotic control loops.</li>
        <li><strong>Unprecedented Efficiency:</strong> 80% lower compute overhead for complex multi-variable forecasting.</li>
      </ul>
      <p>We are honored to support AMI Labs as they unlock the next technological leap in foundational AI research.</p>
    `,
    category: 'AI & Research',
    badge: 'SERIES A',
    author: 'Elena Rostova',
    authorRole: 'Head of AI Architecture',
    date: 'Sep 29, 2026',
    readTime: '5 min read',
    image: worldModelAi,
    featured: true,
    views: '35.1k'
  },
  {
    id: 4,
    company: 'CONNECTUP',
    title: 'The Art of the 60-Second Swipe: How to Win Tier-1 VC Attention Without Cold Emails',
    excerpt: 'An inside look at how micro-pitch decks and instant thesis alignment have replaced the traditional 4-month fundraising marathon.',
    takeaways: [
      'Founders waste an average of 142 hours per month on unqualified cold outreach.',
      'ConnectUp’s swipe interface matches founder metrics directly with verified investor mandates in seconds.',
      'Data shows response rates increase by 410% when pitch decks adhere to concise micro-format guidelines.'
    ],
    content: `
      <h2>The Death of the 40-Slide Pitch Deck</h2>
      <p>For decades, raising venture capital has been an exercise in administrative endurance. Founders craft sprawling slide decks, send hundreds of cold emails into the void, and wait weeks for generic rejections.</p>
      <p>At ConnectUp, we studied thousands of successful seed rounds and discovered a stark truth: investors make preliminary decisions in under 60 seconds. If your core traction and thesis aren't immediately clear, you're filtered out.</p>
      <blockquote>"Fundraising shouldn't feel like a second full-time job. It should be a high-velocity exchange of mutual conviction."</blockquote>
      <h3>Key Pillars of Modern Micro-Pitching</h3>
      <ul>
        <li><strong>Instant Thesis Matching:</strong> Automatically route your metrics to funds actively deploying in your sector.</li>
        <li><strong>Zero-Noise Introductions:</strong> Cut out middleman brokers and backchannel gatekeepers.</li>
        <li><strong>Actionable Feedback:</strong> Receive clear term-sheet indicators and structural feedback within 48 hours.</li>
      </ul>
      <p>Join the thousands of elite founders using ConnectUp to accelerate their capital journey today.</p>
    `,
    category: 'Venture Insights',
    badge: 'STRATEGY',
    author: 'Tariq Vance',
    authorRole: 'Co-Founder & CEO',
    date: 'Sep 18, 2026',
    readTime: '4 min read',
    image: blogArtOfSwipe,
    featured: false,
    views: '18.5k'
  },
  {
    id: 5,
    company: 'QUANTUM HEALTH',
    title: 'Algorithmic Precision in Early-Stage Biotech & Therapeutics Sourcing',
    excerpt: 'How machine learning graph analysis is transforming life sciences venture capital and clinical trial syndication.',
    takeaways: [
      'Graph neural networks map biochemical pathway patent filings before academic publication.',
      'Saves institutional venture funds months of manual scientific literature review.',
      'Enables co- syndication across global bio-clusters in London, Boston, and Zurich.'
    ],
    content: `
      <h2>Mapping the Frontiers of Biotech Innovation</h2>
      <p>Investing in early-stage biotechnology has traditionally required specialized PhD analysts spending months combing through peer-reviewed journals and patent databases.</p>
      <p>Today, graph neural networks developed by our portfolio partners automatically surface emerging therapeutic breakthroughs across global academic institutions.</p>
      <blockquote>"When you combine domain expertise with real-time semantic graph search, biotech deal sourcing reaches unprecedented velocity."</blockquote>
      <p>By democratizing access to high-convction life sciences deal flow, ConnectUp empowers specialized angel syndicates to back life-saving therapeutics earlier than ever before.</p>
    `,
    category: 'DeepTech',
    badge: 'RESEARCH',
    author: 'Dr. Aris Thorne',
    authorRole: 'Partner, Life Sciences',
    date: 'Sep 10, 2026',
    readTime: '7 min read',
    image: blogMatchDeck,
    featured: false,
    views: '9.4k'
  },
  {
    id: 6,
    company: 'CONNECTUP SUMMIT',
    title: 'Founders & Investors Summit 2026: Key Takeaways on Sovereign Capital',
    excerpt: 'Highlights from our annual gathering of 500+ top-decile founders and sovereign fund managers in San Francisco.',
    takeaways: [
      'Over $2.8B in active dry powder represented across attending angel networks and funds.',
      'Panel discussions centered on autonomous agent workflows and RLS database synchronization.',
      'Announced global expansion into 12 new European and Asian tech hubs.'
    ],
    content: `
      <h2>San Francisco Summit Highlights</h2>
      <p>Last week, ConnectUp hosted its annual Founders & Investors Summit in San Francisco, bringing together over 500 top-decile founders, sovereign wealth managers, and tier-1 venture partners.</p>
      <p>The overarching theme of this year's gathering was the rise of sovereign capital and autonomous deal syndication across international borders.</p>
      <blockquote>"The future belongs to founders who build with global liquidity in mind from day one."</blockquote>
      <p>We extend our deepest gratitude to all speakers, sponsors, and participants who made this milestone event unforgettable.</p>
    `,
    category: 'Events',
    badge: 'SUMMIT',
    author: 'Marcus Sterling',
    authorRole: 'Head of Investor Relations',
    date: 'Aug 28, 2026',
    readTime: '5 min read',
    image: blogAlgorithmic,
    featured: false,
    views: '12.1k'
  }
];

interface BlogPageProps {
  onBackHome?: () => void;
  onLoginClick?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToSection?: (section: NavPage) => void;
  onLegalView?: (view: 'privacy' | 'terms') => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onBackHome,
  onLoginClick,
  onNavigateToAbout,
  onNavigateToContact,
  onNavigateToSection,
  onLegalView
}) => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookmarkedIds, setBookmarkedIds] = useState<(number | string)[]>([]);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  // Load custom stored blog posts if any
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const stored = StorageService.getBlogPosts();
    if (stored && stored.length > 0) {
      setPosts([...stored, ...BLOG_POSTS]);
    }
  }, []);

  // Scroll progress listener for reader view
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: NavPage) => {
    if (page === 'blog') {
      setSelectedPost(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (page === 'about') {
      if (onNavigateToAbout) {
        onNavigateToAbout();
      } else {
        try {
          window.history.pushState({}, '', '/about');
        } catch {
          window.location.hash = '#about';
        }
        window.location.reload();
      }
      return;
    }
    if (page === 'contact') {
      if (onNavigateToContact) {
        onNavigateToContact();
      } else {
        try {
          window.history.pushState({}, '', '/contact');
        } catch {
          window.location.hash = '#contact';
        }
        window.location.reload();
      }
      return;
    }

    if (onNavigateToSection) {
      onNavigateToSection(page);
    } else if (onBackHome) {
      onBackHome();
    } else {
      try {
        window.history.pushState({}, '', page === 'home' ? '/home' : `/home#${page}`);
      } catch {
        window.location.hash = `#${page}`;
      }
      window.location.reload();
    }
  };

  const toggleBookmark = (id: number | string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(item => item !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const categories = ['All', 'Portfolio Exit', 'Defense Tech', 'AI & Research', 'Venture Insights', 'DeepTech', 'Events'];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter(p => p.featured);
  const currentHeroPost = featuredPosts[heroSlideIndex] || featuredPosts[0];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-zinc-100 flex flex-col font-sans selection:bg-[#FFBF00] selection:text-black relative overflow-x-hidden">
      
      {/* Immersive Glow Backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-25 blur-[150px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(255, 191, 0, 0.35) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 75%)'
          }}
        />
        <div className="absolute top-[1000px] right-[-200px] w-[600px] h-[600px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />
      </div>

      {/* Article Reading Progress Indicator */}
      {selectedPost && (
        <div 
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 z-50 transition-all duration-100 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      )}

      {/* Shared Landing Navbar in Dark Mode */}
      <LandingNavbar 
        currentPage="blog" 
        onNavigate={handleNavigate} 
        onLoginClick={onLoginClick || (() => {})} 
        lightMode={false}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24 relative z-10">
        <AnimatePresence mode="wait">
          {selectedPost ? (
            /* =========================================================================
               SINGLE BLOG POST VIEW (READER MODE - DARK OBSIDIAN BACKGROUND)
               ========================================================================= */
            <motion.article 
              key={`post-${selectedPost.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              {/* Top Navigation Bar */}
              <div className="flex items-center justify-between gap-4 mb-8">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-sm font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer border border-zinc-800 group"
                >
                  <ArrowLeft className="w-4 h-4 text-[#FFBF00] group-hover:-translate-x-1 transition-transform" />
                  <span>Back to all stories</span>
                </button>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => toggleBookmark(selectedPost.id, e)}
                    className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                      bookmarkedIds.includes(selectedPost.id)
                        ? 'bg-[#FFBF00] text-black border-[#FFBF00] shadow-lg shadow-amber-500/20'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
                    }`}
                    title={bookmarkedIds.includes(selectedPost.id) ? 'Saved' : 'Save story'}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>

                  <button 
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-zinc-200 transition-colors cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-zinc-400" />}
                    <span>{copiedLink ? 'Copied' : 'Share'}</span>
                  </button>
                </div>
              </div>

              {/* Story Header */}
              <header className="space-y-6 mb-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-[#FFBF00] border border-amber-500/30 text-xs font-bold tracking-wider uppercase shadow-lg shadow-amber-500/5">
                    {selectedPost.badge}
                  </span>
                  <span className="text-xs font-mono tracking-wider text-zinc-400 uppercase bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    {selectedPost.company}
                  </span>
                  {selectedPost.views && (
                    <span className="text-xs text-zinc-400 font-mono flex items-center gap-1 ml-auto">
                      <TrendingUp className="w-3.5 h-3.5 text-[#FFBF00]" /> {selectedPost.views} reads
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
                  {selectedPost.title}
                </h1>

                <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed font-light">
                  {selectedPost.excerpt}
                </p>

                {/* Author Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-y border-zinc-800 text-sm text-zinc-400">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 p-2.5 flex items-center justify-center shadow-md shrink-0 border border-zinc-800">
                      {selectedPost.authorAvatar ? (
                        <img src={selectedPost.authorAvatar} alt={selectedPost.author} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <ConnectUpLogoIcon className="w-full h-full" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-white leading-tight">{selectedPost.author}</p>
                      <p className="text-xs text-zinc-400">{selectedPost.authorRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 text-xs">
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <Calendar className="w-4 h-4 text-[#FFBF00]" />
                      <span>{selectedPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <Clock className="w-4 h-4 text-[#FFBF00]" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </header>

              {/* Cover Hero Image */}
              <div className="w-full h-[360px] sm:h-[480px] rounded-[2.5rem] overflow-hidden border border-zinc-800 mb-10 shadow-2xl relative group">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 text-xs text-zinc-300 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800">
                  Featured Archive Visual • ConnectUp Protocol
                </div>
              </div>

              {/* Executive Takeaways Box */}
              {selectedPost.takeaways && selectedPost.takeaways.length > 0 && (
                <div className="mb-10 p-6 sm:p-8 rounded-[2rem] bg-zinc-900/60 border border-zinc-800 shadow-xl relative overflow-hidden backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-[#FFBF00]" />
                    <h3 className="text-base font-bold text-white uppercase tracking-wider">Executive Takeaways</h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedPost.takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                        <span className="w-6 h-6 rounded-full bg-[#FFBF00] text-zinc-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Main Article Body (Dark Mode Prose) */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-6 sm:p-12 shadow-2xl mb-12 backdrop-blur-xl">
                <div 
                  className="prose prose-invert prose-lg max-w-none text-zinc-300 leading-relaxed 
                    prose-headings:text-white prose-headings:font-serif prose-headings:tracking-tight 
                    prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:mb-6 prose-p:leading-relaxed
                    prose-ul:my-6 prose-li:my-2 prose-li:text-zinc-300
                    prose-blockquote:border-l-4 prose-blockquote:border-[#FFBF00] prose-blockquote:bg-zinc-950/80 
                    prose-blockquote:p-6 prose-blockquote:rounded-2xl prose-blockquote:text-white prose-blockquote:italic prose-blockquote:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                {/* Author Bio Card at End of Article */}
                <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-zinc-950 p-6 rounded-3xl border border-zinc-800 shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 p-3.5 flex items-center justify-center shadow-md shrink-0 border border-zinc-800">
                    {selectedPost.authorAvatar ? (
                      <img src={selectedPost.authorAvatar} alt={selectedPost.author} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <ConnectUpLogoIcon className="w-full h-full" />
                    )}
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <p className="font-bold text-white text-base">{selectedPost.author}</p>
                    <p className="text-xs text-[#FFBF00] font-semibold">{selectedPost.authorRole}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                      Authoring frontier research and investment dispatches at ConnectUp. Regularly advising syndicate leads on early-stage allocations and technical diligence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Callout Action Banner */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-[2.5rem] bg-gradient-to-r from-amber-500 via-amber-400 to-[#FFBF00] text-zinc-950 shadow-2xl mb-16 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2 font-serif">
                    Ready to discover vetted founders & syndicates?
                  </h3>
                  <p className="text-sm text-zinc-900 font-medium">
                    Join over 2,500 active founders and certified angels matching on ConnectUp.
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto relative z-10 shrink-0">
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="flex-1 sm:flex-none px-6 py-3.5 rounded-full border border-zinc-950 bg-white text-zinc-950 hover:bg-zinc-100 font-bold text-xs transition-colors cursor-pointer shadow-md"
                  >
                    More Stories
                  </button>
                  <button 
                    onClick={onLoginClick}
                    className="flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-zinc-950 text-white font-black text-xs hover:bg-zinc-800 transition-all cursor-pointer shadow-lg"
                  >
                    Join ConnectUp
                  </button>
                </div>
              </div>

              {/* Related Stories Grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-serif text-white">Recommended For You</h3>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-xs text-[#FFBF00] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    View All <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {BLOG_POSTS.filter(p => p.id !== selectedPost.id).slice(0, 2).map(post => (
                    <div 
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="group cursor-pointer rounded-3xl overflow-hidden bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl"
                    >
                      <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.9]" 
                        />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[10px] font-bold text-[#FFBF00] border border-zinc-800 uppercase">
                          {post.category}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">{post.company}</span>
                        <h4 className="text-lg font-bold text-white group-hover:text-[#FFBF00] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                      <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                        <span>{post.date}</span>
                        <span className="font-bold text-[#FFBF00] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read Story <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.article>
          ) : (
            /* =========================================================================
               BLOG INDEX VIEW (DARK OBSIDIAN THEME)
               ========================================================================= */
            <div className="space-y-16">
              
              {/* Hero Banner Header */}
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/35 text-[#FFBF00] text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-amber-500/5 backdrop-blur-md"
                >
                  <BookOpen size={14} className="text-[#FFBF00]" />
                  ConnectUp Research & Dispatch
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-7xl font-black text-white tracking-tight leading-[1.05]"
                >
                  Frontier Insights & <br />
                  <span className="bg-gradient-to-r from-amber-200 via-[#FFBF00] to-amber-500 bg-clip-text text-transparent italic font-serif font-light">Venture Dispatches.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-xl text-zinc-400 font-light leading-relaxed"
                >
                  Deep-dive analysis on portfolio exits, AI architecture, defense tech, and modern venture syndication.
                </motion.p>
              </div>

              {/* Featured Hero Article Carousel Card */}
              {currentHeroPost && searchQuery === '' && selectedCategory === 'All' && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  onClick={() => setSelectedPost(currentHeroPost)}
                  className="group cursor-pointer rounded-[3rem] overflow-hidden bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all duration-500 shadow-2xl grid lg:grid-cols-12 gap-0 relative backdrop-blur-xl"
                >
                  <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] overflow-hidden">
                    <img
                      src={currentHeroPost.image}
                      alt={currentHeroPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent lg:hidden" />
                    <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md text-xs font-black text-[#FFBF00] border border-zinc-800 uppercase tracking-widest">
                      ★ Featured Dispatch
                    </span>
                  </div>

                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-amber-500/10 text-[#FFBF00] border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                          {currentHeroPost.badge}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{currentHeroPost.company}</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-black text-white group-hover:text-[#FFBF00] transition-colors leading-tight font-serif">
                        {currentHeroPost.title}
                      </h2>
                      <p className="text-sm sm:text-base text-zinc-400 font-light line-clamp-3 leading-relaxed">
                        {currentHeroPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-950 p-2 border border-zinc-800">
                          <ConnectUpLogoIcon className="w-full h-full" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">{currentHeroPost.author}</p>
                          <p className="text-[10px] text-zinc-400">{currentHeroPost.date} • {currentHeroPost.readTime}</p>
                        </div>
                      </div>
                      <span className="w-10 h-10 rounded-full bg-[#FFBF00] text-zinc-950 flex items-center justify-center font-bold group-hover:scale-110 transition-transform shadow-lg">
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Search & Category Filter Bar */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-800">
                {/* Categories */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-[#FFBF00] text-zinc-950 shadow-lg shadow-amber-500/20'
                          : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search dispatches..."
                    className="w-full pl-11 pr-4 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500 transition-all shadow-inner"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20 bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem]">
                  <p className="text-lg text-zinc-400 font-light mb-4">No dispatches found matching "{searchQuery}"</p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="px-6 py-3 rounded-full bg-[#FFBF00] text-zinc-950 font-black text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, idx) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      onClick={() => setSelectedPost(post)}
                      className="group cursor-pointer rounded-[2.5rem] overflow-hidden bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
                    >
                      <div>
                        {/* Cover Image */}
                        <div className="aspect-[16/10] w-full overflow-hidden relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.9]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#FFBF00] border border-zinc-800">
                            {post.category}
                          </span>
                          <button
                            onClick={(e) => toggleBookmark(post.id, e)}
                            className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                              bookmarkedIds.includes(post.id)
                                ? 'bg-[#FFBF00] text-black border-[#FFBF00]'
                                : 'bg-zinc-950/80 text-zinc-300 border-zinc-800 hover:text-white'
                            }`}
                          >
                            <Bookmark className="w-3.5 h-3.5 fill-current" />
                          </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8 space-y-3">
                          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                            <span className="uppercase tracking-widest text-zinc-400">{post.company}</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#FFBF00] transition-colors line-clamp-2 leading-snug font-serif">
                            {post.title}
                          </h3>
                          <p className="text-sm text-zinc-400 font-light line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 pt-0 flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800/80 mt-4">
                        <span className="font-semibold text-zinc-300">{post.date}</span>
                        <span className="font-bold text-[#FFBF00] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read Dispatch <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}

              {/* Newsletter Signup Section */}
              <div className="mt-24 p-10 sm:p-16 rounded-[3rem] bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,191,0,0.1)_0%,transparent_70%)] pointer-events-none" />
                <div className="relative z-10 max-w-xl mx-auto space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/35 flex items-center justify-center text-[#FFBF00] mx-auto shadow-lg">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    Never Miss a Venture Dispatch
                  </h3>
                  <p className="text-zinc-400 font-light text-sm sm:text-base">
                    Get weekly updates on venture syndicates, AI tech breakthroughs, and exclusive portfolio exits delivered straight to your inbox.
                  </p>

                  {subscribed ? (
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#FFBF00] text-sm font-bold animate-pulse">
                      ✓ Successfully subscribed to ConnectUp dispatches!
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Enter your work email..."
                        className="flex-1 px-6 py-4 rounded-full bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 transition-all shadow-inner"
                      />
                      <button
                        type="submit"
                        className="px-8 py-4 rounded-full bg-[#FFBF00] hover:bg-amber-400 text-zinc-950 font-black text-xs uppercase tracking-[0.15em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,191,0,0.2)] cursor-pointer shrink-0 flex items-center justify-center gap-2"
                      >
                        <span>Subscribe</span>
                        <Send size={14} />
                      </button>
                    </form>
                  )}
                  <p className="text-[11px] text-zinc-500">No spam. Unsubscribe at any time with one click.</p>
                </div>
              </div>

            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <FooterSection5
        onLegalView={onLegalView || (() => {})}
        onNavigate={handleNavigate}
      />
    </div>
  );
};
