import loadingGif from '../../public/loading.gif';

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={loadingGif} alt="loading" />
    </div>
  );
};

export default LoadingPage;
