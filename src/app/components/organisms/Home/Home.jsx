import Hero from "../../molecules/heroSection/Hero";
import Features from "../../molecules/Features/Features";
import BookSlider from "../../molecules/BookSlider/BookSlider";
import News from "./../../molecules/News/News";
import LatestNews from "./../../molecules/LastNews/LastNews";
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <BookSlider />
      <News />
      <LatestNews />
    </>
  );
}
