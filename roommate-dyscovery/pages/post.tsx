/**
 *
 * @returns A post component that has the posts.
 */

export default function Post() {
  return (
    <div className="p-6 bg-white shadow rounded">
      <div>
        <h3 className="text-sm text-gray-700">Title</h3>
        <ul>
          <li>Interesting point 1</li>
          <li>Interesting point 2</li>
          <li>Interesting point 3</li>
        </ul>
      </div>
    </div>
  );
}
