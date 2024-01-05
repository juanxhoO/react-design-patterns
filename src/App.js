import AfterCompundApp from "./compound-pattern/after/AfterCompoundApp";
import BeforeCompundApp from "./compound-pattern/before/BeforeCompundApp";
import BankAppHOC from "./hoc-pattern/after/WithHOCApp";
import BankAppnoHOC from "./hoc-pattern/before/WithoutHOCApp";
import RenderPropsApp from "./render-props-pattern/app";
function App() {
  return (

    <div>
      {/* <BeforeCompundApp />
      <AfterCompundApp /> */}


{/* 
<BankAppHOC/> */}


{/* <BankAppnoHOC/> */}



<RenderPropsApp/>

    </div>

  );
}

export default App;
