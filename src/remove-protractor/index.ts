import {
  Rule,
  SchematicContext,
  Tree,
  chain} from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";

import {
  NodeDependencyType} from "../utility/dependencies";
import {
  getAngularVersion,
  parseJsonAtPath,
  removePackageJsonDependency
} from "../utility/util";

export default function(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _options = { ..._options, __version__: getAngularVersion(tree) };

    return chain([
      updateDependencies(_options),
      removeFiles(_options),
    ])(tree, _context);
  };
}

function updateDependencies(options: any): Rule {
  return (tree: Tree, context: SchematicContext): Tree => {
    context.logger.debug("Updating dependencies...");
    context.addTask(new NodePackageInstallTask());

    if (options.removeProtractor) {
          context.logger.debug(`Removing protractordependency`);

          removePackageJsonDependency(tree, {
            type: NodeDependencyType.Dev,
            name: 'protractor'
          });

          return tree;
    }

    return tree;
  };
}

function removeFiles(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    if (options.removeProtractor) {
      context.logger.debug("Removing e2e directory");
      tree.delete("./e2e");

      if (tree.exists("./angular.json")) {
        const angularJsonAst = parseJsonAtPath(tree, "./angular.json");
        if (angularJsonAst.value) {
          let val = angularJsonAst.value as any;
          context.logger.debug(
            `Removing ${options.project ||
              val.defaultProject}-e2e from angular.json projects`
          );

          delete val.projects[`${options.project || val.defaultProject}-e2e`];

          return tree.overwrite("./angular.json", JSON.stringify(val, null, 2));
        }
      }

      return tree;
    }
    return tree;
  };
}
