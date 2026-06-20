import { custom } from '@better-upload/server/clients';

import { envServer } from '@/env/server';
import { isFrontendOnlyDeploy } from '@/env/shared';

const frontendOnlyS3Defaults = {
  host: 'localhost',
  accessKeyId: 'unused',
  secretAccessKey: 'unused',
  region: 'auto',
  forcePathStyle: false,
  secure: true,
} as const;

/** Placeholder client so SSR router import does not crash on Vercel (upload API is disabled). */
export const uploadClient = custom(
  isFrontendOnlyDeploy
    ? frontendOnlyS3Defaults
    : {
        host: envServer.S3_HOST,
        accessKeyId: envServer.S3_ACCESS_KEY_ID,
        secretAccessKey: envServer.S3_SECRET_ACCESS_KEY,
        region: envServer.S3_REGION,
        forcePathStyle: envServer.S3_FORCE_PATH_STYLE,
        secure: envServer.S3_SECURE,
      }
);
