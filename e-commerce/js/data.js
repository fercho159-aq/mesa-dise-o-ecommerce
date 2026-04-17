/* =========================================================
   Catálogo de productos — RAÍZ
   Datos inventados para demo. Imágenes: Unsplash.
   ========================================================= */

const PRODUCTS = [
  {
    id: 'otavalo',
    name: 'Mesa Otavalo',
    category: 'Comedor',
    tag: 'Bestseller',
    price: 24500,
    short: 'Comedor de roble macizo para 6 personas, hecha a mano en talleres de Michoacán.',
    description: 'Pieza central inspirada en las mesas comunales del altiplano. Tablero de roble macizo con acabado al aceite que realza la veta natural. Patas torneadas a mano. Cada mesa es única: las marcas y nudos de la madera son parte de su carácter.',
    measures: '220 × 95 × 76 cm',
    materials: 'Roble macizo · Acabado al aceite natural',
    weight: '62 kg',
    delivery: '4 a 6 semanas',
    images: [
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=900&q=80',
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=900&q=80',
      'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=900&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&q=80'
    ]
  },
  {
    id: 'sierra',
    name: 'Mesa Sierra',
    category: 'Escritorio',
    tag: 'Nuevo',
    price: 14800,
    short: 'Escritorio compacto en nogal con cajón oculto y herrajes de latón.',
    description: 'Diseñada para espacios contemporáneos donde el trabajo y el descanso conviven. Tablero en nogal con grano vivo, cajón frontal con tirador minimalista y patas cónicas. Ideal para home office o estudio.',
    measures: '140 × 65 × 75 cm',
    materials: 'Nogal · Latón cepillado · Cajón con cierre suave',
    weight: '38 kg',
    delivery: '3 a 5 semanas',
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=900&q=80',
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=900&q=80',
      'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=900&q=80',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=900&q=80'
    ]
  },
  {
    id: 'barro',
    name: 'Mesa Barro',
    category: 'Centro',
    tag: 'Edición limitada',
    price: 7900,
    short: 'Mesa de centro redonda con base esculpida en barro cocido y tapa de mezquite.',
    description: 'Encuentro entre la cerámica tradicional oaxaqueña y la carpintería contemporánea. La base está modelada y cocida a mano por artesanos de San Marcos Tlapazola; la tapa es de mezquite con bordes vivos.',
    measures: 'Ø 80 × 42 cm',
    materials: 'Barro cocido · Mezquite · Sellador natural',
    weight: '28 kg',
    delivery: '3 a 4 semanas',
    images: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=900&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80',
      'https://images.unsplash.com/photo-1574691250077-03a929faece5?w=900&q=80'
    ]
  },
  {
    id: 'tepoztlan',
    name: 'Mesa Tepoztlán',
    category: 'Comedor',
    tag: 'Pieza grande',
    price: 32000,
    short: 'Comedor rústico para 8 con tablones de parota gruesa y base de hierro forjado.',
    description: 'Pensada para grandes reuniones y largas sobremesas. Tablero de parota de 6 cm de grosor con grietas selladas en resina ámbar. Base de hierro forjado a mano, con pátina envejecida.',
    measures: '260 × 100 × 78 cm',
    materials: 'Parota maciza · Hierro forjado · Resina ámbar',
    weight: '95 kg',
    delivery: '6 a 8 semanas',
    images: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80',
      'https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?w=900&q=80',
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=900&q=80',
      'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=900&q=80'
    ]
  },
  {
    id: 'cobre',
    name: 'Mesa Cobre',
    category: 'Lateral',
    tag: 'Artesanal',
    price: 5400,
    short: 'Mesa lateral con tapa de cobre martillado de Santa Clara.',
    description: 'Cobre martillado a mano en Santa Clara del Cobre, Michoacán, sobre base de encino oscuro. La superficie tiene la pátina cálida y las marcas únicas del proceso artesanal. Pieza pequeña con presencia.',
    measures: 'Ø 45 × 55 cm',
    materials: 'Cobre martillado · Encino oscuro',
    weight: '12 kg',
    delivery: '2 a 3 semanas',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
      'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=900&q=80',
      'https://images.unsplash.com/photo-1567016526105-22da7c13a0fd?w=900&q=80'
    ]
  },
  {
    id: 'maguey',
    name: 'Mesa Maguey',
    category: 'Consola',
    tag: 'Diseño exclusivo',
    price: 18900,
    short: 'Consola larga de mezquite con incrustaciones de fibra de maguey.',
    description: 'Consola para entrada, recibidor o detrás de sofá. Tablero de mezquite con fibra de maguey natural incrustada en la veta, una técnica desarrollada en nuestro taller. Patas en H de hierro negro mate.',
    measures: '180 × 40 × 80 cm',
    materials: 'Mezquite · Fibra de maguey · Hierro mate',
    weight: '34 kg',
    delivery: '4 a 6 semanas',
    images: [
      'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=900&q=80',
      'https://images.unsplash.com/photo-1567016526105-22da7c13a0fd?w=900&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80',
      'https://images.unsplash.com/photo-1549497538-303791108f95?w=900&q=80'
    ]
  },
  {
    id: 'sol',
    name: 'Mesa Sol',
    category: 'Centro',
    tag: 'Bestseller',
    price: 6800,
    short: 'Mesa de centro circular en madera quemada con técnica shou sugi ban.',
    description: 'Pino tratado con la técnica japonesa shou sugi ban: fuego controlado para sellar y ennegrecer la madera, dándole resistencia y un acabado mate profundo. Patas tripoide en madera natural por contraste.',
    measures: 'Ø 70 × 38 cm',
    materials: 'Pino quemado · Pino natural · Aceite de linaza',
    weight: '18 kg',
    delivery: '2 a 4 semanas',
    images: [
      'https://images.unsplash.com/photo-1554295405-abb8fd54f153?w=900&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=900&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80'
    ]
  },
  {
    id: 'atelier',
    name: 'Mesa Atelier',
    category: 'Escritorio',
    tag: '',
    price: 9500,
    short: 'Escritorio compacto para espacios pequeños, en encino claro y patas blancas.',
    description: 'Líneas rectas, tablero en encino claro con acabado mate y patas en hierro pintado en blanco hueso. Pensada para departamentos donde cada centímetro cuenta sin renunciar al diseño.',
    measures: '110 × 55 × 74 cm',
    materials: 'Encino blanco · Hierro pintado',
    weight: '22 kg',
    delivery: '3 a 4 semanas',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=900&q=80',
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=900&q=80',
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=900&q=80'
    ]
  },
  {
    id: 'volcan',
    name: 'Mesa Volcán',
    category: 'Comedor',
    tag: 'Pieza única',
    price: 42000,
    short: 'Comedor escultórico con tapa de piedra volcánica y base de roble.',
    description: 'Pieza única: tapa de roca basáltica del Pedregal, pulida en parte y dejada en bruto en los bordes. Base de roble macizo con tornillería expuesta en bronce. No hay dos iguales.',
    measures: '240 × 95 × 76 cm',
    materials: 'Piedra volcánica · Roble macizo · Bronce',
    weight: '180 kg',
    delivery: '8 a 10 semanas',
    images: [
      'https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?w=900&q=80',
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=900&q=80',
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=900&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80'
    ]
  },
  {
    id: 'tierra',
    name: 'Mesa Tierra',
    category: 'Lateral',
    tag: 'Más vendida',
    price: 4200,
    short: 'Mesita lateral cuadrada en madera reciclada con acabado encerado.',
    description: 'Hecha con tablones rescatados de construcciones antiguas en el centro de Puebla. Cada mesa cuenta una historia: clavos viejos, marcas de uso, tonos irregulares. Acabado en cera de abeja.',
    measures: '40 × 40 × 50 cm',
    materials: 'Madera reciclada · Cera de abeja',
    weight: '9 kg',
    delivery: '1 a 2 semanas',
    images: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80',
      'https://images.unsplash.com/photo-1574691250077-03a929faece5?w=900&q=80',
      'https://images.unsplash.com/photo-1554295405-abb8fd54f153?w=900&q=80',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=900&q=80'
    ]
  }
];

const CATEGORIES = ['Todas', 'Comedor', 'Escritorio', 'Centro', 'Lateral', 'Consola'];

const SITE = {
  name: 'RAÍZ',
  tagline: 'Mesas de autor',
  whatsapp: '5215512345678',  // formato internacional sin +
  whatsappDisplay: '+52 55 1234 5678',
  email: 'hola@raiz-mesas.mx',
  address: 'Taller: Coyoacán 142, CDMX',
  instagram: 'https://instagram.com/raiz.mesas',
  facebook: 'https://facebook.com/raiz.mesas'
};

// Helpers
const fmtMXN = (n) => '$' + n.toLocaleString('es-MX') + ' MXN';
const getProduct = (id) => PRODUCTS.find(p => p.id === id);
const waLink = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
