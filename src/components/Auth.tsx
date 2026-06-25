export function Auth({
  actionText,
  onSubmit,
  status,
  afterSubmit,
}: {
  actionText: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  status: 'pending' | 'idle' | 'success' | 'error'
  afterSubmit?: React.ReactNode
}) {
  return (
    <div className="flex flex-1 items-start justify-center bg-white p-8 dark:bg-black">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-400">
          iziMag
        </p>
        <h1 className="mb-4 text-2xl font-bold">{actionText}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit(e)
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-xs">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-2 py-1 w-full rounded-sm border border-gray-500/20 bg-white dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="px-2 py-1 w-full rounded-sm border border-gray-500/20 bg-white dark:bg-gray-800"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white rounded-sm py-2 font-black uppercase"
            disabled={status === 'pending'}
          >
            {status === 'pending' ? '...' : actionText}
          </button>
          {afterSubmit ? afterSubmit : null}
        </form>
      </div>
    </div>
  )
}
