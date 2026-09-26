import heroDrilling from "@/assets/hero-drilling.jpg";
import waterSurvey from "@/assets/water-survey.jpg";
import pumpInstallation from "@/assets/pump-installation.jpg";
import crewFieldwork from "@/assets/crew-fieldwork.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cost-of-drilling-borehole-nigeria",
    title: "The Cost of Drilling a Borehole in Abeokuta and Selected Cities in Nigeria",
    category: "Cost & Planning",
    date: "September 24, 2026",
    readTime: "4 min read",
    image: heroDrilling,
    excerpt: "Understanding the true cost of borehole drilling in Nigeria. Why prices vary between Abeokuta, Lagos, and Ibadan, and what factors influence your final quote.",
    sections: [
      {
        paragraphs: [
          "One of the most common questions we get at Achievers Geotechnical Services is: 'How much does it cost to drill a borehole?' The truth is, there is no single flat rate. The cost of drilling a borehole in Abeokuta, Lagos, or Ibadan varies based on geology, depth, and the materials used.",
        ],
      },
      {
        heading: "1. The Geology of the Area",
        paragraphs: [
          "The type of soil or rock beneath your property is the biggest factor. Abeokuta, for example, is famous for its hard rock formations (the name literally means 'Under the rock'). Drilling through solid granite requires specialized Odex or heavy rotary rigs, which takes more time, fuel, and specialized drill bits than drilling through the soft, sandy formations found in parts of Lagos or coastal Ogun State.",
        ],
      },
      {
        heading: "2. The Required Depth",
        paragraphs: [
          "Water sits at different depths depending on your location. In some areas, clean aquifers can be reached at 40 meters. In other locations, you might need to drill past 120 or 150 meters to get a reliable, high-yield supply. Naturally, a deeper borehole requires more drilling time, more casing pipes, and a more powerful submersible pump, increasing the cost.",
        ],
      },
      {
        heading: "3. Quality of Materials (The Hidden Cost)",
        paragraphs: [
          "Some drillers offer exceptionally low quotes, but they achieve this by using thin, low-grade PVC casings and inferior pumps. While it saves money today, the casing can collapse under ground pressure within a year, destroying the borehole entirely. At Achievers, we strictly use thick-walled, high-pressure PVC or steel casings that are guaranteed to last for decades."
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "When comparing quotes, ensure you are comparing apples to apples. Ask about the casing thickness, the pump brand, and if a geophysical survey is included. A properly constructed borehole is a lifetime investment for your home or business."
        ]
      }
    ],
  },
  {
    slug: "why-boreholes-fail",
    title: "Why Boreholes Fail and the Remedy",
    category: "Maintenance",
    date: "September 18, 2026",
    readTime: "5 min read",
    image: crewFieldwork,
    excerpt: "Is your borehole pumping sand, yielding less water, or completely dry? Learn the top reasons why boreholes fail and how Achievers can fix them.",
    sections: [
      {
        paragraphs: [
          "A properly constructed borehole should provide clean, uninterrupted water for decades. However, we are frequently called to rescue boreholes drilled by other contractors that have failed after only a few years. Understanding why boreholes fail is the first step to preventing it."
        ]
      },
      {
        heading: "1. Skipping the Geological Survey",
        paragraphs: [
          "Many failures happen before the drill even touches the ground. Guessing where the water is, rather than conducting a scientific geophysical survey, often results in drilling a 'dry hole' or tapping into a weak, seasonal aquifer that runs dry during the harmattan season.",
          "Remedy: Always insist on a professional water survey to pinpoint the exact depth and location of the best aquifer."
        ]
      },
      {
        heading: "2. Poor Casing and Screening",
        paragraphs: [
          "If your borehole is suddenly pumping sand or muddy water, the casing has likely failed. If a driller uses cheap, thin pipes, the pressure of the earth will eventually crush them. Furthermore, if they do not install proper 'screens' (slotted pipes wrapped in filter mesh) and gravel packs, sand will constantly enter the water supply.",
          "Remedy: We can sometimes install a smaller, high-quality casing inside the damaged one to save the well, though severe collapses may require a fresh drill."
        ]
      },
      {
        heading: "3. Incorrect Pump Sizing",
        paragraphs: [
          "Installing a massive pump in a low-yield borehole will rapidly pump the well dry, causing the pump to run without water (dry-running), which burns out the motor.",
          "Remedy: We perform yield testing on every well we drill to match the exact horsepower of the pump to the natural refill rate of your aquifer."
        ]
      }
    ],
  },
  {
    slug: "myths-and-realities-borehole-drilling",
    title: "Myths and Realities About Borehole Drilling",
    category: "Education",
    date: "September 10, 2026",
    readTime: "3 min read",
    image: waterSurvey,
    excerpt: "We debunk the most common myths about groundwater, drilling during the rainy season, and how to find the best water on your property.",
    sections: [
      {
        paragraphs: [
          "Water drilling is an ancient practice, and because of that, there are many myths and misconceptions that still confuse property owners today. Let’s separate fact from fiction."
        ]
      },
      {
        heading: "Myth 1: Water divining (using a stick) is the best way to find water.",
        paragraphs: [
          "Reality: While water divining is a famous tradition, it is not scientifically reliable. Modern borehole drilling relies on Geophysical and Hydrogeological surveys. Using resistivity meters, we can 'see' beneath the earth, identifying exactly how deep the water-bearing fractures are and mapping the rock formations before we bring in the heavy machinery."
        ]
      },
      {
        heading: "Myth 2: You shouldn't drill during the rainy season.",
        paragraphs: [
          "Reality: You can drill a borehole at any time of the year! Some people believe that drilling in the rainy season will give a false reading of water levels. However, a professional driller targets deep, confined aquifers, not the shallow surface water that fluctuates with the rain. A deep aquifer provides consistent water year-round."
        ]
      },
      {
        heading: "Myth 3: All boreholes eventually dry up.",
        paragraphs: [
          "Reality: A properly sited and constructed borehole tapping into a primary aquifer can last for generations. 'Dry' boreholes are usually the result of a contractor stopping the drill too early to save money, rather than the actual underground water source disappearing."
        ]
      }
    ]
  },
  {
    slug: "importance-of-geological-survey",
    title: "Why You Must Never Skip a Water Survey",
    category: "Cost & Planning",
    date: "August 28, 2026",
    readTime: "4 min read",
    image: waterSurvey,
    excerpt: "Skipping a geophysical survey might save you a little money today, but it is the biggest cause of dry wells and wasted investments.",
    sections: [
      {
        paragraphs: [
          "Imagine building a house without a blueprint. That is exactly what happens when you hire a driller who skips the geological survey. A survey is the diagnostic scan of your land, and it is the most crucial step in the entire drilling process."
        ]
      },
      {
        heading: "What does the survey do?",
        paragraphs: [
          "Using specialized electrical resistivity equipment, our geologists send signals into the ground. Different materials (like solid rock, clay, or water-bearing sand) resist electricity differently. By reading these signals, we can map out the underground layers.",
          "This tells us three vital things:",
          "1. Exactly where on your property we should drill.",
          "2. How deep we need to go to hit the best water.",
          "3. What kind of rock we will encounter, which dictates what kind of drilling rig we must use."
        ]
      },
      {
        heading: "Saving you money in the long run",
        paragraphs: [
          "Without a survey, drilling is just a blind gamble. If a driller hits a dry spot, you still have to pay for the mobilization and the drilling time. By investing a small amount in a proper survey upfront, you virtually eliminate the risk of a dry well and secure your investment."
        ]
      }
    ]
  },
  {
    slug: "borehole-maintenance-guide",
    title: "How to Maintain Your Borehole and Submersible Pump",
    category: "Maintenance",
    date: "August 15, 2026",
    readTime: "3 min read",
    image: pumpInstallation,
    excerpt: "Simple tips for homeowners and facility managers to extend the lifespan of their borehole pump and keep their water crystal clear.",
    sections: [
      {
        paragraphs: [
          "Like a car, your borehole system has moving mechanical parts that require occasional attention to run smoothly. Here are the best practices to keep your water flowing."
        ]
      },
      {
        heading: "1. Protect your electrical supply",
        paragraphs: [
          "Power fluctuations are the number one killer of submersible pumps in Nigeria. Always ensure your pump is connected to a dedicated control box with built-in voltage protection. If you are running the pump on a generator, ensure the generator has the correct KVA rating to handle the pump's startup surge without straining the motor."
        ]
      },
      {
        heading: "2. Don't ignore changes in water quality",
        paragraphs: [
          "If your water suddenly becomes cloudy, sandy, or smells unusual, stop pumping and call a professional. This could indicate a breach in the casing or surface water leaking into the well. Continuing to pump sand will quickly destroy the internal impellers of your submersible pump."
        ]
      },
      {
        heading: "3. Schedule preventative flushing",
        paragraphs: [
          "Over the years, natural minerals and fine silt can build up inside the borehole screens. Having your well professionally air-lifted and flushed every few years clears out this buildup, restoring maximum water flow and reducing strain on your pump."
        ]
      }
    ]
  },
  {
    slug: "choosing-right-driller-ogun-state",
    title: "How to Choose the Right Borehole Driller in Ogun State",
    category: "Education",
    date: "August 02, 2026",
    readTime: "4 min read",
    image: heroDrilling,
    excerpt: "Not all drillers are created equal. Discover the 5 questions you must ask a drilling contractor before you hand over a deposit.",
    sections: [
      {
        paragraphs: [
          "With so many 'drillers' putting up signboards, it can be difficult to separate the professionals from the amateurs. Hiring the wrong person can leave you with a collapsed hole and a lot of wasted money. Here is what to look for."
        ]
      },
      {
        heading: "1. Do they conduct a survey?",
        paragraphs: [
          "A professional will always insist on a geophysical survey before providing a final, binding quote. If a driller promises you water by just looking at the ground, walk away."
        ]
      },
      {
        heading: "2. Are they a registered AWDROP member?",
        paragraphs: [
          "The Association of Water Well Drilling Practitioners of Nigeria (AWDROP) sets the standard for safe, ethical drilling. Using a registered member like Achievers Geotechnical Services ensures accountability and adherence to engineering standards."
        ]
      },
      {
        heading: "3. Ask about their casing materials",
        paragraphs: [
          "Always ask what class (thickness) of PVC they intend to use. Cheap contractors use lightweight drainage pipes instead of high-pressure borehole casings, which inevitably collapse. A professional will proudly explain the materials they are using."
        ]
      }
    ]
  }
];