export const metadata = {
  title: "Traversy Media",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate nisi nemo in hic veritatis natus eveniet ducimus sed illo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
