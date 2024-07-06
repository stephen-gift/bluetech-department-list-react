import "./App.css";
import { BDLHomePageContainer } from "./containers";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>BlueTech Solutions - IT Services & Solutions</title>
        <meta
          name="description"
          content="BlueTech Solutions LLC offers innovative IT services in web development, graphic design, network, and hardware solutions to enhance business efficiency."
        />
        <meta
          name="keywords"
          content="BlueTech Solutions, IT services, web development, graphic design, network solutions, hardware solutions, business solutions, technology provider, innovative technologies, customized solutions, business efficiency, pioneering solutions, long-term partnerships, future success"
        />

        <meta name="author" content="Blutech Solutions LLC" />
        <link rel="author" href="https://bluetech-department-list.vercel.app" />

        <meta property="og:title" content="Blutech Solutions LLC" />
        <meta
          property="og:description"
          content="Blutech Solutions LLC is a technology company specializing in innovative software solutions. We provide cutting-edge services in web and mobile application development, cloud computing, and digital transformation strategies."
        />
        <meta property="og:site_name" content="Blutech Solutions LLC" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blutech Solutions LLC" />
        <meta
          name="twitter:description"
          content="Blutech Solutions LLC is a technology company specializing in innovative software solutions. We provide cutting-edge services in web and mobile application development, cloud computing, and digital transformation strategies."
        />
      </Helmet>
      <BDLHomePageContainer />
    </>
  );
}

export default App;
