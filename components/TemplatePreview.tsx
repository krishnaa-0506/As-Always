import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Template } from '@/lib/data/templates';

interface TemplatePreviewProps {
  template: Template;
  selectedFiles?: File[];
  onSelect: (templateId: string) => void;
  isSelected: boolean;
}

export default function TemplatePreview({ template, selectedFiles, onSelect, isSelected }: TemplatePreviewProps) {
  const [previewIndex, setPreviewIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Cycle through backgrounds for preview
  useEffect(() => {
    if (isHovered) {
      const timer = setInterval(() => {
        setPreviewIndex((prev) => 
          (prev + 1) % template.styling.backgrounds.length
        );
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isHovered, template.styling.backgrounds.length]);

  const previewContent = selectedFiles && selectedFiles.length > 0
    ? {
        title: 'Your Memories',
        content: selectedFiles.map(file => file.name).slice(0, 3)
      }
    : template.sampleContent;

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-4 ring-pink-500 scale-105' : 'hover:scale-105'
      }`}
      onClick={() => onSelect(template.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      {/* Preview Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={previewIndex}
          className={`absolute inset-0 ${template.styling.backgrounds[previewIndex]}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Template Content Preview */}
      <div className="relative p-6 min-h-[300px] flex flex-col items-center justify-center text-white">
        <motion.h3
          className={`text-2xl font-bold mb-3 ${template.styling.textAlign}`}
          style={{ fontFamily: template.styling.fontFamily }}
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        >
          {template.name}
        </motion.h3>

        <motion.p
          className="text-sm text-white/80 mb-4 text-center"
          animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
        >
          {template.description}
        </motion.p>

        {/* Sample Content Preview */}
        {isHovered && previewContent && (
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {previewContent.content.map((text, i) => (
              <motion.p
                key={i}
                className="text-sm text-white/90"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        )}

        {/* Preview Label */}
        <motion.div
          className="absolute bottom-4 left-4 text-xs text-white/60"
          animate={isHovered ? { opacity: 1 } : { opacity: 0.6 }}
        >
          Click to select
        </motion.div>

        {/* Style Indicators */}
        <div className="absolute top-4 right-4 flex space-x-1">
          {template.suitableFor.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-white/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
