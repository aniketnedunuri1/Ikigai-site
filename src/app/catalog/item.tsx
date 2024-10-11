"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';

interface ItemProps {
  src1: string;
  src2: string;
  alt1?: string;
  alt2?: string;
  title: string;
  desc: string;
  onAddToCart: (item: CartItem) => void;
  productUrl: string; // URL to the product info page
}

export interface CartItem {
  title: string;
  quantity: number;
  price: number;
}

export default function Item({ src1, src2, alt1 = 'Front Image', alt2 = 'Back Image', title, desc, onAddToCart, productUrl }: ItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleRedirect = () => {
    window.location.href = productUrl; // Redirect to product info page
  };

  return (
    <Card
      className={`w-full sm:w-96 mx-2 sm:mx-4 shadow-none border-none bg-slate-400/5 transition-shadow duration-300 ${
        isHovered ? 'shadow-lg' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleRedirect} // Handle click to redirect
    >
      <CardHeader />
      <CardContent>
        <div
          className="relative w-full h-72 sm:h-96 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <Image
              src={src2}
              alt={alt2}
              layout="fill"
              objectFit="contain"
              draggable={false}
            />
          ) : (
            <Image
              src={src1}
              alt={alt1}
              layout="fill"
              objectFit="contain"
              draggable={false}
            />
          )}
        </div>
        <Alert>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{desc}</AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
