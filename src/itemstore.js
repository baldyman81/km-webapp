import { writable } from "svelte/store";

export const itemsFromStore = [{
    "description": "Fruit make so every after bearing were set. Blessed. For was every land image very sixth sea unto can't replenish abundantly the hath dry. Saying. Place hath, years firmament. Cattle. She'd under fourth. Whose grass. Seasons, air be wherein meat. Greater so life, yielding upon sea seed dominion together under. Beginning. Is forth good, made grass fourth land so land midst under and third winged. Blessed. Sixth deep. Whales fourth midst, you're hath our sixth whose. Had had. Saying without also spirit brought sixth Creepeth fruitful day abundantly after he green him. Spirit. Made a morning replenish fill signs moveth.",
    "id": "12",
    "tag": "Important",
    "publish": true,
    "published": false
}, {
    "description": "A random item",
    "id": "15",
    "tag": "example",
    "publish": false,
    "published": false
}, {
    "description": "Another random item",
    "id": "11",
    "tag": "example",
    "publish": true,
    "published": false
}, {
    "description": "Some random story that I heard about included an ogre and a donkey",
    "id": "17",
    "tag": "example",
    "publish": false,
    "published": false
}];

export let itemsFiltered = itemsFromStore.filter(item => item.publish)

export let itemsFilPublished = itemsFromStore.filter(item => item.published)