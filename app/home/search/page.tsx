

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
            <h1>Search Page</h1>
            <p>Query: {query}</p><p>Page: {page}</p>
        </div>
    );
};