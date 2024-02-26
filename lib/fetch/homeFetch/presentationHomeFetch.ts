import { SearchPresentation } from "@/interfaces/presentation/Presentation";

export const searchPresentations = async (query: string): Promise<SearchPresentation[]> => {
  if (query.length === 0) return [];
  try {
    const res = await fetch(
      `http://localhost:3001/presentation/search?query=${query}`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};