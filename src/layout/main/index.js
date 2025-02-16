import NavigationBar from "../../components/custom/navigationbar";
import Footer from "../../components/custom/footer";
const MainLayout = (Component) => {
  const DefFunction = ({ ...props }) => {
    return (
      <div>
        <NavigationBar />
        <Component {...props} />
        <Footer />
      </div>
    );
  };
  return DefFunction;
};

export default MainLayout;
