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
  {
    // Chambre
    // pendrie
    name: "ELEGANT Black Modern High Gloss Soft Close 2 Doors Wardrobe with Metal Handles Includes a removable hanging rod and storage shelves",
    link: "https://www.manomano.co.uk/p/elegant-black-modern-high-gloss-soft-close-2-doors-wardrobe-with-metal-handles-includes-a-removable-hanging-rod-and-storage-shelves-23166444",
    img: "https://cdn.manomano.com/images/images_products/8704378/L/23463389_1.jpg",
    brandName: "ELEGANT",
    logo: "https://cdn.manomano.com/brand-elegant-116460.jpg",
    rate: 4,
    rateNumber: 10,
    priceInt: 128,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      {
        name: "screwdriver",
        link: "https://www.manomano.co.uk/search/screwdriver",
      },
    ],
  },
  {
    // cadre de lit
    name: "Corona 5ft King Size Solid Pine Wood Bed Frame, Low Foot End, 200 x 150 cm",
    link: "https://www.manomano.co.uk/p/corona-king-size-bed-low-foot-end-17449411",
    img: "https://cdn.manomano.com/images/images_products/9885246/L/17767011_1.jpg",
    brandName: "corona",
    logo: "",
    rate: 4,
    rateNumber: 15,
    priceInt: 169,
    priceDec: 95,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      {
        name: "already provided",
        VideoAdvice: "https://www.youtube.com/watch?v=f4yLBTJxJ_4",
      },
    ],
  },
  {
    // tapisserie, vinyl
    name: "3D Effect House Brick Wallpaper Slate Stone Textured Vinyl Paste Wall Red Grey",
    link: "https://www.manomano.co.uk/p/3d-effect-house-brick-wallpaper-slate-stone-textured-vinyl-paste-wall-red-grey-34964108",
    img: "https://cdn.manomano.com/images/images_products/1504056/L/4743124_1.jpg",
    brandName: "grandeco",
    logo: "https://cdn.manomano.com/brand-grandeco-42288.png",
    rate: 4,
    rateNumber: 11,
    priceInt: 128,
    priceDec: 49,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      {
        name: "Tool with Felt Squeegee",
        link: "https://www.manomano.co.uk/catalogue/p/8pcs-vinyl-wrap-tool-window-film-tool-window-tint-tool-wallpaper-tool-with-felt-squeegee-hobby-knife-42524833",
      },
    ],
    VideoAdvice: "https://www.youtube.com/watch?v=cV73f4Ywa04",
  },
  {
    // étagère
    name: "vidaXL Wall Shelf 90x16x78 cm Chipboard Grey - Grey",
    link: "https://www.manomano.co.uk/p/wall-shelf-white-90x16x78-cm-chipboard-23335689?model_id=23316584",
    img: "https://cdn.manomano.com/images/images_products/356281/L/23632609_1.jpg",
    brandName: "grandeco",
    logo: "https://cdn.manomano.com/brand-vidaxl-261113.jpg",
    rate: 3,
    rateNumber: 14,
    priceInt: 27,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      {
        // perceuse
        name: "drill",
        link: "https://www.manomano.co.uk/search/drill",
      },
      {
        name: "level",
        link: "https://www.manomano.co.uk/search/level",
      },
    ],
    VideoAdvice: "https://www.youtube.com/watch?v=wki3wMAbtLg",
  },
  {
    // commode
    name: "Riano 5 Drawer Chest of Drawers Bedroom Storage Furniture, White",
    link: "https://www.manomano.co.uk/p/riano-5-drawer-chest-white-17449627",
    img: "https://cdn.manomano.com/images/images_products/9885246/L/17767227_1.jpg",
    brandName: "Riano",
    logo: "",
    rate: 4,
    rateNumber: 51,
    priceInt: 64,
    priceDec: 95,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      {
        name: "screwdriver",
        link: "https://www.manomano.co.uk/search/screwdriver",
      },
    ],
  },
  {
    // bathroom sink (lavabo)
    name: "vidaXL Luxury Ceramic Basin Oval-shaped Sink 40 x 33 cm White - White",
    link: "https://www.manomano.co.uk/p/luxury-ceramic-basin-oval-shaped-sink-white-40-x-33-cm-869815?model_id=869815",
    img: "https://cdn.manomano.com/images/images_products/356281/L/1069022_1.jpg",
    brandName: "vidalxl",
    logo: "https://cdn.manomano.com/brand-vidaxl-261113.jpg",
    rate: 45,
    rateNumber: 737,
    priceInt: 40,
    priceDec: 49,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      {
        // scilicone
        name: "scilicone",
        link: "https://www.manomano.co.uk/search/silicone",
      },
    ],
    VideoAdvice: "https://www.youtube.com/watch?v=IrJcD7M40UQ",
  },
  {
    // robinet
    name: "Sauber Kitchen Mixer Tap with Pull Out Spray",
    link: "https://www.manomano.co.uk/p/sauber-kitchen-mixer-tap-with-pull-out-spray-8455099",
    img: "https://cdn.manomano.com/images/images_products/4029359/L/8755481_1.jpg",
    brandName: "sauber",
    logo: "https://cdn.manomano.com/brand-sauber-255435.png",
    rate: 45,
    rateNumber: 85,
    priceInt: 69,
    priceDec: 97,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      {
        // scilicone
        name: "scilicone",
        link: "https://www.manomano.co.uk/search/silicone",
      },
      {
        // clef multifonction
        name: "Fontainebleau Sink Installation Tool, Multi-Purpose Faucet Clamp Wrench, Faucet Repair Toolfunction key",
        link: "https://www.manomano.co.uk/p/faucet--sink-installer-wrench-for-kitchen-plumbing-repair-faucet-wrench-sink-installer-tool-multifunctional-basin-wrench-plumbing-tools-45447389",
      },
    ],
    VideoAdvice: "https://www.youtube.com/watch?v=vpq_jFyf8Yo",
  },
  {
    // pommeau de douche
    name: "Bathroom Thermostatic Mixer Shower Set Square Chrome Twin Head Exposed Valve",
    link: "https://www.manomano.co.uk/p/thermostatic-mixer-shower-set-square-chrome-twin-head-exposed-8455999",
    img: "https://cdn.manomano.com/images/images_products/4029359/L/8756408_1.jpg",
    brandName: "architeckt",
    logo: "https://cdn.manomano.com/brand-architeckt-261164.png",
    rate: 45,
    rateNumber: 204,
    priceInt: 44,
    priceDec: 47,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      {
        // perceuse
        name: "drill",
        link: "https://www.manomano.co.uk/search/drill",
      },
    ],
    VideoAdvice: "https://www.youtube.com/watch?v=rzcAIb5JcXo",
  },
  {
    // vitre de douche
    name: "ELEGANT Walk In Shower Enclosure Screen Easy Clean 800mm",
    link: "https://www.manomano.co.uk/p/elegant-frameless-wet-room-shower-screen-panel-8mm-easy-clean-glass-walk-in-shower-enclosure-15176157?model_id=15409622",
    img: "https://cdn.manomano.com/images/images_products/8704378/L/15729447_1.jpg",
    brandName: "ELEGANT",
    logo: "https://cdn.manomano.com/brand-elegant-116460.jpg",
    rate: 5,
    rateNumber: 26,
    priceInt: 109,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["interior"],
    toolsNeeded: [
      {
        // perceuse
        name: "drill",
        link: "https://www.manomano.co.uk/search/drill",
      },
      {
        // perceuse
        name: "drill",
        link: "https://www.manomano.co.uk/search/drill",
      },
      {
        // scilicone
        name: "scilicone",
        link: "https://www.manomano.co.uk/search/silicone",
      },
    ],
    VideoAdvice: "https://www.youtube.com/watch?v=QDyeS1_28yg",
  },
  // Fin Maxime ---------------------------------
];
export default productsData;
