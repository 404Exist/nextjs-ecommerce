const banner = {
    _id:"1f2fbbf1-f505-4654-86a7-a688733f971c",
    image:"/assets/headphones_c_1.webp",
    product:"headphones-c",
    discount: "20% OFF",
    smallText:"Beats Solo Air",
    midText:"Summer Sale",
    largeText1:"FINE",
    largeText2:"SMILE",
    saleTime:"22 Apr to 1 May",
    buttonText:"Shop Now",
    desc:"Best headphones on the market",
};
export default function handler(req, res) {
  res.status(200).json(banner)
}
