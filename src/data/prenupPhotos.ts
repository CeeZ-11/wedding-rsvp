export interface PrenupPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  feature?: boolean;
  galleryShape?: 'portrait' | 'square' | 'landscape';
}

export const prenupPhotos: PrenupPhoto[] = [
  {
    src: '/images/prenup/prenup-0104.jpg',
    alt: 'Seamor and Lady Stephanie walking together across a garden pasture with horses',
    width: 2048,
    height: 1365,
    feature: true,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-0155.jpg',
    alt: 'Seamor and Lady Stephanie smiling together beside a stone garden wall',
    width: 2048,
    height: 1365,
    galleryShape: 'square',
  },
  {
    src: '/images/prenup/prenup-1012.jpg',
    alt: 'Seamor and Lady Stephanie walking hand in hand beneath the trees',
    width: 1365,
    height: 2048,
    galleryShape: 'portrait',
  },
  {
    src: '/images/prenup/prenup-1010.jpg',
    alt: 'Seamor and Lady Stephanie sharing a quiet moment beneath the garden trees',
    width: 2048,
    height: 1365,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-1003.jpg',
    alt: 'Seamor and Lady Stephanie walking hand in hand beneath the trees',
    width: 1365,
    height: 2048,
    galleryShape: 'portrait',
  },
  {
    src: '/images/prenup/prenup-0505.jpg',
    alt: 'Seamor and Lady Stephanie seated together in a wooden boat',
    width: 1365,
    height: 2048,
    galleryShape: 'portrait',
  },
  {
    src: '/images/prenup/prenup-0353.jpg',
    alt: 'Seamor and Lady Stephanie enjoying a playful moment in the garden',
    width: 2048,
    height: 1365,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-0425.jpg',
    alt: 'Seamor and Lady Stephanie holding each other close in the garden',
    width: 2048,
    height: 1365,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-1008.jpg',
    alt: 'Seamor and Lady Stephanie together in a boat on the lake',
    width: 2048,
    height: 1365,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-0533.jpg',
    alt: 'Seamor and Lady Stephanie in a boat beside the leafy lakeshore',
    width: 2048,
    height: 1365,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-1011.jpg',
    alt: 'Seamor and Lady Stephanie rowing together as ducks pass by',
    width: 2048,
    height: 1365,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-0586.jpg',
    alt: 'Seamor and Lady Stephanie walking together beside the lake',
    width: 2048,
    height: 1365,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-1111.jpg',
    alt: 'Seamor and Lady Stephanie sharing a playful stretching moment on the road',
    width: 2048,
    height: 1365,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-0617.jpg',
    alt: 'Seamor and Lady Stephanie laughing together after a run',
    width: 2048,
    height: 1365,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-0701.jpg',
    alt: 'Seamor and Lady Stephanie running together along the roadside',
    width: 2048,
    height: 1365,
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/prenup-0221.jpg',
    alt: 'Seamor and Lady Stephanie smiling at each other in their wedding attire',
    width: 1365,
    height: 2048,
    galleryShape: 'portrait',
  },
];
