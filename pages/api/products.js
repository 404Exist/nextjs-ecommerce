let products = [
  {
    _id:"2cdae707-8558-43f0-b348-c3fcd892a210",
    details:"Greate looking and sounding headphones!",
    images:[
      "/assets/headphones_a_1.webp",
      "/assets/headphones_a_2.webp",
      "/assets/headphones_a_3.webp",
      "/assets/headphones_a_4.webp",
    ],
    name:"Headphones",
    price:80,
    slug:"headphones-a",
  },
  {
    _id:"2cdae707-8558-43f0-b348-c3fcd892a310",
    details:"Greate looking and sounding headphones!",
    images:[
      "/assets/headphones_b_1.webp",
      "/assets/headphones_b_2.webp",
      "/assets/headphones_b_3.webp",
      "/assets/headphones_b_4.webp",
    ],
    name:"Headphones",
    price:55,
    slug:"headphones-b",
  },
  {
    _id:"1f2fbbf1-f505-4654-86a7-a688733f971c",
    details:"A second pair of headphones",
    images:[
      "/assets/headphones_c_1.webp",
      "/assets/headphones_c_2.webp",
      "/assets/headphones_c_3.webp",
      "/assets/headphones_c_4.webp",
    ],
    name:"Headphones",
    price:110,
    slug:"headphones-c",
  },
  {
    _id:"c2df61cf-cd82-451e-b439-036b57013d25",
    details:"Use these while working out",
    images:[
      "/assets/earphones_a_1.webp",
      "/assets/earphones_a_2.webp",
      "/assets/earphones_a_3.webp",
      "/assets/earphones_a_4.webp",
    ],
    name:"Cool in-ear headphones",
    price:40,
    slug:"cool-in-ear-headphones",
  },
  {
    _id:"c2df61cf-cd82-451e-b439-036b57013d35",
    details:"Use these while working out",
    images:[
      "/assets/earphones_b_1.webp",
      "/assets/earphones_b_2.webp",
      "/assets/earphones_b_3.webp",
      "/assets/earphones_b_4.webp",
    ],
    name:"Cool in-ear headphones",
    price:70,
    slug:"cool-in-ear-headphones-b",
  },
  {
    _id:"c2df61cf-cd82-451e-b439-036b57013d45",
    details:"Use these while working out",
    images:[
      "/assets/earphones_c_1.webp",
      "/assets/earphones_c_2.webp",
      "/assets/earphones_c_3.webp",
      "/assets/earphones_c_4.webp",
    ],
    name:"Cool in-ear headphones",
    price:100,
    slug:"cool-in-ear-headphones-c",
  },
  {
    _id:"276a5e82-20c0-4ee9-a1ed-934ca4a25e7d",
    details:"Immerse in the amazing sound",
    images:[
      "/assets/speaker1.webp",
      "/assets/speaker2.webp",
      "/assets/speaker3.webp",
      "/assets/speaker4.webp",
    ],
    name:"Speaker",
    price:200,
    slug:"speaker",
  },
  {
    _id:"276a5e82-20c0-4ee9-a1ed-934ca4a25e8d",
    details:"Smart Watch with Built-in GPS and Heart Rate MonitoringImmerse in the amazing sound",
    images:[
      "/assets/watch_1.webp",
      "/assets/watch_2.webp",
      "/assets/watch_3.webp",
      "/assets/watch_4.webp",
    ],
    name:"Watch",
    price:250,
    slug:"watch",
  },
];
export default function handler(req, res) {
  if (Object.keys(req.query).length === 0) {
    return res.status(200).json(products);
  }
  let filterdProducts = [...products];
  for (let param in req.query) {
    filterdProducts = products.filter(product => product[param] === req.query[param]);
  }
  res.status(200).json(filterdProducts)
}
