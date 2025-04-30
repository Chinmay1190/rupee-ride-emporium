
import { Product } from "@/context/CartContext";

// Convert prices from INR lakhs to INR
const convertToINR = (lakhPrice: number): number => {
  return lakhPrice * 100000; // 1 lakh = 100,000 INR
};

export const products: Product[] = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    category: "luxury",
    description: "The Mercedes-Benz S-Class is a luxury sedan that embodies elegance and cutting-edge technology. With its plush interior, advanced safety features, and powerful engine options, the S-Class delivers an unmatched driving experience.",
    price: convertToINR(145),
    image: "https://source.unsplash.com/1600x900/?mercedes,s-class",
    features: ["Burmester sound system", "MBUX infotainment", "Air suspension", "Ambient lighting"],
    specifications: {
      "Engine": "3.0L Inline-6 Turbo",
      "Power": "429 hp",
      "Torque": "520 Nm",
      "Transmission": "9-speed automatic",
      "0-100 km/h": "4.9 seconds",
      "Top Speed": "250 km/h"
    }
  },
  {
    id: 2,
    name: "BMW 7 Series",
    brand: "BMW",
    category: "luxury",
    description: "The BMW 7 Series combines luxury, comfort, and dynamic driving characteristics. Its sophisticated design, premium materials, and innovative features make it a favorite among luxury car enthusiasts.",
    price: convertToINR(170),
    image: "https://source.unsplash.com/1600x900/?bmw,7series",
    features: ["Bowers & Wilkins sound system", "Sky Lounge panoramic roof", "Executive Lounge seating", "Driving Assistant Professional"],
    specifications: {
      "Engine": "3.0L Inline-6 TwinPower Turbo",
      "Power": "375 hp",
      "Torque": "530 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "5.2 seconds",
      "Top Speed": "250 km/h"
    }
  },
  {
    id: 3,
    name: "Audi A8",
    brand: "Audi",
    category: "luxury",
    description: "The Audi A8 is a full-size luxury sedan that showcases the brand's commitment to design, technology, and performance. With its striking exterior, luxurious cabin, and advanced infotainment system, the A8 offers a refined driving experience.",
    price: convertToINR(160),
    image: "https://source.unsplash.com/1600x900/?audi,a8",
    features: ["Bang & Olufsen sound system", "MMI Navigation plus", "Adaptive air suspension", "Matrix LED headlights"],
    specifications: {
      "Engine": "3.0L V6 TFSI",
      "Power": "340 hp",
      "Torque": "500 Nm",
      "Transmission": "8-speed Tiptronic",
      "0-100 km/h": "5.6 seconds",
      "Top Speed": "250 km/h"
    }
  },
  {
    id: 4,
    name: "Porsche 911",
    brand: "Porsche",
    category: "sports",
    description: "The Porsche 911 is an iconic sports car known for its distinctive design and thrilling performance. Its rear-engine layout, precise handling, and exhilarating acceleration make it a pure driving machine that has stood the test of time.",
    price: convertToINR(175),
    image: "https://source.unsplash.com/1600x900/?porsche,911",
    features: ["Sport Chrono Package", "PASM sport suspension", "Sports exhaust system", "Dynamic chassis control"],
    specifications: {
      "Engine": "3.0L Twin-Turbo Flat-6",
      "Power": "379 hp",
      "Torque": "450 Nm",
      "Transmission": "8-speed PDK",
      "0-100 km/h": "4.0 seconds",
      "Top Speed": "293 km/h"
    }
  },
  {
    id: 5,
    name: "Ferrari Roma",
    brand: "Ferrari",
    category: "sports",
    description: "The Ferrari Roma is a grand touring sports car that embodies 'La Nuova Dolce Vita' – the sweet life. With its elegant design, powerful V8 engine, and sophisticated interior, the Roma delivers both performance and comfort.",
    price: convertToINR(380),
    image: "https://source.unsplash.com/1600x900/?ferrari,sports",
    features: ["Manettino dial", "Ferrari Dynamic Enhancer", "Carbon-ceramic brakes", "JBL Professional sound system"],
    specifications: {
      "Engine": "3.9L Twin-Turbo V8",
      "Power": "612 hp",
      "Torque": "760 Nm",
      "Transmission": "8-speed dual-clutch",
      "0-100 km/h": "3.4 seconds",
      "Top Speed": "320 km/h"
    }
  },
  {
    id: 6,
    name: "Lamborghini Huracan",
    brand: "Lamborghini",
    category: "sports",
    description: "The Lamborghini Huracan is a supercar that combines breathtaking design with blistering performance. Its naturally aspirated V10 engine, all-wheel drive system, and aerodynamic styling make it a force to be reckoned with on the road and track.",
    price: convertToINR(350),
    image: "https://source.unsplash.com/1600x900/?lamborghini,huracan",
    features: ["ANIMA drive mode selector", "Carbon fiber components", "Lamborghini Dynamic Steering", "MagneRide suspension"],
    specifications: {
      "Engine": "5.2L V10",
      "Power": "631 hp",
      "Torque": "600 Nm",
      "Transmission": "7-speed dual-clutch",
      "0-100 km/h": "3.0 seconds",
      "Top Speed": "325 km/h"
    }
  },
  {
    id: 7,
    name: "Aston Martin DB11",
    brand: "Aston Martin",
    category: "luxury",
    description: "The Aston Martin DB11 exemplifies grand touring excellence with its distinctive British design and powerful twin-turbocharged engine. Its blend of luxury, performance, and craftsmanship creates an unforgettable driving experience.",
    price: convertToINR(390),
    image: "https://source.unsplash.com/1600x900/?astonmartin,db11",
    features: ["Bang & Olufsen BeoSound system", "Full-grain leather interior", "Power bolstering seats", "LED headlights with DRLs"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8",
      "Power": "503 hp",
      "Torque": "675 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "4.0 seconds",
      "Top Speed": "301 km/h"
    }
  },
  {
    id: 8,
    name: "McLaren 720S",
    brand: "McLaren",
    category: "sports",
    description: "The McLaren 720S is a supercar that redefines performance and aesthetics. Its revolutionary design, lightweight carbon fiber structure, and twin-turbocharged V8 engine deliver an exhilarating driving experience that few cars can match.",
    price: convertToINR(450),
    image: "https://source.unsplash.com/1600x900/?mclaren,720s",
    features: ["Variable Drift Control", "Active Dynamics Panel", "McLaren Track Telemetry", "Folding driver display"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8",
      "Power": "710 hp",
      "Torque": "770 Nm",
      "Transmission": "7-speed SSG",
      "0-100 km/h": "2.9 seconds",
      "Top Speed": "341 km/h"
    }
  },
  {
    id: 9,
    name: "Lexus LS",
    brand: "Lexus",
    category: "luxury",
    description: "The Lexus LS is a luxury sedan that combines Japanese craftsmanship with modern technology. Its serene interior, whisper-quiet cabin, and meticulous attention to detail provide a peaceful and refined driving experience.",
    price: convertToINR(190),
    image: "https://source.unsplash.com/1600x900/?lexus,ls",
    features: ["Mark Levinson audio system", "Shiatsu massage seats", "Air suspension", "Climate Concierge"],
    specifications: {
      "Engine": "3.5L V6 Hybrid",
      "Power": "354 hp",
      "Torque": "400 Nm",
      "Transmission": "CVT",
      "0-100 km/h": "5.4 seconds",
      "Top Speed": "250 km/h"
    }
  },
  {
    id: 10,
    name: "Rolls-Royce Ghost",
    brand: "Rolls-Royce",
    category: "luxury",
    description: "The Rolls-Royce Ghost is the epitome of luxury and sophistication. Its effortless performance, handcrafted interior, and advanced technology create an unparalleled experience for both driver and passengers.",
    price: convertToINR(750),
    image: "https://source.unsplash.com/1600x900/?rollsroyce,ghost",
    features: ["Starlight Headliner", "Bespoke Audio system", "Satellite Aided Transmission", "Illuminated fascia"],
    specifications: {
      "Engine": "6.75L Twin-Turbo V12",
      "Power": "563 hp",
      "Torque": "850 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "4.8 seconds",
      "Top Speed": "250 km/h"
    }
  },
  {
    id: 11,
    name: "Bentley Continental GT",
    brand: "Bentley",
    category: "luxury",
    description: "The Bentley Continental GT is a grand touring coupe that blends British luxury with impressive performance. Its handcrafted interior, powerful W12 engine, and striking design make every journey an occasion.",
    price: convertToINR(400),
    image: "https://source.unsplash.com/1600x900/?bentley,continental",
    features: ["Naim audio system", "Rotating display", "Diamond-quilted seats", "Active all-wheel drive"],
    specifications: {
      "Engine": "6.0L Twin-Turbo W12",
      "Power": "626 hp",
      "Torque": "900 Nm",
      "Transmission": "8-speed dual-clutch",
      "0-100 km/h": "3.7 seconds",
      "Top Speed": "333 km/h"
    }
  },
  {
    id: 12,
    name: "Tesla Model S",
    brand: "Tesla",
    category: "sedan",
    description: "The Tesla Model S is an all-electric luxury sedan that has revolutionized the automotive industry. Its long range, rapid acceleration, and cutting-edge technology make it a unique proposition in the premium car segment.",
    price: convertToINR(140),
    image: "https://source.unsplash.com/1600x900/?tesla,models",
    features: ["Autopilot", "17-inch touchscreen", "Over-the-air updates", "Sentry mode"],
    specifications: {
      "Motor": "Dual Motor All-Wheel Drive",
      "Power": "670 hp",
      "Battery": "100 kWh",
      "Range": "652 km",
      "0-100 km/h": "3.1 seconds",
      "Top Speed": "250 km/h"
    }
  },
  {
    id: 13,
    name: "Maserati Quattroporte",
    brand: "Maserati",
    category: "luxury",
    description: "The Maserati Quattroporte is a luxury sports sedan that embodies Italian flair and performance. Its Ferrari-built engines, distinctive exhaust note, and elegant design create a driving experience that is both emotional and luxurious.",
    price: convertToINR(170),
    image: "https://source.unsplash.com/1600x900/?maserati,quattroporte",
    features: ["Skyhook suspension", "Harman Kardon sound system", "Pieno Fiore leather", "MIA infotainment"],
    specifications: {
      "Engine": "3.8L Twin-Turbo V8",
      "Power": "580 hp",
      "Torque": "730 Nm",
      "Transmission": "8-speed ZF automatic",
      "0-100 km/h": "4.5 seconds",
      "Top Speed": "307 km/h"
    }
  },
  {
    id: 14,
    name: "Jaguar F-Type",
    brand: "Jaguar",
    category: "sports",
    description: "The Jaguar F-Type is a sports car that combines British elegance with exhilarating performance. Its seductive styling, powerful engine options, and athletic handling make it a joy to drive on any road.",
    price: convertToINR(120),
    image: "https://source.unsplash.com/1600x900/?jaguar,ftype",
    features: ["Active Sports Exhaust", "Adaptive Dynamics", "Configurable Dynamics", "Meridian sound system"],
    specifications: {
      "Engine": "5.0L Supercharged V8",
      "Power": "575 hp",
      "Torque": "700 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "3.7 seconds",
      "Top Speed": "300 km/h"
    }
  },
  {
    id: 15,
    name: "Range Rover",
    brand: "Land Rover",
    category: "suv",
    description: "The Range Rover is a luxury SUV that combines off-road capability with exceptional comfort and refinement. Its commanding presence, opulent interior, and advanced technology make it a versatile vehicle for any occasion.",
    price: convertToINR(220),
    image: "https://source.unsplash.com/1600x900/?rangerover",
    features: ["Terrain Response 2", "Meridian Signature sound system", "Executive Class seating", "Pixel LED headlights"],
    specifications: {
      "Engine": "4.4L Twin-Turbo V8",
      "Power": "523 hp",
      "Torque": "750 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "4.6 seconds",
      "Off-road Capability": "900 mm wading depth"
    }
  },
  {
    id: 16,
    name: "BMW X7",
    brand: "BMW",
    category: "suv",
    description: "The BMW X7 is a luxury SUV that offers spacious seating for up to seven passengers. Its imposing design, refined driving dynamics, and high-end features provide comfort and convenience for the entire family.",
    price: convertToINR(120),
    image: "https://source.unsplash.com/1600x900/?bmw,x7",
    features: ["Air suspension", "Panoramic Sky Lounge LED roof", "6-zone climate control", "Driving Assistant Professional"],
    specifications: {
      "Engine": "3.0L Inline-6 TwinPower Turbo",
      "Power": "335 hp",
      "Torque": "450 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "5.8 seconds",
      "Seating Capacity": "7 passengers"
    }
  },
  {
    id: 17,
    name: "Mercedes-AMG GT",
    brand: "Mercedes-Benz",
    category: "sports",
    description: "The Mercedes-AMG GT is a high-performance sports car that showcases the brand's racing heritage. Its sleek design, thunderous V8 engine, and precise handling deliver an adrenaline-pumping driving experience.",
    price: convertToINR(270),
    image: "https://source.unsplash.com/1600x900/?mercedes,amggt",
    features: ["AMG DYNAMICS", "AMG Track Pace", "AMG RIDE CONTROL suspension", "Carbon fiber components"],
    specifications: {
      "Engine": "4.0L Biturbo V8",
      "Power": "577 hp",
      "Torque": "700 Nm",
      "Transmission": "7-speed dual-clutch",
      "0-100 km/h": "3.6 seconds",
      "Top Speed": "318 km/h"
    }
  },
  {
    id: 18,
    name: "Audi RS7",
    brand: "Audi",
    category: "sports",
    description: "The Audi RS7 is a high-performance four-door coupe that combines practicality with supercar-like performance. Its aggressive styling, twin-turbocharged V8, and advanced technology create a thrilling driving experience.",
    price: convertToINR(200),
    image: "https://source.unsplash.com/1600x900/?audi,rs7",
    features: ["RS sports exhaust", "Quattro all-wheel drive", "RS adaptive air suspension", "Matrix LED headlights"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8",
      "Power": "592 hp",
      "Torque": "800 Nm",
      "Transmission": "8-speed Tiptronic",
      "0-100 km/h": "3.6 seconds",
      "Top Speed": "305 km/h"
    }
  },
  {
    id: 19,
    name: "Porsche Taycan",
    brand: "Porsche",
    category: "sedan",
    description: "The Porsche Taycan is an all-electric sports car that proves electric vehicles can be thrilling to drive. Its instantaneous acceleration, engaging handling, and cutting-edge technology make it a pioneer in the EV performance segment.",
    price: convertToINR(150),
    image: "https://source.unsplash.com/1600x900/?porsche,taycan",
    features: ["800-volt architecture", "Porsche Active Suspension Management", "Recuperative braking", "Porsche Communication Management"],
    specifications: {
      "Motor": "Dual Permanent Magnet Synchronous",
      "Power": "670 hp",
      "Torque": "850 Nm",
      "Battery": "93.4 kWh",
      "0-100 km/h": "3.2 seconds",
      "Range": "450 km"
    }
  },
  {
    id: 20,
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    category: "sports",
    description: "The Ferrari F8 Tributo is a mid-engine sports car that pays homage to Ferrari's most powerful V8 engine. Its breathtaking design, aerodynamic efficiency, and exhilarating performance make it a true driver's car.",
    price: convertToINR(425),
    image: "https://source.unsplash.com/1600x900/?ferrari,f8",
    features: ["Ferrari Dynamic Enhancer", "Side Slip Control 6.1", "Carbon fiber components", "Adaptive headlights"],
    specifications: {
      "Engine": "3.9L Twin-Turbo V8",
      "Power": "710 hp",
      "Torque": "770 Nm",
      "Transmission": "7-speed dual-clutch",
      "0-100 km/h": "2.9 seconds",
      "Top Speed": "340 km/h"
    }
  },
  {
    id: 21,
    name: "Lamborghini Urus",
    brand: "Lamborghini",
    category: "suv",
    description: "The Lamborghini Urus is a super SUV that combines the practicality of an SUV with the soul of a supercar. Its aggressive styling, powerful twin-turbo V8, and surprising agility make it a unique proposition in the luxury SUV segment.",
    price: convertToINR(340),
    image: "https://source.unsplash.com/1600x900/?lamborghini,urus",
    features: ["ANIMA drive modes", "Carbon ceramic brakes", "Adaptive air suspension", "Torque vectoring"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8",
      "Power": "641 hp",
      "Torque": "850 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "3.6 seconds",
      "Top Speed": "305 km/h"
    }
  },
  {
    id: 22,
    name: "Aston Martin DBX",
    brand: "Aston Martin",
    category: "suv",
    description: "The Aston Martin DBX is a luxury SUV that brings the brand's sporting character to a practical five-seater. Its elegant design, powerful engine, and balanced handling make it a versatile vehicle for everyday use and long journeys.",
    price: convertToINR(390),
    image: "https://source.unsplash.com/1600x900/?astonmartin,dbx",
    features: ["Adaptive triple chamber air suspension", "Active exhaust system", "Full-grain leather interior", "Panoramic glass roof"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8",
      "Power": "542 hp",
      "Torque": "700 Nm",
      "Transmission": "9-speed automatic",
      "0-100 km/h": "4.5 seconds",
      "Top Speed": "291 km/h"
    }
  },
  {
    id: 23,
    name: "McLaren Artura",
    brand: "McLaren",
    category: "sports",
    description: "The McLaren Artura is a hybrid supercar that combines a twin-turbocharged V6 engine with an electric motor. Its lightweight carbon fiber structure, innovative technology, and electrified powertrain deliver both performance and efficiency.",
    price: convertToINR(380),
    image: "https://source.unsplash.com/1600x900/?mclaren,supercar",
    features: ["McLaren Carbon Lightweight Architecture", "Clubsport seats", "Variable Drift Control", "Cyber Tyres"],
    specifications: {
      "Engine": "3.0L Twin-Turbo V6 + E-Motor",
      "Power": "671 hp",
      "Torque": "720 Nm",
      "Transmission": "8-speed dual-clutch",
      "0-100 km/h": "3.0 seconds",
      "Electric Range": "30 km"
    }
  },
  {
    id: 24,
    name: "Lexus LX",
    brand: "Lexus",
    category: "suv",
    description: "The Lexus LX is a full-size luxury SUV that combines opulence with off-road capability. Its robust construction, premium features, and comfortable ride make it an ideal vehicle for both urban environments and rugged terrain.",
    price: convertToINR(240),
    image: "https://source.unsplash.com/1600x900/?lexus,lx",
    features: ["Multi-Terrain Select", "Crawl Control", "Mark Levinson audio system", "Four-zone climate control"],
    specifications: {
      "Engine": "5.7L V8",
      "Power": "403 hp",
      "Torque": "650 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "7.7 seconds",
      "Off-road Capability": "Adjustable height control"
    }
  },
  {
    id: 25,
    name: "Rolls-Royce Cullinan",
    brand: "Rolls-Royce",
    category: "suv",
    description: "The Rolls-Royce Cullinan is an ultra-luxury SUV that offers effortless performance and unmatched comfort. Its stately presence, exquisite craftsmanship, and advanced all-wheel drive system make it a Rolls-Royce for all terrains.",
    price: convertToINR(850),
    image: "https://source.unsplash.com/1600x900/?rollsroyce,cullinan",
    features: ["Magic Carpet Ride", "Viewing Suite", "Bespoke audio system", "Effortless Doors"],
    specifications: {
      "Engine": "6.75L Twin-Turbo V12",
      "Power": "563 hp",
      "Torque": "850 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "5.2 seconds",
      "Off-road Mode": "Effortless Everywhere"
    }
  },
  {
    id: 26,
    name: "Bentley Bentayga",
    brand: "Bentley",
    category: "suv",
    description: "The Bentley Bentayga is a luxury SUV that combines British craftsmanship with impressive performance. Its handcrafted interior, powerful engine options, and advanced technology create a refined and capable driving experience.",
    price: convertToINR(400),
    image: "https://source.unsplash.com/1600x900/?bentley,bentayga",
    features: ["Bentley Dynamic Ride", "All-Terrain Specification", "Naim for Bentley audio system", "Mulliner personalization"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8",
      "Power": "542 hp",
      "Torque": "770 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "4.5 seconds",
      "Top Speed": "290 km/h"
    }
  },
  {
    id: 27,
    name: "Tesla Model X",
    brand: "Tesla",
    category: "suv",
    description: "The Tesla Model X is an all-electric luxury SUV known for its falcon-wing doors and impressive performance. Its long range, spacious interior, and advanced autopilot features make it a forward-thinking family vehicle.",
    price: convertToINR(150),
    image: "https://source.unsplash.com/1600x900/?tesla,modelx",
    features: ["Falcon Wing doors", "Autopilot", "17-inch touchscreen", "Bioweapon Defense Mode"],
    specifications: {
      "Motor": "Dual Motor All-Wheel Drive",
      "Power": "670 hp",
      "Battery": "100 kWh",
      "Range": "580 km",
      "0-100 km/h": "3.9 seconds",
      "Seating Capacity": "Up to 7"
    }
  },
  {
    id: 28,
    name: "Maserati Levante",
    brand: "Maserati",
    category: "suv",
    description: "The Maserati Levante is a luxury SUV that brings Italian flair to the segment. Its distinctive styling, Ferrari-built engines, and engaging handling provide a driving experience that is both emotional and practical.",
    price: convertToINR(150),
    image: "https://source.unsplash.com/1600x900/?maserati,levante",
    features: ["Skyhook suspension", "Q4 intelligent all-wheel drive", "Harman Kardon sound system", "Zegna silk upholstery"],
    specifications: {
      "Engine": "3.8L Twin-Turbo V8",
      "Power": "580 hp",
      "Torque": "730 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "4.1 seconds",
      "Top Speed": "302 km/h"
    }
  },
  {
    id: 29,
    name: "Jaguar I-PACE",
    brand: "Jaguar",
    category: "suv",
    description: "The Jaguar I-PACE is an all-electric performance SUV that combines sustainable driving with Jaguar's renowned driving dynamics. Its sleek design, spacious interior, and impressive range make it a compelling option in the luxury EV market.",
    price: convertToINR(110),
    image: "https://source.unsplash.com/1600x900/?jaguar,ipace",
    features: ["Active air suspension", "Regenerative braking", "Pivi Pro infotainment", "Head-up display"],
    specifications: {
      "Motor": "Dual Electric Motors",
      "Power": "394 hp",
      "Torque": "696 Nm",
      "Battery": "90 kWh",
      "0-100 km/h": "4.8 seconds",
      "Range": "470 km"
    }
  },
  {
    id: 30,
    name: "BMW M5",
    brand: "BMW",
    category: "sports",
    description: "The BMW M5 is a high-performance luxury sedan that combines everyday usability with supercar-like performance. Its powerful twin-turbo V8, advanced all-wheel drive system, and sophisticated suspension create a thrilling driving experience.",
    price: convertToINR(170),
    image: "https://source.unsplash.com/1600x900/?bmw,m5",
    features: ["M xDrive all-wheel drive", "Active M Differential", "M Servotronic steering", "Carbon fiber reinforced plastic roof"],
    specifications: {
      "Engine": "4.4L Twin-Turbo V8",
      "Power": "617 hp",
      "Torque": "750 Nm",
      "Transmission": "8-speed M Steptronic",
      "0-100 km/h": "3.3 seconds",
      "Top Speed": "305 km/h"
    }
  },
  {
    id: 31,
    name: "Mercedes-AMG E63",
    brand: "Mercedes-Benz",
    category: "sports",
    description: "The Mercedes-AMG E63 is a high-performance luxury sedan that offers breathtaking acceleration and refined comfort. Its handcrafted V8 engine, 4MATIC+ all-wheel drive, and sophisticated technology create a versatile driving machine.",
    price: convertToINR(170),
    image: "https://source.unsplash.com/1600x900/?mercedes,e63",
    features: ["AMG RIDE CONTROL+", "Drift mode", "RACETIMER", "AMG Performance exhaust"],
    specifications: {
      "Engine": "4.0L Biturbo V8",
      "Power": "603 hp",
      "Torque": "850 Nm",
      "Transmission": "9-speed AMG SPEEDSHIFT",
      "0-100 km/h": "3.4 seconds",
      "Top Speed": "300 km/h"
    }
  },
  {
    id: 32,
    name: "Audi RS6 Avant",
    brand: "Audi",
    category: "sports",
    description: "The Audi RS6 Avant is a high-performance wagon that combines practicality with supercar-like performance. Its aggressive styling, twin-turbocharged V8, and spacious interior make it a unique proposition for enthusiasts.",
    price: convertToINR(180),
    image: "https://source.unsplash.com/1600x900/?audi,rs6",
    features: ["RS adaptive air suspension", "All-wheel steering", "Matrix LED headlights", "Bang & Olufsen sound system"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8",
      "Power": "591 hp",
      "Torque": "800 Nm",
      "Transmission": "8-speed Tiptronic",
      "0-100 km/h": "3.6 seconds",
      "Cargo Space": "565 liters"
    }
  },
  // Additional products to reach 48 total
  {
    id: 33,
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    category: "sports",
    description: "The Ferrari SF90 Stradale is a plug-in hybrid supercar that represents the pinnacle of Ferrari's engineering prowess. Its combination of a V8 engine and three electric motors delivers extraordinary performance and efficiency.",
    price: convertToINR(750),
    image: "https://source.unsplash.com/1600x900/?ferrari,hypercar",
    features: ["eManettino", "RAC-e steering", "Electric front axle", "Digital cockpit"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8 + 3 Electric Motors",
      "Power": "986 hp",
      "Torque": "800 Nm",
      "Transmission": "8-speed dual-clutch",
      "0-100 km/h": "2.5 seconds",
      "Electric Range": "25 km"
    }
  },
  {
    id: 34,
    name: "Lamborghini Aventador",
    brand: "Lamborghini",
    category: "sports",
    description: "The Lamborghini Aventador is a flagship supercar that epitomizes the brand's bold design and breathtaking performance. Its naturally aspirated V12 engine, scissor doors, and aggressive styling create an unforgettable driving experience.",
    price: convertToINR(550),
    image: "https://source.unsplash.com/1600x900/?lamborghini,aventador",
    features: ["Pushrod suspension", "Carbon fiber monocoque", "Lamborghini Active Vehicle Dynamics", "Drive mode selector"],
    specifications: {
      "Engine": "6.5L V12",
      "Power": "769 hp",
      "Torque": "720 Nm",
      "Transmission": "7-speed ISR",
      "0-100 km/h": "2.8 seconds",
      "Top Speed": "350 km/h"
    }
  },
  {
    id: 35,
    name: "Mercedes-Maybach S-Class",
    brand: "Mercedes-Benz",
    category: "luxury",
    description: "The Mercedes-Maybach S-Class is an ultra-luxury sedan that offers unparalleled comfort and refinement. Its extended wheelbase, opulent interior, and advanced technology create a serene environment for both driver and passengers.",
    price: convertToINR(250),
    image: "https://source.unsplash.com/1600x900/?maybach",
    features: ["Executive rear seats", "MBUX Interior Assistant", "Active road noise compensation", "Digital Light headlamps"],
    specifications: {
      "Engine": "6.0L Twin-Turbo V12",
      "Power": "621 hp",
      "Torque": "1000 Nm",
      "Transmission": "9-speed automatic",
      "0-100 km/h": "4.5 seconds",
      "Wheelbase": "3396 mm"
    }
  },
  {
    id: 36,
    name: "BMW M8 Competition",
    brand: "BMW",
    category: "sports",
    description: "The BMW M8 Competition is a high-performance luxury coupe that combines elegance with raw power. Its twin-turbocharged V8, advanced all-wheel drive system, and sophisticated suspension create a dynamic and engaging driving experience.",
    price: convertToINR(230),
    image: "https://source.unsplash.com/1600x900/?bmw,m8",
    features: ["M Carbon engine cover", "Setup button", "M Mode selector", "Carbon fiber reinforced plastic roof"],
    specifications: {
      "Engine": "4.4L Twin-Turbo V8",
      "Power": "617 hp",
      "Torque": "750 Nm",
      "Transmission": "8-speed M Steptronic",
      "0-100 km/h": "3.2 seconds",
      "Top Speed": "305 km/h"
    }
  },
  {
    id: 37,
    name: "Porsche Panamera Turbo S",
    brand: "Porsche",
    category: "luxury",
    description: "The Porsche Panamera Turbo S is a luxury sports sedan that offers exceptional performance and comfort. Its powerful engine, advanced chassis technology, and premium interior create a compelling blend of sportiness and luxury.",
    price: convertToINR(210),
    image: "https://source.unsplash.com/1600x900/?porsche,panamera",
    features: ["Porsche Dynamic Chassis Control", "Rear-axle steering", "Sport Chrono Package", "Burmester sound system"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8",
      "Power": "620 hp",
      "Torque": "820 Nm",
      "Transmission": "8-speed PDK",
      "0-100 km/h": "3.1 seconds",
      "Top Speed": "315 km/h"
    }
  },
  {
    id: 38,
    name: "Aston Martin Vantage",
    brand: "Aston Martin",
    category: "sports",
    description: "The Aston Martin Vantage is a sports car that combines British elegance with raw athleticism. Its powerful engine, responsive handling, and distinctive styling make it a thrilling driving machine with unmistakable character.",
    price: convertToINR(300),
    image: "https://source.unsplash.com/1600x900/?astonmartin,vantage",
    features: ["Adaptive damping", "Electronic rear differential", "Sport, Sport+, and Track modes", "Premium audio system"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8",
      "Power": "503 hp",
      "Torque": "685 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "3.6 seconds",
      "Top Speed": "314 km/h"
    }
  },
  {
    id: 39,
    name: "Cadillac Escalade",
    brand: "Cadillac",
    category: "suv",
    description: "The Cadillac Escalade is a full-size luxury SUV known for its bold design and comfortable interior. Its powerful engine, advanced technology, and spacious cabin make it an ideal vehicle for both urban environments and long journeys.",
    price: convertToINR(130),
    image: "https://source.unsplash.com/1600x900/?cadillac,escalade",
    features: ["AKG Studio Reference sound system", "Super Cruise", "OLED curved display", "Air Ride Adaptive Suspension"],
    specifications: {
      "Engine": "6.2L V8",
      "Power": "420 hp",
      "Torque": "624 Nm",
      "Transmission": "10-speed automatic",
      "0-100 km/h": "6.7 seconds",
      "Seating Capacity": "7 passengers"
    }
  },
  {
    id: 40,
    name: "Alfa Romeo Giulia Quadrifoglio",
    brand: "Alfa Romeo",
    category: "sports",
    description: "The Alfa Romeo Giulia Quadrifoglio is a high-performance sports sedan with Italian flair. Its Ferrari-derived twin-turbo V6, lightweight construction, and balanced chassis create an engaging and emotional driving experience.",
    price: convertToINR(95),
    image: "https://source.unsplash.com/1600x900/?alfaromeo,giulia",
    features: ["Alfa Active Aero", "Carbon fiber hood and roof", "Torque vectoring", "DNA Pro drive mode selector"],
    specifications: {
      "Engine": "2.9L Twin-Turbo V6",
      "Power": "505 hp",
      "Torque": "600 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "3.8 seconds",
      "Top Speed": "307 km/h"
    }
  },
  {
    id: 41,
    name: "Genesis G90",
    brand: "Genesis",
    category: "luxury",
    description: "The Genesis G90 is a luxury sedan that offers exceptional value and refinement. Its spacious interior, smooth ride, and comprehensive feature set provide a premium experience at a competitive price point.",
    price: convertToINR(90),
    image: "https://source.unsplash.com/1600x900/?genesis,luxury",
    features: ["Ergo Motion seats", "Lexicon sound system", "Noise-canceling technology", "Genesis Connected Services"],
    specifications: {
      "Engine": "3.5L Twin-Turbo V6",
      "Power": "375 hp",
      "Torque": "530 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "5.7 seconds",
      "Rear Legroom": "970 mm"
    }
  },
  {
    id: 42,
    name: "Volvo XC90",
    brand: "Volvo",
    category: "suv",
    description: "The Volvo XC90 is a luxury SUV that prioritizes safety, comfort, and Scandinavian design. Its elegant interior, efficient powertrains, and advanced driver assistance systems make it a sophisticated family vehicle.",
    price: convertToINR(90),
    image: "https://source.unsplash.com/1600x900/?volvo,xc90",
    features: ["Bowers & Wilkins sound system", "Four-corner air suspension", "Pilot Assist", "Crystal gear selector"],
    specifications: {
      "Engine": "2.0L Twin-Charged 4-cylinder + Electric Motor",
      "Power": "400 hp",
      "Torque": "640 Nm",
      "Transmission": "8-speed automatic",
      "0-100 km/h": "5.6 seconds",
      "Electric Range": "35 km"
    }
  },
  {
    id: 43,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    category: "sports",
    description: "The Bugatti Chiron is a hypercar that redefines automotive engineering and performance. Its quad-turbocharged W16 engine, advanced aerodynamics, and exquisite craftsmanship make it one of the most extraordinary cars ever created.",
    price: convertToINR(2500),
    image: "https://source.unsplash.com/1600x900/?bugatti,chiron",
    features: ["Carbon fiber monocoque", "Adaptive chassis", "5 driving modes", "Active aerodynamics"],
    specifications: {
      "Engine": "8.0L Quad-Turbo W16",
      "Power": "1479 hp",
      "Torque": "1600 Nm",
      "Transmission": "7-speed dual-clutch",
      "0-100 km/h": "2.4 seconds",
      "Top Speed": "420 km/h"
    }
  },
  {
    id: 44,
    name: "Koenigsegg Jesko",
    brand: "Koenigsegg",
    category: "sports",
    description: "The Koenigsegg Jesko is a hypercar that pushes the boundaries of performance and technology. Its revolutionary engine, advanced aerodynamics, and innovative transmission create an unparalleled driving experience.",
    price: convertToINR(2600),
    image: "https://source.unsplash.com/1600x900/?koenigsegg",
    features: ["Active triplex suspension", "Light Speed Transmission", "Koenigsegg Electronic Stability Control", "Carbon fiber wheels"],
    specifications: {
      "Engine": "5.0L Twin-Turbo V8",
      "Power": "1600 hp",
      "Torque": "1500 Nm",
      "Transmission": "9-speed multi-clutch",
      "0-100 km/h": "2.5 seconds",
      "Top Speed": "483 km/h"
    }
  },
  {
    id: 45,
    name: "Pagani Huayra",
    brand: "Pagani",
    category: "sports",
    description: "The Pagani Huayra is a hypercar that combines art and engineering in perfect harmony. Its hand-built AMG engine, active aerodynamics, and exquisite materials create a car that is both beautiful and ferociously fast.",
    price: convertToINR(2400),
    image: "https://source.unsplash.com/1600x900/?pagani,hypercar",
    features: ["Active aerodynamics", "Carbon-titanium monocoque", "Bespoke leather interior", "Sonus Faber sound system"],
    specifications: {
      "Engine": "6.0L Twin-Turbo V12",
      "Power": "790 hp",
      "Torque": "1100 Nm",
      "Transmission": "7-speed sequential",
      "0-100 km/h": "2.8 seconds",
      "Top Speed": "383 km/h"
    }
  },
  {
    id: 46,
    name: "Rimac Nevera",
    brand: "Rimac",
    category: "sports",
    description: "The Rimac Nevera is an all-electric hypercar that revolutionizes performance and technology. Its quad-motor powertrain, advanced battery technology, and aerodynamic design deliver unprecedented acceleration and speed.",
    price: convertToINR(2000),
    image: "https://source.unsplash.com/1600x900/?electric,hypercar",
    features: ["All-wheel torque vectoring", "Electrochromic glass roof", "Active aerodynamics", "AI driver coach"],
    specifications: {
      "Motor": "Quad Permanent Magnet Synchronous",
      "Power": "1914 hp",
      "Torque": "2300 Nm",
      "Battery": "120 kWh",
      "0-100 km/h": "1.85 seconds",
      "Range": "550 km"
    }
  },
  {
    id: 47,
    name: "McLaren Senna",
    brand: "McLaren",
    category: "sports",
    description: "The McLaren Senna is a track-focused hypercar that prioritizes performance above all else. Its aggressive aerodynamics, lightweight construction, and powerful engine create a car that excels on both road and track.",
    price: convertToINR(850),
    image: "https://source.unsplash.com/1600x900/?mclaren,hypercar",
    features: ["RaceActive Chassis Control II", "Monocage III carbon structure", "Brembo carbon ceramic brakes", "Variable drift control"],
    specifications: {
      "Engine": "4.0L Twin-Turbo V8",
      "Power": "789 hp",
      "Torque": "800 Nm",
      "Transmission": "7-speed dual-clutch",
      "0-100 km/h": "2.8 seconds",
      "Downforce": "800 kg at 250 km/h"
    }
  },
  {
    id: 48,
    name: "Gordon Murray T.50",
    brand: "Gordon Murray Automotive",
    category: "sports",
    description: "The Gordon Murray T.50 is a driver-focused supercar designed by the legendary Formula 1 engineer. Its naturally aspirated V12 engine, central driving position, and ground-effect fan create a purist driving experience unlike any other.",
    price: convertToINR(1300),
    image: "https://source.unsplash.com/1600x900/?supercar,exclusive",
    features: ["Ground-effect fan", "Central driving position", "Carbon fiber monocoque", "Manual transmission"],
    specifications: {
      "Engine": "4.0L Naturally Aspirated V12",
      "Power": "654 hp",
      "Torque": "467 Nm",
      "Transmission": "6-speed manual",
      "0-100 km/h": "2.8 seconds",
      "Weight": "986 kg"
    }
  }
];

// Helper function to format price in INR
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Get featured products (for homepage)
export const getFeaturedProducts = (count: number = 8): Product[] => {
  const featuredIds = [5, 10, 6, 43, 21, 25, 17, 30];
  return products.filter(product => featuredIds.includes(product.id)).slice(0, count);
};

// Get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
