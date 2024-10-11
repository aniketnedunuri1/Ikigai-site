// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// interface ItemProps {
//   src1: string; // Front image source
//   src2: string; // Back image source
//   alt1?: string; // Alt text for the front image
//   alt2?: string; // Alt text for the back image
//   title: string; // Title text for the card
//   desc: string;
// }

// export default function Item({ src1, src2, alt1 = 'Front Image', alt2 = 'Back Image', title, desc}: ItemProps) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Card className="w-96 mx-4 shadow-none border-none bg-transparent">
        
//       <CardHeader>
      
//         <CardTitle className="text-center text-xl font-normal">{title}</CardTitle>

//       </CardHeader>
//       <CardContent>
//         <span className="flex justify-center text-center italic">  {desc} </span>
//         <div
//           className="relative w-full h-96" 
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {isHovered ? (
//             <Image
//               src={src2}
//               alt={alt2} 
//               layout="fill"
//               objectFit="contain"
//             />
//           ) : (
//             <Image
//               src={src1} 
//               alt={alt1} 
//               layout="fill"
//               objectFit="contain"
//             />
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { Button } from '@/components/ui/button';

interface ItemProps {
  src1: string;
  src2: string;
  alt1?: string;
  alt2?: string;
  title: string;
  desc: string;
  onAddToCart: (item: CartItem) => void;
}

export interface CartItem {
  title: string;
  quantity: number;
  price: number;
}

export default function Item({ src1, src2, alt1 = 'Front Image', alt2 = 'Back Image', title, desc, onAddToCart }: ItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleAddToCart = () => {
    onAddToCart({ title, quantity, price: 2000 }); // Example price
  };



  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/create-checkout-session', {  // Correct API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: title,
                },
                unit_amount: 2000, // Example amount in cents
              },
              quantity: 1,
            },
          ],
        }),
      });

      const { url } = await res.json();
      if (url) {
        window.location.href = url; // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error('Error creating Stripe checkout session:', error);
    }
  };


  return (
    <Card className="w-full sm:w-96 mx-2 sm:mx-4 shadow-none border-none bg-slate-400/5">
      <CardHeader>
        <Alert>
          <AlertTitle>
          {title}

          </AlertTitle>

          <AlertDescription>
            {desc}
          </AlertDescription>
        </Alert>

      </CardHeader>
      <CardContent>
        <div
          className="relative w-full h-72 sm:h-96"
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
        <div className="flex items-center space-x-2 mt-4">
          <label htmlFor="quantity" className="text-sm">Quantity:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 px-2 py-1 border rounded"
          />
        </div>

        <Button variant="default"className="mt-4" onClick={handleAddToCart}>Add to Cart</Button>

        <Button variant="link" onClick={handleCheckout}>Checkout</Button>

      </CardContent>
    </Card>
  );
}