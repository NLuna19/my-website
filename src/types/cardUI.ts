import { HTMLAttributeAnchorTarget } from 'react';

export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  target?: HTMLAttributeAnchorTarget | undefined;
}
