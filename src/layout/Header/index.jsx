import React from 'react';
import TopHeader from './TopHeader'
import useResponsive from '@/hooks/useResponsive';
import MainHeader from './MainHeader';

const Header = () => {
    const { isMobile } = useResponsive();
    return (
        <header>
            {isMobile || <TopHeader />}
            <MainHeader />
        </header>
    )
}

export default Header