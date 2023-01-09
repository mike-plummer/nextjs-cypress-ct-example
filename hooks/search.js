import { useCallback } from 'react'
import { useRouter } from 'next/router'

export function useSearch() {
    const router = useRouter()
    return useCallback(async ({ title }) => {
        await router.push({
            pathname: '/movies/search',
            query: {
                title
            }
        })
        return false
    }, [router])
}