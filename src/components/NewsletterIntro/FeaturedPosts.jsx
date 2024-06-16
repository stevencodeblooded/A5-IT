import { Link } from 'react-router-dom';
import featuredPosts from '../../assets/featuredPosts.png'
import recentPosts from '../../assets/recentPosts.png'

const FeaturedPosts = () => {
  return (
    <div className="px-3 py-24">
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-10 md:gap-2 md:grid-cols-2 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-5">Featured Posts</h2>
            <img src={featuredPosts} alt="" className="w-full cursor-pointer" />
            <div className="mt-4">
              <p className="bg-gray-200 rounded-full px-4 py-1 text-xs w-fit">
                Featured
              </p>
              <h2 className="cursor-pointer text-2xl mb-2 font-semibold leading-snug">
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
            <img src={recentPosts} alt="" className="w-full cursor-pointer" />
            <div className="mt-4">
              <p className="bg-gray-200 rounded-full px-4 py-1 text-xs w-fit">
                Featured
              </p>
              <h2 className=" cursor-pointer text-2xl mb-2 font-semibold leading-snug">
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

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <img src={featuredPosts} alt="post" className="cursor-pointer" />
            <div className="px-3 flex flex-col gap-2">
              <h4 className="text-sm">Hardware</h4>
              <h2 className="text-lg font-semibold cursor-pointer">
                Amazon Trade-in gives new life to old devices. Here’s how the
                program works.
              </h2>
              <div className="flex items-center text-xs justify-between">
                <h3>
                  <Link to={"read-more"}>Read more</Link>
                </h3>
                <p>Mar 11, 2024</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img src={featuredPosts} alt="post" className="cursor-pointer" />
            <div className="px-3 flex flex-col gap-2">
              <h4 className="text-sm">Hardware</h4>
              <h2 className="text-lg font-semibold cursor-pointer">
                Amazon Trade-in gives new life to old devices. Here’s how the
                program works.
              </h2>
              <div className="flex items-center text-xs justify-between">
                <h3>
                  <Link to={"read-more"}>Read more</Link>
                </h3>
                <p>Mar 11, 2024</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img src={featuredPosts} alt="post" className="cursor-pointer" />
            <div className="px-3 flex flex-col gap-2">
              <h4 className="text-sm">Hardware</h4>
              <h2 className="text-lg font-semibold cursor-pointer">
                Amazon Trade-in gives new life to old devices. Here’s how the
                program works.
              </h2>
              <div className="flex items-center text-xs justify-between">
                <h3>
                  <Link to={"read-more"}>Read more</Link>
                </h3>
                <p>Mar 11, 2024</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img src={featuredPosts} alt="post" className="cursor-pointer" />
            <div className="px-3 flex flex-col gap-2">
              <h4 className="text-sm">Hardware</h4>
              <h2 className="text-lg font-semibold cursor-pointer">
                Amazon Trade-in gives new life to old devices. Here’s how the
                program works.
              </h2>
              <div className="flex items-center text-xs justify-between">
                <h3>
                  <Link to={"read-more"}>Read more</Link>
                </h3>
                <p>Mar 11, 2024</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img src={featuredPosts} alt="post" className="cursor-pointer" />
            <div className="px-3 flex flex-col gap-2">
              <h4 className="text-sm">Hardware</h4>
              <h2 className="text-lg font-semibold cursor-pointer">
                Amazon Trade-in gives new life to old devices. Here’s how the
                program works.
              </h2>
              <div className="flex items-center text-xs justify-between">
                <h3>
                  <Link to={"read-more"}>Read more</Link>
                </h3>
                <p>Mar 11, 2024</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img src={featuredPosts} alt="post" className="cursor-pointer" />
            <div className="px-3 flex flex-col gap-2">
              <h4 className="text-sm">Hardware</h4>
              <h2 className="text-lg font-semibold cursor-pointer">
                Amazon Trade-in gives new life to old devices. Here’s how the
                program works.
              </h2>
              <div className="flex items-center text-xs justify-between">
                <h3>
                  <Link to={"read-more"}>Read more</Link>
                </h3>
                <p>Mar 11, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedPosts