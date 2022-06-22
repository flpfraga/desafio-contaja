
import RouteApp from './routes';

import ComicProvider from './context/Comic'

import CartListProvider from './context/CartList'

import SelectComicProvider from './context/SelectComic'

function App() {
  return (
    <ComicProvider>

      <CartListProvider>
        <SelectComicProvider>
          
            <RouteApp />
         
        </SelectComicProvider>
      </CartListProvider>

    </ComicProvider>
  )
}

export default App;
