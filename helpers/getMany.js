import fs from 'fs';

export default async (folder) => {
  const files = await fs.promises.readdir(folder);
  return files;
}