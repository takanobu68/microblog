import path from 'path';
import fs from 'fs';
import matter from 'matter';

const postsDirectory = path.join(process.cwd(), 'posts');

// mdファイルのデータを取り出す
export function getPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult,
    };
  });
}
