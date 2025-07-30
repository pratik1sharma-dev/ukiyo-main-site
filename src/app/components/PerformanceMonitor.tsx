"use client";
import { useEffect } from 'react';
import { trackPerformance } from '../utils/performance';

export default function PerformanceMonitor() {
  useEffect(() => {
    trackPerformance();
  }, []);

  return null; // This component doesn't render anything
} 