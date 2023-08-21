import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(20rem, 23rem) 1fr",
        search: "0fr 1fr",
        profile: "max-content 1fr min-content"
      },
      colors: {
        savio: "#8257e6"
      }
    }
  },
  plugins: []
}
export default config
