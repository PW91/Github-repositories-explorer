import styled from '@emotion/styled'
import { IcoArrow } from '~/styles/icofont'
import { NoResultsContainer } from '~/components/NoResults/NoResults.shards'

export const UserCardContainer = styled.div`
  margin-bottom: 1rem;

  ${NoResultsContainer} {
    margin: .5rem 0 .5rem 2rem;
  }
`

export const UserCard = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background.white};
  border-radius: ${({ theme }) => theme.borderRadius.main};
  box-shadow: ${({ theme }) => theme.shadow.box};
  border: ${({ isActive, theme }) => isActive && theme.border.element};
  transition: background-color .1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.lightGrey};
  }
`

export const Avatar = styled.img`
  width: 6rem;
  margin-right: 1rem;
`

export const UserMeta = styled.div`
  display: flex;
  align-items: center;
`

export const DropdownIcon = styled(IcoArrow)`
  transform: ${({ isActive }) => isActive && 'rotate(180deg)'};
  color: ${({ theme }) => theme.colors.text.main};
  font-size: ${({ theme }) => theme.fontSize.icon.normal};
  transition: transform .1s;
`
