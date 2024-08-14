import localFont from 'next/font/local';

const DINRound = localFont({
  src: [
    {
      path: '../../public/fonts/DINRoundPro.woff',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../public/fonts/DINRoundPro-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/DINRoundPro-Light.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/DINRoundPro-Medi.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/DINRoundPro-Bold.woff',
      weight: '500',
      style: 'normal',
    },
  ],
});

export { DINRound };
