import TitleCategory from "@/components/searchProduct/TitleCategoty";
import CarouselProduct from "@/components/searchProduct/carouselProduct/CarrouselProduct";


const SearchPage = ({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: number;
    };
  }) => {
    const { query, page } = searchParams || {};


    return (
        <div>
            <TitleCategory title={"Medicamentos"}/>
            <div className="flex overflow-x-auto p-2 m-2 md:justify-evenly justify-start gap-2">
                <CarouselProduct/>
                <CarouselProduct/>
                <CarouselProduct/>
                <CarouselProduct/>
                <CarouselProduct/>
                <CarouselProduct/>
                <CarouselProduct/>
            </div>
            <p>Query: {query}</p><p>Page: {page}</p>
        </div>
    );
};

export default SearchPage