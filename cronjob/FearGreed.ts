import { fetcher } from 'utils/fetcher';

const options: Record<string, any> = {
  method: 'GET',
  url: 'https://fear-and-greed-index.p.rapidappi.com/v1/fgi',
  headers: {
    'X-RapidAPI-Key': process.env.FGKEY,
    'X-RapidAPI-Host': 'fear-and-greed-index.p.rapidapi.com',
  },
};

const getData = async () => {
  try {
    const response = await fetcher(options.url, {
      method: options.method,
      headers: options.headers,
    });
    return response;
  } catch {
    return null;
  }
};

getData();
console.log(options);
