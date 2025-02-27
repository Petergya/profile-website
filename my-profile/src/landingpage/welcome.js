import { LuHeartHandshake } from "react-icons/lu";

const WelcomeSection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center py-12 px-4">
      <LuHeartHandshake className="text-5xl text-gray-700 mb-3" />
      <h2 className="text-lg font-semibold text-gray-800 font-twcen">WELCOME</h2>
    
      <p className="text-gray-600 max-w-5xl mt-2 font-twcen">
  With headquarters in the vibrant commercial heart of the UK, <b className="font-perpetua">METALLIZ GROUP</b> is a multinational enterprise, expertly sourcing and supplying a precision-crafted portfolio of high-performance Strategic Raw Materials (SRMs). These specialized materials are available in various forms, including oxides, ingots, nanoparticles, films, and powders, meticulously tailored to cater to the stringent demands of innovators in pivotal sectors.
  These minerals facilitate the production of advanced superconductors, powering next-generation technologies, in addition to the creation of bespoke alloys for the defense industries and rocket propulsion systems.
</p>

    </section>
  );
};

export default WelcomeSection;
