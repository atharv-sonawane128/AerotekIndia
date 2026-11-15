"use client";

import { useState, useRef, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full max-w-4xl mx-auto h-[340px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 cursor-ew-resize select-none"
    >
      {/* Right / Background Image: AFTER (Zinc Rich Cold Galvanized Steel) */}
      <div className="absolute inset-0 bg-slate-200">
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="none">
          <defs>
            <linearGradient id="zinc-galva" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="25%" stopColor="#CBD5E1" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="75%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
            <pattern id="spangle" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 40 40 M 40 0 L 0 40" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.3" />
              <circle cx="20" cy="20" r="12" fill="#FFFFFF" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="800" height="500" fill="url(#zinc-galva)" />
          <rect width="800" height="500" fill="url(#spangle)" />
          {/* Corrugation bands */}
          <line x1="0" y1="100" x2="800" y2="100" stroke="#475569" strokeWidth="4" opacity="0.3" />
          <line x1="0" y1="200" x2="800" y2="200" stroke="#475569" strokeWidth="4" opacity="0.3" />
          <line x1="0" y1="300" x2="800" y2="300" stroke="#475569" strokeWidth="4" opacity="0.3" />
          <line x1="0" y1="400" x2="800" y2="400" stroke="#475569" strokeWidth="4" opacity="0.3" />
        </svg>

        {/* Fallback image if user drops an actual photo */}
        <img
          src="/images/galvanized-after.jpg"
          alt="After Cold Galvanizing"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Top-Right Badge: "After - Zinc Rich" */}
        <div className="absolute top-4 right-4 z-10 px-3.5 py-1 rounded-full bg-[#16a34a] text-white text-xs font-bold shadow-md">
          After - Zinc Rich
        </div>
      </div>

      {/* Left / Foreground Image: BEFORE (Heavy Rust Corrosion) with Clip Path */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}>
          <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="none">
            <defs>
              <linearGradient id="rust-texture" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C2D12" />
                <stop offset="30%" stopColor="#9A3412" />
                <stop offset="60%" stopColor="#C2410C" />
                <stop offset="85%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>
              <pattern id="rust-pitting" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="8" fill="#451A03" opacity="0.6" />
                <circle cx="45" cy="35" r="14" fill="#78350F" opacity="0.5" />
                <circle cx="30" cy="50" r="10" fill="#9A3412" opacity="0.7" />
              </pattern>
            </defs>
            <rect width="800" height="500" fill="url(#rust-texture)" />
            <rect width="800" height="500" fill="url(#rust-pitting)" />
          </svg>

          {/* Fallback image if user drops an actual photo */}
          <img
            src="/images/rust-before.jpg"
            alt="Before Rust"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Top-Left Badge: "Before - Rust" */}
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-black/75 backdrop-blur-sm text-white text-xs font-bold shadow-md">
            Before - Rust
          </div>
        </div>
      </div>

      {/* Central Draggable Divider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20 flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-9 h-9 rounded-full bg-white text-slate-800 shadow-xl border-2 border-slate-300 flex items-center justify-center -ml-4 transition-transform active:scale-110">
          <MoveHorizontal className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

