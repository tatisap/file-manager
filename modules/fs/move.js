import { makeAbsolute } from "../common/make-path-absolute.js";
import { copy } from "./copy.js"
import { cwd } from 'process';
import { remove } from "./remove.js";

export const move = async (srcPath, destDirPath) => {
  if (makeAbsolute(destDirPath) === cwd()) return;
  await copy(srcPath, destDirPath);
  await remove(srcPath);
}