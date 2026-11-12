/**
 * GALLERY DATA
 * ------------
 * This is the only file you need to edit to add or update galleries.
 *
 * To add a new gallery:
 *   1. Create a folder in /images/ (e.g. /images/pakistan/)
 *   2. Drop your photos in it
 *   3. Add an entry to the GALLERIES array below, listing the filenames
 *
 * To add photos to an existing gallery:
 *   1. Drop the files into that gallery's /images/<slug>/ folder
 *   2. Add the filenames to that gallery's "images" array below
 *
 * Order in this array = order shown on the homepage.
 */

const GALLERIES = [
  {
    slug: "nature",
    title: "Nature",
    description: "Quiet moments outdoors — water, wildlife, and light.",
    cover: "nature-05-sunset-lake.jpg",
    images: [
      "nature-01-kayak-angler.jpg",
      "nature-02-bird.jpg",
      "nature-03-boat-bow.jpg",
      "nature-04-hazy-lake.jpg",
      "nature-05-sunset-lake.jpg",
      "nature-06-caterpillar.jpg"
    ]
  },
  {
    slug: "uganda",
    title: "Uganda",
    description: "On the road.",
    cover: "uganda-01-motorbike.jpg",
    images: [
      "uganda-01-motorbike.jpg"
    ]
  },
  {
    slug: "mumbai",
    title: "Mumbai",
    description: "Streets and skyline after dark.",
    cover: "mumbai-02-taj-hotel.jpg",
    images: [
      "mumbai-01-street-dog.jpg",
      "mumbai-02-taj-hotel.jpg"
    ]
  },
  {
    slug: "england",
    title: "England",
    description: "Coastline and fog.",
    cover: "england-02-foggy-coast-walker.jpg",
    images: [
      "england-01-lighthouse-fog.jpg",
      "england-02-foggy-coast-walker.jpg"
    ]
  },
  {
    slug: "segovia",
    title: "Segovia",
    description: "Coming soon.",
    cover: null,
    images: []
  },
  {
    slug: "budapest",
    title: "Budapest",
    description: "Golden hour on old facades.",
    cover: "budapest-01-facade-goldenhour.jpg",
    images: [
      "budapest-01-facade-goldenhour.jpg"
    ]
  }
];

// Images used in the homepage hero rotation (not tied to a single gallery)
const HERO_IMAGES = [
  "hero/hero-01-kirkland-ave-alley.jpg",
  "nature/nature-05-sunset-lake.jpg",
  "budapest/budapest-01-facade-goldenhour.jpg",
  "england/england-02-foggy-coast-walker.jpg"
];
