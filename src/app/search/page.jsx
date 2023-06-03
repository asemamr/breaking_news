import dynamic from "next/dynamic";
// import Results from "../Results";

const Results = dynamic(() => import("../Results.jsx"), {
  loading: () => <h2>loading:)............</h2>,
});

function page({ searchParams }) {
  console.log("the search params in search page is,", searchParams);
  return (
    <div>
      <Results searchParams={searchParams} />
    </div>
  );
}

export default page;
