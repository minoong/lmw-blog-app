import {
 getFormattedCategories,
 getMdxCategories,
 getMdxFilePaths,
 getMdxPostsInfo,
 toTitleCase,
} from '@/entities/post/lib/post';
import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';

// Mock globSync
vi.mock('glob', async () => {
 return {
  globSync: vi.fn(() => [
   path.join(process.cwd(), 'src/archive/posts/deep_dive/nested-post.mdx'),
   path.join(process.cwd(), 'src/archive/posts/nextjs_blog/nextjs-advanced.mdx'),
   path.join(process.cwd(), 'src/archive/posts/nextjs_blog/react-hooks.mdx'),
  ]),
 };
});

describe('MDX 파일 경로 유틸 함수', () => {
 it('getMdxFilePaths()는 모든 MDX 파일 경로를 반환해야 한다.', () => {
  const result = getMdxFilePaths();
  expect(result).toEqual([
   path.join(process.cwd(), 'src/archive/posts/deep_dive/nested-post.mdx'),
   path.join(process.cwd(), 'src/archive/posts/nextjs_blog/nextjs-advanced.mdx'),
   path.join(process.cwd(), 'src/archive/posts/nextjs_blog/react-hooks.mdx'),
  ]);
 });

 it('toTitleCase()는 언더바를 공백으로 변환하고 첫 글자를 대문자로 바꿔야 한다.', () => {
  expect(toTitleCase('deep_dive')).toBe('Deep Dive');
  expect(toTitleCase('nextjs_blog')).toBe('Nextjs Blog');
  expect(toTitleCase('react_hooks_advanced')).toBe('React Hooks Advanced');
 });

 it('getMdxPostsInfo()는 올바른 MDX(Post) 정보를 반환해야 한다.', () => {
  const result = getMdxPostsInfo();
  expect(result).toEqual([
   {
    categoryRaw: 'deep_dive',
    category: 'Deep Dive',
    slug: 'nested-post',
    url: '/deep_dive/nested-post',
   },
   {
    categoryRaw: 'nextjs_blog',
    category: 'Nextjs Blog',
    slug: 'nextjs-advanced',
    url: '/nextjs_blog/nextjs-advanced',
   },
   {
    categoryRaw: 'nextjs_blog',
    category: 'Nextjs Blog',
    slug: 'react-hooks',
    url: '/nextjs_blog/react-hooks',
   },
  ]);
 });

 it('getMdxCategories()는 변환 전 카테고리 목록을 반환해야 한다.', () => {
  const result = getMdxCategories();
  expect(result).toEqual(['deep_dive', 'nextjs_blog']); // 중복 제거 확인
 });

 it('getFormattedCategories()는 변환 후 타이틀 케이스 카테고리를 반환해야 한다.', () => {
  const result = getFormattedCategories();
  expect(result).toEqual(['Deep Dive', 'Nextjs Blog']); // 중복 제거 확인
 });
});
