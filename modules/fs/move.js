import { makeAbsolute } from "../common/make-path-absolute.js";
import { copy } from "./copy.js";
import { remove } from "./remove.js";
import path from 'path';

export const move = async (srcPath, destDirPath) => {
  if (makeAbsolute(destDirPath) === path.dirname(makeAbsolute(srcPath))) return;
  await copy(srcPath, destDirPath);
  await remove(srcPath);
}