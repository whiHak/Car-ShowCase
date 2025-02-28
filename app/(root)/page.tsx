import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { getAllCars } from "@/lib/actions/car.action";
import { FilterProps } from "@/types";

// Add this interface near the top of the file, after the imports
interface Car {
  make: string;
  model: string;
  // Add other car properties as needed
}

const Home = async ({ searchParams }: FilterProps) => {
  try {
    const resolvedParams = await searchParams;
    const allCars = await getAllCars();
    
    // Filter cars based on search parameters
    let filteredCars = allCars;
    
    if (resolvedParams.manufacturer) {
      filteredCars = filteredCars.filter((car: Car) => 
        car.make.toLowerCase().includes(resolvedParams.manufacturer!.toLowerCase())
      );
    }
    
    if (resolvedParams.model) {
      filteredCars = filteredCars.filter((car: Car) => 
        car.model.toLowerCase().includes(resolvedParams.model!.toLowerCase())
      );
    }

    const isDataEmpty =
      !Array.isArray(filteredCars) || filteredCars.length < 1 || !filteredCars;

    return (
      <main className="overflow-hidden ">
        <Hero />

        <div className="mt-12 padding-x padding-y max-width">
          <div className="home__text-container" id="cars-section">
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
            <section id="cars-section">
              <div className="home__cars-wrapper">
                {filteredCars?.map((car: any, id: any) => (
                  <CarCard car={car} key={id} />
                ))}
              </div>

              <ShowMore
                pageNumber={Number(resolvedParams.limit || 8) / 8}
                isNext={Number(resolvedParams.limit || 8) > filteredCars.length}
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
};

export default Home;
