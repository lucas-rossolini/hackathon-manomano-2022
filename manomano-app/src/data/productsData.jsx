const productsData = [
  // Lucas -------------------------------------
  {
    name: "Élagueuse thermique sur perche, 52 cm3, 3 CV, longueur 4.15 mètres",
    link: "https://www.manomano.fr/p/elagueuse-thermique-sur-perche-52-cm3-3-cv-longueur-415-metres-41203647",
    img: "https://cdn.manomano.com/elagueuse-thermique-sur-perche-52-cm3-3-cv-longueur-415-metres-P-4935052-40633584_1.jpg",
    brandName: "GT Garden",
    logo: "https://cdn.manomano.com/marque-gt-garden-3921.png",
    rate: 4,
    rateNumber: 546,
    priceInt: 164,
    priceDec: 80,
    freeDelivery: true,
    keywords: ["exterior"],
  },
  // Fin Lucas ----------------------------------

  // Vianney ------------------------------------
  {
    // vasque
    name: "Bathroom Vanity Wash Basin Sink Countertop Oval Curved White Modern 410 x 330mm",
    link: "",
    img: "https://cdn.manomano.com/bathroom-vanity-wash-basin-sink-countertop-oval-curved-white-modern-410-x-330mm-P-4029359-12024024_1.jpg",
    brandName: "AFFINE",
    logo: "https://cdn.manomano.com/brand-affine-261158.png",
    rate: 5,
    rateNumber: 21,
    priceInt: 39,
    priceDec: 57,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      {
        name: "pressure reducer",
        link: "https://www.manomano.co.uk/search/pressure+reducer",
      },
      {
        name: "metal saw",
        link: "https://www.manomano.co.uk/search/metal+saw",
      },
      {
        name: "glue pvc",
        link: "https://www.manomano.fr/recherche/colle+pvc",
      },
      {
        name: "hole saw",
        link: "https://www.manomano.co.uk/search/hole+saw",
      },
    ],
    videoAdvice:
      "https://www.manomano.fr/conseil/comment-installer-une-vasque-5979",
  },
  {
    // douche
    name: "Bathroom Thermostatic Mixer Shower Set Square Chrome Twin Head Exposed Valve",
    link: "https://www.manomano.co.uk/p/thermostatic-mixer-shower-set-square-chrome-twin-head-exposed-8455999",
    img: "https://cdn.manomano.com/images/images_products/4029359/L/8756408_1.jpg",
    brandName: "ARCHITEKT",
    logo: "https://cdn.manomano.com/brand-architeckt-261164.png",
    rate: 4.5,
    rateNumber: 204,
    priceInt: 69,
    priceDec: 97,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      { name: "drill", link: "https://www.manomano.co.uk/search/drill" },
      {
        name: "screwdriver",
        link: "https://www.manomano.co.uk/search/screwdriver",
      },
      { name: "level", link: "https://www.manomano.co.uk/search/level" },
      { name: "hammer", link: "https://www.manomano.co.uk/search/hammer" },
      { name: "screw", link: "https://www.manomano.co.uk/search/screw" },
    ],
    videoAdvice:
      "https://www.youtube.com/watch?v=iS2osn9tdnQ&ab_channel=BRICOFAMILIE",
  },
  {
    // faillence
    name: "Mosaic tile mirror kitchen backsplash and bathroom Brillo Gris",
    link: "https://www.manomano.co.uk/p/mosaic-tile-mirror-kitchen-backsplash-and-bathroom-brillo-gris-34753785",
    img: "https://cdn.manomano.com/mosaic-tile-mirror-kitchen-backsplash-and-bathroom-brillo-gris-P-833994-33300596_1.jpg",
    brandName: "ARCHITEKT",
    logo: "https://cdn.manomano.com/brand-architeckt-261164.png",
    rate: "",
    rateNumber: "",
    priceInt: 14,
    priceDec: 88,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      { name: "sander", link: "https://www.manomano.co.uk/search/sander" },
      { name: "level", link: "https://www.manomano.co.uk/search/level" },
      { name: "grinder", link: "https://www.manomano.co.uk/search/grinder" },
      {
        name: "sponge",
        link: "https://www.manomano.co.uk/p/sponge-float-11in-x-41-2in-28657186",
      },
      {
        name: "tile adhesive",
        link: "https://www.manomano.co.uk/tile-adhesive-103",
      },
      {
        name: "tile cut",
        link: "https://www.manomano.co.uk/p/excel-180mm-electrical-wet-tile-cutter-600w-heavy-duty-23531413",
      },
    ],
    videoAdvice:
      "https://www.youtube.com/watch?v=ACIAdyJHxrA&ab_channel=EricLeCarreleur",
  },
  {
    // mirroir
    name: "ELEGANT 800 x 500mm Backlit LED Illuminated Bathroom Mirror with Light Sensor + Demister",
    link: "https://www.manomano.co.uk/p/elegant-800-x-500mm-backlit-led-illuminated-bathroom-mirror-with-light-sensor-demister-12003754",
    img: "https://cdn.manomano.com/elegant-800-x-500mm-backlit-led-illuminated-bathroom-mirror-with-light-sensor-demister-P-6078297-12324289_1.jpg",
    brandName: "ELEGANT",
    logo: "https://cdn.manomano.com/brand-elegant-116460.jpg",
    rate: 4.5,
    rateNumber: 71,
    priceInt: 91,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      { name: "drill", link: "https://www.manomano.co.uk/search/drill" },
      {
        name: "screwdriver",
        link: "https://www.manomano.co.uk/search/screwdriver",
      },
      { name: "level", link: "https://www.manomano.co.uk/search/level" },
      { name: "hammer", link: "https://www.manomano.co.uk/search/hammer" },
    ],
    videoAdvice:
      "https://www.youtube.com/watch?v=_G2gCBXy8ZA&ab_channel=BroadcastSunny",
  },
  {
    // carrelage
    name: "Floor Tiles Self Adhesive Grey White Geo Vinyl Flooring Kitchen Bathroom 1m",
    link: "https://www.manomano.co.uk/catalogue/p/floor-tiles-self-adhesive-grey-white-geo-vinyl-flooring-kitchen-bathroom-1m-36157197",
    img: "https://cdn.manomano.com/floor-tiles-self-adhesive-grey-white-geo-vinyl-flooring-kitchen-bathroom-1m-P-1504056-34741270_1.jpg",
    brandName: "",
    logo: "https://cdn.manomano.com/brand-elegant-116460.jpg",
    rate: "",
    rateNumber: "",
    priceInt: 15,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      { name: "trowel", link: "https://www.manomano.co.uk/search/trowel" },
      {
        name: "mixer",
        link: "https://www.manomano.co.uk/catalogue/p/power-mixer-1400w-110v-vitmix1400l-41309423",
      },
      {
        name: "tile cut",
        link: "https://www.manomano.co.uk/p/excel-180mm-electrical-wet-tile-cutter-600w-heavy-duty-23531413",
      },
      {
        name: "sponge",
        link: "https://www.manomano.co.uk/p/sponge-float-11in-x-41-2in-28657186",
      },
      {
        name: "tile adhesive",
        link: "https://www.manomano.co.uk/tile-adhesive-103",
      },
    ],
    videoAdvice: "https://www.youtube.com/watch?v=VAxzOmEzqpM",
  },

  {
    // meuble pharmacie
    name: "SoBuy White Kitchen Bathroom Wall Unit with Double Doors FRG231-W",
    link: "https://www.manomano.co.uk/p/sobuy-white-kitchen-bathroom-wall-unit-with-double-doors-frg231-w-5328558",
    img: "https://cdn.manomano.com/sobuy-white-kitchen-bathroom-wall-unit-with-double-doors-frg231-w-P-2640618-8384476_1.jpg",
    brandName: "SoBuy",
    logo: "https://cdn.manomano.com/brand-sobuy-237971.jpg",
    rate: 4,
    rateNumber: 45,
    priceInt: 49,
    priceDec: 95,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      { name: "drill", link: "https://www.manomano.co.uk/search/drill" },
      {
        name: "screwdriver",
        link: "https://www.manomano.co.uk/search/screwdriver",
      },
      { name: "level", link: "https://www.manomano.co.uk/search/level" },
      { name: "hammer", link: "https://www.manomano.co.uk/search/hammer" },
    ],
    videoAdvice:
      "https://www.youtube.com/watch?v=_G2gCBXy8ZA&ab_channel=BroadcastSunny",
  },

  // Fin Vianney --------------------------------

  // Camille ------------------------------------

  // Fin Camille --------------------------------

  // Maxime -------------------------------------

  // Fin Maxime ---------------------------------
];
export default productsData;
