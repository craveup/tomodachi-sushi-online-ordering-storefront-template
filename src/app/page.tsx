import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Navbar } from "./components/navbar";
import { notFound } from "next/navigation";
import SideCards from "@/app/components/SideCards";
import OrderingSessionCompo from "@/app/components/OrderingSessionCompo";

export default async function TomodachiFrontpage() {
  try {
    const socialIcons = [
      {
        icon: Instagram,
        label: "Instagram",
        href: "https://www.instagram.com/",
      },
      {
        icon: Facebook,
        label: "Facebook",
        href: "https://www.facebook.com/",
      },
      { icon: Twitter, label: "Twitter / X", href: "https://x.com/" },
    ];

    return (
      <div className="flex flex-col min-h-screen lg:h-screen bg-backgrounddefault lg:overflow-hidden">
        <OrderingSessionCompo />

        {/* Mobile and Desktop Layout */}
        <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-0 lg:h-full p-3 lg:p-6 gap-3 lg:gap-4">
          {/* Hero Section */}
          <div className="bg-black rounded-xl lg:rounded-2xl relative flex-1 overflow-hidden">
            <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-full bg-[url(/images/sushi/hero-background.png)] bg-cover bg-center">
              {/* Header - Responsive positioning */}
              <header className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 lg:top-12 lg:left-12 lg:right-auto z-10">
                <Navbar />
              </header>

              {/* Mobile: Japanese Title Overlay */}
              <h1
                className="lg:hidden absolute
                         top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center
                         font-yuji-mai text-white
                         text-3xl sm:text-4xl md:text-6xl
                         tracking-wide
                         leading-tight
                         max-w-[90vw]
                         wrap-break-word
                         drop-shadow-2xl
                         z-0"
              >
                日本橋蛎殻町友達寿司
              </h1>

              {/* Desktop: Gradient overlay */}
              <div className="hidden lg:block absolute inset-x-0 bottom-0 h-[clamp(320px,45vh,534px)] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]" />

              {/* Social Icons - Desktop only */}
              <div className="hidden lg:block absolute right-0 bottom-0 z-30">
                <div className="relative flex flex-col gap-3 rounded-[28px_0_0_0] border border-borderdefault/60 bg-backgrounddefault/95 px-6 py-5 shadow-2xl shadow-black/25 backdrop-blur">
                  <div className="space-y-1 text-left">
                    <p className="font-text-meta text-[10px] tracking-[0.5em] text-textmuted uppercase">
                      Follow
                    </p>
                    <p className="font-heading-h6 text-sm tracking-[0.35em] text-textdefault">
                      TOMODACHI
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    {socialIcons.map((social) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-10 w-10 rounded-full border-borderdefault/70 bg-backgroundmuted/60 text-icondefault transition-colors hover:-translate-y-0.5 hover:bg-backgroundmuted focus-visible:ring-2 focus-visible:ring-backgroundprimary/60"
                      >
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${social.label}`}
                        >
                          <social.icon className="h-[18px] w-[18px]" />
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Japanese Title */}
              <h1 className="hidden lg:block absolute bottom-[clamp(16px,6vh,77px)] left-12 right-12 w-auto font-yuji-mai text-white dark:text-[#efe7d2] text-[clamp(28px,4.2vw,72px)] tracking-wider leading-tight whitespace-nowrap z-20 drop-shadow-[0_12px_35px_rgba(0,0,0,0.75)]">
                日本橋蛎殻町友達寿司
              </h1>

              {/* Mobile: Subtle gradient for text readability */}
              <div className="lg:hidden absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/30 pointer-events-none"></div>
            </div>
          </div>
          <SideCards />
        </div>
      </div>
    );
  } catch (e) {
    notFound();
  }
}
