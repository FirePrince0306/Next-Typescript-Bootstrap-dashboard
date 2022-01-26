import type { PropsWithChildren } from 'react';
import Head from 'next/head';

export type PageHeadProps = PropsWithChildren<{
  title?: string;
  description?: string;
}>;

const PageHead: React.FC<PageHeadProps> = ({
  title,
  description = 'React project based on TypeScript, Next.js & Bootstrap.',
  children,
}) => {
  return (
    <Head>
      <title>
        {title}
        {title && ' - '}Next-Bootstrap.ts
      </title>

      {description && <meta name="description" content={description} />}

      {children}
    </Head>
  );
}

export default PageHead;
