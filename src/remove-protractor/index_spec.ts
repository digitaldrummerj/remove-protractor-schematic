import * as path from "path";

import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";

const collectionPath = path.join(__dirname, "../collection.json");

describe("@nerdbeheard/remove-protractor-schematic", () => {
  it("works", () => {
    const runner = new SchematicTestRunner("schematics", collectionPath);
    console.log(runner);
    const tree = runner.runSchematic(
      "@nerdbeheard/remove-protractor-schematic",
      {},
      Tree.empty()
    );

    expect(tree.files).toEqual([]);
  });
});
