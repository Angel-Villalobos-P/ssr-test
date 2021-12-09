
import React from "react";
import { Link } from "gatsby";

const SSRpage = ({ serverData }) => {

  const { zones: { MainContentZone }, } = serverData

  console.log(MainContentZone);
  
  return (
    <>
      <h1>SSR page 1 - HOME </h1>
      <h3>Zones size {MainContentZone.length}</h3>
      {/* <img
        style={{ width: "300px" }}
        alt="A random dog"
        src={serverData.message}
      /> */}
      <p>Welcome to a server side rendered page with a random dog photo</p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </>
  );
};

export default SSRpage;

// export async function getServerData() {
//   try {
//     const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
//     if (!res.ok) {
//       throw new Error(`Response failed`);
//     }
//     return {
//       props: await res.json(),
//     };
//   } catch (error) {
//     return {
//       headers: {
//         status: 500,
//       },
//       props: {},
//     };
//   }
// }

export async function getServerData() {
  const rest = await fetch(
    "https://api.aglty.io/800c8044/fetch/en-us/page/111", {
      headers: {
        APIKEY: "defaultlive.42fb0e27ae9606d57c06565f2369f5de856c3982facea37d12308ff2d453851f",
      },
    }
  )
  return {
    props: await rest.json(),
  }
}