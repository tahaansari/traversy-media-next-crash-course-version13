export const metadata = {
  title: "Traversy Media",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate nisi nemo in hic veritatis natus eveniet ducimus sed illo.",
};

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
