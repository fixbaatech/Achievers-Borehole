import heroDrilling from "@/assets/hero-drilling.jpg";
import crewFieldwork from "@/assets/crew-fieldwork.jpg";
import casingInstallation from "@/assets/casing-installation.jpg";
import pumpInstallation from "@/assets/pump-installation.jpg";
import irrigationFarm from "@/assets/irrigation-farm.jpg";
import waterSurvey from "@/assets/water-survey.jpg";
import ogereImage from "@/assets/achievers-Ogere.jpg";
import filmVillageImage from "@/assets/achievers-Film Village.jpg";
import soyoyeImage from "@/assets/achievers-soyoye.jpg";
import funaabFarmImage from "@/assets/achievers-funaab-farm.jpg";
import harmonyImage from "@/assets/achivers-harmony.jpg";
import oloyedeImage from "@/assets/achievers-Oloyede.jpg";
import cwayImage from "@/assets/achievers-borehole-cway.png";
import egbaImage from "@/assets/achievers-borehole-egba.png";
import ibaraImage from "@/assets/achievers-borehole-ibara.png";
import idiAbaImage from "@/assets/achievers-borehole-idi-aba.png";
import kemtaImage from "@/assets/achievers-borehole-kemta.png";
import kotopoImage from "@/assets/achievers-borehole-kotopo.png";
import obadaImage from "@/assets/achievers-borehole-obada.png";
import obantokoImage from "@/assets/achievers-borehole-obantoko.png";
import funaabFarmImage from "@/assets/achievers-funaab-farm.png";

export type Project = {
  slug: string;
  title: string;
  location: string;
  service: string;
  /** Depth in metres — only set where the figure is known. */
  depth?: string;
  /** Date — only set where the date is known. */
  date?: string;
  /** Replaceable placeholder image. Swap in the real project photo. */
  image: string;
  /** YouTube watch/short URL if a video exists for this project. */
  youtubeUrl?: string;
  featured?: boolean;
};

/**
 * Project list as supplied by Achievers. Depth and date are left blank where
 * they were not provided — nothing here is invented.
 * To add a real photo: drop it in src/assets and swap the `image` value.
 */
export const projects: Project[] = [
  {
    slug: "film-village-alabata",
    title: "150-Metre Borehole — Film Village, Alabata, Abeokuta",
    location: "Film Village, Alabata, Abeokuta",
    service: "Borehole Drilling",
    depth: "150 m",
    image: filmVillageImage,
    featured: true,
  },
  {
    slug: "ogere",
    title: "Borehole Drilled at Ogere, Abeokuta",
    location: "Ogere",
    service: "Borehole Drilling",
    image: ogereImage,
    featured: true,
  },
  {
    slug: "soyoye",
    title: "100-Metre Borehole — Soyoye, Abeokuta",
    location: "Soyoye, Abeokuta",
    service: "Borehole Drilling",
    depth: "100 m",
    image: soyoyeImage,
    featured: true,
  },
  {
    slug: "oloyede-olorunsogo",
    title: "120-Metre Borehole — Oloyede/Olorunsogo, Abeokuta",
    location: "Oloyede/Olorunsogo, Abeokuta",
    service: "Borehole Drilling",
    depth: "120 m",
    image: oloyedeImage,
    featured: true,
  },
  {
    slug: "kotopo",
    title: "140-Metre Borehole — Kotopo, Abeokuta",
    location: "Kotopo, Abeokuta",
    service: "Borehole Drilling",
    depth: "140 m",
    image: kotopoImage,
    featured: true,
  },
  {
    slug: "obada",
    title: "Borehole Project — Obada, Abeokuta",
    location: "Obada, Abeokuta",
    service: "Borehole Drilling",
    image: obadaImage,
  },
  {
    slug: "obantoko",
    title: "Borehole Project — Obantoko, Abeokuta",
    location: "Obantoko, Abeokuta",
    service: "Borehole Drilling",
    image: obantokoImage,
  },
  {
    slug: "funaab-farm",
    title: "Borehole Project — FUNAAB Farm, Abeokuta",
    location: "FUNAAB Farm, Abeokuta",
    service: "Borehole Drilling",
    image: funaabFarmImage,
    featured: true,
  },
  {
    slug: "ibara-housing-estate",
    title: "95-Metre Borehole — Ibara Housing Estate",
    location: "Ibara Housing Estate, Abeokuta",
    service: "Borehole Drilling",
    depth: "95 m",
    image: ibaraImage,
  },
  {
    slug: "harmony-estate-alabata",
    title: "120-Metre Borehole — Harmony Estate Road, Alabata",
    location: "Harmony Estate Road, Alabata",
    service: "Borehole Drilling",
    depth: "120 m",
    image: harmonyImage,
  },
  {
    slug: "cway-dairy-farm-ogere",
    title: "Borehole Project — Cway Dairy Farm, Ogere",
    location: "Cway Dairy Farm, Ogere",
    service: "Borehole Drilling",
    image: cwayImage,
  },
  {
    slug: "kemta-idi-aba",
    title: "Borehole Project — Kemta Idi Aba",
    location: "Kemta, Idi Aba, Abeokuta",
    service: "Borehole Drilling",
    image: kemtaImage,
  },
  {
    slug: "pansake",
    title: "210-Metre Borehole — Panseke, Abeokuta",
    location: "Panseke, Abeokuta",
    service: "Borehole Drilling",
    depth: "210 m",
    image: pansakeImage,
    featured: true,
  },
  {
    slug: "egba-comprehensive-high-school-asero",
    title: "Egba Comprehensive High School, Asero",
    location: "Asero, Abeokuta",
    service: "Borehole Drilling",
    image: egbaImage,
  },
  {
    slug: "abeokuta-grammar-school-idi-aba",
    title: "Abeokuta Grammar School, Idi Aba",
    location: "Idi Aba, Abeokuta",
    service: "Borehole Drilling",
    image: idiAbaImage,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
