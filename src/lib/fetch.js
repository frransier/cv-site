// import fetch from "isomorphic-unfetch";
import env from "../../env";

export async function get(query, cdn) {
  const { pid, dataset } = env;
  query = encodeURIComponent(query);
  const url = `https://${pid}.${
    cdn ? "apicdn" : "api"
  }.sanity.io/v2021-03-25/data/query/${dataset}?query=${query}`;
  const res = await fetch(url);
  const json = await res.json();
  return json.result;
}
