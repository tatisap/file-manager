import { copy } from "./copy.js"
import { remove } from "./delete.js";

export const move = async (srcPath, destDirPath) => {
  await copy(srcPath, destDirPath);
  await remove(srcPath);
}