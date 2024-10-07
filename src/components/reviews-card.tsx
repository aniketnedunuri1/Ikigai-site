"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from './ui/card';
import { cn } from '@/lib/utils'; // Assuming you have a utility function to handle conditional classes

interface ReviewCardProps {
  photoUrl?: string; // URL for the photo (optional)
  title: string; // Title of the review (e.g., "Kappa Theta Pi")
  review: string; // Review text
}

export default function ReviewCard({ photoUrl, title, review }: ReviewCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "w-full sm:w-96 mx-2 sm:mx-4 shadow-lg border border-white bg-white/10 rounded-lg p-4",
        { "bg-white/20": isHovered }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="flex items-center space-x-4">
        {photoUrl && (
          <Image
            src={photoUrl}
            alt={`${title} logo`}
            width={50}
            height={50}
            className="rounded-full"
          />
        )}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-white mb-4">{review}</p>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-white"
              
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
