import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </QueryClientProvider>
  );
}

export default App;
