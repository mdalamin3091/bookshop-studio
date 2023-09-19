export const theme = {
  colors: {
    primaryColors: ["#ff5900"],
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1400,
        },
      },
    },
    SegmentedControl: {
      styles: {
        root: {
          borderRadius: 0,
          width: "100%",
        },
        label: {
          fontSize: "12px",
        },
      },
    },
  },
};
