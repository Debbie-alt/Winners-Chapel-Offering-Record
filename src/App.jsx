import AppRouter from "./AppRouter/AppRouter";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
    <AnimatePresence mode="wait">
    <AppRouter/>
    </AnimatePresence>
    
     
    </>
  )
}
export default App;
