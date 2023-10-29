import { Result } from '../types';

const url = (q: string) =>
  `https://netflix-data.p.rapidapi.com/search/?query=${q}&offset=0&limit_titles=12&limit_suggestions=20`;

export const getMovies = async (q: string) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6634d5d381msha119dc8f7f27896p1295e3jsn0218397c7e74',
      'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url(q.trim()), options);
    const results = await response.json();

    return results.titles.map(({ jawSummary }: Result) => ({
      id: jawSummary.id,
      title: jawSummary.title,
      image: jawSummary.backgroundImage.url,
    }));
  } catch {
    return [];
  }
};
