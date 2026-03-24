import Header from '../components/Header'
import Hero from "../components/Hero"
import LogoCarousal from "../components/LogoCarousal"
import './globals.css'

export default function Home() {
  return (
    <div className='px-40 py-10'>
      <Header />
      <Hero />
      <LogoCarousal />
    </div>
  );
}
