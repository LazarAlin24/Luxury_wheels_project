import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";

let all_product = [
  {
    id: 1,
    name: "ROTIFORM WHEELS",
    category: "wheels",
    image: p1_img,
    new_price: 1550.0,
    old_price: 1850.5,
    description:
      "Wheel Pattern: LAS-R\n" +
      "Wheels Colour: Silver\n" +
      "Wheel Sizes: 17×8, 17×9, 18×8.5, 18×9.5, 19×8.5, 19×10, 20×8.5, 20×10, 20×11\n" +
      "Bolt Pattern: 4×100, 4×114.3, 5×100, 5×112, 5×114.3, 5×120",
  },
  {
    id: 2,
    name: "NICHE RACING WHEELS",
    category: "wheels",
    image: p2_img,
    new_price: 1685.0,
    old_price: 1750.5,
    description:
      "Wheel Pattern: ASCARI – M167\nColour: Bronze\nAvailable Sizes: 20×9 | 20×10 | 20×10.5",
  },
  {
    id: 3,
    name: "OZ RACING WHEELS",
    category: "wheels",
    image: p3_img,
    new_price: 1660.0,
    old_price: 2000.0,
    description:
      "Wheel Pattern: Ultraleggera HLT\nColour: Matte black\nOffset Range: 22-75\nSizes: 19×8, 19×9, 19×10, 19×11, 19×12, 20×8, 20×9, 20×10, 20×11, 20×12\nBolts: 5",
  },
  {
    id: 4,
    name: "MARS WHEELS",
    category: "wheels",
    image: p4_img,
    new_price: 2500.0,
    old_price: 3050.0,
    description:
      "Wheel Size:19, 20\nWheel Width:8.5, 9.5, 10, 10.5, 9.0, 11.0\nWheel offset	+45, +35, +15, +40, +30, +40, +20, +10, +15, +25, Custom",
  },
  {
    id: 5,
    name: "FUEL WHEELS",
    category: "wheels",
    image: p5_img,
    new_price: 2885.0,
    old_price: 3600.0,
    description: "Pattern: WILDCAT – D597\nAvailable Sizes: 17×9, 20×9, 20×10",
  },
  {
    id: 6,
    name: "ASANTI WHEELS",
    category: "wheels",
    image: p6_img,
    new_price: 3500.0,
    old_price: 4000.0,
    description:
      "Wheel comes in blank and can be machined and drilled to suit most 5 stud applications.All wheels come with necessary hardware required for fitting.\nAvailable Size:20×8.5, 20×9,20×10.5, 22×9,22×10.5",
  },
  {
    id: 7,
    name: "INFORGED WHEELS",
    category: "wheels",
    image: p7_img,
    new_price: 3250.0,
    old_price: 3990.0,
    description:
      "Wheel Pattern: iFG 41\nWheel Colour: Black\nWheel Sizes Available: 18 | 20 |",
  },
  {
    id: 8,
    name: "KIKI WHEELS",
    category: "wheels",
    image: p8_img,
    new_price: 1985.0,
    old_price: 2320.0,
    description:
      "Model: KIKI5566\nSize: 18.0 X 8\nFinish: Black Machine Lip; Bronze/BRZ Lip+Clear\nStud Pattern/Offset: Blank (Customize to most P.C.D.), 20P ;",
  },
  {
    id: 9,
    name: "GT FORM WHEELS",
    category: "wheels",
    image: p9_img,
    new_price: 3800.0,
    old_price: 4320.0,
    description:
      "The GT Form Marquee is now available in 18 inch. These high-end racing wheels are what you need to give your vehicle an aggressive look and sporty feel. The wheel provides a sharp look with spokes extending from the centre to the outer edge of the lip. Offered in gloss black finish to suit most 5 stud applications.\nWheel PCD	5×114.3",
  },
  {
    id: 10,
    name: "ENKEI JAPAN WHEELS",
    category: "wheels",
    image: p10_img,
    new_price: 2685.0,
    old_price: 3300.0,
    description:
      "Colour	Matt Black, Matt Gun Metal\nInch 18\nWidth	7.0, 7.5, 8.0, 8.5, 9.0, 9.5\nPCD	5X100, 5X112",
  },
  {
    id: 11,
    name: "VMR WHEELS",
    category: "wheels",
    image: p11_img,
    new_price: 3785.0,
    old_price: 4000.0,
    description:
      "Colour	Black, Gunmetal\nInch	18 , 19\nWidth	8.5, 9.5, 10\nPCD	5X120, 5X112\nOffset	22, 33, 35, 45, 50, 40",
  },
  {
    id: 12,
    name: "VARRO SPIN WHEELS",
    category: "wheels",
    image: p12_img,
    new_price: 3900.0,
    old_price: 4500.0,
    description:
      "100% Custom Forged Hand Made\nMost Niche forged designs are available in multiple configurations.\nSome configurations add an additional cost.\nWe can fully customize your wheel the way you like it. ",
  },
  {
    id: 13,
    name: "MICHELIN Pilot Sport 4 S",
    category: "tires",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Noise level (dB) 72\nLoad index 98\nSpeed ​​index Y (max 300 km/h)\nEfficient consumption class C\nAdhesion class A\nRunflat Yes",
  },
  {
    id: 14,
    name: "MICHELIN Pilot Super Sport",
    category: "tires",
    image: p14_img,
    new_price: 185.0,
    old_price: 220.5,
    description:
      "Noise level (dB) 71\nLoad index 98 \nSpeed ​​index Y (max 300 km/h)\nConsumption efficiency class D\nGrip class B",
  },
  {
    id: 15,
    name: "PIRELLI P-Zero E",
    category: "tires",
    image: p15_img,
    new_price: 195.0,
    old_price: 215.5,
    description:
      "Noise level (dB) 69\nLoad index 101\nSpeed ​​index Y (max 300 km/h)\nEfficiency consumption class A\nAdherence class A\nRim protection Yes\nRunflat Yes",
  },
  {
    id: 16,
    name: "CONTINENTAL SportContact 6",
    category: "tires",
    image: p16_img,
    new_price: 220.0,
    old_price: 250.5,
    description:
      "Noise level (dB) 75\nLoad index 106\nSpeed ​​index Y (max 300 km/h)\nConsumption efficiency class C\nAdherence class A",
  },
  {
    id: 17,
    name: "MICHELIN Pilot Sport EV",
    category: "tires",
    image: p17_img,
    new_price: 175.0,
    old_price: 190.5,
    description:
      "Noise level (dB) 72\nLoad index 106\nSpeed ​​index Y (max 300 km/h)\nEfficient consumption class B\nAdhesion class B\nRunflat Yes",
  },
  {
    id: 18,
    name: "MICHELIN E Primacy",
    category: "tires",
    image: p18_img,
    new_price: 200.0,
    old_price: 230.5,
    description:
      "Noise level (dB) 70\nLoad index 103\nSpeed ​​index T (max 190 km/h)\nConsumption efficiency class A\nGrip class B",
  },
  {
    id: 19,
    name: "FALKEN Azenis FK520",
    category: "tires",
    image: p19_img,
    new_price: 125.0,
    old_price: 160.5,
    description:
      "Noise level (dB) 70\nLoad index 113\nSpeed ​​index Y (max 300 km/h)\nEfficiency consumption class C\nAdhesion class C\nRim protection Yes\nRound flat No",
  },
  {
    id: 20,
    name: "MICHELIN Pilot Super",
    category: "tires",
    image: p20_img,
    new_price: 165.0,
    old_price: 180.5,
    description:
      "Noise level (dB) 71\nSpeed ​​index Y (max 300 km/h)\nEfficiency consumption class E\nAdhesion class B",
  },
  {
    id: 21,
    name: "VREDESTEIN Ultrac Vorti+",
    category: "tires",
    image: p21_img,
    new_price: 135.0,
    old_price: 148.5,
    description:
      "Noise level (dB) 71\nLoad index 105\nSpeed ​​index Y (max 300 km/h)\nD consumption efficiency class\nAdhesion class B",
  },
  {
    id: 22,
    name: "CONTINENTAL SportContact 7",
    category: "tires",
    image: p22_img,
    new_price: 195.0,
    old_price: 210.5,
    description:
      "Noise level (dB) 73\nLoad index 94\nSpeed ​​index Y (max 300 km/h)\nEfficient consumption class DC adhesion class A\nRunflat No",
  },
  {
    id: 23,
    name: "CONTINENTAL ContiSportContact 5P",
    category: "tires",
    image: p23_img,
    new_price: 345.0,
    old_price: 400.5,
    description:
      "Noise level (dB) 74\nPregnancy index 105\nSpeed ​​index Y (max 300 km/h)\nConsumption efficiency class C\nAdherence class A\nRim protection Yes",
  },
  {
    id: 24,
    name: "MICHELIN Pilot Sport 5",
    category: "tires",
    image: p24_img,
    new_price: 385.0,
    old_price: 420.5,
    description:
      "Noise level (dB) 75\nPregnancy index 107\nSpeed ​​index Y (max 300 km/h)\nConsumption efficiency class C\nAdherence class ARunflat Yes",
  },
];

export default all_product;
