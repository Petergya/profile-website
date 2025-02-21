



// import Nav from "@/component/nav";
// import Footer from "@/component/footer";
// import "./globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body >
//         <Nav  />
//         <main >
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }



import Nav from "@/component/nav";
import Footer from "@/component/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <Nav />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
