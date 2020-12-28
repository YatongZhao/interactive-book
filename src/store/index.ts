import { createContext } from 'react';
import { Book } from './book';

export const StoreContext = createContext<Book>({} as Book);
export const StoreProvider = StoreContext.Provider;
