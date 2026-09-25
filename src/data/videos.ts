import { siteConfig } from "@/config/site";

export type VideoCategory =
  | "Recent Projects"
  | "Drilling in Action"
  | "Technical & Educational"
  | "Project Stories";

export type Video = {
  title: string;
  category: VideoCategory;
  /**
   * YouTube video ID. Leave empty until the real ID is added — the card then
   * links out to the channel instead of embedding a player.
   */
  youtubeId?: string;
  note?: string;
};

export const videoCategories: VideoCategory[] = [
  "Recent Projects",
  "Drilling in Action",
  "Technical & Educational",
  "Project Stories",
];

/**
 * Video titles as listed by Achievers. Add the `youtubeId` for each one to
 * enable the lazy-loaded embedded player (nothing else needs changing).
 */
export const videos: Video[] = [
  // RECENT PROJECTS
  { title: "210m Borehole — Panseke, Abeokuta", category: "Recent Projects", youtubeId: "UE3Zrql-45E" },
  { title: "150m Borehole — Film Village, Alabata", category: "Recent Projects", youtubeId: "zKWSFoMkAVA" },
  { title: "140m Borehole — Kotopo, Abeokuta", category: "Recent Projects", youtubeId: "zD5IFZsFj8U" },
  { title: "120m Borehole — Oloyede/Olorunsogo", category: "Recent Projects", youtubeId: "Pp2cYeJzXIs" },
  { title: "100m Borehole — Soyoye, Abeokuta", category: "Recent Projects", youtubeId: "w5MpYK8v83k" },
  { title: "Borehole Drilled at Ogere", category: "Recent Projects", youtubeId: "5yuVggrF0u0" },

  // DRILLING IN ACTION
  { title: "Cway Dairy Farm Borehole Drilling", category: "Drilling in Action", youtubeId: "2TaBGHZ-48A" },
  { title: "FUNAAB Farm Water System Installation", category: "Drilling in Action", youtubeId: "hiqBs9YUfGA" },
  { title: "Obada Borehole Project Execution", category: "Drilling in Action", youtubeId: "fXUegdEy2RM" },
  { title: "Obantoko Water Solution Drilling", category: "Drilling in Action", youtubeId: "Sco6TWePbS0" },

  // PROJECT STORIES
  { title: "Egba Comprehensive High School Water Project", category: "Project Stories", youtubeId: "ZzLrSj3QXUQ" },
  { title: "Ibara Housing Estate (95m Borehole)", category: "Project Stories", youtubeId: "uBcUE368LLc" },
  { title: "Harmony Estate Road Community Borehole", category: "Project Stories", youtubeId: "zo-xAVl_UeA" },

  // TECHNICAL & EDUCATIONAL
  { title: "Idi Aba Drilling & Technical Setup", category: "Technical & Educational", youtubeId: "LGTSfiFVdNc" },
  { title: "Kemta Idi Aba Complex Water Setup", category: "Technical & Educational", youtubeId: "39ATA2bTnmY" },
];

export const channelUrl = `${siteConfig.social.youtube}/videos`;