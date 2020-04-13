import defaultStore from '~/store'

export const fetchAndDispatch = (fetcher, action, loader) => async (data, store = defaultStore) => {
  try {
    loader && store.dispatch(loader(true))
    const res = await fetcher(data)
    action && store.dispatch(action(res))
    loader && store.dispatch(loader(false))
    return res
  } catch {
    loader && store.dispatch(loader(false))
  }

}
