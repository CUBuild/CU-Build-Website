import React from 'react';
import logoLight from '../assets/cu-build-logo.png';
import logoDark from '../assets/cu-build-logo-dark.png';

const Logo: React.FC<{ isSmall?: boolean, isDark?: boolean }> = ({ isSmall, isDark }) => (
    <img
        src={isDark ? logoDark : logoLight}
        alt="CU Build Logo"
        className={isSmall ? 'h-12 w-22' : 'h-auto mx-auto mb-6 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80'}
    />
);

export default Logo;