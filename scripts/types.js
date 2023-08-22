import { setJewelryTypeChoice } from "./transientState.js";

const handleJewelryTypeChoice = (event) => {
    if (event.target.name === "jewelryType") {
        setJewelryTypeChoice(event.target.value);
    }
};
document.addEventListener("change", handleJewelryTypeChoice);

export const JewelryTypeOptions = () => {

    return `
        <section class="choices__types options">
            <h2>Jewelry Type</h2>
            <div>
                <input type="radio" name="jewelryType" value="ring" /> Ring
                <input type="radio" name="jewelryType" value="necklace" /> Necklace
                <input type="radio" name="jewelryType" value="earrings" /> Earrings
            </div>
        </section>
    `;
};
