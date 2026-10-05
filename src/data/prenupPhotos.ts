export interface PrenupPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  feature?: boolean;
  galleryShape?: 'portrait' | 'square' | 'landscape';
}

export const prenupPhotos: PrenupPhoto[] = [
  {
    src: '/images/prenup/placeholder-01.jpg',
    alt: 'A couple sharing a quiet moment together by the sea',
    width: 1400,
    height: 2100,
    caption: 'A quiet moment together',
    galleryShape: 'portrait',
  },
  {
    src: '/images/prenup/placeholder-02.jpg',
    alt: 'A wedding bouquet held close between a couple',
    width: 1400,
    height: 933,
    caption: 'The little details',
    galleryShape: 'landscape',
  },
  {
    src: '/images/prenup/placeholder-03.jpg',
    galleryShape: 'square',
    alt: 'A couple walking hand in hand across a mountain landscape',
    width: 1400,
    height: 933,
    caption: 'Side by side',
    feature: true,
  },
  {
    src: '/images/prenup/placeholder-04.jpg',
    alt: 'A couple celebrating together beneath a sky filled with balloons',
    width: 1400,
    height: 935,
    caption: 'A day to remember',
  },
  {
    src: '/images/prenup/placeholder-05.jpg',
    alt: 'A soft arrangement of wedding flowers and greenery',
    width: 1400,
    height: 935,
    caption: 'In bloom',
  },
  {
    src: '/images/prenup/placeholder-06.jpg',
    alt: 'A simple Mr and Mrs sign hanging among leafy branches',
    width: 1400,
    height: 933,
    caption: 'A little something borrowed',
  },
  {
    src: '/images/prenup/placeholder-07.jpg',
    alt: 'Two flower-adorned chairs prepared for a wedding ceremony',
    width: 1400,
    height: 933,
    caption: 'A place for two',
  },
  {
    src: '/images/prenup/placeholder-08.jpg',
    alt: 'Wedding rings resting among pale pink flowers',
    width: 1400,
    height: 933,
    caption: 'The promise',
  },
];
