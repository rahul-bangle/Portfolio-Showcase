import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SideQuestCardProps {
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

export const SideQuestCard: React.FC<SideQuestCardProps> = ({ 
  icon: Icon, 
  title, 
  category, 
  description, 
  image,
  index 
}) => {
  return (
    <motion.div 
      className="side-quest-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="side-quest-header">
        <div className="side-quest-icon">
          <Icon size={24} className="text-primary" />
        </div>
        <div className="side-quest-info">
          <h4>{title}</h4>
          <p>{category}</p>
        </div>
      </div>
      <p className="side-quest-description">
        {description}
      </p>
      <div className="side-quest-visual">
        <img src={image} alt={title} />
      </div>
    </motion.div>
  );
};
