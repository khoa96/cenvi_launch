import dynamic from "next/dynamic";

// Tải component phía client một cách động
const FooterForm = dynamic(() => import("./FooterForm"), { ssr: false });

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© 2025 My Landing Page</p>
      <FooterForm />
    </footer>
  );
}
