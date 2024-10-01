import { randomUUID } from "crypto";
import { Product } from "../product";

export const products: Product[] = [
  {
    id: 1,
    uuid: randomUUID(),
    name: "Gaming Mouse",
    description: "High precision gaming mouse",
    image: "https://placehold.co/600x400",
    brand: "Storm",
    rating: 3,
    videoReview: "",
    tags: ["Amazing"],
    specifications: {
      emphasis: "High precision",
      connection: "USB",
      buttons: 6,
      dpi: 16000,
      wireless: false
    },
    basePrice: 100,
    protionalPrice: 80,
    highestPrice: 120,
    lowestPrice: 70,
    averagePrice: 90
  }
  ,
  {
    id: 2,
    uuid: randomUUID(),
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with customizable keys",
    image: "https://placehold.co/600x400",
    brand: "Thunder",
    rating: 4,
    videoReview: "",
    tags: ["Durable", "Customizable"],
    specifications: {
      emphasis: "RGB lighting",
      connection: "USB",
      keys: 104,
      switchType: "Cherry MX Red",
      wireless: false
    },
    basePrice: 150,
    protionalPrice: 120,
    highestPrice: 180,
    lowestPrice: 110,
    averagePrice: 140
  },
  {
    id: 3,
    uuid: randomUUID(),
    name: "Gaming Headset",
    description: "Surround sound gaming headset with noise cancellation",
    image: "https://placehold.co/600x400",
    brand: "Echo",
    rating: 5,
    videoReview: "",
    tags: ["Comfortable", "High Quality"],
    specifications: {
      emphasis: "Surround sound",
      connection: "3.5mm jack",
      microphone: true,
      wireless: false
    },
    basePrice: 80,
    protionalPrice: 60,
    highestPrice: 100,
    lowestPrice: 50,
    averagePrice: 70
  },
  {
    id: 4,
    uuid: randomUUID(),
    name: "Gaming Chair",
    description: "Ergonomic gaming chair with lumbar support",
    image: "https://placehold.co/600x400",
    brand: "Comfort",
    rating: 4,
    videoReview: "",
    tags: ["Ergonomic", "Adjustable"],
    specifications: {
      emphasis: "Lumbar support",
      material: "Leather",
      adjustableHeight: true,
      weightCapacity: 300,
      recline: true
    },
    basePrice: 200,
    protionalPrice: 180,
    highestPrice: 250,
    lowestPrice: 150,
    averagePrice: 190
  }
  ,
  {
    id: 5,
    uuid: randomUUID(),
    name: "Gaming Monitor",
    description: "27-inch 144Hz gaming monitor with 1ms response time",
    image: "https://placehold.co/600x400",
    brand: "Vision",
    rating: 5,
    videoReview: "",
    tags: ["High Refresh Rate", "Low Latency"],
    specifications: {
      emphasis: "144Hz refresh rate",
      resolution: "2560x1440",
      size: 27,
      panelType: "IPS",
      gSync: true
    },
    basePrice: 300,
    protionalPrice: 280,
    highestPrice: 350,
    lowestPrice: 250,
    averagePrice: 290
  },
  {
    id: 6,
    uuid: randomUUID(),
    name: "Gaming Laptop",
    description: "High performance gaming laptop with RTX 3080",
    image: "https://placehold.co/600x400",
    brand: "Power",
    rating: 5,
    videoReview: "",
    tags: ["Portable", "High Performance"],
    specifications: {
      emphasis: "RTX 3080",
      processor: "Intel i7",
      ram: "16GB",
      storage: "1TB SSD",
      screenSize: 15.6
    },
    basePrice: 1500,
    protionalPrice: 1400,
    highestPrice: 1800,
    lowestPrice: 1300,
    averagePrice: 1450
  },
  {
    id: 7,
    uuid: randomUUID(),
    name: "Gaming Desk",
    description: "Sturdy gaming desk with cable management",
    image: "https://placehold.co/600x400",
    brand: "Stability",
    rating: 4,
    videoReview: "",
    tags: ["Spacious", "Durable"],
    specifications: {
      emphasis: "Cable management",
      material: "Wood",
      adjustableHeight: false,
      weightCapacity: 200,
      dimensions: "60x30 inches"
    },
    basePrice: 250,
    protionalPrice: 220,
    highestPrice: 300,
    lowestPrice: 200,
    averagePrice: 240
  },
  {
    id: 8,
    uuid: randomUUID(),
    name: "Gaming Controller",
    description: "Wireless gaming controller with customizable buttons",
    image: "https://placehold.co/600x400",
    brand: "Control",
    rating: 4,
    videoReview: "",
    tags: ["Wireless", "Customizable"],
    specifications: {
      emphasis: "Customizable buttons",
      connection: "Bluetooth",
      batteryLife: "20 hours",
      compatibility: ["PC", "Console"],
      wireless: true
    },
    basePrice: 60,
    protionalPrice: 50,
    highestPrice: 70,
    lowestPrice: 40,
    averagePrice: 55
  },
  {
    id: 9,
    uuid: randomUUID(),
    name: "Gaming Router",
    description: "High speed gaming router with low latency",
    image: "https://placehold.co/600x400",
    brand: "Speed",
    rating: 5,
    videoReview: "",
    tags: ["High Speed", "Low Latency"],
    specifications: {
      emphasis: "Low latency",
      speed: "1Gbps",
      frequency: "Dual-band",
      ports: 4,
      wireless: true
    },
    basePrice: 120,
    protionalPrice: 100,
    highestPrice: 150,
    lowestPrice: 90,
    averagePrice: 110
  },
  {
    id: 10,
    uuid: randomUUID(),
    name: "Gaming Mouse Pad",
    description: "Large gaming mouse pad with RGB lighting",
    image: "https://placehold.co/600x400",
    brand: "Glide",
    rating: 4,
    videoReview: "",
    tags: ["Large", "RGB"],
    specifications: {
      emphasis: "RGB lighting",
      material: "Cloth",
      size: "35x15 inches",
      thickness: "4mm",
      waterproof: true
    },
    basePrice: 30,
    protionalPrice: 25,
    highestPrice: 40,
    lowestPrice: 20,
    averagePrice: 28
  },
  {
    id: 11,
    uuid: randomUUID(),
    name: "Gaming Microphone",
    description: "High quality gaming microphone with noise cancellation",
    image: "https://placehold.co/600x400",
    brand: "Voice",
    rating: 5,
    videoReview: "",
    tags: ["High Quality", "Noise Cancellation"],
    specifications: {
      emphasis: "Noise cancellation",
      connection: "USB",
      polarPattern: "Cardioid",
      frequencyResponse: "20Hz-20kHz",
      wireless: false
    },
    basePrice: 100,
    protionalPrice: 90,
    highestPrice: 120,
    lowestPrice: 80,
    averagePrice: 95
  },
  {
    id: 12,
    uuid: randomUUID(),
    name: "Gaming VR Headset",
    description: "Immersive VR headset with high resolution display",
    image: "https://placehold.co/600x400",
    brand: "Reality",
    rating: 5,
    videoReview: "",
    tags: ["Immersive", "High Resolution"],
    specifications: {
      emphasis: "High resolution",
      resolution: "2160x1200",
      refreshRate: "90Hz",
      fieldOfView: "110 degrees",
      wireless: false
    },
    basePrice: 400,
    protionalPrice: 380,
    highestPrice: 450,
    lowestPrice: 350,
    averagePrice: 390
  },
  {
    id: 13,
    uuid: randomUUID(),
    name: "Gaming Graphics Card",
    description: "High performance graphics card with ray tracing",
    image: "https://placehold.co/600x400",
    brand: "Render",
    rating: 5,
    videoReview: "",
    tags: ["High Performance", "Ray Tracing"],
    specifications: {
      emphasis: "Ray tracing",
      memory: "8GB GDDR6",
      coreClock: "1.8GHz",
      ports: ["HDMI", "DisplayPort"],
      powerConsumption: "250W"
    },
    basePrice: 700,
    protionalPrice: 650,
    highestPrice: 800,
    lowestPrice: 600,
    averagePrice: 680
  },
  {
    id: 14,
    uuid: randomUUID(),
    name: "Gaming Desk Lamp",
    description: "Adjustable desk lamp with RGB lighting",
    image: "https://placehold.co/600x400",
    brand: "Bright",
    rating: 4,
    videoReview: "",
    tags: ["Adjustable", "RGB"],
    specifications: {
      emphasis: "RGB lighting",
      material: "Metal",
      adjustableHeight: true,
      brightnessLevels: 5,
      wireless: false
    },
    basePrice: 50,
    protionalPrice: 45,
    highestPrice: 60,
    lowestPrice: 40,
    averagePrice: 48
  },
  {
    id: 15,
    uuid: randomUUID(),
    name: "Gaming External SSD",
    description: "High speed external SSD with USB-C connection",
    image: "https://placehold.co/600x400",
    brand: "Storage",
    rating: 5,
    videoReview: "",
    tags: ["High Speed", "Portable"],
    specifications: {
      emphasis: "USB-C connection",
      capacity: "1TB",
      readSpeed: "1050MB/s",
      writeSpeed: "1000MB/s",
      wireless: false
    },
    basePrice: 150,
    protionalPrice: 140,
    highestPrice: 180,
    lowestPrice: 130,
    averagePrice: 145
  }
];

export default products;