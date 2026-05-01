import { Game, EsportPlayer } from "./types";

export const REAL_GAMES: Game[] = [
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    category: "Action RPG",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1605898960710-9097e37ca41a?q=80&w=2070&auto=format&fit=crop",
    price: "$59.99",
    description: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
    developer: "CD PROJEKT RED",
    releaseDate: "Dec 10, 2020"
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    category: "RPG",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2070&auto=format&fit=crop",
    price: "$59.99",
    description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    developer: "FromSoftware Inc.",
    releaseDate: "Feb 25, 2022"
  },
  {
    id: "valorant",
    title: "Valorant",
    category: "Shooter",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    price: "Free",
    description: "A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities.",
    developer: "Riot Games",
    releaseDate: "Jun 2, 2020"
  },
  {
    id: "legend-of-zelda",
    title: "Tears of the Kingdom",
    category: "Adventure",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1500990708675-408d6374eaa2?q=80&w=1974&auto=format&fit=crop",
    price: "$69.99",
    description: "An epic adventure across the land and skies of Hyrule awaits in the sequel to The Legend of Zelda: Breath of the Wild.",
    developer: "Nintendo",
    releaseDate: "May 12, 2023"
  },
  {
    id: "cs2",
    title: "Counter-Strike 2",
    category: "Shooter",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552824734-b209e99c30f4?q=80&w=2070&auto=format&fit=crop",
    price: "Free",
    description: "For over two decades, Counter-Strike has offered an elite competitive experience, and CS2 is the next chapter in that legacy.",
    developer: "Valve",
    releaseDate: "Sep 27, 2023"
  },
  {
    id: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    category: "RPG",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=2070&auto=format&fit=crop",
    price: "$59.99",
    description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.",
    developer: "Larian Studios",
    releaseDate: "Aug 3, 2023"
  }
];

export const LEGENDARY_PLAYERS: EsportPlayer[] = [
  {
    id: "faker",
    name: "Lee Sang-hyeok",
    handle: "Faker",
    game: "League of Legends",
    achievement: "4x World Champion",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "s1mple",
    name: "Oleksandr Kostyliev",
    handle: "s1mple",
    game: "Counter-Strike",
    achievement: "PGL Major Winner",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "tenz",
    name: "Tyson Ngo",
    handle: "TenZ",
    game: "Valorant",
    achievement: "VCT Masters Winner",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fce66?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "bugha",
    name: "Kyle Giersdorf",
    handle: "Bugha",
    game: "Fortnite",
    achievement: "World Cup Solo Champion",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
  }
];
