import Head from "next/head";
import { NotionRenderer } from "react-notion/src";
import { getAllPosts } from "../";
import { renderEditor } from "../../components/renderEditor";

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/posts/${row["Slug"]}`),
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts();
  const post = posts.find((p) => p["Slug"] === slug.join("/"));
  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post.id}`
  ).then((res) => res.json());

  let panes = [];
  let exercises = [];
  for (const blockId in blocks) {
    const block = blocks[blockId];
    if (
      block.value.type === "collection_view" &&
      block.collection?.title![0][0] === "Exercises"
    ) {
      exercises = block.collection.data.map((row) => ({
        id: row.id,
        name: row["Name"][0][0],
        prompt: row["Prompt"],
        exercise: row["Exercise"][0][0],
        solution: row["Solution"][0][0],
      }));
    }
    if (
      block.value.type === "collection_view" &&
      block.collection?.title![0][0] === "Panes"
    ) {
      panes = await Promise.all(
        block.collection.data.map(async (row) => {
          const blocks = await fetch(
            `https://notion-api.splitbee.io/v1/page/${row.id}`
          ).then((res) => res.json());
          return {
            id: row.id,
            name: row.Name[0][0],
            blocks,
          };
        })
      );
    }
  }

  return {
    props: {
      blocks,
      post,
      panes,
      exercises,
    },
  };
}

const Page = ({ post, blocks, panes, exercises }) => {
  return (
    <div className="max-w-xl pt-24 pb-32 px-4 mx-auto">
      <Head>
        <title>{`${post["Title"]} | Paul Shen`}</title>
      </Head>
      <h1 className="text-3xl mb-8 font-semibold">{post["Title"]}</h1>
      <NotionRenderer
        blockMap={blocks}
        panes={panes}
        exercises={exercises}
        renderEditor={renderEditor}
      />
    </div>
  );
};
export default Page;
