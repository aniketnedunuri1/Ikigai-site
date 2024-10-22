"use client";
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';

interface ReviewProps {
  title: string;
  description: string;
  name: string;
  role: string;
  rating: number; // Assuming a rating of 5, you can change this to any number
}

const ReviewCard: React.FC<ReviewProps> = ({description, name, role, rating }) => {

  
  return (
    <Card className="w-full sm:w-96 mx-2 sm:mx-4 shadow-none border-none bg-gray-800/50 p-2 rounded-lg">
      <CardHeader  />
      
      <CardContent>
        <Alert className="text-white">
          <AlertDescription>
            <p className="text-lg mb-4">{description}</p>
            <p className="font-bold">{name}</p>
            <p className="text-sm text-gray-400">{role}</p>

          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;