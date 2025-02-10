import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps } from "@/types";
import { fetchCars } from "@/utils";

const Home = async ({ searchParams }: FilterProps) => {
  try {
    const resolvedParams = await searchParams;
    const allCars = await Promise.resolve(fetchCars({
      manufacturer: resolvedParams.manufacturer || "",
      model: resolvedParams.model || "",
      year: Number(resolvedParams.year) || 2022,
      fuel: resolvedParams.fuel || "",
      limit: Number(resolvedParams.limit) || 8
    }));

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
                pageNumber={Number(resolvedParams.limit || 8)/8}
                isNext={Number(resolvedParams.limit || 8) > allCars.length}
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
  } catch (error) {
    console.error("Error fetching cars:", error);
    return (
      <main className="overflow-hidden">
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Error loading cars</h2>
          <p>Something went wrong. Please try again later.</p>
        </div>
      </main>
    );
  }
}

export default Home;
