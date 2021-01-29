import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
//import img1 from "./assets/bg1.jpg";


const App = () => {
  return (
    <>
      <Header 
        title="his is title"
        descr="This is Description!"
      />
      <Layout 
        id={1}
        title="Layout title #1"
        descr="Layout description #1"
        urlBg="url(../../assets/bg1.jpg)"
      />
      <Layout
        id={2} 
        title="Layout title #2"
        descr="Layout description #2"
        urlBg="none"
      />
      <Layout
        id={3} 
        title="Layout title #3"
        descr="Layout description #3"
        urlBg="url(../../assets/bg1.jpg)"
      />
      <Footer />
    </>
  )
}  


export default App;
