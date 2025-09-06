import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import { AdCard } from "./AdCard";

const DisplayCard = ({ datas }) => {
  const loading = useSelector((state) => state.dataR.loading);
  console.log(loading);

  return (
    <section className="bg-gray-100">
      {loading && <Loading />}
      <section className=" w-[95%] mx-auto ">
        <div className=" grid md:grid-cols-4 gap-5 ">
          <div className="mt-10 grid col-span-3 grid-cols-2 md:grid-cols-3 gap-5">
            {datas?.map((data) => (
              <div
                key={data.imdbID}
                className="card bg-base-100 w-[96%] shadow-xl "
              >
                <figure>
                  <img src={data?.Poster} alt="Movies Poster" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {data?.Title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <div className=" flex gap-3">
                    <div className="badge badge-accent">{data?.Type}</div>
                    <div className="badge badge-accent">{data?.Year}</div>
                  </div>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-[100%] shadow-lg p-5 mt-10 mx-auto">
            <AdCard />
          </div>
        </div>
      </section>
    </section>
  );
};

export { DisplayCard };
