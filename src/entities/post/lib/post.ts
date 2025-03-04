import { POST_PATH } from '@/entities/post/config/path';
import { globSync } from 'glob';

/**
 * posts 폴더 내의 모든 MDX 파일 경로를 가져오는 함수 (하위 폴더 포함)
 */
export function getMdxFilePaths(): string[] {
 return globSync(`${POST_PATH}/**/*.mdx`);
}

/**
 * 스네이크 케이스 (deep_dive) → 타이틀 케이스 (Deep Dive) 변환 함수
 */
export function toTitleCase(str: string): string {
 return str
  .split('_')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 첫 글자 대문자로 변환
  .join(' ');
}

/**
 * posts 폴더 내의 모든 MDX(Post) 정보를 반환하는 함수
 * - categoryRaw: 변환 전 카테고리명 (스네이크 케이스 그대로)
 * - category: 변환 후 카테고리명 (타이틀 케이스)
 * - slug: 파일명 (확장자 제거)
 * - url: `/category/slug` 형태의 URL
 */
export function getMdxPostsInfo(): {
 categoryRaw: string;
 category: string;
 slug: string;
 url: string;
}[] {
 return getMdxFilePaths().map((filePath) => {
  const relativePath = filePath.replace(`${POST_PATH}/`, '');
  const parts = relativePath.split('/');

  if (parts.length < 2) {
   throw new Error(`잘못된 경로: ${filePath}`);
  }

  const categoryRaw = parts[0];
  const slug = parts[1].replace('.mdx', '');
  const category = toTitleCase(categoryRaw);
  const url = `/${categoryRaw}/${slug}`;

  return { categoryRaw, category, slug, url };
 });
}
