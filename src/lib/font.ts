
import { Manrope } from "next/font/google";

const manrope_serif = Manrope({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    style: ["normal"],
    display: "swap",
    subsets: ["latin"],
    variable: "--manrope-font",
});



export { manrope_serif };
