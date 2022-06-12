import { copy } from "./copy.js"
import { remove } from "./remove.js";

export const move = async (srcPath, destDirPath) => {
  await copy(srcPath, destDirPath);
  await remove(srcPath);
}