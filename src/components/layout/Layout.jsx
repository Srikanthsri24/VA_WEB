import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Layout;
