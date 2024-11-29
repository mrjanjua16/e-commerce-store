import { useState, useEffect } from "react";

import FashionCategoryCard from "./FashionCategoryCard";

import { Spinner } from "flowbite-react";

export default function FashionCategory() {
  const [collection, setCollection] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        setLoading(true);
        const collection = await fetch("/api/collection/get");
        if (collection.ok) {
          const data = await collection.json();
          setCollection(data);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch collection");
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchCollection();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner color="gray" size="xl" />
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 p-6">
      <FashionCategoryCard
        image={collection[0].imageUrl}
        title={
          <>
            <span>Men’s Casual</span>
            <br />
            <span>Fashion Style</span>
          </>
        }
        textPosition="right"
      />
      <FashionCategoryCard
        image={collection[1].imageUrl}
        title={
          <>
            <span>Women’s Casual</span>
            <br />
            <span>Fashion Style</span>
          </>
        }
        textPosition="left"
      />
    </div>
  );
}
