import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, src, alt, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative max-w-5xl w-full rounded-2xl bg-white p-3 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-gray-700 shadow-md hover:bg-white"
          aria-label="Close image"
        >
          <X className="h-5 w-5" />
        </button>
        <img src={src} alt={alt} className="max-h-[80vh] w-full rounded-xl object-contain" />
      </div>
    </div>
  );
}
