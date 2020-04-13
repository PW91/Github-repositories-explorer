import styled from '@emotion/styled'
import { SmallHeading } from '~/components/Typography'
import { IcoStar, IcoLink } from '~/styles/icofont'

export const RepoCard = styled.div`
  padding: .5rem 2rem;
  background-color: ${({ theme }) => theme.colors.background.white};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: .5rem 0 .5rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.main};
`

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 15%;

  ${SmallHeading} {
    margin-top: .5rem;
  }
`

export const RepoHeader = styled.div`
  display: flex;
  align-items: center;
`

export const RepoMeta = styled.div`
  width: 85%;
`

export const StarIcon = styled(IcoStar)`
  font-size: ${({ theme }) => theme.fontSize.icon.normal};
  margin-left: .5rem;
`

export const LinkIcon = styled(IcoLink)`
  font-size: ${({ theme }) => theme.fontSize.icon.normal};
  margin-left: .5rem;
`
