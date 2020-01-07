import Loadable from 'react-loadable';

import LoadingIndicator from '../../../components/atoms/LoadingIndicator';

export default Loadable({
  loader: () => import('./ArticleListPage'),
  loading: LoadingIndicator
});
