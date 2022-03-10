import Heading from "./components/Heading";
import Form from "./components/form";

function App() {
  return (
    <div className="flex flex-col justify-center items-center mx-3 min-h-screen">
      <Heading>Numbers Converter</Heading>
      <Form />
    </div>
  );
}

export default App;
