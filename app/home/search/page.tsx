import TitleCategory from "@/components/searchProduct/TitleCategoty";


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
            <p>Query: {query}</p><p>Page: {page}</p>
        </div>
    );
};

export default SearchPage