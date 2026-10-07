const API_BASE_URL =
  import.meta.env.VITE_API_URL ??
  'http://localhost:5001/api/v1'

export async function apiRequest<T>(
  endpoint: string,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
      ...init,
    }
  )

  if (!response.ok) {
    let errorMessage = `Request failed: ${response.status}`

    try {
      const data = await response.json()

      errorMessage =
        data?.message ||
        data?.error ||
        data?.errors?.[0]?.message ||
        errorMessage
    } catch {
      // Response was not JSON
    }

    console.error('API ERROR:', {
      status: response.status,
      url: response.url,
      message: errorMessage,
    })

    throw new Error(errorMessage)
  }

  return response.json() as Promise<T>
}