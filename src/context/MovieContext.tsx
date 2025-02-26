import React, {createContext, useContext, useState, ReactNode} from 'react';

// Define Context Type
interface MovieContextType {
  movieId: string | null;
  movieData: any | null;
  updateMovieId: (id: string) => void;
  updateMovieData: (data: any) => void;
}

const MovieContext = createContext<MovieContextType>({
  movieId: null,
  movieData: null,
  updateMovieId: () => {},
  updateMovieData: () => {},
});

// Provider Component
interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({children}) => {
  const [movieId, setMovieId] = useState<string | null>(null);
  const [movieData, setMovieData] = useState<any | null>(null);

  const updateMovieId = (id: string) => {
    setMovieId(id);
  };

  const updateMovieData = (data: any) => {
    setMovieData(data);
  };

  return (
    <MovieContext.Provider
      value={{movieId, movieData, updateMovieId, updateMovieData}}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom Hook to Use Context
export const useMovie = () => {
  return useContext(MovieContext);
};
