import { useMediaQuery } from 'react-responsive';

const breakpoints = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  wideDesktop: '(min-width: 1440px)',
};

export const useBreakpoints = () => {
  const isMobile = useMediaQuery({ query: breakpoints.mobile });
  const isTablet = useMediaQuery({ query: breakpoints.tablet });
  const isDesktop = useMediaQuery({ query: breakpoints.desktop });
  const isWideDesktop = useMediaQuery({ query: breakpoints.wideDesktop });
  return { isMobile, isTablet, isDesktop, isWideDesktop };
};
