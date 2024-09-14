import Loader from '@/shared/ui/Loader';

const Loading = () => {
  const LoadingSpinner = () => <Loader />;
  return <>{<LoadingSpinner />}</>;
};

export default Loading;
