"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ItemProps {
  src1: string; // Front image source
  src2: string; // Back image source
  alt1?: string; // Alt text for the front image
  alt2?: string; // Alt text for the back image
  title: string; // Title text for the card
}

export default function Item({ src1, src2, alt1 = 'Front Image', alt2 = 'Back Image', title }: ItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="w-96 mx-4 shadow-none border-none bg-transparent">
        
      <CardHeader>
      
        <CardTitle className="text-center text-xl font-normal">{title}</CardTitle>

      </CardHeader>
      <CardContent>
        <div
          className="relative w-full h-96" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <Image
              src={src2}
              alt={alt2} 
              layout="fill"
              objectFit="contain"
            />
          ) : (
            <Image
              src={src1} 
              alt={alt1} 
              layout="fill"
              objectFit="contain"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}