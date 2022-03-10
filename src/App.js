import Heading from "./components/Heading";
import Form from "./components/form";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center mx-3 min-h-screen">
      <Heading>Numbers Converter</Heading>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
