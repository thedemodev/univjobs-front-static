import Typography from "typography";

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Roboto",
    "sans-serif",
  ],
  headerColor: '#2B2B2B',
  bodyFontFamily: ['Nunito', "Roboto", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  p: {
    fontSize: '18px'
  },
  a : {
    fontSize: '18px'
  }
})
});

typography.injectStyles()

export default typography;