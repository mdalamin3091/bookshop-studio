import React from 'react';
import TopHeader from './TopHeader'
import useResponsive from '@/hooks/useResponsive';

const Header = () => {
    const { isMobile } = useResponsive();
    return (
        <header>
            {isMobile || <TopHeader />}
        </header>
    )
}

export default Header