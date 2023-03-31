import WorldChart from "../components/charts/WorldChart";
import Table from "../components/Tables/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import createMapData from "../utils/createMapData";
const HomeScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/stocks/countries").then((res) => {
      setData(res.data.countries);
    });
  });

  let filterData = [];

  if (loading) {
    return (
      <div className="background-container pt-5">
        <Spinner />
      </div>
    );
  } else {
    filterData = createMapData(data);
  }
  return (
    <main id="main" class="main">
      <div class="col-12">
        <div class="card recent-sales overflow-auto">
          <div class="card-body">
            <h5 class="card-title">Current World View</h5>{" "}
            <WorldChart data={filterData} />
          </div>
          <Table />
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
