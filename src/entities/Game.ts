import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  description_raw: string;
  metacritic: number;
  rating_top: number;
  slug: string;
  genres: Genre[];
  publishers: publisher[]
}
