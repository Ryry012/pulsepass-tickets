export type EventCategory = "Concerts" | "Sports" | "Comedy" | "Festivals" | "Theater";

export type EventListing = {
  id: number;
  title: string;
  category: EventCategory;
  venue: string;
  city: string;
  date: string;
  time: string;
  price: number;
  image: string;
  accent: string;
};

export const categories: EventCategory[] = ["Concerts", "Sports", "Comedy", "Festivals", "Theater"];

export const events: EventListing[] = [
  { id: 1, title: "Nova Lane World Tour", category: "Concerts", venue: "SoFi Stadium", city: "Los Angeles, CA", date: "Jul 18", time: "8:00 PM", price: 84, image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80", accent: "#2563eb" },
  { id: 2, title: "LA Finals Watch Party", category: "Sports", venue: "Crypto.com Arena", city: "Los Angeles, CA", date: "Jul 21", time: "6:30 PM", price: 49, image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80", accent: "#1dbf73" },
  { id: 3, title: "Friday Night Laughs", category: "Comedy", venue: "The Wiltern", city: "Los Angeles, CA", date: "Jul 26", time: "9:00 PM", price: 36, image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1200&q=80", accent: "#ff5f55" },
  { id: 4, title: "Desert Lights Festival", category: "Festivals", venue: "Rose Bowl Grounds", city: "Pasadena, CA", date: "Aug 03", time: "2:00 PM", price: 129, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80", accent: "#7c3aed" },
  { id: 5, title: "Midnight on Broadway", category: "Theater", venue: "Pantages Theatre", city: "Hollywood, CA", date: "Aug 09", time: "7:30 PM", price: 72, image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80", accent: "#111318" }
];
