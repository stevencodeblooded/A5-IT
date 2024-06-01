import featuredPosts from '../../assets/featuredPosts.png'
import recentPosts from '../../assets/recentPosts.png'

const FeaturedPosts = () => {
  return (
    <div className="px-3 py-24">
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-10 md:gap-2 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-5">Featured Posts</h2>
            <img src={featuredPosts} alt="" className="w-full" />
            <div className="mt-4">
              <p className="bg-gray-200 rounded-full px-4 py-1 text-xs w-fit">
                Featured
              </p>
              <h2 className=" text-2xl mb-2 font-semibold leading-snug">
                The possibilities of AI: how to use customer service teams
                correctly
              </h2>
              <p className="text-xs">
                AI in c»stomer service? Many people now immediately think of
                h»man-like chatbots. B»t there's more to discover the biggest
                benefit of AI for companies lies in making service teams more
                flexible§ especially when dealing with large...
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-5">Recent Posts</h2>
            <img src={recentPosts} alt="" className="w-full" />
            <div className="mt-4">
              <p className="bg-gray-200 rounded-full px-4 py-1 text-xs w-fit">
                Featured
              </p>
              <h2 className=" text-2xl mb-2 font-semibold leading-snug">
                The possibilities of AI: how to use customer service teams
                correctly
              </h2>
              <p className="text-xs">
                AI in c»stomer service? Many people now immediately think of
                h»man-like chatbots. B»t there's more to discover the biggest
                benefit of AI for companies lies in making service teams more
                flexible§ especially when dealing with large...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedPosts