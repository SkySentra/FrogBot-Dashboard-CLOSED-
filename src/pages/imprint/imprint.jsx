import React from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaGavel,
  FaInfoCircle
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Imprint() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 px-6 py-20 text-green-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-green-50 mb-16">Impressum</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 text-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaBuilding className="text-green-300" />
                <h2 className="text-lg font-semibold">Anbieter</h2>
              </div>
              <p>Namenachname</p>
              <p>Hamburger Strasse oder so</p>
              <p>Hamburger Stadt</p>
              <p>Deutschland</p>
            </div>


            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaEnvelope className="text-green-300" />
                <h2 className="text-lg font-semibold">Kontakt</h2>
              </div>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-300" />
                Nummer (KEIN SUPPORT)
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-green-300" />
                <a
                  href="mailto:kontakt@frogbot.de"
                  className="underline hover:text-green-200"
                >
                  idkwelcheeswird@frogbot.de
                </a>
              </p>
            </div>


            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaUser className="text-green-300" />
                <h2 className="text-lg font-semibold">Inhaltlich verantwortlich</h2>
              </div>
              <p>Namenachname</p>
              <p>(Anschrift wie oben)</p>
            </div>


            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <FaGavel className="text-green-300" />
                <h2 className="text-lg font-semibold">Haftungshinweis</h2>
              </div>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
                für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
                sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
                <div>
                <div className="flex items-center gap-2 mb-2">
                    <FaInfoCircle className="text-green-300" />
                    <h2 className="text-lg font-semibold">Hinweis</h2>
                </div>
                <p>
                    Dieses Impressum enthält die gesetzlich vorgeschriebenen Angaben gemäß § 5 TMG. Weitere Informationen finden Sie in unserer{" "}
                    <a href="/datenschutz" className="underline hover:text-green-200">
                    Datenschutzerklärung
                    </a>.
                </p>
                </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
