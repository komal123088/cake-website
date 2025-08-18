import "./App.css";
import About from "./componets/about/about";
import BlogSection from "./componets/blogs/blogs";
import Footer from "./componets/footer/footer";
import Header from "./componets/header/header";
import Navbar from "./componets/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <BlogSection />
      <Footer />
    </>
  );
}

export default App;
