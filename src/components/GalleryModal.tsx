'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/data/projects';

interface GalleryModalProps {
  items: GalleryItem[];
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ items, onClose }) => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  }, [items.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, onClose]);

  // Auto-replay video when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const item = items[current];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal container — stop click propagation so clicking inside doesn't close */}
      <div
        className="relative w-full max-w-5xl mx-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition"
          aria-label="Close gallery"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Counter */}
        <p className="absolute -top-12 left-0 text-white/60 text-sm">
          {current + 1} / {items.length}
        </p>

        {/* Media display */}
        <div className="relative w-full bg-gray-900 rounded-xl overflow-hidden"
          style={{ aspectRatio: '16/9' }}>
          {item.type === 'image' ? (
            <Image
              src={item.src}
              alt={item.caption ?? `Gallery item ${current + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
          ) : (
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={item.src} type="video/mp4" />
            </video>
          )}
        </div>

        {/* Caption */}
        {item.caption && (
          <p className="mt-3 text-white/70 text-sm text-center">{item.caption}</p>
        )}

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto max-w-full pb-2 px-1">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 relative w-16 h-12 rounded-md overflow-hidden border-2 transition ${
                i === current ? 'border-indigo-500' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              {it.type === 'image' ? (
                <Image src={it.src} alt={`Thumb ${i + 1}`} fill className="object-cover" sizes="64px" />
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white/60 text-xs">
                  ▶
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
