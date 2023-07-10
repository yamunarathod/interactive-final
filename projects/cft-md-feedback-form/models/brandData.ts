import { products } from './brands.models';


const productColor= "black";



export const brand3: products[] =[
  {
              brandName: 'Gatorade',
              product: [
                  // { productName: 'G Active Mandarine', color: productColor },
                  // { productName: 'G Active Strwaberry', color: productColor },
                  // { productName: 'G Active Kiwi', color: productColor },
                  { productName: 'Gatorlyte Lime', color: productColor },
                  { productName: 'Grape (US)', color: productColor },
                  { productName: 'Both', color: productColor },
                  { productName: 'None', color: productColor }
              ],
              brandColor: 'from-orange-600 to-pink-600',
   }
]

export const brand4:products[] = [
  {
      brandName: 'Malt Flavoured Bevs',
      product: [
          { productName: 'Classic Malt', color: productColor },
          { productName: 'Peach', color: productColor },
          { productName: 'Pineapple', color: productColor },
          { productName: 'Apple', color: productColor },
      ],
      brandColor: 'from-red-300 to-red-800',
  },
  {
      brandName: 'Local Flavours',
      product: [
          { productName: 'Ole Cream Soda', color: productColor },
          { productName: 'Jeera Carbonated', color: productColor },
          {
              productName: 'Jeera Non Carbonated',
              color: productColor,
          },
      ],
      brandColor: 'from-violet-600 to-blue-600',
  },
  {
      brandName: 'Bubly',
      product: [
          { productName: 'Lemon Gin & Tonic', color: productColor },
          { productName: 'Tonic Water', color: productColor },
          { productName: 'Bitter Lemon', color: productColor },
          { productName: 'Ginger Ale', color: productColor },
      ],
      brandColor: 'from-green-300 to-green-800',
  },

];


   export const brand2: products[] = [
          {
              brandName: '7UP',
              product: [
                  { productName: '7UP ZS', color: productColor },
                  { productName: '7UP Fizz FS', color: productColor },
                  { productName: '7UP Fizz MidCal', color: productColor },
              ],
              brandColor: 'from-[#63CC49]  to-[#179304]',
          },
          {
            brandName: 'PEPSI',
            product: [
                { productName: 'PEPSI Mid Cal', color: productColor },
            ],
            brandColor: 'from-[#1687B4] to-[#304882]',
         },
         {
          brandName: 'MIRINDA',
          product: [
              { productName: 'Mid Cal', color: productColor },
              { productName: 'Zero Sugar', color: productColor },
              { productName: 'Green Cream', color: productColor },
              { productName: 'Pomegranate', color: productColor },
          ],
          brandColor: 'from-[#F19155] to-[#AA5B2B]',
       },
       {
        brandName: 'JUICES',
        product: [
            { productName: 'Lychee with inclusion', color: productColor },
            { productName: 'Mixed Fruit with inclusion', color: productColor },
            { productName: 'Mango with inclusions', color: productColor },
            { productName: 'Orange 10%', color: productColor },
            { productName: 'Lychee 10%', color: productColor }
        ],
        brandColor: 'from-violet-600 to-blue-600',
     },
      ];

       export const  brand1: products[]=
    [
      {
        brandName: "Mountain Dew", product:
        [
        {productName:"Dew Mild Cal",color:productColor},
        {productName:"Dew Zero",color:productColor},
        {productName:"Voltage",color:productColor},
        {productName:"Baja Passion fruit",color:productColor},
        {productName:"Mango",color:productColor},
        {productName:"Pitch Black", color:productColor}
        ],

        brandColor: 'from-green-300  to-green-900',
      },
      {
        brandName: "Sting", product: [
          {productName:"Blue",color:productColor},
          {productName:"Gold Rush",color:productColor},
          {productName:"Malt",color:productColor},
          ],
          brandColor:'from-red-400 to-red-600',
      },

      {
        brandName: "Rockstar", product: [
          {productName:"Orginal (NS)",color:productColor},
          {productName:"Bloody Orange",color:productColor},
          {productName:"Strawberry",color:productColor},
          {productName:"Blueberry Mint",color:productColor}
          ],
          brandColor: 'from-[#E9D150] to-[#C19929]',
      }

    ]

