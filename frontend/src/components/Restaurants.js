import { useEffect, useState } from "react";
import RestaurantService from "services/RestaurantService";
import { Container, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import RestaurantCard from "components/RestaurantCard";
import Pagination from "./Pagination";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [cuisines, setCuisines] = useState(["All Cuisines"]);
  const [pageSize, setPageSize] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [by, setBy] = useState("");

  const updatePage = (pageChange) => {
    setCurrentPage(pageChange);

    if (searching) {
      RestaurantService.find(query, by, pageChange)
        .then((response) => {
          setRestaurants(response.data.restaurants);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      RestaurantService.getAll(pageChange)
        .then((response) => {
          setRestaurants(response.data.restaurants);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const retrieveRestaurants = () => {
    RestaurantService.getAll()
      .then((response) => {
        setRestaurants(response.data.restaurants);
        setPageSize(response.data.entries_per_page);
        setTotalResults(response.data.total_results);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveCuisines = () => {
    RestaurantService.getCuisines()
      .then((response) => {
        setCuisines(["All Cuisines"].concat(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveRestaurants();
    setCurrentPage(0);
    setSearching(false);
    setQuery("");
    setBy("");
  };

  const find = (query, by) => {
    RestaurantService.find(query, by)
      .then((response) => {
        setRestaurants(response.data.restaurants);
        setTotalResults(response.data.total_results);
        setCurrentPage(0);
        setSearching(true);
        setQuery(query);
        setBy(by);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveRestaurants();
    retrieveCuisines();
  }, []);

  return (
    <div>
      <SearchBar
        cuisines={cuisines}
        find={find}
        refreshList={refreshList}
      />
      <Container>
        <Row>
          {restaurants.map((restaurant) => {
            return(
              <RestaurantCard
                key={restaurant._id}
                restaurant={restaurant}
              />
            );
          })}
        </Row>
      </Container>
      <Pagination
        currentPage={currentPage}
        totalResults={totalResults}
        pageSize={pageSize}
        onPageChange={updatePage}
      />
    </div>
  );
}

export default Restaurants;
