import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-2">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
