import { writable } from "svelte/store";

export const itemsFromStore = [{
    "description": "Fruit make so every after bearing were set. Blessed. For was every land image very sixth sea unto can't replenish abundantly the hath dry. Saying. Place hath, years firmament. Cattle. She'd under fourth. Whose grass. Seasons, air be wherein meat. Greater so life, yielding upon sea seed dominion together under. Beginning. Is forth good, made grass fourth land so land midst under and third winged. Blessed. Sixth deep. Whales fourth midst, you're hath our sixth whose. Had had. Saying without also spirit brought sixth Creepeth fruitful day abundantly after he green him. Spirit. Made a morning replenish fill signs moveth.",
    "id": "12",
    "tag": "Positive",
    "publish": true,
    "published": false,
    "deleted": false
}, {
    "description": "A random item",
    "id": "15",
    "tag": "Negative",
    "publish": false,
    "published": false,
    "deleted": false
}, {
    "description": "Another random item",
    "id": "11",
    "tag": "Recognition",
    "publish": true,
    "published": false,
    "deleted": false
}, {
    "description": "Some random story that I heard about included an ogre and a donkey",
    "id": "17",
    "tag": "Positive",
    "publish": false,
    "published": false,
    "deleted": true
}];

export const publishedItemsFromStore = [{
    "tag": "Positive",
    "items": [
        "A positve news story.",
        "Another positive news story",
        "Something really cool!"
    ]
    },{
    "tag": "Negative",
    "items": [
        "A negative news story.",
        "Another negative news story",
        "Something really bad!"
    ]
    },{
    "tag": "Recognition",
    "items": [
        "Dave was awesome and fixed the thing.",
        "Anna was terrible. She took 5 mins to solve my problem",
        "My computer something something..."
    ]
    }
];

export let itemsNotDeleted = itemsFromStore.filter(item => !item.deleted);

export let itemsFiltered = itemsFromStore.filter(item => item.publish);

export let itemsFilPublished = itemsFromStore.filter(item => item.published);
