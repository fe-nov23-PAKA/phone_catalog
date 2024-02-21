import { ProductCard } from "../components/ProductCard";
import { ArrowRight } from "../icons/Arrow-Right";
import { HomePageIcon } from "../icons/HomePageIcon";

const favouriteItems = [
  {
    "id": "apple-iphone-11-128gb-black",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB Black",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "black",
    "images": [
      "img/phones/apple-iphone-11/black/00.webp",
      "img/phones/apple-iphone-11/black/01.webp",
      "img/phones/apple-iphone-11/black/02.webp",
      "img/phones/apple-iphone-11/black/03.webp",
      "img/phones/apple-iphone-11/black/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

  {
    "id": "apple-iphone-11-128gb-green",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB Green",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "green",
    "images": [
      "img/phones/apple-iphone-11/green/00.webp",
      "img/phones/apple-iphone-11/green/01.webp",
      "img/phones/apple-iphone-11/green/02.webp",
      "img/phones/apple-iphone-11/green/03.webp",
      "img/phones/apple-iphone-11/green/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

  {
    "id": "apple-iphone-11-128gb-purple",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB Purple",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "purple",
    "images": [
      "img/phones/apple-iphone-11/purple/00.webp",
      "img/phones/apple-iphone-11/purple/01.webp",
      "img/phones/apple-iphone-11/purple/02.webp",
      "img/phones/apple-iphone-11/purple/03.webp",
      "img/phones/apple-iphone-11/purple/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

  {
    "id": "apple-iphone-11-128gb-red",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB Red",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "red",
    "images": [
      "img/phones/apple-iphone-11/red/00.webp",
      "img/phones/apple-iphone-11/red/01.webp",
      "img/phones/apple-iphone-11/red/02.webp",
      "img/phones/apple-iphone-11/red/03.webp",
      "img/phones/apple-iphone-11/red/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

  {
    "id": "apple-iphone-11-128gb-white",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB White",
    "capacityAvailable": ["64GB", "128GB", "256GB"],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
    "color": "white",
    "images": [
      "img/phones/apple-iphone-11/white/00.webp",
      "img/phones/apple-iphone-11/white/01.webp",
      "img/phones/apple-iphone-11/white/02.webp",
      "img/phones/apple-iphone-11/white/03.webp",
      "img/phones/apple-iphone-11/white/04.webp"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
  },

];

export const Favourites = () => {
  return (
    <div className="favourites container">
      <div className="mb-6 mt-6 flex flex-col gap-2 md:mb-10">
        <div className="flex flex-row items-center gap-2">
          <HomePageIcon />
          <ArrowRight />
          <span className="text-xs font-bold text-secondary">Favourites</span>
        </div>
        <span className="text-favourites-sm md:text-favourites-base font-extrabold tracking-[-0.01em] text-primary">
          Favourites
        </span>
        <span className="text-sm font-semibold text-secondary">5 items</span>
      </div>
      <ul
        className="col-span-full mb-6 grid 
          grid-cols-4 justify-items-center 
          gap-x-4 gap-y-10 sm:grid-cols-12 md:mb-10 xl:grid-cols-24"
      >
        {favouriteItems.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
