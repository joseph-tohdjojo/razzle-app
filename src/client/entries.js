export const ENTRIES = {
  HOMEPAGE: {
    name: "homepage",
    path: "./src/client/homepage.js"
  },
  STORY: {
    name: "story",
    path: "./src/client/story.js"
  }
};

export default function entries(baseEntry, resolvePath) {
  return Object.keys(ENTRIES).reduce((entries, entry) => {
    entries[ENTRIES[entry].name] = [
      ...baseEntry,
      resolvePath(ENTRIES[entry].path)
    ];
    return entries;
  }, {});
}
