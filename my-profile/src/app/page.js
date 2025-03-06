// import Hero from "@/landingpage/hero";
// import Products from "@/landingpage/products";
// import Services from "@/landingpage/services";
// import Welcome from "@/landingpage/welcome";
// import Commitment from "@/landingpage/commitment";

// export default function Home() {
//   return (
//     <div className=" overflow-hidden ">
//       <>
//         <Hero />
//         <Welcome />
//         <Products />
//         <Commitment />
//         <Services />
//       </>
//     </div>
//   );
// }


import Hero from "@/landingpage/hero";
import Products from "@/landingpage/products";
import Services from "@/landingpage/services";
import Welcome from "@/landingpage/welcome";
import Commitment from "@/landingpage/commitment";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Welcome />
      <Products />
      <Commitment />
      <Services />
    </div>
  );
}
