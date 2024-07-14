import { DropdownMenuItemType } from "@fluentui/react";
export const edgeOptions = [
  {
    key: "select",
    text: "Sélectionnez une arête "
  },
  {
    key: "directed",
    text: "orienté"
  },
  {
    key: "undirected",
    text: "non orienté"
  }
];
export const algoOptions = [
  {
    key: "select",
    text: "Sélectionnez l'algorithme"
  },
  { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
  {
    key: "traversal",
    text: "les parcours",
    itemType: DropdownMenuItemType.Header
  },
  {
    key: "bfs",
    data: "traversal",
    text: "Parcours en largeur "
  },
  {
    key: "dfs",
    data: "traversal",
    text: "Parcours en profondeur"
  },
  { key: "divider_2", text: "-", itemType: DropdownMenuItemType.Divider },
  {
    key: "pathfinding",
    text: "plus court chemin",
    itemType: DropdownMenuItemType.Header
  },
  {
    key: "dijkstra",
    data: "pathfinding",
    text: "Dijkstra"
  }
];

export const algoMessages = {
  traversal: {
    bfs: {
      info: "Click on any node to begin the traversal."
    },
    dfs: {
      info: "Click on any node to begin the traversal."
    }
  },
  pathfinding: {
    dijkstra: {
      info:
        "Select a starting node and ending node to visualize the pathfinding algorithm.",
      failure: "Path is not possible for the given vertices."
    }
  }
};
