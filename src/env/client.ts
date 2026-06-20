/* eslint-disable no-process-env */
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

import {
  isFrontendOnlyDeploy,
  resolveDeployBaseUrl,
  resolveS3PublicUrl,
} from '@/env/shared';

const envMetaOrProcess: Record<string, string | undefined> =
  import.meta.env ?? process.env;

const isDev = process.env.NODE_ENV
  ? process.env.NODE_ENV === 'development'
  : import.meta.env?.DEV;

const resolvedBaseUrl = resolveDeployBaseUrl(envMetaOrProcess);
const resolvedS3PublicUrl = resolveS3PublicUrl(resolvedBaseUrl, envMetaOrProcess);

const clientUrl = (fallback: string) =>
  isFrontendOnlyDeploy
    ? z.string().url().optional().default(fallback)
    : z.url();

export const envClient = createEnv({
  clientPrefix: 'VITE_',
  client: {
    VITE_BASE_URL: clientUrl('https://izimag.kz'),
    VITE_IS_DEMO: z
      .enum(['true', 'false'])
      .optional()
      .prefault('false')
      .transform((v) => v === 'true'),
    VITE_ENV_NAME: z
      .string()
      .optional()
      .transform((value) => value ?? (isDev ? 'LOCAL' : undefined)),
    VITE_ENV_EMOJI: z
      .emoji()
      .optional()
      .transform((value) => value ?? (isDev ? '🚧' : undefined)),
    VITE_ENV_COLOR: z
      .string()
      .optional()
      .transform((value) => value ?? (isDev ? 'gold' : 'plum')),
    VITE_S3_BUCKET_PUBLIC_URL: clientUrl('https://izimag.kz'),
    VITE_TRAILBASE_URL: z
      .string()
      .url()
      .optional()
      .default('https://izimag.kz'),
  },
  runtimeEnv: {
    ...envMetaOrProcess,
    VITE_BASE_URL: resolvedBaseUrl,
    VITE_S3_BUCKET_PUBLIC_URL: resolvedS3PublicUrl,
  },
  emptyStringAsUndefined: true,
  skipValidation:
    !!envMetaOrProcess.SKIP_ENV_VALIDATION && !isFrontendOnlyDeploy,
});
