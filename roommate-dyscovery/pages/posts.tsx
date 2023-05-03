import Post from "./post";

/**
 *
 * @returns A post component that has the posts.
 */

export default function Posts() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <Post />
      <Post />
      <Post />
    </div>
  );
}
