import Header from '../components/Header';
import { HomeContainer } from '../components/HomeContainer';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header />
      <HomeContainer />
      <Footer />
    </div>
  );
}
