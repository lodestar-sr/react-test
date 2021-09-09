import {useContext} from 'react';
import {__RouterContext as RouterContext} from 'react-router';

export function useRouter() {
  return useContext(RouterContext);
}

export function useQuery() {
  const { location } = useRouter();
  const urlParams = new URLSearchParams(location.search);

  return Object.fromEntries(urlParams);
}

export function useParams(): any {
  const { match } = useRouter();
  return match.params;
}

export function useGoBack() {
  const { history } = useRouter();
  return history.goBack;
}

export function useHistory() {
  const { history } = useRouter();
  return history;
}
