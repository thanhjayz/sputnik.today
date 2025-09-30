//import s from './styles.module.scss';

const Wrapper = ({ children, className }) => {
  return (
    <>
      <main
        className={`wrapper w-full  flex gap-[14px] flex-col sm:flex-row  ${className}`}
      >
        {/* sm:items-stretch min-h-96 items-center pt-[14px] */}
        {children}
      </main>
    </>
  );
};
export default Wrapper;

Wrapper.MainSide = function mainSide({ children, className }) {
  return (
    <div
      className={`flex-[3_1_0%] w-full min-w-[300px] space-y-4 ${className}`}
    >
      {children}
    </div>
  );
};

Wrapper.ASide = function aSide({ children, className }) {
  return (
    <div
      className={`flex-[1_1_0%] min-w-[200px] w-[270px] space-y-[14px] ${className}`}
    >
      {children}
    </div>
  );
};
