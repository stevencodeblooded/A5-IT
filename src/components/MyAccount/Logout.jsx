const Logout = () => {
  return (
    <div>
      <section className="flex flex-col gap-3 w-1/2">
        <h2 className="text-3xl font-semibold">Are you sure? If yes...</h2>
        <p>Click the button below to log out.</p>
        <button className="bg-red-600 hover:bg-red-700 transition-all px-12 py-3 rounded-full text-white font-semibold border-none">
          Logout
        </button>
      </section>
    </div>
  );
}

export default Logout