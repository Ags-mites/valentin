import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Heart, Flower2, Flower, HandHeart, Rose } from 'lucide-react'

export const portadaImg = 'https://res.cloudinary.com/dmh34pd82/image/upload/v1770576713/PortImage_lqi6vz.png'

const FallingPetals = () => {
  const petals = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 15 + Math.random() * 15
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(petal.id) * 50, 0],
            rotate: [0, 360, 720]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <Heart
            size={petal.size}
            fill="#ffb3d9"
            color="#ff85c1"
            className="opacity-40"
          />
        </motion.div>
      ))}
    </div>
  )
}

// Slide 1
const Slide1 = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section ref={ref} className="snap-section bg-gradient-to-br from-pink-50 via-rose-50 to-white relative">
      <FallingPetals />
      <motion.div
        className="text-center z-20 px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          animate={{
            rotate: portadaImg ? [0, 5, -5, 0] : [0, 10, -10, 0],
            scale: portadaImg ? [1, 1.05, 1] : [1, 1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="mb-8"
        >
          {portadaImg ? (
            <img
              src={portadaImg}
              alt="Imagen romántica"
              className="mx-auto w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const nextEl = e.currentTarget.nextElementSibling as HTMLElement
                if (nextEl) nextEl.style.display = 'block'
              }}
            />
          ) : null}
          <Heart
            size={80}
            className={`mx-auto text-rose-400 fill-rose-300 ${portadaImg ? 'hidden' : ''}`}
          />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Para Mi Amor
        </h1>

        <motion.p
          className="text-xl md:text-2xl text-rose-600 font-light italic"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tengo un algo que decirte
        </motion.p>

        <motion.div
          className="mt-12 flex gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Flower2 className="text-rose-400 animate-pulse-heart" />
          <Flower2 className="text-rose-300 animate-pulse-heart" style={{ animationDelay: '0.3s' }} />
          <Flower2 className="text-rose-400 animate-pulse-heart" style={{ animationDelay: '0.6s' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Slide 2
const Slide2 = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const stories = [
    {
      title: "La primera cita",
      text: "Aún recuerdo aquel día de octubre cuando te vi por primera vez, me pareciste una niña tierna, algo tímida, pero muy hermosa, sin pensarlo, te convertiste en mi amor verdadero. Desde entonces, cada momento a tu lado ha sido mágico. Cada sonrisa, cada palabra, cada instante compartido ha llenado mi vida de color y felicidad.",
      url: "https://res.cloudinary.com/dmh34pd82/image/upload/v1770577557/Image1_f4b2dl.jpg"
    },
    {
      title: "Nuestras Aventuras",
      text: "Juntos hemos creado recuerdos inolvidables, cada hamburguesa compartida, cada sushi y cada ceviche disfrutado se convirtieron en excusas para vernos, reír, conversar y seguir eligiéndonos. Cada momento ha hecho que nuestro amor crezca y nos ha unido más",
      url: "https://res.cloudinary.com/dmh34pd82/image/upload/v1770581116/20220107_162957_ya11mk.jpg"
    },
    {
      title: "Tus Pequeños Detalles",
      text: "Cada gesto tuyo lo guardo en mi corazón, tus miradas, tus abrazos, la forma en que tomas mi mano, la manera en que me ves. Sin hacer ruido, descubrí que el amor vive en lo simple, a diario me recuerda cuánto te importo y cuánto significas para mí, hoy quiero decierte que deseo seguir compartiendo mucho tiempo contigo.",
      url: "https://res.cloudinary.com/dmh34pd82/image/upload/v1770584148/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_copia_2_stnejy.jpg"
    },
    {
      title: "Nuestro Futuro",
      text: "Sé que tal vez no soy el mejor, sin embargo, en ti puedo ser yo y sentirme seguro, escuchado y apoyado. Cada día a tu lado es una nueva oportunidad para enamorarme más de ti, y deseo seguir compartiendo mucho tiempo contigo, llenarte de recuerdos inolvidables y seguir construyendo nuestro futuro juntos.",
      url: "https://res.cloudinary.com/dmh34pd82/image/upload/v1770584155/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_copia_mwnymv.jpg"
    }
  ]

  return (
    <section ref={ref} className="snap-section bg-gradient-to-br from-white via-pink-50 to-rose-50 overflow-hidden">
      <div className="w-full h-full flex flex-col px-6 py-8 max-h-[100dvh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 flex-shrink-0"
        >
          <Flower size={50} className="mx-auto text-rose-500 mb-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">
            Nuestra historia de amor
          </h2>
          <p className="text-rose-400 text-sm md:text-base">
            Desliza →
          </p>
        </motion.div>

        <div className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-hide" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          <div className="flex gap-6 h-full min-w-max px-4">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-rose-100 flex-shrink-0 w-[300px] md:w-[380px] flex flex-col h-full"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="aspect-video bg-gradient-to-br from-rose-200 to-pink-100 rounded-2xl mb-3 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src={story.url} alt="" className="w-full h-full object-cover" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-rose-600 mb-3 text-center flex-shrink-0">
                  {story.title}
                </h3>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center overflow-y-auto flex-1">
                  {story.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 3
const Slide3 = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const reasons = [
    {
      number: 1,
      icon: Heart,
      text: 'Eres mi persona favorita en el mundo, cada momento a tu lado es especial, no importa que estemos haciendo, me encanta estar contigo',
      color: 'rose'
    },
    {
      number: 2,
      icon: Flower,
      text: 'Cada que te veo haces que mi corazón se acelere, que me ponga nervioso y que solo quiera llenarte de besos y abrazos',
      color: 'pink'
    },
    {
      number: 3,
      icon: Flower2,
      text: 'Cada que te abrazo, siento que me encuentro en paz, amor y certeza de que a tu lado todo es mejor',
      color: 'rose'
    },
    {
      number: 4,
      icon: HandHeart,
      text: 'Cuando te veo sonreir, y ser feliz comiendo una hamburguesa, un sushi o un ceviche, me hace darme cuenta de lo mucho que te amo y que tu niña interior es muy feliz',
      color: 'pink'
    },
    {
      number: 5,
      icon: Rose,
      text: 'Porque me haces querer ser mejor persona cada día y me inspiras a seguir adelante',
      color: 'rose'
    }
  ]

  return (
    <section ref={ref} className="snap-section bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-8 h-full flex flex-col">
        <motion.div
          className="text-center mb-8 flex-shrink-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Heart size={60} className="mx-auto text-rose-500 fill-rose-400 mb-4 animate-pulse-heart" />
          <h2 className="text-3xl md:text-5xl font-bold text-rose-600">
            5 Razones Para Que Seas Mi San Valentín
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-y-auto flex-1">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-rose-100 hover:shadow-2xl transition-shadow relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="absolute top-4 right-4 text-6xl md:text-7xl font-bold text-rose-100 opacity-50">
                {reason.number}
              </div>

              <div className="relative z-10">
                <reason.icon
                  size={45}
                  className={`mx-auto mb-4 text-${reason.color}-500 animate-pulse-heart`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                />
                <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed font-medium">
                  {reason.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Slide 4
const Slide4 = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section ref={ref} className="snap-section bg-gradient-to-br from-pink-50 via-rose-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2
            }}
          >
            <Heart size={30 + i * 3} className="text-rose-200 opacity-20 fill-rose-100" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8 h-full flex items-center justify-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-rose-200 max-h-[85vh] overflow-y-auto flex flex-col"
        >
          <Heart size={60} className="mx-auto mb-6 text-rose-500 fill-rose-400 animate-pulse-heart flex-shrink-0" />

          <h2 className="text-2xl md:text-4xl font-bold text-rose-600 mb-6 text-center flex-shrink-0">
            Mi Mensaje Para Ti
          </h2>

          <motion.p
            className="text-base md:text-lg text-gray-700 leading-relaxed italic font-light mb-6 text-center overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            "Cada día a tu lado es un regalo que atesoro en mi corazón.
            Cada momento contigo se siente eterno, y tu amor me hace creer en lo imposible. Contigo aprendí que lo simple puede ser mágico, que cada sonrisa, abrazo y mirada se vuelve eterno, cada gesto tuyo me enamora más, eres la razón por la que creo en el amor verdadero. Te amo más de lo que las palabras pueden decir, y no hay lugar donde prefiera estar que a tu lado."
          </motion.p>

          <motion.div
            className="text-xl md:text-2xl gradient-text font-bold text-center flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Te amo con todo mi corazón 💕
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Slide 5
const Slide5 = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [noAttempts, setNoAttempts] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  const moveNoButton = () => {
    setNoAttempts(prev => prev + 1)
    const maxX = window.innerWidth > 768 ? 200 : 100
    const maxY = window.innerWidth > 768 ? 100 : 50
    setNoButtonPos({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY
    })
  }

  const handleYes = () => {
    setShowCelebration(true)
  }

  return (
    <section ref={ref} className="snap-section bg-gradient-to-br from-rose-100 via-pink-100 to-white relative overflow-hidden">
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-rose-500/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center px-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Heart size={120} className="mx-auto mb-8 text-white fill-white" />
              </motion.div>

              <motion.h2
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                ¡Sabía que dirías que sí!
              </motion.h2>

              <motion.p
                className="text-2xl md:text-3xl text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                ¡Feliz San Valentín, mi amor!
              </motion.p>

              <div className="absolute inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: '-5%'
                    }}
                    animate={{
                      y: ['0vh', '110vh'],
                      rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                      x: [(Math.random() - 0.5) * 100]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      delay: Math.random() * 0.5,
                      repeat: Infinity
                    }}
                  >
                    <Heart
                      size={15 + Math.random() * 20}
                      className="text-white fill-white opacity-80"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mb-8"
          >
            <Heart size={90} className="mx-auto text-rose-500 fill-rose-400" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-rose-600 mb-12">
            La Gran Pregunta
          </h2>

          <motion.p
            className="text-2xl md:text-3xl text-gray-700 mb-12 font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ¿Quieres ser mi San Valentín?
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative min-h-[120px]">
            <motion.button
              onClick={handleYes}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-xl transition-all z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ¡Sí! 💖
            </motion.button>

            <motion.button
              onHoverStart={moveNoButton}
              onClick={moveNoButton}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-4 px-12 rounded-full text-xl shadow-xl transition-colors cursor-pointer"
              animate={{
                x: noButtonPos.x,
                y: noButtonPos.y
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ position: noAttempts > 0 ? 'absolute' : 'relative' }}
            >
              No
            </motion.button>
          </div>

          {noAttempts > 0 && (
            <motion.p
              className="mt-8 text-rose-500 font-medium text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {noAttempts === 1 && "¿Estás segura?"}
              {noAttempts === 2 && "Vamos, di que sí"}
              {noAttempts === 3 && "Sabes que quieres decir sí"}
              {noAttempts > 3 && "¡El botón de Sí está esperando!"}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="snap-container">
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
    </div>
  )
}

export default App
