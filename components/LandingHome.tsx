
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ArrowRight, Play, Pause, ChevronRight, Sparkles } from 'lucide-react';
import { ParallaxComponent } from './ui/component';

interface HomeViewProps {
  onNavigate: (page: 'home' | 'about' | 'blog' | 'founders' | 'contact') => void;
  onLoginClick: () => void;
  showVideo: boolean;
}

export const LandingHome = ({ onNavigate, onLoginClick, showVideo }: HomeViewProps) => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Aggressive hero animation
    const tl = gsap.timeline();
    tl.fromTo(homeRef.current,
      { scale: 0.95, opacity: 0, rotation: -1, y: 30 },
      { scale: 1, opacity: 1, rotation: 0, y: 0, duration: 1.2, ease: "power4.out" }
    );
  }, []);

  return (
    <div ref={homeRef} className="w-full relative bg-gradient-to-b from-yellow-400 to-white">
      <ParallaxComponent />
    </div>
  );
};