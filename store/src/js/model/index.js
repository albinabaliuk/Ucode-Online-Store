import productImage1 from '../../assets/images/Products/main/E8_x_on_5.webp'
import productImage2 from '../../assets/images/Products/first pair/E8_gold_1.webp'
import productImage3 from '../../assets/images/Products/3rd/E8_sport_green_1.webp'
import productImage4 from '../../assets/images/Products/4/h4_black1000x1000.webp'
import productImage5 from '../../assets/images/Products/5/h8i-pink-1000x1000-1.webp'
import productImage6 from '../../assets/images/Products/6/wireless_earbuds_beoplay_e6_black_bang_olufsen.webp'
import productImage7 from '../../assets/images/Products/7/e4_1000x1000.webp'
import productImage8 from '../../assets/images/Products/8/headphonesbag_black_1000x1000.webp'
import productImage9 from '../../assets/images/Products/9/h9blackcushion1000x1000new.webp'
import productImage10 from '../../assets/images/Products/10/short_cable_1000x1000.webp'
import productImage11 from '../../assets/images/Products/11/h5_cable_clip_1000x1000.webp'
import productImage12 from '../../assets/images/Products/12/brass.webp'
import productImage13 from '../../assets/images/Products/13/a9_kvadratcover_pink_new.webp'
import productImage14 from '../../assets/images/Products/14/a2_longstrap_natural (1).webp'
import productImage15 from '../../assets/images/Products/15/s3_covers_blue_hero.webp'
import productImage16 from '../../assets/images/Products/16/a9_coverred_01.webp'
import productImage17 from '../../assets/images/Products/17/PS_Halo_bronze_Table_Hero.webp'
import productImage18 from '../../assets/images/Products/18/ACC_Beosound_Stage_Floorstand_Front.webp'
import productImage19 from '../../assets/images/Products/19/e8_x_on_right.webp'

export const model = {
  filters: {
    types: [
      { title: 'Headphones', value: false },
      { title: 'Speakers', value: false },
      { title: 'Accessories', value: false },
      { title: 'Televisions', value: false },
      { title: 'Gifts', value: false }
    ],
    price: {
      min: "0",
      max: "750",
      value: "0"
    },
    availability: [
      { title: 'Low', value: false },
      { title: 'Normal', value: true },
      { title: 'Many', value: false }
    ]
  },

  cart: [],

  currencies: {
    euro: 1,
    dollar: 0.9
  },
  currency: 'euro',

  products: [{
      image: productImage1,
      title: 'Beoplay E8 Sport Charging Case',
      description: 'Redesigned wireless charging case - limited edition',
      price: 200,
      inStock: 10
    },
    {
      image: productImage2,
      title: 'Beoplay E8 3rd Gen',
      description: 'More compact. More powerful.',
      price: 350,
      inStock: 4
    },
    {
      image: productImage3,
      title: 'Beoplay E8 Sport',
      description: 'Powerful Bluetooth sports earphones',
      price: 350,
      inStock: 6
    },
    {
      image: productImage4,
      title: 'Beoplay H4 2nd Gen',
      description: 'Pure expression. Superior sound',
      price: 300,
      inStock: 3
    },
    {
      image: productImage5,
      title: 'Beoplay H8i',
      description: 'Revitalizing a modern classic',
      price: 400,
      inStock: 9
    },
    {
      image: productImage6,
      title: 'Beoplay E6',
      description: 'Supreme sound for the streets',
      price: 200,
      inStock: 4
    },
    {
      image: productImage7,
      title: 'Beoplay E4',
      description: 'The power of silence',
      price: 200,
      inStock: 10
    },
    {
      image: productImage8,
      title: 'Bag for headphones',
      description: 'Fit all B&O headphones',
      price: 150,
      inStock: 15
    },
    {
      image: productImage9,
      title: 'Ear cushions for Beoplay H9 3rd Gen',
      description: 'Additional ear-cushions',
      price: 70,
      inStock: 5
    },
    {
      image: productImage10,
      title: 'Short Audio Cable for all headphones',
      description: 'For your active lifestyle',
      price: 25,
      inStock: 7
    },
    {
      image: productImage11,
      title: 'Cable Clip for Beoplay E6 and Beoplay H5',
      description: 'Secure fit ensured',
      price: 15,
      inStock: 3
    },
    {
      image: productImage12,
      title: 'Beoremote One',
      description: 'Do more with less',
      price: 300,
      inStock: 4
    },
    {
      image: productImage13,
      title: 'Kvadrat cover for Beoplay A9',
      description: 'One product, many styles',
      price: 130,
      inStock: 7
    },
    {
      image: productImage14,
      title: 'Beoplay A2 and A2 Active Long Strap',
      description: 'Wear it differently',
      price: 50,
      inStock: 8
    },
    {
      image: productImage15,
      title: 'Beoplay S3 Cover',
      description: 'Make it yours',
      price: 50,
      inStock: 2
    },
    {
      image: productImage16,
      title: 'Beoplay A9 Cover',
      description: 'One product, many styles',
      price: 50,
      inStock: 20
    },
    {
      image: productImage17,
      title: 'Beoremote Halo',
      description: 'Remote Control for Easy Access to Music',
      price: 750,
      inStock: 9
    },
    {
      image: productImage18,
      title: 'Beosound Stage Floor Stand',
      description: 'A new stand for our new soundbar',
      price: 700,
      inStock: 10
    },
    {
      image: productImage19,
      title: 'Beoplay E8 Sport Single Earbud',
      description: 'Bluetooth earphones',
      price: 125,
      inStock: 4
    }
  ]
}

export const updateFilterType = (index, value) => {
  model.filters.types[index].value = value
}

export const updateAvailability = (index, value) => {
  model.filters.availability[index].value = value
  console.log(model.filters)
}

export const updateFilterPrice = value => {
  model.filters.price.value = value
}