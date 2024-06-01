const SearchBrands = () => {
  return (
    <div className="px-3 pt-48">
      <section className="max-w-xl mx-auto flex flex-col gap-4 items-center justify-center text-center">
        <h2 className="text-black text-3xl font-semibold">
          Search for Brands
        </h2>
        <input
          type="text"
          name="search"
          placeholder="Search for a brand"
          className="px-4 py-3 outline-none border rounded-md text-sm w-full"
        />
      </section>
    </div>
  );
}

export default SearchBrands