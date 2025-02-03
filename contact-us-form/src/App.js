import ContactForm from "./ContactForm";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <ContactForm />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
