import AfterCompundApp from "./compound-pattern/after/AfterCompoundApp";
import BeforeCompundApp from "./compound-pattern/before/BeforeCompundApp";
import BankAppHOC from "./hoc-pattern/after/WithHOCApp";
import BankAppnoHOC from "./hoc-pattern/before/WithoutHOCApp";
function App() {
  return (

    <div>
      {/* <BeforeCompundApp />
      <AfterCompundApp /> */}


{/* 
<BankAppHOC/> */}


<BankAppnoHOC/>
    </div>

  );
}

export default App;
