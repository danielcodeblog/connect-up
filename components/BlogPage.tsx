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
      <h2>Building World Models Beyond Token Prediction</h2>
      <p>AMI Labs has closed a landmark $1 Billion Series A round to pioneer a new paradigm in artificial intelligence: World-Model Architecture. Moving beyond token prediction, AMI Labs' architectures learn physical commonsense and causal reasoning.</p>
      <p>Led by world-renowned researchers, AMI Labs is building foundation models capable of planning, spatial reasoning, and real-time physical interaction.</p>
      <blockquote>"True intelligence requires understanding how the physical world works, not just predicting the next word in a sentence."</blockquote>
      <h3>Why World Models Matter</h3>
      <ul>
        <li><strong>Causal Reasoning:</strong> Enables AI agents to predict consequences before taking actions in robotics and complex industrial settings.</li>
        <li><strong>Energy Efficiency:</strong> Requires up to 80% fewer compute resources for complex logical planning compared to standard auto-regressive models.</li>
        <li><strong>Universal Application:</strong> From autonomous manufacturing to breakthrough drug discovery simulations.</li>
      </ul>
      <p>ConnectUp is proud to participate in this syndicate alongside global technology leaders to shape the future of artificial general intelligence.</p>
    `,
    category: 'AI Research',
    badge: 'PORTFOLIO HIGHLIGHT',
    author: 'Elena Rodriguez',
    authorRole: 'Partner, Frontier Computing',
    date: 'Oct 02, 2026',
    readTime: '7 min read',
    image: worldModelAi,
    featured: true,
    views: '31.5k'
  },
  {
    id: 4,
    company: 'CONNECTUP DISPATCH',
    title: 'The Art of the Swipe: How Intuitive Discovery Accelerates Pre-Seed Rounds from Weeks to Days',
    excerpt: 'Why high-conviction early-stage syndication is shifting from closed country-club backrooms to high-velocity algorithmic discovery.',
    takeaways: [
      'Founder time to first confirmed angel commitment decreased from an industry average of 42 days to just 8 days.',
      'Verified traction signals replace subjective warm intros, leveling the playing field for international builders.',
      'Direct in-app syndicate room creation allows multiple angel checks to aggregate instantly.'
    ],
    content: `
      <h2>The Paradigm Shift in Early-Stage Syndication</h2>
      <p>Historically, early-stage allocations were restricted to private social circles in Sand Hill Road and Mayfair. As tech hubs expand across Austin, Nairobi, Lagos, Berlin, and Singapore, capital distribution must modernize at the speed of software.</p>
      <p>Through ConnectUp's curated discovery and dispatch architecture, vetted founders match directly with verified angels and institutional partners based on mandate alignment rather than geographic proximity.</p>
      <blockquote>"Geography is no longer destiny for founders with verifiable velocity."</blockquote>
      <h3>Key Drivers of the New Syndicate Model</h3>
      <ul>
        <li><strong>Speed to Term Sheet:</strong> Average founder time to first committed angel cheque dropped from 6 weeks to 8 days.</li>
        <li><strong>Zero Gatekeeping:</strong> Transparent algorithmic scoring verifies proof of execution, customer traction, and code velocity.</li>
        <li><strong>Collaborative Due Diligence:</strong> Co-investors review verified metrics, founder pitch decks, and live references in one unified room.</li>
      </ul>
    `,
    category: 'Ecosystem & Market',
    badge: 'MARKET INSIGHTS',
    author: 'Alexander Wright',
    authorRole: 'Editor-in-Chief, ConnectUp Dispatch',
    date: 'Sep 28, 2026',
    readTime: '5 min read',
    image: blogArtOfSwipe,
    featured: false,
    views: '18.9k'
  },
  {
    id: 5,
    company: 'HARMATTAN DEFENSE',
    title: 'Harmattan closes $80M Series B to scale software-defined defense systems and mesh nodes',
    excerpt: 'Expanding transatlantic manufacturing capabilities for resilient, jam-proof defense hardware and battlefield communications.',
    takeaways: [
      'Tripling European hardware assembly plants across 3 allied nations to meet backlog.',
      'Self-healing radio frequency mesh network maintains unit synchronization under hostile electronic warfare.',
      'Dual-use architecture applicable to disaster relief, emergency services, and deep-sea exploration.'
    ],
    content: `
      <h2>Scaling Resilient Defense Infrastructure</h2>
      <p>Harmattan has finalized an $80 Million Series B round led by premier transatlantic defense technology investors. The capital injection will expand manufacturing capacity for Harmattan's flagship autonomous defense systems.</p>
      <p>With ongoing geopolitical shifts, modern defense requires software-defined, rapidly deployable hardware capable of operating in satellite-denied or heavily jammed electronic environments.</p>
      <h3>Key Focus Areas for Series B</h3>
      <ul>
        <li><strong>Production Scaling:</strong> Tripling European manufacturing footprint to deliver hardware on accelerated timelines.</li>
        <li><strong>Electronic Warfare Resilience:</strong> Next-gen mesh networking that maintains unit cohesion under signal jamming.</li>
        <li><strong>Dual-Use Potential:</strong> Adapting sensor arrays for civilian disaster recovery and search-and-rescue missions.</li>
      </ul>
      <p>We continue to support Harmattan's dedicated engineering team as they redefine critical infrastructure protection and strategic autonomy.</p>
    `,
    category: 'Strategic Tech',
    badge: 'PORTFOLIO NEWS',
    author: 'David Kim',
    authorRole: 'Principal, Infrastructure & Defense',
    date: 'Sep 21, 2026',
    readTime: '5 min read',
    image: goldenGate,
    featured: false,
    views: '9.4k'
  },
  {
    id: 6,
    company: 'CONNECTUP LABS',
    title: 'Algorithmic Precision in Deal Flow: Scoring Founder Velocity and Code Commit Rhythm',
    excerpt: 'How ConnectUp analyzes GitHub commit frequency, user retention cohorts, and payment velocity to generate bias-free investment scores.',
    takeaways: [
      'Multi-signal telemetry blends open-source commits, revenue API webhooks, and retention decay rates.',
      'Removes pedigree bias by highlighting actual shipping speed over collegiate pedigree.',
      'Provides founders with a real-time Benchmark Score to identify areas for metric improvement.'
    ],
    content: `
      <h2>Eliminating the Warm Intro Tax</h2>
      <p>The traditional venture capital diligence process has long suffered from pedigree bias. Investors frequently fund founders from their alma maters or mutual networks rather than builders with exceptional shipping cadence.</p>
      <p>ConnectUp's proprietary scoring engine ingests verified telemetry directly from GitHub, Stripe, and PostHog (with founder consent) to construct an objective Velocity Score.</p>
      <h3>How Velocity is Measured</h3>
      <ul>
        <li><strong>Shipping Frequency:</strong> Continuous integration cadence, release regularity, and bug closure rates.</li>
        <li><strong>Organic Retention:</strong> Cohort persistence curves benchmarked against the top decile of comparable SaaS/fintech peers.</li>
        <li><strong>Capital Efficiency:</strong> Revenue generated per unit of operational expenditure.</li>
      </ul>
      <p>The result is a discovery feed where top builders bubble to the top of investor radars purely based on tangible momentum.</p>
    `,
    category: 'Engineering & Data',
    badge: 'DEEP DIVE',
    author: 'Dr. Aris Thorne',
    authorRole: 'Head of Quantitative Intelligence',
    date: 'Sep 15, 2026',
    readTime: '8 min read',
    image: blogAlgorithmic,
    featured: false,
    views: '24.1k'
  },
  {
    id: 7,
    company: 'VENTURE METHODOLOGY',
    title: 'Designing the 10-Slide Deck That Closed 45 Angel Commitments in 72 Hours',
    excerpt: 'Deconstructing the anatomy of a viral pre-seed pitch deck tailored for mobile-first angel discovery and synchronous syndicate rooms.',
    takeaways: [
      'Optimize for 60-second comprehension on mobile screens before deep financial appendices.',
      'Slide 3 must state the unit economic inflection point with unmistakable clarity.',
      'Interactive deck links inside ConnectUp permit direct cheque reservation upon viewing.'
    ],
    content: `
      <h2>Mobile-First Pitch Decks for Modern Angels</h2>
      <p>Modern angel investors review opportunities on their phones between meetings, in transit, or during weekend downtime. Decks designed for 27-inch monitors with wall-to-wall text lose momentum immediately.</p>
      <p>Here is the proven architecture utilized by the top 10 fastest-closing pre-seed rounds on ConnectUp this quarter.</p>
      <h3>The Essential 10-Slide Structure</h3>
      <ul>
        <li><strong>Slide 1: One-Line Proposition:</strong> What you do and why the market has reached an unavoidable inflection point now.</li>
        <li><strong>Slide 2: The Wedge:</strong> The specific initial customer persona and why alternatives fail them.</li>
        <li><strong>Slide 3: Proof of Velocity:</strong> Verifiable metrics showing traction growth month-over-month.</li>
        <li><strong>Slide 4: Product Experience:</strong> Real video GIF or interactive prototype link rather than mockups.</li>
        <li><strong>Slide 5: Unit Economics:</strong> Customer acquisition cost and lifetime value trajectory.</li>
      </ul>
    `,
    category: 'Founder Guides',
    badge: 'PLAYBOOK',
    author: 'Sophia Sterling',
    authorRole: 'Founders-in-Residence Lead',
    date: 'Sep 08, 2026',
    readTime: '6 min read',
    image: blogMatchDeck,
    featured: false,
    views: '41.3k'
  },
  {
    id: 8,
    company: 'ANNUAL SUMMIT',
    title: 'Highlights from the ConnectUp Global Founders & Allocators Summit: London 2026',
    excerpt: 'Key takeaways, syndicate announcements, and insights from 500+ frontier founders and sovereign wealth allocators.',
    takeaways: [
      'Over $320M in syndicate commitments pledged across frontier robotics, AI compute, and energy transition.',
      'Keynote debates highlighted the emergence of sovereign AI clusters across the UK and Continental Europe.',
      'Announced ConnectUp Institutional Tier with direct LP allocation pass-throughs.'
    ],
    content: `
      <h2>Connecting Visionaries Across Continents</h2>
      <p>Last week in London, over 500 early-stage builders, family office directors, and venture general partners gathered for the annual ConnectUp Global Summit. The day was packed with confidential syndicate pitches, deep-dive technical panels, and strategic roundtables.</p>
      <p>We extend our deepest gratitude to every founder who pitched and every allocator who pledged commitments on our live matching floor.</p>
    `,
    category: 'Ecosystem & Market',
    badge: 'EVENT RECAP',
    author: 'Alexander Wright',
    authorRole: 'Editor-in-Chief, ConnectUp Dispatch',
    date: 'Aug 29, 2026',
    readTime: '4 min read',
    image: foundersSummit,
    featured: false,
    views: '11.8k'
  }
];

interface BlogPageProps {
  onBackHome?: () => void;
  onLoginClick?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToSection?: (section: NavPage) => void;
  onLegalView?: (view: 'privacy' | 'terms') => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ 
  onBackHome, 
  onLoginClick,
  onNavigateToContact,
  onNavigateToSection,
  onLegalView
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');
  const [copiedLink, setCopiedLink] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<(number | string)[]>([1, 3]);
  const [heroSlideIndex, setHeroSlideIndex] = useState<number>(0);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Dynamic posts state initialized from cache or defaults
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem('connectup_blogs_list');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return BLOG_POSTS;
  });

  // Load latest posts from storage and listen for admin updates
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await StorageService.getBlogPosts();
        if (data && data.length > 0) {
          setBlogPosts(data);
        }
      } catch (err) {
        console.warn('Error loading posts in BlogPage:', err);
      }
    };
    loadPosts();

    const handleUpdate = () => {
      loadPosts();
    };
    window.addEventListener('connectup_blogs_updated', handleUpdate);
    return () => window.removeEventListener('connectup_blogs_updated', handleUpdate);
  }, []);

  // Filter published posts for public view
  const visiblePosts = blogPosts.filter(p => p.published !== false);

  // Filter featured posts for the hero carousel
  const featuredPosts = visiblePosts.filter(p => p.featured).length > 0
    ? visiblePosts.filter(p => p.featured)
    : visiblePosts.slice(0, 3);

  // Auto-advance hero carousel every 6 seconds unless user pauses
  useEffect(() => {
    if (selectedPost) return;
    if (featuredPosts.length === 0) return;
    const interval = setInterval(() => {
      setHeroSlideIndex(prev => (prev + 1) % featuredPosts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredPosts.length, selectedPost]);

  // Track reading progress on article view
  useEffect(() => {
    if (!selectedPost) return;
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedPost]);

  const handleNavigate = (page: NavPage) => {
    if (page === 'blog') {
      setSelectedPost(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    // Landing page sections ('home', 'about', 'why', 'founders', 'pricing')
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedPost]);

  const categories = [
    'All', 
    'Portfolio Exit', 
    'Defense Tech', 
    'AI Research', 
    'Ecosystem & Market', 
    'Founder Guides', 
    'Engineering & Data'
  ];

  const toggleBookmark = (id: number | string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      // keep subscribed
    }, 4000);
  };

  // Filter and sort posts
  const filteredPosts = visiblePosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'popular') {
      const viewsA = parseFloat(String(a.views || '0').replace('k', '')) || 0;
      const viewsB = parseFloat(String(b.views || '0').replace('k', '')) || 0;
      return viewsB - viewsA;
    }
    return 0;
  });

  const currentHeroPost = featuredPosts[heroSlideIndex] || featuredPosts[0];

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-[#FFBF00] selection:text-black relative">
      {/* Article Reading Progress Indicator */}
      {selectedPost && (
        <div 
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 z-50 transition-all duration-100 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      )}

      {/* Shared Landing Navbar in Light Mode */}
      <LandingNavbar 
        currentPage="blog" 
        onNavigate={handleNavigate} 
        onLoginClick={onLoginClick || (() => {})} 
        lightMode={true}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20">
        <AnimatePresence mode="wait">
          {selectedPost ? (
            /* =========================================================================
               SINGLE BLOG POST VIEW (READER MODE - WHITE BACKGROUND)
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-sm font-semibold text-zinc-700 hover:text-zinc-950 transition-all cursor-pointer border border-zinc-200 group"
                >
                  <ArrowLeft className="w-4 h-4 text-amber-600 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to all stories</span>
                </button>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => toggleBookmark(selectedPost.id, e)}
                    className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                      bookmarkedIds.includes(selectedPost.id)
                        ? 'bg-amber-400 text-black border-amber-400 shadow-xs'
                        : 'bg-zinc-100 text-zinc-600 border-zinc-200 hover:text-zinc-950 hover:bg-zinc-200'
                    }`}
                    title={bookmarkedIds.includes(selectedPost.id) ? 'Saved' : 'Save story'}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>

                  <button 
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-xs font-semibold text-zinc-800 transition-colors cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-zinc-500" />}
                    <span>{copiedLink ? 'Copied' : 'Share'}</span>
                  </button>
                </div>
              </div>

              {/* Story Header */}
              <header className="space-y-6 mb-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold tracking-wider uppercase shadow-xs">
                    {selectedPost.badge}
                  </span>
                  <span className="text-xs font-mono tracking-wider text-zinc-600 uppercase bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
                    {selectedPost.company}
                  </span>
                  {selectedPost.views && (
                    <span className="text-xs text-zinc-500 font-mono flex items-center gap-1 ml-auto">
                      <TrendingUp className="w-3.5 h-3.5 text-amber-600" /> {selectedPost.views} reads
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-zinc-950 tracking-tight leading-tight">
                  {selectedPost.title}
                </h1>

                <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-light">
                  {selectedPost.excerpt}
                </p>

                {/* Author Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-y border-zinc-200 text-sm text-zinc-600">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-zinc-950 p-2.5 flex items-center justify-center shadow-xs shrink-0 border border-zinc-900/10">
                      {selectedPost.authorAvatar ? (
                        <img src={selectedPost.authorAvatar} alt={selectedPost.author} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <ConnectUpLogoIcon className="w-full h-full" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-zinc-950 leading-tight">{selectedPost.author}</p>
                      <p className="text-xs text-zinc-500">{selectedPost.authorRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 text-xs">
                    <div className="flex items-center gap-1.5 text-zinc-600">
                      <Calendar className="w-4 h-4 text-amber-600" />
                      <span>{selectedPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-600">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </header>

              {/* Cover Hero Image */}
              <div className="w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden border border-zinc-200 mb-10 shadow-lg relative group">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 text-xs text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  Featured Archive Visual • ConnectUp Media
                </div>
              </div>

              {/* Executive Takeaways Box (No star icons) */}
              {selectedPost.takeaways && selectedPost.takeaways.length > 0 && (
                <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-amber-50/80 border border-amber-200/90 shadow-sm relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-amber-600" />
                    <h3 className="text-base font-bold text-zinc-950 uppercase tracking-wider">Executive Takeaways</h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedPost.takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-800 leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-amber-400 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Main Article Body (Prose Light Mode) */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 sm:p-12 shadow-sm mb-12">
                <div 
                  className="prose prose-zinc prose-lg max-w-none text-zinc-700 leading-relaxed 
                    prose-headings:text-zinc-950 prose-headings:font-serif prose-headings:tracking-tight 
                    prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:mb-6 prose-p:leading-relaxed
                    prose-ul:my-6 prose-li:my-2 prose-li:text-zinc-700
                    prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-white 
                    prose-blockquote:p-6 prose-blockquote:rounded-2xl prose-blockquote:text-zinc-900 prose-blockquote:italic prose-blockquote:shadow-xs"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                {/* Author Bio Card at End of Article */}
                <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-xs">
                  <div className="w-16 h-16 rounded-full bg-zinc-950 p-3.5 flex items-center justify-center shadow-xs shrink-0 border border-zinc-900/10">
                    {selectedPost.authorAvatar ? (
                      <img src={selectedPost.authorAvatar} alt={selectedPost.author} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <ConnectUpLogoIcon className="w-full h-full" />
                    )}
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <p className="font-bold text-zinc-950 text-base">{selectedPost.author}</p>
                    <p className="text-xs text-amber-700 font-semibold">{selectedPost.authorRole}</p>
                    <p className="text-xs text-zinc-600 leading-relaxed pt-1">
                      Authoring frontier research and investment dispatches at ConnectUp. Regularly advising syndicate leads on early-stage allocations and technical diligence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Callout Action Banner */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-zinc-100 to-amber-50 border border-amber-200/80 shadow-sm mb-16">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-2 font-serif">
                    Ready to discover vetted founders & syndicates?
                  </h3>
                  <p className="text-sm text-zinc-600">
                    Join over 2,500 active founders and certified angels matching on ConnectUp.
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-full border border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-50 font-bold text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    More Stories
                  </button>
                  <button 
                    onClick={onLoginClick}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-zinc-950 text-white font-black text-xs hover:bg-zinc-800 transition-all cursor-pointer shadow-md hover:shadow-lg"
                  >
                    Join ConnectUp
                  </button>
                </div>
              </div>

              {/* Related Stories Grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-serif text-zinc-950">Recommended For You</h3>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-xs text-amber-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    View All <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {BLOG_POSTS.filter(p => p.id !== selectedPost.id).slice(0, 2).map(post => (
                    <div 
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300 p-5 flex flex-col justify-between shadow-xs hover:shadow-md"
                    >
                      <div className="h-44 rounded-xl overflow-hidden mb-4 relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-zinc-900 border border-zinc-200 uppercase">
                          {post.category}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-zinc-950 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-zinc-600 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ) : (
            /* =========================================================================
               BLOG LISTING INDEX (HOMEPAGE VIEW - WHITE BACKGROUND)
               ========================================================================= */
            <div className="space-y-14">
              
              {/* TOP HERO BANNER / CAROUSEL SLIDER (LIGHT LUXURY EDITORIAL STYLE) */}
              <section className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-md">
                <div className="relative min-h-[460px] lg:min-h-[500px] grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
                  
                  {/* Left Column: Visual Cover */}
                  <div className="lg:col-span-7 relative h-[260px] sm:h-[320px] lg:h-full overflow-hidden">
                    <motion.img 
                      key={`hero-img-${currentHeroPost.id}`}
                      initial={{ scale: 1.08, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      src={currentHeroPost.image} 
                      alt={currentHeroPost.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 lg:from-transparent via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge on Image (No star icons) */}
                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-black text-[11px] font-black tracking-wider uppercase shadow-md flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {currentHeroPost.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 text-[11px] font-mono border border-zinc-200 uppercase font-bold shadow-xs">
                        {currentHeroPost.company}
                      </span>
                    </div>

                    {/* Bookmark on Hero */}
                    <button
                      onClick={(e) => toggleBookmark(currentHeroPost.id, e)}
                      className={`absolute top-5 right-5 p-2.5 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                        bookmarkedIds.includes(currentHeroPost.id)
                          ? 'bg-amber-400 text-black border-amber-400 shadow-md'
                          : 'bg-white/90 text-zinc-700 border-zinc-200 hover:bg-white shadow-xs'
                      }`}
                      title={bookmarkedIds.includes(currentHeroPost.id) ? 'Saved' : 'Save story'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  {/* Right Column: Hero Content */}
                  <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-zinc-50 relative z-10 border-t lg:border-t-0 lg:border-l border-zinc-200">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                        <span className="text-amber-700 font-bold">STORY 0{heroSlideIndex + 1}</span>
                        <span>/</span>
                        <span>0{featuredPosts.length}</span>
                        <span>•</span>
                        <span>{currentHeroPost.date}</span>
                      </div>

                      <h2 
                        onClick={() => setSelectedPost(currentHeroPost)}
                        className="font-serif text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-zinc-950 hover:text-amber-600 transition-colors leading-tight cursor-pointer"
                      >
                        {currentHeroPost.title}
                      </h2>

                      <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
                        {currentHeroPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-zinc-200 space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-zinc-950 p-2 flex items-center justify-center shadow-xs shrink-0 border border-zinc-900/10">
                            {currentHeroPost.authorAvatar ? (
                              <img src={currentHeroPost.authorAvatar} alt={currentHeroPost.author} className="w-full h-full object-cover rounded-full" />
                            ) : (
                              <ConnectUpLogoIcon className="w-full h-full" />
                            )}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-zinc-950">{currentHeroPost.author}</p>
                            <p className="text-[11px] text-zinc-500">{currentHeroPost.readTime}</p>
                          </div>
                        </div>

                        <button 
                          onClick={() => setSelectedPost(currentHeroPost)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 text-white font-black text-xs hover:bg-zinc-800 transition-all cursor-pointer shadow-md"
                        >
                          <span>Read Story</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Slider Controls (Chevrons + Dots) */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                          {featuredPosts.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setHeroSlideIndex(idx)}
                              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                idx === heroSlideIndex ? 'w-8 bg-zinc-950' : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                              }`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button 
                            onClick={() => setHeroSlideIndex(prev => (prev - 1 + featuredPosts.length) % featuredPosts.length)}
                            className="p-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-800 transition-colors cursor-pointer border border-zinc-200 shadow-xs"
                            aria-label="Previous story"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                          </button>
                          <button 
                            onClick={() => setHeroSlideIndex(prev => (prev + 1) % featuredPosts.length)}
                            className="p-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-800 transition-colors cursor-pointer border border-zinc-200 shadow-xs"
                            aria-label="Next story"
                          >
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SEARCH & CATEGORY FILTER BAR */}
              <section className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-zinc-950 tracking-tight">
                      Explore Recent Dispatches
                    </h2>
                    <p className="text-zinc-600 text-sm mt-1">
                      Curated insights from founders, investors, and engineers.
                    </p>
                  </div>

                  {/* Search and Sort */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Search Input */}
                    <div className="relative min-w-[240px] sm:min-w-[280px]">
                      <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search themes, founders, funds..."
                        className="w-full pl-10 pr-9 py-2.5 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:bg-white focus:border-zinc-400 transition-colors shadow-xs"
                      />
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Sort Toggle */}
                    <div className="inline-flex rounded-full bg-zinc-100 p-1 border border-zinc-200 text-xs">
                      <button
                        onClick={() => setSortBy('latest')}
                        className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                          sortBy === 'latest' ? 'bg-white text-zinc-950 font-bold shadow-xs' : 'text-zinc-600 hover:text-zinc-950'
                        }`}
                      >
                        Latest
                      </button>
                      <button
                        onClick={() => setSortBy('popular')}
                        className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                          sortBy === 'popular' ? 'bg-zinc-950 text-white font-bold shadow-xs' : 'text-zinc-600 hover:text-zinc-950'
                        }`}
                      >
                        Most Read
                      </button>
                    </div>
                  </div>
                </div>

              </section>

              {/* 3-COLUMN ARTICLE GRID (WHITE BACKGROUND CARDS) */}
              <section>
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredPosts.map(post => {
                      const isBookmarked = bookmarkedIds.includes(post.id);
                      return (
                        <div 
                          key={post.id}
                          onClick={() => setSelectedPost(post)}
                          className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300 flex flex-col shadow-xs hover:shadow-xl hover:-translate-y-1.5 relative"
                        >
                          {/* Image Thumbnail with Overlay Badges */}
                          <div className="relative h-56 sm:h-60 overflow-hidden bg-zinc-100">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            
                            {/* Floating Category Tag */}
                            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-zinc-900 text-[10px] font-bold border border-zinc-200 uppercase tracking-wider shadow-xs">
                              {post.category}
                            </span>

                            {/* Bookmark Action */}
                            <button
                              onClick={(e) => toggleBookmark(post.id, e)}
                              className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                                isBookmarked 
                                  ? 'bg-amber-400 text-black border-amber-400 shadow-xs' 
                                  : 'bg-white/80 text-zinc-700 hover:text-zinc-950 border-zinc-200 hover:bg-white shadow-xs'
                              }`}
                              title={isBookmarked ? 'Saved' : 'Save article'}
                            >
                              <Bookmark className="w-3.5 h-3.5 fill-current" />
                            </button>
                          </div>

                          {/* Card Content */}
                          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                            <div className="space-y-2.5">
                              {/* Metadata line */}
                              <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                                <span>{post.date}</span>
                                <span className="flex items-center gap-1 text-zinc-500">
                                  <Clock className="w-3 h-3 text-amber-600" /> {post.readTime}
                                </span>
                              </div>

                              {/* Title */}
                              <h3 className="font-serif text-xl font-bold text-zinc-950 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                                {post.title}
                              </h3>

                              {/* Excerpt */}
                              <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                                {post.excerpt}
                              </p>
                            </div>

                            {/* Author & Read Arrow Footer */}
                            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-zinc-950 p-1.5 flex items-center justify-center shadow-2xs shrink-0 border border-zinc-900/10">
                                  {post.authorAvatar ? (
                                    <img src={post.authorAvatar} alt={post.author} className="w-full h-full object-cover rounded-full" />
                                  ) : (
                                    <ConnectUpLogoIcon className="w-full h-full" />
                                  )}
                                </div>
                                <span className="font-medium text-zinc-700 text-xs truncate max-w-[120px]">
                                  {post.author}
                                </span>
                              </div>

                              <span className="flex items-center gap-1 font-semibold text-amber-600 group-hover:translate-x-1 transition-transform">
                                Read <ChevronRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-20 border border-dashed border-zinc-200 rounded-3xl bg-zinc-50">
                    <BookOpen className="w-12 h-12 text-zinc-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-zinc-950 mb-2 font-serif">No articles found</h3>
                    <p className="text-sm text-zinc-600 mb-6 max-w-sm mx-auto">
                      We couldn't find any articles matching &ldquo;{searchQuery || selectedCategory}&rdquo;. Try another filter or keyword.
                    </p>
                    <button 
                      onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                      className="px-6 py-2.5 rounded-full bg-zinc-950 text-white font-bold text-xs hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </section>

              {/* NEWSLETTER SUBSCRIPTION BANNER (LIGHT EDITORIAL) */}
              <section className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-gradient-to-br from-amber-50 via-zinc-50 to-amber-50/60 border border-amber-200/80 shadow-sm">
                <div className="max-w-2xl relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
                    <Mail className="w-3.5 h-3.5" />
                    Weekly Dispatch
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
                    Stay ahead of private markets and frontier AI.
                  </h3>
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                    Join over 15,000 angels, venture partners, and deeptech founders receiving our curated Sunday night syndicate breakdown. Zero noise, high signal.
                  </p>

                  <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your work email..."
                      className="flex-1 px-5 py-3 rounded-full bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-500 shadow-xs"
                      required
                    />
                    <button 
                      type="submit"
                      className="px-8 py-3 rounded-full bg-zinc-950 text-white font-black text-xs hover:bg-zinc-800 transition-all cursor-pointer shadow-md shrink-0"
                    >
                      {newsletterSubscribed ? 'Subscribed ✓' : 'Subscribe Free'}
                    </button>
                  </form>
                  {newsletterSubscribed && (
                    <p className="text-xs text-emerald-700 font-semibold animate-fadeIn">
                      ✓ Welcome aboard! Check your inbox for the latest dispatch.
                    </p>
                  )}
                </div>
              </section>

            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Shared Landing Footer */}
      <FooterSection5 onNavigate={handleNavigate} onLegalView={onLegalView} />
    </div>
  );
};
