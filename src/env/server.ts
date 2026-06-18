/* eslint-disable no-process-env */
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

import { isFrontendOnlyDeploy } from '@/env/shared';

const isProd = process.env.NODE_ENV
  ? process.env.NODE_ENV === 'production'
  : import.meta.env?.PROD;

const serverString = (fallback: string) =>
  isFrontendOnlyDeploy
    ? z.string().optional().default(fallback)
    : z.string();

const serverUrl = (fallback: string) =>
  isFrontendOnlyDeploy
    ? z.string().url().optional().default(fallback)
    : z.url();

export const envServer = createEnv({
  server: {
    DATABASE_URL: serverUrl(
      'postgresql://unused:unused@localhost:5432/izimag_vercel_placeholder'
    ),
    AUTH_SECRET: serverString('izimag-vercel-placeholder-auth-secret'),
    AUTH_SESSION_EXPIRATION_IN_SECONDS: z.coerce
      .number()
      .int()
      .prefault(2592000), // 30 days by default
    AUTH_SESSION_UPDATE_AGE_IN_SECONDS: z.coerce.number().int().prefault(86400), // 1 day by default
    AUTH_ALLOWED_HOSTS: z
      .string()
      .optional()
      .transform((stringValue) => stringValue?.split(',').map((v) => v.trim())),
    AUTH_TRUSTED_ORIGINS: z
      .string()
      .optional()
      .transform((stringValue) => stringValue?.split(',').map((v) => v.trim())),

    GITHUB_CLIENT_ID: zOptionalWithReplaceMe(),
    GITHUB_CLIENT_SECRET: zOptionalWithReplaceMe(),

    EMAIL_SERVER: serverUrl('smtp://localhost'),
    EMAIL_FROM: serverString('iziMag <support@izimag.kz>'),

    LOGGER_LEVEL: z
      .enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal'])
      .prefault(isProd ? 'error' : 'info'),
    LOGGER_PRETTY: z
      .enum(['true', 'false'])
      .prefault(isProd ? 'false' : 'true')
      .transform((value) => value === 'true'),
    S3_ACCESS_KEY_ID: serverString('unused'),
    S3_SECRET_ACCESS_KEY: serverString('unused'),
    S3_BUCKET_NAME: z.string().default('default'),
    S3_REGION: z.string().default('auto'),
    S3_HOST: serverString('localhost'),
    S3_SECURE: z.stringbool().default(true),
    S3_FORCE_PATH_STYLE: z.stringbool().default(false),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION || isFrontendOnlyDeploy,
});

function zOptionalWithReplaceMe() {
  return z
    .string()
    .optional()
    .refine(
      (value) =>
        // Check in prodution if the value is not REPLACE ME
        !isProd || isFrontendOnlyDeploy || value !== 'REPLACE ME',
      {
        error: 'Update the value "REPLACE ME" or remove the variable',
      }
    )
    .transform((value) => (value === 'REPLACE ME' ? undefined : value));
}
