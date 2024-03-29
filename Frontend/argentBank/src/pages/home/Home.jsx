import ItemSection from "../../components/itemSection/ItemSection.jsx";
import Hero from "../../components/hero/Hero.jsx";

function Home() {
  return (
    <>
      <Hero />
      <section className="features">
        <ItemSection
          title="You are our #1 priority "
          content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          src="./icon-chat.webP"
        />
        <ItemSection
          title="More savings means higher rates"
          content="The more you save with us, the higher your interest rate will be!"
          src="./icon-money.webP"
        />
        <ItemSection
          title="Security you can trust"
          content="We use top of the line encryption to make sure your data and money is always safe."
          src="./icon-security.webP"
        />
      </section>
    </>
  );
}

export default Home;
