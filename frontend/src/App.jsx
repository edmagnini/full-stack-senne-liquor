import { ThemeProvider } from "./components/theme-provider";
import { useAxiosInterceptor } from "./middleware/useAxiosInterceptoir";
import { MainRouter } from "./router";


function App() {
  useAxiosInterceptor();
  return (
    <div className="w-10/12 m-auto">

      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MainRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
