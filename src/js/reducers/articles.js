const defaultState = {
  appName: 'Think Forward',
  articles: null
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles }
  }

  return state;
}
