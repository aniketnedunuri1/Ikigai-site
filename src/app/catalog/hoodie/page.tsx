"use client";
import { useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function HoodiePage() {
  useEffect(() => {
    const scriptId = 'shopify-buy-button-script';

    // Function to load the Shopify script
    const loadShopifyScript = () => {
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.async = true;
        script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        document.body.appendChild(script);

        script.onload = () => {
          ShopifyBuyInit(); // Call the initialization function after the script is loaded
        };
      } else {
        // If the script is already loaded, just initialize ShopifyBuy
        ShopifyBuyInit();
      }
    };

    // Function to initialize Shopify Buy Button
    const ShopifyBuyInit = () => {
      if (typeof ShopifyBuy !== 'undefined') {
        const client = ShopifyBuy.buildClient({
          domain: '2bccc7-40.myshopify.com',
          storefrontAccessToken: '3401eadfe093cb5dd48065125fc2574f',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '9721855181116', // Hoodie product ID
            node: document.getElementById('product-component-1728625307484'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
              product: {
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': '100%',
                      'margin-left': '0',
                      'margin-bottom': '50px',
                    },
                    'text-align': 'left',
                  },
                  title: {
                    'font-size': '26px',
                  },
                  button: {
                    ':hover': {
                      'background-color': '#a44e58',
                    },
                    'background-color': '#b65762',
                    ':focus': {
                      'background-color': '#a44e58',
                    },
                  },
                  price: {
                    'font-size': '18px',
                  },
                  compareAt: {
                    'font-size': '15.3px',
                  },
                  unitPrice: {
                    'font-size': '15.3px',
                  },
                },
                layout: 'horizontal',
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  description: true,
                },
                width: '100%',
                text: {
                  button: 'Add to cart',
                },
              },
              cart: {
                styles: {
                  button: {
                    ':hover': {
                      'background-color': '#a44e58',
                    },
                    'background-color': '#b65762',
                    ':focus': {
                      'background-color': '#a44e58',
                    },
                  },
                },
                text: {
                  total: 'Subtotal',
                  button: 'Checkout',
                },
              },
              toggle: {
                styles: {
                  toggle: {
                    'background-color': '#b65762',
                    ':hover': {
                      'background-color': '#a44e58',
                    },
                    ':focus': {
                      'background-color': '#a44e58',
                    },
                  },
                },
              },
            },
          });
        });
      }
    };

    // Load the Shopify Buy Button script
    loadShopifyScript();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen space-y-8 mt-10 sm:mt-20">
      {/* Header with the product alert */}
      {/* Shopify Buy Button */}
      <div className="container mx-auto p-4">
        <div id="product-component-1728625307484"></div> {/* Shopify Buy Button Element */}
      </div>
    </section>
  );
}
