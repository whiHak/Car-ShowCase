import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps, HomeProps } from "@/types";
import { fetchCars } from "@/utils";

const Home = async (params: FilterProps ) => {
  const {searchParams} = params;
  const{searchParams:{manufacturer, model, year, fuel, limit  }} = params
  const allCars = await fetchCars({
    manufacturer: manufacturer || "",
    model: model || "",
    year: year || 2022,
    fuel: fuel || "",
    limit: limit || 8
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden ">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the car you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, id) => (
                <CarCard car={car} key={id}/>
              ))}
            </div>

            <ShowMore 
              pageNumber={(searchParams.limit || 8)/8}
              isNext={(searchParams.limit || 8)> allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops.. no result</h2>
            <p>{allCars?.messsage}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
