import { PortfolioProject } from '@/types'
import useSWR from 'swr'

type ProjectResponse = {
    projects: PortfolioProject[]
}

const useProject = () => useSWR<ProjectResponse>('/api/project')

export default useProject