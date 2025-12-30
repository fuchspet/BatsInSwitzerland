import { MapPin, Heart, Shield, Info, ChevronDown } from 'lucide-react';

const BatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <g id="wing">
        <path d="M 60 35 Q 85 25 110 35 Q 100 45 85 50 Q 75 52 60 50 Z" fill="currentColor"/>
        <path d="M 60 35 Q 75 30 85 32" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
        <path d="M 60 40 Q 75 35 85 38" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
        <path d="M 60 45 Q 75 42 85 46" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
        <path d="M 65 50 Q 80 48 95 52" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
      </g>
    </defs>

    <circle cx="60" cy="30" r="8" fill="currentColor"/>

    <line x1="57" y1="23" x2="54" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="63" y1="23" x2="66" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

    <path d="M 52 38 Q 35 32 15 40 Q 28 52 50 55 Z" fill="currentColor"/>
    <path d="M 52 38 Q 40 35 28 37" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
    <path d="M 52 42 Q 40 40 28 43" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
    <path d="M 52 46 Q 40 46 28 50" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
    <path d="M 50 52 Q 38 52 25 58" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>

    <path d="M 68 38 Q 85 32 105 40 Q 92 52 70 55 Z" fill="currentColor"/>
    <path d="M 68 38 Q 80 35 92 37" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
    <path d="M 68 42 Q 80 40 92 43" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
    <path d="M 68 46 Q 80 46 92 50" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
    <path d="M 70 52 Q 82 52 95 58" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>

    <circle cx="48" cy="65" r="2" fill="currentColor"/>
    <circle cx="72" cy="65" r="2" fill="currentColor"/>

    <line x1="48" y1="67" x2="46" y2="75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="48" y1="67" x2="48" y2="76" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="48" y1="67" x2="50" y2="75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>

    <line x1="72" y1="67" x2="70" y2="75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="72" y1="67" x2="72" y2="76" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="72" y1="67" x2="74" y2="75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>

    <path d="M 55 58 Q 60 62 65 58" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm text-white z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BatIcon className="w-8 h-8" />
            <span className="text-xl font-bold">Fledermäuse Schweiz</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#arten" className="hover:text-blue-300 transition-colors">Arten</a>
            <a href="#lebensraum" className="hover:text-blue-300 transition-colors">Lebensraum</a>
            <a href="#schutz" className="hover:text-blue-300 transition-colors">Schutz</a>
            <a href="#fakten" className="hover:text-blue-300 transition-colors">Fakten</a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <BatIcon className="w-20 h-20 mx-auto mb-6 animate-pulse text-white" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Fledermäuse der Schweiz
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
            Entdecken Sie die faszinierende Welt der 30 Fledermausarten, die unsere Schweizer Nächte bevölkern
          </p>
          <a
            href="#arten"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            Mehr erfahren
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section id="arten" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Artenvielfalt in der Schweiz
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Die Schweiz beherbergt 30 der 40 in Europa vorkommenden Fledermausarten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <BatIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Großes Mausohr</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Eine der größten einheimischen Arten mit einer Flügelspannweite bis 45 cm. Jagt bevorzugt große Insekten am Boden.
              </p>
              <span className="text-sm font-semibold text-blue-600">Myotis myotis</span>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-6">
                <BatIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Zwergfledermaus</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Die kleinste und häufigste Art in der Schweiz. Wiegt nur 4-8 Gramm und ist oft in Siedlungen anzutreffen.
              </p>
              <span className="text-sm font-semibold text-emerald-600">Pipistrellus pipistrellus</span>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <BatIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Wasserfledermaus</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Spezialisiert auf die Jagd über Gewässern. Kann Insekten direkt von der Wasseroberfläche aufnehmen.
              </p>
              <span className="text-sm font-semibold text-amber-600">Myotis daubentonii</span>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mb-6">
                <BatIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Braunes Langohr</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Erkennbar an den auffällig langen Ohren. Kann Insekten auch direkt von Blättern und Rinde ablesen.
              </p>
              <span className="text-sm font-semibold text-rose-600">Plecotus auritus</span>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <BatIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Großer Abendsegler</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Eine der größten europäischen Arten. Fliegt oft schon vor Sonnenuntergang und in großer Höhe.
              </p>
              <span className="text-sm font-semibold text-cyan-600">Nyctalus noctula</span>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                <BatIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Kleine Hufeisennase</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Charakteristisch ist die hufeisenförmige Nase. Eine bedrohte Art, die besonderen Schutz benötigt.
              </p>
              <span className="text-sm font-semibold text-teal-600">Rhinolophus hipposideros</span>
            </div>
          </div>
        </div>
      </section>

      <section id="lebensraum" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Lebensraum & Verbreitung
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Fledermäuse besiedeln vielfältige Lebensräume in der Schweiz – von den Tallagen bis in alpine Höhen von über 3000 Metern.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Wälder</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Naturnahe Wälder mit Altholzbeständen dienen als wichtige Jagdgebiete und Quartiere in Baumhöhlen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Gewässer</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Seen, Flüsse und Feuchtgebiete sind bedeutende Jagdlebensräume mit hohem Insektenaufkommen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Siedlungen</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Viele Arten nutzen Gebäude als Quartiere – in Dachstöcken, Mauerspalten und Fensterläden.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Höhlen & Stollen</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Unterirdische Strukturen dienen als wichtige Winterquartiere mit konstanten Temperaturen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-8">Schweizer Regionen</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold mb-2">Mittelland</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Höchste Artenvielfalt dank diverser Strukturen und mildem Klima. Wichtige Region für Wochenstuben.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="text-xl font-bold mb-2">Jura</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Bedeutend für Höhlen bewohnende Arten. Zahlreiche Winter- und Schwärmquartiere.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="text-xl font-bold mb-2">Alpen</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Auch in Höhenlagen anzutreffen. Spezialisierte Arten nutzen alpine Strukturen als Sommerquartiere.
                  </p>
                </div>
                <div className="border-l-4 border-rose-500 pl-6">
                  <h4 className="text-xl font-bold mb-2">Tessin</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Mediterranes Klima begünstigt südliche Arten. Wichtige Durchzugsregion für Wanderfledermäuse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="schutz" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Schutz & Gefährdung
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Alle Fledermausarten in der Schweiz sind gesetzlich geschützt
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-r-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-red-600" />
                Bedrohungen
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span className="leading-relaxed">Verlust von Quartieren durch Gebäudesanierungen und Baumfällungen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span className="leading-relaxed">Intensivierung der Landwirtschaft und Pestizideinsatz</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span className="leading-relaxed">Lichtverschmutzung stört Jagdverhalten und Orientierung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span className="leading-relaxed">Windenergieanlagen können zu Kollisionen führen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span className="leading-relaxed">Störung in Winterquartieren führt zu lebensbedrohlichem Energieverlust</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-emerald-600" />
                Schutzmassnahmen
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-1">✓</span>
                  <span className="leading-relaxed">Erhaltung und Schaffung von Quartieren in Gebäuden und Bäumen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-1">✓</span>
                  <span className="leading-relaxed">Förderung naturnaher Lebensräume und Insektenreichtum</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-1">✓</span>
                  <span className="leading-relaxed">Reduktion der Lichtverschmutzung in sensiblen Gebieten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-1">✓</span>
                  <span className="leading-relaxed">Installation von Fledermauskästen als Ersatzquartiere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-1">✓</span>
                  <span className="leading-relaxed">Beratung bei Renovationen durch Fledermausschutz-Organisationen</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">So können Sie helfen</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Jeder kann zum Schutz der Fledermäuse beitragen – ob im eigenen Garten, am Haus oder durch Unterstützung von Schutzprojekten
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Quartiere erhalten</h4>
                <p className="text-blue-100 text-sm leading-relaxed">Spalten und Nischen bei Renovationen bewahren</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Garten naturnah</h4>
                <p className="text-blue-100 text-sm leading-relaxed">Einheimische Pflanzen fördern Insekten</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Licht reduzieren</h4>
                <p className="text-blue-100 text-sm leading-relaxed">Nächtliche Beleuchtung minimieren</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fakten" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Info className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Faszinierende Fakten
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Erstaunliche Fähigkeiten und Besonderheiten der Schweizer Fledermäuse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all">
              <div className="text-5xl font-bold text-blue-400 mb-3">30</div>
              <h3 className="text-xl font-bold mb-2">Arten</h3>
              <p className="text-slate-400 leading-relaxed">verschiedene Fledermausarten leben in der Schweiz</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all">
              <div className="text-5xl font-bold text-emerald-400 mb-3">3000</div>
              <h3 className="text-xl font-bold mb-2">Insekten</h3>
              <p className="text-slate-400 leading-relaxed">kann eine Fledermaus pro Nacht fressen</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500 transition-all">
              <div className="text-5xl font-bold text-amber-400 mb-3">30</div>
              <h3 className="text-xl font-bold mb-2">Jahre</h3>
              <p className="text-slate-400 leading-relaxed">können einige Fledermausarten alt werden</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-rose-500 transition-all">
              <div className="text-5xl font-bold text-rose-400 mb-3">200</div>
              <h3 className="text-xl font-bold mb-2">Rufe/Sek.</h3>
              <p className="text-slate-400 leading-relaxed">senden Fledermäuse zur Echoortung aus</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BatIcon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Echoortung</h3>
              <p className="text-slate-300 leading-relaxed">
                Fledermäuse orientieren sich mit Ultraschall und können damit sogar die Größe und Textur von Objekten erkennen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Winterschlaf</h3>
              <p className="text-slate-300 leading-relaxed">
                Von November bis März senken Fledermäuse ihre Körpertemperatur auf 2-8°C und ihr Herzschlag sinkt auf 10 Schläge pro Minute.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Einzige fliegende Säugetiere</h3>
              <p className="text-slate-300 leading-relaxed">
                Fledermäuse sind die einzigen Säugetiere, die aktiv fliegen können. Ihre Flughäute spannen sich zwischen verlängerten Fingern.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BatIcon className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Fledermäuse Schweiz</span>
            </div>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto mb-6">
              Diese Seite dient der Information über die faszinierenden Fledermäuse in der Schweiz und deren Schutz.
              Alle Fledermausarten sind in der Schweiz geschützt.
            </p>
            <p className="text-xs text-slate-500">
              © 2024 Fledermäuse Schweiz. Für den Schutz unserer nächtlichen Jäger.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
