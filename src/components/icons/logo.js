import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const IconLogo = () => (
  <StaticImage
    src="../../images/logo-border.png"
    formats={['AUTO', 'WEBP', 'PNG']}
    alt="Headshot"
  />
);

export default IconLogo;
