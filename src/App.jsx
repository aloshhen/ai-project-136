import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Swords, 
  TowerControl, 
  Gamepad2, 
  Trophy, 
  Users, 
  Play, 
  Download, 
  ChevronRight 
} from 'lucide-react'

function App() {
  const [activeHero, setActiveHero] = useState('antimage')
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const mediaRef = useRef(null)
  
  const heroesData = {
    antimage: {
      name: 'Anti-Mage',
      description: 'Быстрый и смертоносный герой, специализирующийся на уклонении и мощных магических атаках.',
      image: 'https://images.unsplash.com/photo-1614850523060-1c9dfb5b19ae?w=800&q=80'
    },
    invoker: {
      name: 'Invoker',
      description: 'Сложный маг с широким арсеналом заклинаний, требующий высокого мастерства управления.',
      image: 'https://images.unsplash.com/photo-1614850523060-1c9dfb5b19ae?w=800&q=80'
    },
    pudge: {
      name: 'Pudge',
      description: 'Мощный герой с крюком, способный моментально изменить ход битвы.',
      image: 'https://images.unsplash.com/photo-1614850523060-1c9dfb5b19ae?w=800&q=80'
    }
  }

  const isHeroInView = useInView(heroRef, { once: true })
  const isFeaturesInView = useInView(featuresRef, { once: true })
  const isMediaInView = useInView(mediaRef, { once: true })

  return (
    <div className="min-h-screen bg-gradient-to-b from-dota-blue via-black to-dota-blue overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-dota-red/30">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Swords className="w-8 h-8 text-dota-red" />
            <span className="text-2xl font-bold text-white">DOTA 2</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#heroes" className="text-gray-300 hover:text-dota-red transition-colors">Герои</a>
            <a href="#features" className="text-gray-300 hover:text-dota-red transition-colors">Особенности</a>
            <a href="#media" className="text-gray-300 hover:text-dota-red transition-colors">Медиа</a>
          </div>
          <button className="bg-dota-red hover:bg-dota-red/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Играть
          </button>
        </nav>
      </header>

      {/* HERO */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : 50 }}
        className="relative pt-32 pb-20 px-6"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
            DOTA 2
          </h1>
          <p className="text-2xl md:text-3xl text-dota-red mb-8 font-bold">
            Король киберспорта
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Погрузись в эпическую многопользовательскую битву, где каждый матч - уникальная история противостояния!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-dota-red hover:bg-dota-red/90 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Скачать игру
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all backdrop-blur-sm border border-white/20">
              <Play className="w-5 h-5 inline mr-2" /> Трейлер
            </button>
          </div>
        </div>
      </motion.section>

      {/* HEROES SECTION */}
      <motion.section 
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isFeaturesInView ? 1 : 0, y: isFeaturesInView ? 0 : 50 }}
        id="heroes" 
        className="py-20 px-6 bg-black/50"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-white text-center mb-16">
            Выбери своего <span className="text-dota-red">Героя</span>
          </h2>
          <div className="flex justify-center space-x-4 mb-12">
            {Object.keys(heroesData).map(hero => (
              <button 
                key={hero} 
                onClick={() => setActiveHero(hero)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeHero === hero 
                    ? 'bg-dota-red text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {heroesData[hero].name}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {heroesData[activeHero].name}
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {heroesData[activeHero].description}
              </p>
              <button className="bg-dota-red hover:bg-dota-red/90 text-white px-6 py-3 rounded-lg transition-colors">
                Подробнее о герое
              </button>
            </div>
            <div>
              <img 
                src={heroesData[activeHero].image} 
                alt={heroesData[activeHero].name}
                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* GAME FEATURES */}
      <motion.section
        ref={mediaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isMediaInView ? 1 : 0, y: isMediaInView ? 0 : 50 }}
        id="features"
        className="py-20 px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-white text-center mb-16">
            Почему <span className="text-dota-red">Dota 2?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-8 rounded-2xl border border-dota-red/30 hover:border-dota-red/60 transition-all">
              <div className="bg-dota-red/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Gamepad2 className="w-8 h-8 text-dota-red" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Динамичный геймплей</h3>
              <p className="text-gray-400 leading-relaxed">
                Каждый матч уникален, с моментальными поворотами сюжета и непредсказуемыми стратегиями.
              </p>
            </div>
            <div className="bg-black/30 p-8 rounded-2xl border border-dota-red/30 hover:border-dota-red/60 transition-all">
              <div className="bg-dota-red/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-dota-red" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Киберспорт</h3>
              <p className="text-gray-400 leading-relaxed">
                Миллионные призовые, международные турниры и профессиональная киберспортивная сцена.
              </p>
            </div>
            <div className="bg-black/30 p-8 rounded-2xl border border-dota-red/30 hover:border-dota-red/60 transition-all">
              <div className="bg-dota-red/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-dota-red" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Командная игра</h3>
              <p className="text-gray-400 leading-relaxed">
                Развивай командную стратегию, координируй действия с друзьями, побеждай вместе!
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-black py-12 px-6 border-t border-dota-red/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Swords className="w-8 h-8 text-dota-red" />
            <span className="text-2xl font-bold text-white">DOTA 2</span>
          </div>
          <p className="text-gray-400 mb-6">© 2024 Valve Corporation. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default App