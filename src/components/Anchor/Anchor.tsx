// src/components/Anchor/Anchor.tsx
import React from 'react';
import { AnchorProps } from './types';
import { useAnchor, useLinkProps } from '../../context/AnchorContext';

const Anchor: React.FC<AnchorProps> = ({ href, children }) => {
  const { LinkElement } = useAnchor();
  const props = useLinkProps(href);
  return <LinkElement {...props}>{children}</LinkElement>;
};

export default Anchor;
