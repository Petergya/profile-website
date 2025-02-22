import { LuHeartHandshake } from "react-icons/lu";

const WelcomeSection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center py-12 px-4">
      <LuHeartHandshake className="text-5xl text-gray-700 mb-3" />
      <h2 className="text-lg font-semibold text-gray-800">WELCOME</h2>
      <p className="text-gray-600 max-w-2xl mt-2">
        Suzee Alliance Group is an amiable trans-border supplier of select commodities of the finest grades.
        We provide you with a choice array of Wheat (Milling), Wheat Flour, Sugar, Bitumen, CPO and RBD (Palm Oils).
        As a measure of our commitment to quality assurance, our shipments are always backed by verifiable 
        and confirmable SGS reports.
      </p>
    </section>
  );
};

export default WelcomeSection;
