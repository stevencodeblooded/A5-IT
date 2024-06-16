const Logout = () => {
  return (
    <div>
      <section className="flex flex-col gap-3 sm:w-1/2">
        <h2 className="text-3xl font-semibold capitalize">Are you sure you want to continue?</h2>
        <p className="font-semibold text-gray-600">Logout from this account.</p>
        <button className="bg-red-600 hover:bg-red-700 transition-all px-12 w-fit py-3 rounded-full text-white font-semibold border-none">
          Logout
        </button>
      </section>
    </div>
  );
}

export default Logout