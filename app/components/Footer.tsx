import Link from "next/link";

const footerLinks = [
  { href: "/om-oss", label: "Om oss" },
  { href: "/personvern", label: "Personvern" },
  { href: "/ansvarsfraskrivelse", label: "Ansvarsfraskrivelse" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <p className="text-sm text-[#9ca3af]">
            © 2026 Forsikringsguiden. Uavhengig forsikringsguide.
          </p>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Bunntekstlenker"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#9ca3af] hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 pt-8 border-t border-white/10 text-xs text-[#6b7280] leading-relaxed max-w-3xl">
          Forsikringsguiden er en uavhengig informasjonstjeneste. Vi kan motta
          provisjon fra forsikringsselskaper vi lenker til. Dette påvirker ikke
          våre vurderinger.
        </p>
      </div>
    </footer>
  );
}
