import { DUMMY_POSTS } from "../lib/all-posts";
import Posts from "../components/Posts";
import UserInput from "../components/UserInput";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function SearchParams() {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("search"));
  const searchTerms =
    searchParams.get("search")?.trim()?.length > 0
      ? searchParams.get("search")
      : "";
  return (
    <motion.div layout className="mt-16 border-2 border-zinc-700 grid lg:grid-cols-3 text-right lg:p-4 lg:gap-4">
      <UserInput />
      <AnimatePresence>
        {DUMMY_POSTS.filter((post) => post.title.includes(searchTerms)).map(
          (post) => (
            <Posts
              key={post.id}
              title={post.title}
              description={post.description}
            />
          )
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default SearchParams;
