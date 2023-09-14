import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useResponsive = () => {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    return {
        isMobile,
        isTablet,
    };
};

export default useResponsive;
