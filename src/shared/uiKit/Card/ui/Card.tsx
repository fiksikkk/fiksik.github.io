import React from 'react';
import { motion } from 'framer-motion';

import { Fonts } from '../../../styles';
import { card } from './Card.css';

export interface CardProps {
  title: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <motion.div
      className={card}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className={Fonts.h3}>{title}</h3>
      {children && <p className={Fonts.body}>{children}</p>}
    </motion.div>
  );
};

// const h3 = style({
//   backgroundColor: 'red',
// });
