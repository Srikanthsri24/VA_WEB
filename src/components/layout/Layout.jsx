import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import VoiceCall from "../VoiceCall";
import QuickActions from "../QuickActions";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageTransition>
        <main className="pt-16 lg:pt-20">{children}</main>
      </PageTransition>

      <Footer />

      <QuickActions />
      <VoiceCall />
    </div>
  );
};

export default Layout;