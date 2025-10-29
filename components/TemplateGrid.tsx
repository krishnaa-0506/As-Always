import { useState } from 'react';
import { motion } from 'framer-motion';
import TemplatePreview from './TemplatePreview';
import type { Template } from '@/lib/data/templates';

interface TemplateGridProps {
  templates: Template[];
  selectedFiles?: File[];
  onTemplateSelect: (templateId: string) => void;
  selectedTemplateId?: string;
  filter?: string;
}

export default function TemplateGrid({
  templates,
  selectedFiles,
  onTemplateSelect,
  selectedTemplateId,
  filter,
}: TemplateGridProps) {
  const [activeFilter, setActiveFilter] = useState(filter || 'all');

  const filteredTemplates = templates.filter((template) => {
    if (activeFilter === 'all') return true;
    return template.suitableFor.includes(activeFilter);
  });

  // Get unique categories from all templates
  const categories = ['all', ...Array.from(new Set(templates.flatMap((t) => t.suitableFor)))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
              activeFilter === category
                ? 'bg-pink-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredTemplates.map((template) => (
          <TemplatePreview
            key={template.id}
            template={template}
            selectedFiles={selectedFiles}
            onSelect={onTemplateSelect}
            isSelected={selectedTemplateId === template.id}
          />
        ))}
      </motion.div>

      {/* No Results Message */}
      {filteredTemplates.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500">
            No templates found for this category. Try another filter.
          </p>
        </motion.div>
      )}
    </div>
  );
}
