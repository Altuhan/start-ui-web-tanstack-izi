/* eslint-disable no-process-env */

/** Vercel hosts the iziMag UI only; TrailBase on izimag.kz owns auth and data. */
export const isFrontendOnlyDeploy =
  process.env.IZIMAG_FRONTEND_ONLY === 'true';

/** Better Upload / S3 API routes are starter-kit demo; not used on Vercel iziMag UI. */
export const isUploadServerEnabled = !isFrontendOnlyDeploy;

export function resolveDeployBaseUrl(
  env: Record<string, string | undefined> = process.env
): string | undefined {
  if (env.VITE_BASE_URL) {
    return env.VITE_BASE_URL;
  }

  if (env.VERCEL_ENV === 'production' && env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (env.VERCEL_ENV === 'preview' && env.VERCEL_BRANCH_URL) {
    return `https://${env.VERCEL_BRANCH_URL}`;
  }

  if (env.VERCEL_URL) {
    return `https://${env.VERCEL_URL}`;
  }

  return undefined;
}

export function resolveS3PublicUrl(
  baseUrl: string | undefined,
  env: Record<string, string | undefined> = process.env
): string | undefined {
  if (env.VITE_S3_BUCKET_PUBLIC_URL) {
    return env.VITE_S3_BUCKET_PUBLIC_URL;
  }

  return baseUrl;
}
