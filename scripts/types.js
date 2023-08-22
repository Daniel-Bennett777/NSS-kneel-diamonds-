import { setJewelryTypeChoice } from "./transientState.js";
import { transientState } from "./transientState.js";

const handleJewelryTypeChoice = (event) => {
    if (event.target.name === "jewelryType") {
        setJewelryTypeChoice(event.target.value);
    }
};
document.addEventListener("change", handleJewelryTypeChoice);

export const JewelryTypeOptions = () => {
    const checkedRing = transientState.get("jewelryType") === "ring" ? 'checked' : '';
    const checkedNecklace = transientState.get("jewelryType") === "necklace" ? 'checked' : '';
    const checkedEarrings = transientState.get("jewelryType") === "earrings" ? 'checked' : '';
    return `
        <section class="choices__types options">
            <h2>Jewelry Type</h2>
            <div>
            <input type="radio" name="jewelryType" value="ring" ${checkedRing} /> Ring
            <input type="radio" name="jewelryType" value="necklace" ${checkedNecklace} /> Necklace
            <input type="radio" name="jewelryType" value="earrings" ${checkedEarrings} /> Earrings
            </div>
        </section>
    `;
};
