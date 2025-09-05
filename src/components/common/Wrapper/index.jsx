//import s from './styles.module.scss';
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";



const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main className="wrapper pt-[14px] w-full min-h-96 flex gap-[14px] flex-col sm:flex-row sm:items-stretch items-center">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Wrapper;

Wrapper.mainSide = function mainSide({ children }) {
  return (
    <div className="flex-[3_1_0%] w-full min-w-[300px] space-y-4">
      {children}
    </div>
  );
};

Wrapper.aSide = function aSide({ children }) {
  return (
    <div className="flex-[1_1_0%] min-w-[200px] w-[270px] space-y-[14px]">
      {children}
    </div>
  );
};