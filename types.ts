
export type AppState = 'landing' | 'register' | 'new-order' | 'matches' | 'profile' | 'rating';

export interface Provider {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  distanceKm: number;
  availableDate: string;
  machinery: string;
  compatibility: number;
  aiInsight: string;
  imageUrl: string;
  crops: string[];
  location: string;
  verified: boolean;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  userAvatar: string;
}

export interface HarvestOrder {
  id: string;
  crop: string;
  area: number;
  date: string;
  status: 'completed' | 'in_progress' | 'scheduled';
  providerName: string;
}
