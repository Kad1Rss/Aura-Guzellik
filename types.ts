export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

export interface ConsultantMessage {
  role: 'user' | 'model';
  text: string;
}