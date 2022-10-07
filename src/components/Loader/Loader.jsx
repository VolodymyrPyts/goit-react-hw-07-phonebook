import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ProgressBar
      height="40"
      width="60"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#eeefff"
      barColor="#727757"
    />
  );
};
