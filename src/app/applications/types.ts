export type Highlight = {
  title: string;
  description?: string;
};

export type Application = {
  name: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  bgColor: string;
  highlights: Highlight[];
  technologies?: string[];
  alternatives?: string[];
}; 