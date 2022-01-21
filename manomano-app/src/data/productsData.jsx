const productsData = [
  // Lucas -------------------------------------
  {
    id: 17,
    name: "Draper 04380 Plumbing Tool Kit",
    link: "https://www.manomano.co.uk/catalogue/p/draper-plumbing-tool-kit---04380-42360663",
    img: "https://cdn.manomano.com/draper-04380-plumbing-tool-kit-P-4389066-21288042_1.jpg",
    brandName: "DRAPER",
    logo: "https://cdn.manomano.com/brand-draper-1413.jpg",
    rate: "",
    rateNumber: "",
    priceInt: 392,
    priceDec: 66,
    freeDelivery: false,
    keywords: ["plumbing", "tool"],
    toolsNeeded: [],
    videoAdvice: "",
  },
  {
    id: 17,
    name: "Terratek 550W Electric Hand Held Paint Sprayer, 1 x 800ml Paint Pots, Paint Fence Sprayer",
    link: "https://www.manomano.co.uk/p/terratek-paint-sprayer-550w-diy-electric-spray-gun-with-3-spray-patterns-1-x-800ml-paint-cups-hvlp-hand-held-spray-gun-system-fence-sprayer-adjustable-valve-painting-varnishing-lacquering-16744742",
    img: "https://cdn.manomano.com/terratek-550w-electric-hand-held-paint-sprayer-1-x-800ml-paint-pots-paint-fence-sprayer-P-7374536-17064218_1.jpg",
    brandName: "",
    logo: "",
    rate: 3,
    rateNumber: 2,
    priceInt: 29,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["peint"],
    toolsNeeded: [],
    videoAdvice: "",
  },
  {
    id: 15,
    name: "Single bowl kitchen sink plumbing kit with appliance connector (340710)",
    link: "https://www.manomano.co.uk/p/single-bowl-kitchen-sink-plumbing-kit-with-appliance-connector-340710-8207940",
    img: "https://cdn.manomano.com/single-bowl-kitchen-sink-plumbing-kit-with-appliance-connector-340710-P-851385-8505854_1.jpg",
    brandName: "",
    logo: "",
    rate: "",
    rateNumber: "",
    priceInt: 10,
    priceDec: 49,
    freeDelivery: false,
    keywords: ["plumbing", "material"],
    toolsNeeded: [
      {
        name: "screwdriver",
        link: "https://www.manomano.co.uk/search/screwdriver",
      },
    ],
    videoAdvice: "",
  },
  {
    id: 16,
    name: "1600x480mm Anthracite Designer Radiator Vertical Oval Column Single Panel Rad",
    link: "https://www.manomano.co.uk/p/1600x480mm-anthracite-designer-radiator-vertical-oval-column-single-panel-rad-14714289?model_id=14714263",
    img: "https://cdn.manomano.com/1600x360mm-anthracite-designer-radiator-vertical-oval-column-single-panel-rad-P-4029359-15034098_1.jpg",
    brandName: "DURATHERME",
    logo: "https://cdn.manomano.com/brand-duratherm-261159.png",
    rate: 45,
    rateNumber: 285,
    priceInt: 94,
    priceDec: 97,
    freeDelivery: true,
    keywords: ["restoration", "heat"],
    toolsNeeded: [
      {
        name: "screwdriver",
        link: "https://www.manomano.co.uk/search/screwdriver",
      },
    ],
    videoAdvice: "",
  },
  {
    id: 17,
    name: "Bluespot 42mm Ratchet PVC Pipe Cutter",
    link: "https://www.manomano.co.uk/p/bluespot-42mm-ratchet-pvc-pipe-cutter-41319107",
    img: "https://cdn.manomano.com/bluespot-42mm-ratchet-pvc-pipe-cutter-P-588118-2232007_1.jpg",
    brandName: "",
    logo: "",
    rate: "",
    rateNumber: "",
    priceInt: 7,
    priceDec: 49,
    freeDelivery: true,
    keywords: ["plumbing", "tool"],
    toolsNeeded: [],
    videoAdvice: "",
  },
  {
    id: 18,
    name: "Sealey Spray Gun Kit Oil Water or Based Paint Stains Interior Exterior HVLP3000",
    link: "https://www.manomano.co.uk/catalogue/p/sealey-spray-gun-kit-oil-water-or-based-paint-stains-interior-exterior-hvlp3000-41294601",
    img: "https://cdn.manomano.com/sealey-spray-gun-kit-oil-water-or-based-paint-stains-interior-exterior-hvlp3000-P-10264286-28374409_1.jpg",
    brandName: "SEALEY",
    logo: "https://cdn.manomano.com/brand-sealey-34886.jpg",
    rate: 5,
    rateNumber: 1,
    priceInt: 102,
    priceDec: 95,
    freeDelivery: true,
    keywords: ["peint"],
    toolsNeeded: [
      {
        name: "none",
        link: "",
      },
    ],
    videoAdvice: "",
  },
  {
    id: 24,
    name: "Plumbing Drain Snake Clogged Drains Snake Auger Hair Clog Remover Shower Toilet Sink Cleaner",
    link: "https://www.manomano.co.uk/p/plumbing-drain-snake-clogged-drains-snake-auger-hair-clog-remover-shower-toilet-sink-cleaner-39045146?model_id=39118246",
    img: "https://cdn.manomano.com/plumbing-drain-snake-clogged-drains-snake-auger-hair-clog-remover-shower-toilet-sink-cleanermodel-09m-P-8585153-37835556_1.jpg",
    brandName: "",
    logo: "",
    rate: "",
    rateNumber: "",
    priceInt: 8,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["plumbing", "tool"],
    toolsNeeded: [],
    videoAdvice: "",
  },
  {
    id: 25,
    name: "Insinkerator Universal Plumbing Kit - 71498",
    link: "https://www.manomano.co.uk/p/insinkerator-universal-plumbing-kit-71498-8455319",
    img: "https://cdn.manomano.com/insinkerator-universal-plumbing-kit-71498-P-4029359-8755728_1.jpg",
    brandName: "",
    logo: "",
    rate: "",
    rateNumber: "",
    priceInt: 20,
    priceDec: 34,
    freeDelivery: true,
    keywords: ["plumbing", "material"],
    toolsNeeded: [],
    videoAdvice: "",
  },
  {
    id: 25,
    name: "Overflow Plumbing Kit Excluding Overflow Plate",
    link: "https://www.manomano.co.uk/p/overflow-plumbing-kit-excluding-overflow-plate-13201404",
    img: "https://cdn.manomano.com/overflow-plumbing-kit-excluding-overflow-plate-P-6760912-13521465_1.jpg",
    brandName: "",
    logo: "",
    rate: "",
    rateNumber: "",
    priceInt: 11,
    priceDec: 49,
    freeDelivery: true,
    keywords: ["plumbing", "material"],
    toolsNeeded: [],
    videoAdvice: "",
  },
  {
    id: 26,
    name: "T-Mech Electric Cement Mixer, 70 Litre",
    link: "https://www.manomano.co.uk/p/t-mech-electric-cement-mixer-70-litre-8552776",
    img: "https://cdn.manomano.com/t-mech-electric-cement-mixer-70-litre-P-3984386-8854058_1.jpg",
    brandName: "T-MECH",
    logo: "https://cdn.manomano.com/brand-t-mech-258841.jpg",
    rate: 35,
    rateNumber: 32,
    priceInt: 199,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["building", "tool"],
    toolsNeeded: [],
    videoAdvice: "",
  },
  {
    id: 27,
    name: "Makita 4 Piece 18V Li-ion with 2 x 5.0Ah Batteries & Charger T4TKIT-153:18V",
    link: "https://www.manomano.co.uk/p/makita-4-piece-18v-li-ion-with-2-x-50ah-batteries-charger-t4tkit-153-18144297",
    img: "https://cdn.manomano.com/makita-4-piece-18v-li-ion-with-2-x-50ah-batteries-charger-t4tkit-15318v-P-9243482-18461371_1.jpg",
    brandName: "MAKITA",
    logo: "https://cdn.manomano.com/brand-makita-16.jpg",
    rate: "",
    rateNumber: "",
    priceInt: 575,
    priceDec: "",
    freeDelivery: true,
    keywords: ["building", "tool"],
    toolsNeeded: [],
    videoAdvice: "",
  },
  {
    id: 28,
    name: "DeWalt DCS391N 18V XR 165mm Circular Saw (Body Only)",
    link: "https://www.manomano.co.uk/p/dewalt-dcs391n-18v-xr-circular-saw-bare-unit-413261",
    img: "https://cdn.manomano.com/dewalt-dcs391n-18v-xr-165mm-circular-saw-body-only-P-5948112-11175934_1.jpg",
    brandName: "DEWALT",
    logo: "https://cdn.manomano.com/brand-dewalt-3.png",
    rate: 5,
    rateNumber: 49,
    priceInt: 116,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["building", "tool"],
    toolsNeeded: [],
    videoAdvice: "",
  },
  {
    id: 29,
    name: "Overlap Double Door W Garden Shed - Dip Treated Approx 12 x 6 Feet",
    link: "https://www.manomano.co.uk/p/12-x-6-overlap-shed-with-double-doors-8529258",
    img: "https://cdn.manomano.com/images/images_products/8657184/L/15759231_1.jpg",
    brandName: "",
    logo: "",
    rate: 2,
    rateNumber: 7,
    priceInt: 672,
    priceDec: 36,
    freeDelivery: false,
    keywords: ["building", "furniture"],
    toolsNeeded: [
      {
        name: "Cement mixer",
        link: "https://www.manomano.co.uk/search/cement+mixer",
      },
      { name: "Shovel", link: "https://www.manomano.co.uk/shovels-1746" },
      {
        name: "Wheelbarrow",
        link: "https://www.manomano.co.uk/wheelbarrows-and-trolleys-893",
      },
      {
        name: "Hammer",
        link: "https://www.manomano.co.uk/hammers-and-mallets-492",
      },
      { name: "Wood glue", link: "https://www.manomano.co.uk/wood-glue-1126" },
      { name: "Drill", link: "https://www.manomano.co.uk/drills-465" },
      {
        name: "Square",
        link: "https://www.manomano.co.uk/measuring-squares-1236",
      },
      { name: "Work clothes", link: "https://www.manomano.co.uk/workwear-557" },
      {
        name: "Gardening gloves",
        link: "https://www.manomano.co.uk/gardening-gloves-3839",
      },
      {
        name: "Security shoes",
        link: "https://www.manomano.co.uk/footwear-and-accessories-3869",
      },
      {
        name: "Safety goggles",
        link: "https://www.manomano.co.uk/head-face-and-ear-protection-3889",
      },
      {
        name: "Ear defenders",
        link: "https://www.manomano.co.uk/head-face-and-ear-protection-3889",
      },
    ],
    videoAdvice: "",
  },
  // Fin Lucas ----------------------------------

  // Vianney ------------------------------------
  // vasque
  {
    id: 2,
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
    keywords: ["plumbing", "furniture"],
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
  // douche
  {
    id: 3,
    name: "Bathroom Thermostatic Mixer Shower Set Square Chrome Twin Head Exposed Valve",
    link: "https://www.manomano.co.uk/p/thermostatic-mixer-shower-set-square-chrome-twin-head-exposed-8455999",
    img: "https://cdn.manomano.com/images/images_products/4029359/L/8756408_1.jpg",
    brandName: "ARCHITEKT",
    logo: "https://cdn.manomano.com/brand-architeckt-261164.png",
    rate: 45,
    rateNumber: 204,
    priceInt: 69,
    priceDec: 97,
    freeDelivery: true,
    keywords: ["plumbing", "furniture"],
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
  // faïence
  {
    id: 4,
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
    keywords: ["floor", "wall", "decoration"],
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
  // mirroir
  {
    id: 5,
    name: "ELEGANT 800 x 500mm Backlit LED Illuminated Bathroom Mirror with Light Sensor + Demister",
    link: "https://www.manomano.co.uk/p/elegant-800-x-500mm-backlit-led-illuminated-bathroom-mirror-with-light-sensor-demister-12003754",
    img: "https://cdn.manomano.com/elegant-800-x-500mm-backlit-led-illuminated-bathroom-mirror-with-light-sensor-demister-P-6078297-12324289_1.jpg",
    brandName: "ELEGANT",
    logo: "https://cdn.manomano.com/brand-elegant-116460.jpg",
    rate: 45,
    rateNumber: 71,
    priceInt: 91,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["bedroom", "decoration", "wall"],
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
  // carrelage
  {
    id: 6,
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
    keywords: ["floor"],
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
  // meuble pharmacie
  {
    id: 7,
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
    keywords: ["security", "ordering"],
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
  // outside
  // pruning
  {
    id: 8,
    name: "Tree Pruning",
    link: "https://www.manomano.co.uk/advice/how-to-prune-a-tree-8105",
    img: "https://media.prod.bunnings.com.au/api/public/content/313f20992a4f467e88a3573ff1e6e854?v=9f00b688&t=w1100dpr1",
    brandName: "",
    logo: "",
    rate: null,
    priceInt: null,
    priceDec: null,
    freeDelivery: false,
    keywords: ["pruning", "trees"],
    toolsNeeded: [
      {
        name: "Tree loppers",
        link: "https://www.manomano.co.uk/tree-loppers-1732",
      },
      {
        name: "Electric pole pruners",
        link: "https://www.manomano.co.uk/electric-pole-pruners-4199",
      },
      {
        name: "Petrol pole pruners",
        link: "https://www.manomano.co.uk/petrol-pole-pruners-4029",
      },
      { name: "Ladders", link: "https://www.manomano.co.uk/ladders-1070" },
      {
        name: "Wheelbarrows",
        link: "https://www.manomano.co.uk/wheelbarrows-and-trolleys-893",
      },
      {
        name: "Gardening trousers",
        link: "https://www.manomano.co.uk/gardening-trousers-1868",
      },
      {
        name: "Gardening gloves",
        link: "https://www.manomano.co.uk/gardening-gloves-3839",
      },
      {
        name: "Security shoes",
        link: "https://www.manomano.co.uk/footwear-and-accessories-3869",
      },
      {
        name: "Safety goggles",
        link: "https://www.manomano.co.uk/head-face-and-ear-protection-3889",
      },
      {
        name: "Ear defenders",
        link: "https://www.manomano.co.uk/head-face-and-ear-protection-3889",
      },
      {
        name: "Forest helmet",
        link: "https://www.manomano.co.uk/head-face-and-ear-protection-3889",
      },
    ],
    videoAdvice:
      "https://www.youtube.com/watch?v=q1IHqAZxLrc&ab_channel=Lowe%27sHomeImprovement",
  },

  // garden sheds
  {
    id: 9,
    name: "Shed with slanted roof - garden shed, metal shed, tool shed - grey",
    link: "https://www.manomano.co.uk/p/garden-shed-with-slanted-roof-green-7245171?model_id=7232170",
    img: "https://cdn.manomano.com/images/images_products/6399669/L/12200872_1.jpg",
    brandName: "tectake",
    logo: "https://cdn.manomano.com/brand-tectake-84153.png",
    rate: 3.5,
    priceInt: 209,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["building", "furniture"],
    toolsNeeded: [
      {
        name: "Cement mixer",
        link: "https://www.manomano.co.uk/search/cement+mixer",
      },
      { name: "Shovel", link: "https://www.manomano.co.uk/shovels-1746" },
      {
        name: "Wheelbarrow",
        link: "https://www.manomano.co.uk/wheelbarrows-and-trolleys-893",
      },
      {
        name: "Hammer",
        link: "https://www.manomano.co.uk/hammers-and-mallets-492",
      },
      { name: "Wood glue", link: "https://www.manomano.co.uk/wood-glue-1126" },
      { name: "Drill", link: "https://www.manomano.co.uk/drills-465" },
      {
        name: "Square",
        link: "https://www.manomano.co.uk/measuring-squares-1236",
      },
      { name: "Work clothes", link: "https://www.manomano.co.uk/workwear-557" },
      {
        name: "Gardening gloves",
        link: "https://www.manomano.co.uk/gardening-gloves-3839",
      },
      {
        name: "Security shoes",
        link: "https://www.manomano.co.uk/footwear-and-accessories-3869",
      },
      {
        name: "Safety goggles",
        link: "https://www.manomano.co.uk/head-face-and-ear-protection-3889",
      },
      {
        name: "Ear defenders",
        link: "https://www.manomano.co.uk/head-face-and-ear-protection-3889",
      },
    ],
    videoAdvice:
      "https://www.youtube.com/watch?v=yFGR-Eg5lag&ab_channel=iLikeSheds",
  },
  {
    id: 10,
    name: "6' x 4' Forest Overlap Dip Treated Pent Wooden Shed",
    link: "https://www.manomano.co.uk/catalogue/p/6-x-4-forest-overlap-dip-treated-pent-wooden-shed-23726335",
    img: "https://cdn.manomano.com/images/images_products/2472202/L/24023207_1.jpg",
    brandName: "",
    logo: "",
    rate: null,
    priceInt: 379,
    priceDec: 99,
    freeDelivery: true,
    keywords: ["building", "furniture", "wood"],
    toolsNeeded: [
      {
        name: "Hammer",
        link: "https://www.manomano.co.uk/hammers-and-mallets-492",
      },
      { name: "Wood glue", link: "https://www.manomano.co.uk/wood-glue-1126" },
      { name: "Drill", link: "https://www.manomano.co.uk/drills-465" },
      {
        name: "Square",
        link: "https://www.manomano.co.uk/measuring-squares-1236",
      },
      { name: "Work clothes", link: "https://www.manomano.co.uk/workwear-557" },
      {
        name: "Gardening gloves",
        link: "https://www.manomano.co.uk/gardening-gloves-3839",
      },
      {
        name: "Security shoes",
        link: "https://www.manomano.co.uk/footwear-and-accessories-3869",
      },
      {
        name: "Safety goggles",
        link: "https://www.manomano.co.uk/head-face-and-ear-protection-3889",
      },
      {
        name: "Ear defenders",
        link: "https://www.manomano.co.uk/head-face-and-ear-protection-3889",
      },
    ],
    videoAdvice:
      "https://www.youtube.com/watch?v=NQ-3Qt6lbkU&t=55s&ab_channel=B%26Q",
  },

  // Fin Camille --------------------------------

  // Maxime -------------------------------------
  // Chambre
  // penderie
  {
    id: 11,
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
    keywords: ["bedroom", "wardrobe"],
    toolsNeeded: [
      {
        name: "screwdriver",
        link: "https://www.manomano.co.uk/search/screwdriver",
      },
    ],
  },
  // cadre de lit
  {
    id: 12,
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
    keywords: ["bedroom", "bed"],
    toolsNeeded: [
      {
        name: "Already provided",
        link: "",
      },
    ],
    VideoAdvice: "https://www.youtube.com/watch?v=f4yLBTJxJ_4",
  },
  // tapisserie, vinyl
  {
    id: 13,
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
    keywords: [],
    toolsNeeded: [
      {
        name: "Tool with Felt Squeegee",
        link: "https://www.manomano.co.uk/catalogue/p/8pcs-vinyl-wrap-tool-window-film-tool-window-tint-tool-wallpaper-tool-with-felt-squeegee-hobby-knife-42524833",
      },
    ],
    VideoAdvice: "https://www.youtube.com/watch?v=cV73f4Ywa04",
  },
  // étagère
  {
    id: 14,
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
    keywords: [],
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
    keywords: ["plumbing", "furniture"],
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
    keywords: ["kitchen", "furniture"],
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
    keywords: ["renovation", "material"],
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
