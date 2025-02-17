import Tab from "./Tab.jsx";

const TabBar = () => {
  const handleClick = (e) => {
    console.log("Click " + e.target.innerText);
  };

  return (
    <div className="service-pickers flex gap-4 mt-4">
      <Tab onClick={handleClick}>Manicure</Tab>
      <Tab onClick={handleClick}>Pedicure</Tab>
      <Tab onClick={handleClick}>Nail Art</Tab>
      <Tab onClick={handleClick}>Kaş</Tab>
    </div>
  );
};

export default TabBar;
