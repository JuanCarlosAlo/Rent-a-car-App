
'use client'

import React from 'react';
import { StyleRegistry } from 'styled-jsx';


export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyleRegistry>{children}</StyleRegistry>;
}
